
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
        <Box className = "stat-card-content">
            <Typography className = "stat-card-title">{title}</Typography>
            <Typography className = "stat-card-title">{company}</Typography>
            <Typography className = "stat-card-title">{date}</Typography>
            <Typography className = "stat-card-title">{summary}</Typography>
            <Typography className = "stat-card-title">{conclusion}</Typography>

        </Box>
      </Box>
  ); 
}
