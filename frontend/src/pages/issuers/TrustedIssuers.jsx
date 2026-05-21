import { Box, Typography, Card, CardContent, Grid, Avatar, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import GroupsIcon from '@mui/icons-material/Groups';

const demoIssuers = [
  {
    id: 1,
    name: 'กรมการปกครอง',
    nameEn: 'Department of Provincial Administration',
    type: 'Government',
    icon: <VerifiedUserIcon />,
    color: '#0066CC',
    credentials: ['VC1 - Personal Identity'],
    status: 'Verified',
  },
  {
    id: 2,
    name: 'สำนักงานจัดการบุคลากร มหาวิทยาลัยศรีนครินทรวิโรฒ',
    nameEn: 'HR Office - Srinakharinwirot University',
    type: 'University',
    icon: <SchoolIcon />,
    color: '#6C63FF',
    credentials: ['VC2 - Employment & HR Info'],
    status: 'Verified',
  },
  {
    id: 3,
    name: 'คณะวิทยาศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ',
    nameEn: 'Faculty of Science - SWU',
    type: 'Faculty',
    icon: <BusinessIcon />,
    color: '#00AA00',
    credentials: ['VC3 - Teaching Records'],
    status: 'Verified',
  },
  {
    id: 4,
    name: 'Scopus - Elsevier',
    nameEn: 'Scopus / Elsevier',
    type: 'Research Database',
    icon: <GroupsIcon />,
    color: '#FF9900',
    credentials: ['VC4 - Research Publications'],
    status: 'Verified',
  },
  {
    id: 5,
    name: 'ฐานข้อมูล TCI',
    nameEn: 'Thai-Journal Citation Index',
    type: 'Research Database',
    icon: <GroupsIcon />,
    color: '#FF9900',
    credentials: ['VC4 - Research Publications'],
    status: 'Verified',
  },
];

const TrustedIssuers = () => {
  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Trusted Issuers
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Organizations authorized to issue verifiable credentials
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Avatar sx={{ bgcolor: 'primary.main' }}><VerifiedUserIcon /></Avatar>
                <Typography variant="h6">Total Issuers</Typography>
              </Box>
              <Typography variant="h3" fontWeight="bold" color="primary.main">
                {demoIssuers.length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Trusted credential issuers
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Avatar sx={{ bgcolor: 'success.main' }}><SchoolIcon /></Avatar>
                <Typography variant="h6">Universities</Typography>
              </Box>
              <Typography variant="h3" fontWeight="bold" color="success.main">
                {demoIssuers.filter(i => i.type === 'University' || i.type === 'Faculty').length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Academic institutions
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Avatar sx={{ bgcolor: 'warning.main' }}><GroupsIcon /></Avatar>
                <Typography variant="h6">Databases</Typography>
              </Box>
              <Typography variant="h3" fontWeight="bold" color="warning.main">
                {demoIssuers.filter(i => i.type === 'Research Database').length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Research databases
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>All Trusted Issuers</Typography>
          <TableContainer component={Paper} elevation={0}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: 'background.default' }}>
                  <TableCell><strong>Issuer</strong></TableCell>
                  <TableCell><strong>Type</strong></TableCell>
                  <TableCell><strong>Credentials Issued</strong></TableCell>
                  <TableCell><strong>Status</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {demoIssuers.map((issuer) => (
                  <TableRow key={issuer.id} hover>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar sx={{ bgcolor: issuer.color, width: 36, height: 36 }}>
                          {issuer.icon}
                        </Avatar>
                        <Box>
                          <Typography variant="body2" fontWeight={500}>{issuer.name}</Typography>
                          <Typography variant="caption" color="text.secondary">{issuer.nameEn}</Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Chip label={issuer.type} size="small" variant="outlined" />
                    </TableCell>
                    <TableCell>
                      {issuer.credentials.map((cred, idx) => (
                        <Typography key={idx} variant="caption" display="block">{cred}</Typography>
                      ))}
                    </TableCell>
                    <TableCell>
                      <Chip 
                        label={issuer.status} 
                        size="small" 
                        color="success" 
                        icon={<VerifiedUserIcon style={{ fontSize: 14 }} />}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TrustedIssuers;