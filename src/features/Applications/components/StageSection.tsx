import "./StageSection.css"

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import JobSection, {type JobItem} from "./JobSection";


type StageInterviewListProps = {
    stageName: string;  
    numOfJobs: number;
    jobs: JobItem[];
};


export default function StageSection({stageName, numOfJobs, jobs }: StageInterviewListProps) {
  return (
    <div className= "satge-section">
         <Box className = "stage-header">
            <Typography variant="h6">{stageName}</Typography>
            <div className = "stage-meta">
              <Typography variant="body2">{numOfJobs} jobs</Typography>
              <button><EditIcon fontSize ="small" /> Edit</button>
              <button><DeleteIcon fontSize ="small" /> Delete</button>
            </div>
        </Box>

        {/* Render the list of jobs */}
        <div className = "jobs-list">
          {jobs.map((job, idx) => (
            <JobSection key = {idx} {...job} />
          ))}
        </div>
    </div>
  );
}

