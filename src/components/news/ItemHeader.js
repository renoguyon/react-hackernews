import React from 'react';
import Typography from '@material-ui/core/Typography';
import TimeAgo from 'react-timeago/lib';
import Counter from './Counter';
import Author from './Author';
import HostName from './HostName';

const ItemHeader = ({ id, title, score, author, time, comments, url }) => {
  const titleLink = url ? url : `https://news.ycombinator.com/item?id=${id}`;

  return (
    <div className="item-header">
      <Typography component="h1" variant="h5">
        <a href={titleLink} target="_blank" rel="noopener noreferrer">{title}</a>
        {url ? <span className="site">(<HostName url={url} />)</span> : null}
      </Typography>

      <div className="metadata">
        <Counter count={score} singular="point" plural="points" /> by <Author author={author} /> | <TimeAgo date={time * 1000} /> | <Counter count={comments} singular="comment" plural="comments" />
      </div>
    </div>
  );
};

export default ItemHeader;
