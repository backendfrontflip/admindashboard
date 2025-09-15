import React from "react";
import { Box, Grid } from "@mui/material";
import Header from "./Header.jsx";
import BarChart from "./Bar.jsx";
import PieChart from "./Pie.jsx";
import LineChart from "./Line.jsx";
import Geography from "./Geography.jsx";
import Team from "./Team.jsx";
import Contacts from "./Contacts.jsx";
import Invoices from "./Invoices.jsx";
import ChartCard from "../pages/ChartCard.jsx";

const Dashboard = () => {
  return (
    <Box m="20px" width="100%" className="content">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard!" />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ChartCard title="Team Members" subtitle="Quick view" isDashboard>
            <Team isDashboard />
          </ChartCard>
        </Grid>
        <Grid item xs={12}>
          <ChartCard title="Contacts" subtitle="Staff reference" isDashboard>
            <Contacts isDashboard />
          </ChartCard>
        </Grid>
        <Grid item xs={12}>
          <ChartCard title="Invoices" subtitle="Outstanding bills" isDashboard>
            <Invoices isDashboard />
          </ChartCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <ChartCard title="Sales by Country" subtitle="Category breakdown" isDashboard>
            <BarChart isDashboard />
          </ChartCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <ChartCard title="Revenue Split" subtitle="By category" isDashboard>
            <PieChart isDashboard />
          </ChartCard>
        </Grid>
        <Grid item xs={12} md={6}>
  <ChartCard title="Performance Trends" subtitle="Last 12 months" isDashboard>
    <LineChart isDashboard />
  </ChartCard>
</Grid>

<Grid item xs={20} md={12}>   
  <ChartCard title="Geography Data" subtitle="Regional activity" isDashboard>
    <Geography isDashboard />
  </ChartCard>
</Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;