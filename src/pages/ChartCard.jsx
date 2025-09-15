import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const ChartCard = ({ title, subtitle, children, isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        backgroundColor: colors.primary[400],
        borderRadius: "12px",
        p: 1, // Reduced padding for mobile
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: isDashboard ? "auto" : "auto", // Dynamic height for mobile
        minHeight: isDashboard ? "200px" : "400px", // Reduced minHeight for mobile
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        overflow: isDashboard ? "auto" : "visible",
      }}
    >
      {(title || subtitle) && (
        <Box mb={1}>
          {title && (
            <Typography variant="h6" sx={{ color: colors.grey[100], fontWeight: 600 }}>
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography variant="body2" sx={{ color: colors.greenAccent[300] }}>
              {subtitle}
            </Typography>
          )}
        </Box>
      )}
      <Box sx={{ flex: 1, minHeight: 0, overflow: "auto" }}>
        {children}
      </Box>
    </Box>
  );
};

export default ChartCard;