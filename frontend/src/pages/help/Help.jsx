import { Box, Typography, Card, CardContent, Grid, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ArticleIcon from '@mui/icons-material/Article';
import InfoIcon from '@mui/icons-material/Info';

const Help = () => {
  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Help Center
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Find answers to common questions and get support
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <HelpOutlineIcon color="primary" />
                <Typography variant="h6">Frequently Asked Questions</Typography>
              </Box>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography fontWeight={500}>What is a Verifiable Credential?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" color="text.secondary">
                    A Verifiable Credential (VC) is a tamper-evident credential that can be cryptographically verified. 
                    It allows you to prove your qualifications, employment, or achievements in a secure and trustworthy way.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography fontWeight={500}>How do I request credentials?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" color="text.secondary">
                    Go to Wallet page and click "Request Credential". Select the credential type and issuer. 
                    The issuer will review and issue your credential digitally.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography fontWeight={500}>How do I apply for academic position?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" color="text.secondary">
                    Ensure all required credentials are verified. Go to Applications page and click "New Application". 
                    Select your target position and submit your verifiable presentation.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography fontWeight={500}>How long does verification take?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" color="text.secondary">
                    Verification time varies by issuer. HR verification typically takes 1-3 days. 
                    Journal verification may take 1-2 weeks.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>Video Tutorials</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Watch step-by-step tutorials on using the wallet.
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon><ArticleIcon /></ListItemIcon>
                  <ListItemText primary="Getting Started" secondary="Learn the basics of your wallet" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon /></ListItemIcon>
                  <ListItemText primary="Requesting Credentials" secondary="How to request credentials from issuers" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon /></ListItemIcon>
                  <ListItemText primary="Applying for Positions" secondary="Complete application walkthrough" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <ContactMailIcon color="primary" />
                <Typography variant="h6">Contact Support</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Need more help? Contact our support team.
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>Email:</strong> support@grl.ac.th
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>Phone:</strong> 02-xxx-xxxx
              </Typography>
              <Typography variant="body2">
                <strong>Hours:</strong> Mon-Fri 9:00-17:00
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <InfoIcon color="primary" />
                <Typography variant="h6">About</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                <strong>Acard Academic</strong> is a digital credential wallet presented by golden recipe lab.
                Version 1.0.0
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Help;