import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Link,
  Alert,
  InputAdornment,
  IconButton,
  CircularProgress,
  Grid,
  MenuItem,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAppDispatch, useAppSelector } from '../hooks';
import { register as registerUser } from '../store/slices/authSlice';

const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
  institution: z.string().min(1, 'Please select institution'),
  department: z.string().min(1, 'Please enter department'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

type RegisterFormData = z.infer<typeof registerSchema>;

const institutions = [
  'Srinakharinwirot University',
  'Chulalongkorn University',
  'Mahidol University',
  'Kasetsart University',
  'Thammasat University',
];

const Register = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    dispatch(registerUser({
      name: data.name,
      email: data.email,
      password: data.password,
      institution: data.institution,
      department: data.department,
    }));
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        py: 4,
      }}
    >
      <Card sx={{ maxWidth: 560, width: '100%', mx: 2 }}>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <AccountBalanceWalletIcon sx={{ fontSize: 56, color: 'primary.main', mb: 2 }} />
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Create Account
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Join the Thai Academic Researcher Network
            </Typography>
          </Box>

          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Full Name"
                  {...register('name')}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  {...register('email')}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  {...register('password')}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Confirm Password"
                  type={showPassword ? 'text' : 'password'}
                  {...register('confirmPassword')}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword?.message}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  select
                  label="Institution"
                  {...register('institution')}
                  error={!!errors.institution}
                  helperText={errors.institution?.message}
                >
                  {institutions.map((inst) => (
                    <MenuItem key={inst} value={inst}>
                      {inst}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Department"
                  {...register('department')}
                  error={!!errors.department}
                  helperText={errors.department?.message}
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              disabled={isLoading}
              sx={{ mt: 3 }}
            >
              {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Register'}
            </Button>
          </form>

          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Typography variant="body2" color="text.secondary">
              Already have an account?{' '}
              <Link component={RouterLink} to="/login">
                Sign In
              </Link>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Register;