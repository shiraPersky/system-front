import "./JobSection.css";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";


export type JobItem = {
    id: string;    
    title: string;  
    company: string;
    date: string;
    summary: string;
    conclusion: string;
};
type JobSectionProps  = JobItem & {
  onEdit: (job: JobItem) => void;
  onDelete: (id: string) => void;
};



export default function JobSection({id, title,company, date, summary, conclusion, onEdit, onDelete, }: JobSectionProps) {
    return(
      <Box className = "stat-card">
        <div className="stat-card-header">
            <div className="job-info">
                <Typography variant="subtitle1" className= "job-title">{title}</Typography>
                <Typography variant="subtitle2" className= "job-company">{company}</Typography>
        </div>
        <div className="job-actions">
          <EditIcon fontSize="small" className="edit-icon" onClick={() => onEdit({id, title,company, date, summary, conclusion})} />
          <DeleteIcon fontSize="small" className="delete-icon" onClick={() => onDelete(id)}/>
        </div>
      </div>
        <div className="stat-card-meta">
            <Typography variant="body2" className= "date">{date}</Typography>
            <Typography variant="body2" className= "summary">{summary}</Typography>
        </div>
            <Typography variant="body2" className= "conclusion">{conclusion}</Typography>
      </Box>
  ); 
}
