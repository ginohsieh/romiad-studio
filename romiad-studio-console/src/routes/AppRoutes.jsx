import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import * as routePath from './routePath'


const Logon = React.lazy(() => import('../views/logon'));
const Console = React.lazy(() => import('../views/console'));
const Dashboard = React.lazy(() => import('../views/console/dashboard'));
const Motion = React.lazy(() => import('../views/console/collection/motion'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Navigate to={routePath.LOGON} />} />
      <Route path={routePath.LOGON} element={<Logon />} />
      <Route path={routePath.CONSOLE} element={<Console />}>
        <Route index element={<Navigate to={routePath.CONSOLE_DASHBOARD} />} />
        <Route path={routePath.CONSOLE_DASHBOARD} element={<Dashboard />} />
        <Route path={routePath.CONSOLE_COLLECTION_MOTION} element={<Motion />} />
      </Route>
    </Routes>
  )
};

export default AppRoutes;
