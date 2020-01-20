import React, { useEffect } from 'react';
import Comment from './Comment';
import { useDispatch, useSelector } from 'react-redux';
import { setListContent } from '../../store/content/actions';
import { getItemsByList } from '../../store/content/selectors';

const ItemComments = ({ itemId, commentIds }) => {
  const dispatch = useDispatch();
  const comments = useSelector(getItemsByList(`comments_${itemId}`));

  useEffect(() => {
    dispatch(setListContent(`comments_${itemId}`, commentIds, 20));
  }, []);

  return (
    <div className="comment-list">
      {
        comments ? comments.map((item) => (
          <Comment
            key={item.id}
            author={item.by}
            time={item.time}
            text={item.text}
          />
        )) : null
      }
    </div>
  );
};

export default ItemComments;
