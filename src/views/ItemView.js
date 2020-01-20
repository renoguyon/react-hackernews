import React from 'react';
import { useParams, withRouter, Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ItemHeader from '../components/news/ItemHeader';
import ItemHeaderSkeleton from '../components/news/ItemHeaderSkeleton';
import ItemComments from '../components/news/ItemComments';
import useItemContent from '../hooks/useItemContent';

const ItemView = ({ history }) => {
  const { id } = useParams();

  const [content, isLoading] = useItemContent(id, () => {
    history.replace('/');
  });

  return (
    <Card className="item-view">
      <CardContent>
        <Link to="/" className="back-link"><ChevronLeftIcon /> Back</Link>

        {isLoading ? <ItemHeaderSkeleton /> : null}

        {
          content && !isLoading ?
            <ItemHeader
              id={content.id}
              title={content.title}
              score={content.score}
              author={content.by}
              time={content.time}
              comments={content.descendants}
              url={content.url}
            />
          : null
        }

        <div className="comment-section">
          <Typography component="h2">Top Comments</Typography>
          {content && !isLoading ? <ItemComments itemId={content.id} commentIds={content.kids} /> : null}
          {content && !content.kids ? `Too bad. No comment yet.` : null}
        </div>
      </CardContent>
    </Card>
  );
};

export default withRouter(ItemView);
