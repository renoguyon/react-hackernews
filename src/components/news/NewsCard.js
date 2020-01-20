import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TimeAgo from 'react-timeago/lib';
import Counter from './Counter';
import Author from './Author';
import HostName from './HostName';

const NewsCard = ({ id, title, url, score, author, time, comments }) => {
  const titleLink = url ? url : `https://news.ycombinator.com/item?id=${id}`;

  return (
    <Card className="news-card">
      <CardContent className="card-content">
        <div className="score">{score}</div>
        <div className="details">
          <div className="title">
            <a href={titleLink} target="_blank" rel="noopener noreferrer">{title}</a>
            {' '}
            {url ? <span className="site">(<HostName url={url} />)</span> : null}
          </div>
          <div className="metadata">
            by <Author author={author} /> | <TimeAgo date={time * 1000} />| <Link to={`/item/${id}`}><Counter count={comments} singular="comment" plural="comments" /></Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
