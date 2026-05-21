import { Box, Typography, Card, CardContent, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, Avatar, Button } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import AddIcon from '@mui/icons-material/Add';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const demoTeachingRecords = [
  {
    id: 1,
    academicYear: '2566',
    semester: '1',
    courses: [
      { code: 'MATH101', name: 'แคลคูลัส 1', credits: 3, students: 120, hours: 3, score: 4.2 },
      { code: 'MATH201', name: 'พีชคณิตเชิงเส้น', credits: 3, students: 80, hours: 3, score: 4.5 },
    ],
  },
  {
    id: 2,
    academicYear: '2566',
    semester: '2',
    courses: [
      { code: 'MATH301', name: 'สมการเชิงอนุพันธ์', credits: 3, students: 60, hours: 3, score: 4.3 },
    ],
  },
  {
    id: 3,
    academicYear: '2565',
    semester: '1',
    courses: [
      { code: 'MATH101', name: 'แคลคูลัส 1', credits: 3, students: 115, hours: 3, score: 4.1 },
      { code: 'MATH102', name: 'แคลคูลัส 2', credits: 3, students: 100, hours: 3, score: 4.0 },
    ],
  },
];

const TeachingRecords = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Teaching Records
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Your teaching history and evaluation scores
          </Typography>
        </Box>
        <Button variant="contained" startIcon={<AddIcon />}>
          Request Teaching Record
        </Button>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Avatar sx={{ bgcolor: 'primary.main' }}>
                  <SchoolIcon />
                </Avatar>
                <Box>
                  <Typography variant="body2" color="text.secondary">Total Courses</Typography>
                  <Typography variant="h4" fontWeight="bold">
                    {demoTeachingRecords.reduce((acc, r) => acc + r.courses.length, 0)}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Avatar sx={{ bgcolor: 'success.main' }}>
                  <TrendingUpIcon />
                </Avatar>
                <Box>
                  <Typography variant="body2" color="text.secondary">Avg Evaluation</Typography>
                  <Typography variant="h4" fontWeight="bold" color="success.main">4.2</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Avatar sx={{ bgcolor: 'warning.main' }}>
                  <SchoolIcon />
                </Avatar>
                <Box>
                  <Typography variant="body2" color="text.secondary">Total Students</Typography>
                  <Typography variant="h4" fontWeight="bold" color="warning.main">
                    {demoTeachingRecords.reduce((acc, r) => acc + r.courses.reduce((a, c) => a + c.students, 0), 0)}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {demoTeachingRecords.map((record) => (
        <Card key={record.id} sx={{ mt: 3 }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Box>
                <Typography variant="h6">
                  Academic Year {record.academicYear} / Semester {record.semester}
                </Typography>
              </Box>
              <Chip 
                label={`${record.courses.length} Course${record.courses.length > 1 ? 's' : ''}`} 
                color="primary" 
                size="small" 
              />
            </Box>

            <TableContainer component={Paper} elevation={0}>
              <Table size="small">
                <TableHead>
                  <TableRow sx={{ bgcolor: 'background.default' }}>
                    <TableCell><strong>Course Code</strong></TableCell>
                    <TableCell><strong>Course Name</strong></TableCell>
                    <TableCell align="center"><strong>Credits</strong></TableCell>
                    <TableCell align="center"><strong>Students</strong></TableCell>
                    <TableCell align="center"><strong>Hours/Week</strong></TableCell>
                    <TableCell align="center"><strong>Eval Score</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {record.courses.map((course, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{course.code}</TableCell>
                      <TableCell>{course.name}</TableCell>
                      <TableCell align="center">{course.credits}</TableCell>
                      <TableCell align="center">{course.students}</TableCell>
                      <TableCell align="center">{course.hours}</TableCell>
                      <TableCell align="center">
                        <Chip 
                          label={course.score} 
                          size="small" 
                          color={course.score >= 4.0 ? 'success' : 'warning'}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default TeachingRecords;