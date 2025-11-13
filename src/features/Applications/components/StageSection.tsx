// import "./StageSection.css"

// import { Draggable,Droppable } from "@hello-pangea/dnd";
// //import DeleteIcon from '@mui/icons-material/Delete';
// //import EditIcon from '@mui/icons-material/Edit';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';

// import JobSection, {type JobItem} from "./JobSection";


// type StageInterviewListProps = {
//     stageName: string;  
//     jobs: JobItem[];
//     stageIndex: number;
// };


// export default function StageSection({stageName, jobs, stageIndex  }: StageInterviewListProps) {
//   return (
// <Droppable droppableId={stageName}> 
//       {(provided) => (
//         <div className="stage-section" ref={provided.innerRef} {...provided.droppableProps}>
//           <Box className="stage-header">
//             <Typography variant="h6">{stageName}</Typography>
//             <Typography variant="body2">{jobs.length} jobs</Typography>
//           </Box>

//           <div className="jobs-list">
//             {jobs.map((job, index) => (
//               <Draggable key={index} draggableId={`${stageIndex}-${index}`} index={index}>
//                 {(provided) => (
//                   <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
//                     <JobSection {...job} />
//                   </div>
//                 )}
//               </Draggable>
//             ))}
//             {provided.placeholder}
//           </div>
//         </div>
//       )}
//     </Droppable>
//   );
// }
    
// //     <div className= "stage-section">
// //           <Box className = "stage-header">
// //               <Typography variant="h6">{stageName}</Typography>
// //               <div className = "stage-meta">
// //                 <Typography variant="body2">{numOfJobs} jobs</Typography>
// //                 <button><EditIcon fontSize ="small" /> Edit</button>
// //                 <button><DeleteIcon fontSize ="small" /> Delete</button>
// //               </div>
// //           </Box>

// //           {/* Render the list of jobs */}
// //           <div className = "jobs-list">
// //             {jobs.map((job, idx) => (
// //               <JobSection key = {idx} {...job} />
// //             ))}
// //           </div>

// //           <div className="add-job-container">
// //             <button className="add-job-btn">+ Add Job Application</button>
// //           </div>
// //       </div>
// //   );
// // }

import "./StageSection.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Draggable,Droppable } from "@hello-pangea/dnd";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";

import AddJobModal from "./AddJobModal";
import JobSection, { type JobItem } from "./JobSection";

// Props type for each stage section
type StageProps = {
  stageName: string;
  jobs: JobItem[];
  onAddJob: (_stageName: string, _job: JobItem) => void;
  onEditJob: (stageName: string, job: JobItem) => void;
  onDeleteJob: (stageName: string, id: string) => void;
  onEditStage: (oldName: string, newName: string) => void;
  onDeleteStage: (stageName: string) => void;

};

export default function StageSection({ stageName, jobs ,onAddJob,onEditJob,onDeleteJob,onEditStage,onDeleteStage,}: StageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editJob, setEditJob] = useState<JobItem | null>(null);
  const [isEditingStage, setIsEditingStage] = useState(false);
  const [stageTitle, setStageTitle] = useState(stageName);

  useEffect(() => {
    setStageTitle(stageName);
  }, [stageName]);
  
  const handleStageEdit = () => {
    setIsEditingStage(true);
  };

  const handleStageSave = () => {
    if (stageTitle.trim() && stageTitle !== stageName) {
      onEditStage(stageName, stageTitle.trim());
    }
    setIsEditingStage(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditJob(null);
  };
  
  return (
    // Each stage is a Droppable area (destination for dragged jobs)
    <Droppable droppableId={stageName}>
      {(provided) => (
        <div
          className="stage-section"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {/* Stage header with title and job count */}
          <Box className="stage-header">
            <div style={{display: "flex", alignItems: "center", gap: "0.5rem"}}>
              {isEditingStage? (
                <input
                  className="stage-title-input"
                  value = {stageTitle}
                  onChange={(e) => setStageTitle(e.target.value)}
                  onBlur={handleStageSave}
                  onKeyDown={(e) => {
                    if(e.key === "Enter") { e.preventDefault(); handleStageSave();}
                    if(e.key === "Escape") {setStageTitle(stageName); setIsEditingStage(false); }
                  }}
                  autoFocus
                  />
              ) : (
                <Typography variant="h6">{stageTitle}</Typography>
              )}
            <div className="stage-icons">
                <EditIcon
                  fontSize="small"
                  className="stage-edit-icon"
                  onClick={handleStageEdit}
                />
                <DeleteIcon
                  fontSize="small"
                  className="stage-delete-icon"
                  onClick={() => onDeleteStage(stageName)}
                />
              </div>
            </div>
            <Typography variant="body2">{jobs.length} jobs</Typography>
          </Box>

          {/* List of draggable job cards */}
          <div className="jobs-list">
            {jobs.map((job, index) => (
              <Draggable
                key={job.id} // Each draggable must have a unique key
                draggableId={job.id} // Stable identifier for the item
                index={index} // Position inside the list
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {/* Render job card component */}
                    <JobSection {...job}
                    onEdit={(j) => {
                        setEditJob(j);
                        setIsModalOpen(true);
                      }}
                      onDelete={(id) => onDeleteJob(stageName, id)}
                    />
                  </div>
                )}
              </Draggable>
            ))}

            {/* Placeholder required by the DnD library to maintain layout while dragging */}
            {provided.placeholder}
          </div>
          <div className="add-job-container">
             <button className="add-job-btn" onClick={() => {
                setEditJob(null);
                setIsModalOpen(true);
              }}
              >
                + Add Job Application
              </button>
           </div>

           <AddJobModal
              isOpen ={isModalOpen}
              onClose={handleCloseModal}
              onAddJob={editJob? onEditJob: onAddJob}
              stageName={stageName}
              existingJob={editJob}
              />
            
            </div>
      )}
    </Droppable>
  );
}
