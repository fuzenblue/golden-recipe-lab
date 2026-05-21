import { useNavigate, useLocation } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Divider,
  Avatar,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DescriptionIcon from '@mui/icons-material/Description';
import SchoolIcon from '@mui/icons-material/School';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { useAppSelector } from '../../hooks';

const DRAWER_WIDTH = 260;

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  { text: 'Wallet', icon: <AccountBalanceWalletIcon />, path: '/wallet' },
  { text: 'Applications', icon: <DescriptionIcon />, path: '/applications' },
  { text: 'Teaching Records', icon: <SchoolIcon />, path: '/teaching' },
];

const secondaryMenuItems = [
  { text: 'Trusted Issuers', icon: <VerifiedUserIcon />, path: '/issuers' },
  { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
  { text: 'Help', icon: <HelpOutlineIcon />, path: '/help' },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAppSelector((state) => state.auth);
  const { items: credentials } = useAppSelector((state) => state.credentials);

  const isActive = (path: string) => location.pathname === path;

  const verifiedCount = credentials.filter((c) => c.status === 'verified' || c.status === 'ready').length;
  const totalCount = credentials.length;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
          bgcolor: '#1a237e',
          color: 'white',
          borderRight: 'none',
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Avatar
            sx={{
              bgcolor: 'rgba(255,255,255,0.2)',
              width: 44,
              height: 44,
            }}
          >
            <AccountBalanceWalletIcon sx={{ fontSize: 26 }} />
          </Avatar>
          <Box>
            <Typography variant="h6" fontWeight={700} sx={{ lineHeight: 1.2 }}>
              Acard Wallet
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.7 }}>
              {user?.institution || 'Researcher'}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

      <Box sx={{ px: 1.5, py: 1.5, bgcolor: 'rgba(255,255,255,0.05)', mx: 1.5, borderRadius: 1, mb: 1 }}>
        <Typography variant="caption" sx={{ opacity: 0.7, display: 'block', mb: 0.5 }}>
          Verified Credentials
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            sx={{
              flexGrow: 1,
              height: 6,
              bgcolor: 'rgba(255,255,255,0.2)',
              borderRadius: 3,
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                width: `${totalCount > 0 ? (verifiedCount / totalCount) * 100 : 0}%`,
                height: '100%',
                bgcolor: '#4caf50',
                borderRadius: 3,
                transition: 'width 0.3s ease',
              }}
            />
          </Box>
          <Typography variant="caption" fontWeight={600}>
            {verifiedCount}/{totalCount}
          </Typography>
        </Box>
      </Box>

      <List sx={{ px: 1.5, flexGrow: 1 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              onClick={() => navigate(item.path)}
              sx={{
                borderRadius: 1.5,
                py: 1.25,
                '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
                bgcolor: isActive(item.path) ? 'rgba(255,255,255,0.15)' : 'transparent',
                '&.Mui-selected': {
                  bgcolor: 'rgba(255,255,255,0.15)',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: 'inherit',
                  minWidth: 40,
                  opacity: isActive(item.path) ? 1 : 0.7,
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: isActive(item.path) ? 600 : 400,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

      <List sx={{ px: 1.5, pb: 1.5 }}>
        {secondaryMenuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              onClick={() => navigate(item.path)}
              sx={{
                borderRadius: 1.5,
                py: 1,
                '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
                opacity: 0.8,
              }}
            >
              <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{ fontSize: 13 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;