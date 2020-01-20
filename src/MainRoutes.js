import React from 'react';
import { Route } from 'react-router-dom';
import FeedView from './views/FeedView';
import ItemView from './views/ItemView';

const MainRoutes = () => {
  return (
    <div>
      <Route exact path="/" component={FeedView}></Route>
      <Route path="/item/:id" component={ItemView}></Route>
    </div>
  );
};

export default MainRoutes;
