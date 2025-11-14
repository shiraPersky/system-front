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



export default function JobSection({id, title,company, date, summary, conclusion, onEdit, onDelete,}: JobSectionProps) {
    return(
      <Box className = "job-card">
        <div className="job-header">
            <div className="job-main">
                <Typography variant="subtitle1" className= "job-title">{title}</Typography>
                <Typography variant="subtitle2" className= "job-company">{company}</Typography>
        
        <div className="job-actions">
          <EditIcon fontSize="small" className="edit-icon" onClick={() => onEdit({id, title,company, date, summary, conclusion})} />
          <DeleteIcon fontSize="small" className="delete-icon" onClick={() => onDelete(id)}/>
        </div>
      </div>
        <div className="job-meta">
            <Typography variant="body2" className= "job-date">{date}</Typography>
        </div>
        </div>
        <div className="job-summary-column">
          <div className="job-summary-item">
            <span className= "summary-label">Summary:</span>
            <span className= "summary-text">{summary || "--"}</span>
          </div>
          <div className="job-summary-item conclusion">
            <span className= "summary-label">Conclusion:</span>
            <span className= "summary-text">{conclusion || "--"}</span>
          </div> 
        </div>
      </Box>
  ); 
}
