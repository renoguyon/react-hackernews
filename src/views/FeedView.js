import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useFirebaseListener from '../hooks/useFirebaseListener';
import NewsCard from '../components/news/NewsCard';
import { setListContent } from '../store/content/actions';
import { getVisibleItems } from '../store/content/selectors';

const FeedView = () => {
  const dispatch = useDispatch();
  const topStories = useSelector(getVisibleItems);

  useFirebaseListener('/topstories', (ids) => {
    dispatch(setListContent('top', ids));
  });

  return (
    <div className="news-list">
      {
        topStories.map((story) => (
          <NewsCard
            key={story.id}
            id={story.id}
            title={story.title}
            score={story.score}
            author={story.by}
            time={story.time}
            comments={story.descendants}
            url={story.url}
          />
        ))
      }
    </div>
  );
};

export default FeedView;
