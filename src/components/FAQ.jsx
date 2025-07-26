import React from 'react';
import { Box, useTheme, Typography } from '@mui/material';
import Header from './Header';
import { tokens } from '../theme';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Box
        display="flex"
        flexDirection="column"
        gap="20px"
        sx={{ backgroundColor: colors.primary[400], p: '20px', borderRadius: '8px' }}
      >
        <Typography variant="h5" color={colors.grey[100]}>
          Frequently Asked Questions
        </Typography>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.grey[100]}>
              What is the purpose of this application?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color={colors.grey[200]}>
              This application serves as a dashboard for managing various aspects of a business, including team management, invoicing, and analytics.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.grey[100]}>
              How do I add new team members?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color={colors.grey[200]}>
              You can add new team members through the "Team" section in the sidebar.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.grey[100]}>
              Can I export reports or analytics?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color={colors.grey[200]}>
              Yes, the dashboard allows you to export data visualizations and reports directly from the analytics section.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.grey[100]}>
              Is there a dark mode or theme toggle?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color={colors.grey[200]}>
              Absolutely. The app supports both light and dark themes based on user preference or system settings.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.grey[100]}>
              How do I reset my password?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color={colors.grey[200]}>
              You can reset your password by navigating to the login screen and selecting the "Forgot Password" option.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.grey[100]}>
              Where can I view recent user activity?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color={colors.grey[200]}>
              Recent activity is visible in the Dashboard's main panel or in the "Activity Log" section, depending on the page structure.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.grey[100]}>
              Can I integrate third-party services?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color={colors.grey[200]}>
              Yes, integrations with APIs and services like Firebase, Stripe, or Google Analytics are possible via the settings or integration tabs.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default FAQ;
