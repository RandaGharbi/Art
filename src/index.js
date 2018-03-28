
import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './global-styles';
import AppRoute from './AppRoutes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppRoute/>,
   document.getElementById('root')
  );
registerServiceWorker();

