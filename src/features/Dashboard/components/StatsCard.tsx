import "./StatsCard.css";

import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import { type ReactNode } from "react";

type StatsCardProps = {
    title: string;
    value: number;
    icon: ReactNode;
};

export default function StatsCard({title,value,icon}: StatsCardProps) {
    return(
      <Box className = "stat-card">
        <Box className = "stat-card-content">
            <Typography className = "stat-card-title">{title}</Typography>
            <Typography className = "stat-card-title">{value}</Typography>
        </Box>
        <Box className = "stat-card-icon">
            {icon}
        </Box>
      </Box>
  ); 
}
