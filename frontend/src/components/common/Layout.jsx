import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';

const DRAWER_WIDTH = 260;

const Layout = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            bgcolor: 'background.default',
            mt: 8,
            ml: `${DRAWER_WIDTH}px`,
            minHeight: 'calc(100vh - 64px)',
          }}
        >
          <Box sx={{ maxWidth: 1400, mx: 'auto' }}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;