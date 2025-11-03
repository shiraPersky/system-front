import "./StatsCard.css";

import Typography from "@mui/material/Typography";
import { type ReactNode } from "react";

type StatsCardProps = {
    title: string;
    value: number;
    icon: ReactNode;
};

export default function StatsCard({title,value,icon}: StatsCardProps) {
    return(
      <div className = "stat-card">
            <Typography className = "stat-card-title">{title}</Typography>
            <Typography className = "stat-card-value">{value}</Typography>
            <div className="stat-card-icon">{icon}</div>
      </div>
  ); 
}
