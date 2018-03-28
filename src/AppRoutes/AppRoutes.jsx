import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import config from '../config/config';
import Skeleton from '../pages/SkeletonPage';
import NotFound from '../pages/NotFoundPage/components/NotFound/NotFound';

const AppRoute= () => (
  <div>
  <BrowserRouter>
  <Switch>
    <Route path={config.routes.signin} render={() => <Skeleton />} />
    <Route component={NotFound} />
  </Switch>
</BrowserRouter>
  </div>
);
export default AppRoute;