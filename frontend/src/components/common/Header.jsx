import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Badge,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { logout } from '../../store/slices/authSlice';
import logoSrc from '../../logo.png';

const DRAWER_WIDTH = 260;

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
    handleClose();
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: 'background.paper',
        color: 'text.primary',
        borderBottom: '1px solid',
        borderColor: 'divider',
        ml: `${DRAWER_WIDTH}px`,
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: 64 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', fontWeight: 500 }}
            >
              Acard Academic
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton color="inherit" size="large">
              <Badge badgeContent={3} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <IconButton onClick={handleMenu} size="small" sx={{ ml: 1 }}>
              <Avatar
                sx={{
                  width: 36,
                  height: 36,
                  bgcolor: 'primary.main',
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                {user?.name?.charAt(0) || <AccountCircleIcon />}
              </Avatar>
            </IconButton>
          </Box>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{
              sx: {
                mt: 1,
                minWidth: 220,
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <Box sx={{ px: 2, py: 1.5, borderBottom: '1px solid', borderColor: 'divider' }}>
              <Typography variant="body2" fontWeight={600}>
                {user?.name}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {user?.email}
              </Typography>
            </Box>
            <MenuItem onClick={handleClose}>
              <PersonIcon sx={{ mr: 1.5, fontSize: 20, color: 'text.secondary' }} />
              โปรไฟล์
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <SettingsIcon sx={{ mr: 1.5, fontSize: 20, color: 'text.secondary' }} />
              ตั้งค่า
            </MenuItem>
            <Box sx={{ borderTop: '1px solid', borderColor: 'divider', mt: 0.5 }}>
              <MenuItem onClick={handleLogout} sx={{ color: 'error.main' }}>
                <LogoutIcon sx={{ mr: 1.5, fontSize: 20 }} />
                ออกจากระบบ
              </MenuItem>
            </Box>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;