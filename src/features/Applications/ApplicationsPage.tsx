// import "../PageContainer.css";
// import "./ApplicationsPage.css";

// import { DragDropContext, type DropResult } from "@hello-pangea/dnd";
// import {useState} from "react";

// import StageSection from "./components/StageSection";

// export default function ApplicationsPage(){
//   const [stages, setStages] = useState([
//     {
//       stageName: "Applied",
//       numOfJobs: 2,
//       jobs: [
//         {
//           title: "Frontend Developer",
//           company: "TechCorp",
//           date: "2025-10-01",
//           summary: "Submitted via website",
//           conclusion: "Waiting for response",
//         },
//         {
//           title: "UI Engineer",
//           company: "Designify",
//           date: "2025-10-03",
//           summary: "Referred by a friend",
//           conclusion: "Waiting for HR screening",
//         },
//       ],
//     },
//     {
//       stageName: "Interview",
//       numOfJobs: 1,
//       jobs: [
//         {
//           title: "React Developer",
//           company: "WebWorks",
//           date: "2025-10-10",
//           summary: "Completed first interview",
//           conclusion: "Awaiting feedback",
//         },
//       ],
//     },
//   ]);

//   const handleDragEnd = (result: DropResult) => {
//     const {source, destination} = result;
//     if(!destination) return;

//     if (source.droppableId === destination.droppableId && source.index === destination.index)
//       return;

//     const sourceStageIndex = parseInt(source.droppableId);
//     const destStageIndex = parseInt(destination.droppableId);

//     const newStages = Array.from(stages);
//     const [movedJob] = newStages[sourceStageIndex].jobs.splice(source.index, 1);
//     newStages[destStageIndex].jobs.splice(destination.index, 0, movedJob);

//     setStages(newStages);
//   };
//     return(
//      <div  className="applications-page">
//       <div  className="page-header">
//         <h1>Request Management</h1>
//       </div>
      
//       <DragDropContext onDragEnd={handleDragEnd}>
//           <div className="stages-container">
//             {/* Render the list of stages */}
//               {stages.map((stage, index) => (
//                 <StageSection 
//                   key={index}
//                   stageName={stage.stageName}
//                   jobs={stage.jobs} stageIndex={0}                />
//               ))}
//         </div>
//       </DragDropContext>

//           <button className="add-stage-btn">+ Add Stage</button>
//         </div>
//     );
// };
import "../PageContainer.css";
import "./ApplicationsPage.css";

import { DragDropContext, type DropResult } from "@hello-pangea/dnd";
import { useState } from "react";

import StageSection from "./components/StageSection";

export default function ApplicationsPage() {
  // Application stages with sample data
  const [stages, setStages] = useState([
    {
      stageName: "Applied",
      jobs: [
        {
          id: "job1",
          title: "Frontend Developer",
          company: "TechCorp",
          date: "2025-10-01",
          summary: "Submitted via website",
          conclusion: "Waiting for response",
        },
        {
          id: "job2",
          title: "UI Engineer",
          company: "Designify",
          date: "2025-10-03",
          summary: "Referred by a friend",
          conclusion: "Waiting for HR screening",
        },
      ],
    },
    {
      stageName: "Interview",
      jobs: [
        {
          id: "job3",
          title: "React Developer",
          company: "WebWorks",
          date: "2025-10-10",
          summary: "Completed first interview",
          conclusion: "Awaiting feedback",
        },
      ],
    },
  ]);

  // Function triggered after a drag-and-drop action ends
  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    // If dropped outside any valid area, do nothing
    if (!destination) return;

    // If dropped back in the same place, do nothing
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    // Find source and destination stage indexes by their stageName
    const sourceStageIndex = stages.findIndex(
      (s) => s.stageName === source.droppableId
    );
    const destStageIndex = stages.findIndex(
      (s) => s.stageName === destination.droppableId
    );

    // Create a deep copy of the stages array (avoid mutating the original state)
    const newStages = JSON.parse(JSON.stringify(stages));

    // Remove job from the source stage
    const [movedJob] = newStages[sourceStageIndex].jobs.splice(source.index, 1);

    // Insert job into the destination stage
    newStages[destStageIndex].jobs.splice(destination.index, 0, movedJob);

    // Update state
    setStages(newStages);
    };
    const handleAddStage = () => {
    const newStage = {
      stageName: "NEW STAGE",
      jobs: [],
    };

    // Append the new stage to the existing list
    setStages((prev) => [...prev, newStage]);
  };

  return (
    <div className="applications-page">
      <div className="page-header">
        <h1>Request Management</h1>
      </div>

      {/* Wrap the drag-and-drop area */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="stages-container">
          {/* Render all stages */}
          {stages.map((stage) => (
            <StageSection
              key={stage.stageName}
              stageName={stage.stageName}
              jobs={stage.jobs}
              onAddJob={(stageName, newJob) =>{
                setStages((prev) =>
                prev.map((s) =>
                s.stageName === stageName ? {...s, jobs: [...s.jobs, newJob]}:s));
              }}
            />
          ))}
        </div>
      </DragDropContext>

      {/* Button to add new stages (not functional yet) */}
      <button className="add-stage-btn" onClick={handleAddStage}>+ Add Stage</button>
    </div>
  );
  
}

