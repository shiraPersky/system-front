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
    <div>
         <Box className = "stat-card-content">
            <Typography className = "stat-card-title">{stageName}</Typography>
            <Typography className = "stat-card-title">{numOfJobs}</Typography>
            <button>Edit {<EditIcon/>}</button>
            <button>Delete {<DeleteIcon/>}</button>

        </Box>

        {/* Render the list of jobs */}
        <div>
          {jobs.map((job, idx) => (
            <JobSection key = {idx} {...job} />
          ))}
        </div>
    </div>
  );
}

