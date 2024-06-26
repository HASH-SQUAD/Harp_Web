import { useRoutes } from 'react-router-dom';

import Splash from '../pages/splash/';
import Auth from 'pages/auth';
import Terms from 'pages/terms';
import SurveyEnd from '../pages/surveyEnd';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      children: [
        { path: 'splash', element: <Splash /> },
        { path: 'auth', element: <Auth /> },
        { path: 'terms', element: <Terms /> },
        { path: 'surveyend', element: <SurveyEnd /> }
      ]
    }
  ]);
}
