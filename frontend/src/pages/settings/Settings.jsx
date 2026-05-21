import { Box, Typography, Card, CardContent, Grid, Switch, FormControlLabel, TextField, Button, Divider } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SecurityIcon from '@mui/icons-material/Security';
import LanguageIcon from '@mui/icons-material/Language';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';

const Settings = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    browserNotifications: true,
    twoFactor: false,
    language: 'th',
  });

  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Settings
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Manage your account settings and preferences
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                <NotificationsIcon color="primary" />
                <Typography variant="h6">Notifications</Typography>
              </Box>
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.emailNotifications}
                    onChange={(e) => setSettings({ ...settings, emailNotifications: e.target.checked })}
                  />
                }
                label="Email Notifications"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.smsNotifications}
                    onChange={(e) => setSettings({ ...settings, smsNotifications: e.target.checked })}
                  />
                }
                label="SMS Notifications"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.browserNotifications}
                    onChange={(e) => setSettings({ ...settings, browserNotifications: e.target.checked })}
                  />
                }
                label="Browser Notifications"
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                <SecurityIcon color="primary" />
                <Typography variant="h6">Security</Typography>
              </Box>
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.twoFactor}
                    onChange={(e) => setSettings({ ...settings, twoFactor: e.target.checked })}
                  />
                }
                label="Two-Factor Authentication"
              />
              <Divider sx={{ my: 2 }} />
              <Button variant="outlined" color="primary" sx={{ mr: 2 }}>
                Change Password
              </Button>
              <Button variant="outlined" color="error">
                Delete Account
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                <LanguageIcon color="primary" />
                <Typography variant="h6">Language & Region</Typography>
              </Box>
              <TextField
                select
                fullWidth
                label="Language"
                value={settings.language}
                onChange={(e) => setSettings({ ...settings, language: e.target.value })}
                SelectProps={{ native: true }}
              >
                <option value="th">Thai</option>
                <option value="en">English</option>
              </TextField>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>Profile Information</Typography>
              <TextField fullWidth label="Name" defaultValue={user?.name} sx={{ mb: 2 }} />
              <TextField fullWidth label="Email" defaultValue={user?.email} disabled sx={{ mb: 2 }} />
              <TextField fullWidth label="Institution" defaultValue={user?.institution} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
        <Button variant="outlined">Cancel</Button>
        <Button variant="contained">Save Changes</Button>
      </Box>
    </Box>
  );
};

export default Settings;