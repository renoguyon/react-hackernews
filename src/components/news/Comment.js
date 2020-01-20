import React from 'react';
import TimeAgo from 'react-timeago/lib';
import Author from './Author';

const Comment = ({ author, time, text }) => {
  return (
    <div className="comment-item">
      <div className="metadata">
        <Author author={author} />, <TimeAgo date={time * 1000} />
      </div>
      <div className="comment-text" dangerouslySetInnerHTML={{__html: text}}></div>
    </div>
  );
};

export default Comment;
