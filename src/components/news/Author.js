import React from 'react';

const Author = ({ author }) => {
  const authorLink = `https://news.ycombinator.com/user?id=${author}`;

  return (
    <a href={authorLink} target="_blank" rel="noopener noreferrer">{author}</a>
  );
};

export default Author;
