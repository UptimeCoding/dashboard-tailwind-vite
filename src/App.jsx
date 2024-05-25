import React, { useEffect } from 'react';
import ProfilePage from './pages/ProfilePage';
import SimpleTable from './pages/SimpleTable';
import TypographyPage from './pages/TypographyPage';
import IconPage from './pages/IconPage';
import UpgradePage from './pages/UpgradePage';
import GoogleMapPage from './pages/GoogleMapPage';
import NotificationsPage from './pages/NotificationsPage';
import SidebarLinkGroup from './partials/SidebarLinkGroup';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/profile" element={<ProfilePage />} />
        <Route exact path="/SimpleTable" element={<SimpleTable />} />
        <Route exact path="/NotificationsPage" element={<NotificationsPage />} />
        <Route exact path="/TypographyPage" element={<TypographyPage />} />
        <Route exact path="/IconPage" element={<IconPage />} />
        <Route exact path="/GoogleMapPage" element={<GoogleMapPage />} />
        <Route exact path="/UpgradePage" element={<UpgradePage />} />
      </Routes>
    </>
    
  );
}

export default App;
