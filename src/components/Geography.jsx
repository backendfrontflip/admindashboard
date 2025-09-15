// src/pages/Geography.jsx
import React from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { tokens } from "../theme";
import { geoFeatures } from "../data/mockGeoFeatures";
import { mockGeographyData as data } from "../data/mockData";
import { useTheme, Box } from "@mui/material";

const Geography = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        height: isDashboard ? "250px" : "75vh", // compact in dashboard, full-page otherwise
        width: "100%",
        borderRadius: "12px",
        overflow: "hidden", // prevents map overflow
      }}
    >
      <ResponsiveChoropleth
        data={data}
        features={geoFeatures.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        domain={[0, 1000000]}
        unknownColor={colors.grey[700]} // dark grey for unknown regions
        label="properties.name"
        valueFormat=".2s"
        projectionScale={isDashboard ? 40 : 150}
        projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        colors="nivo" // default color scheme
        enableGraticule={true}
        graticuleLineColor={colors.grey[400]} // grid lines adapt to theme
        borderWidth={1.5}
        borderColor={colors.grey[100]} // borders adapt to theme
        theme={{
          textColor: colors.grey[100],
          fontSize: 12,
          axis: {
            domain: {
              line: {
                stroke: colors.grey[400],
              },
            },
            ticks: {
              line: {
                stroke: colors.grey[400],
                strokeWidth: 1,
              },
              text: {
                fill: colors.grey[100],
              },
            },
          },
          legends: {
            text: {
              fill: colors.grey[100],
              fontSize: isDashboard ? 10 : 12,
            },
          },
        }}
        legends={
          !isDashboard
            ? [
                {
                  anchor: "bottom-left",
                  direction: "column",
                  justify: true,
                  translateX: 20,
                  translateY: -100,
                  itemsSpacing: 0,
                  itemWidth: 94,
                  itemHeight: 18,
                  itemDirection: "left-to-right",
                  itemTextColor: colors.grey[100],
                  itemOpacity: 0.85,
                  symbolSize: 18,
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemTextColor: colors.grey[50],
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]
            : undefined
        }
      />
    </Box>
  );
};

export default Geography;
