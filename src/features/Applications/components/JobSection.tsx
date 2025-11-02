import "./JobSection.css";

import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

type JobItemProps = {
    title: string;  
    company: string;
    date: string;
    summary: string;
    conclusion: string;
};
export type JobItem = JobItemProps;


export default function JobSection({title,company, date, summary, conclusion }: JobItemProps) {
    return(
      <Box className = "stat-card">
        <div className="stat-card-header">
            <Typography variant="subtitle1" className= "job-title">{title}</Typography>
            <Typography variant="subtitle2" className= "job-company">{company}</Typography>
        </div>
        <div className="stat-card-meta">
            <Typography variant="body2" className= "date">{date}</Typography>
            <Typography variant="body2" className= "summary">{summary}</Typography>
        </div>
            <Typography variant="body2" className= "conclusion">{conclusion}</Typography>
      </Box>
  ); 
}
