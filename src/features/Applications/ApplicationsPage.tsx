import "../PageContainer.css";
import "./ApplicationsPage.css";

import { DragDropContext, type DropResult } from "@hello-pangea/dnd";
import { useMemo, useState } from "react";

import HistoryModal from "./components/HistoryModal"; 
import StageSection from "./components/StageSection";


export default function ApplicationsPage() {
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
 const [isHistoryOpen, setIsHistoryOpen] = useState(false); 

  //
  const allJobs = useMemo(() => stages.flatMap((s) => s.jobs), [stages]);
  
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

    // Create a deep copy of the stages array 
    const newStages = structuredClone(stages);

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

       <button className="view-summaries-btn" onClick={() => setIsHistoryOpen(true)}>
          📄View All Summaries and Conclusions
        </button>
      
      {/*  the drag-and-drop area */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="stages-container">
          {/* Render all stages */}
          {stages.map((stage) => (
            <StageSection
              key={stage.stageName}
              stageName={stage.stageName}
              jobs={stage.jobs}
              allJobs={allJobs}
              onAddJob={(stageName, newJob) =>{
                setStages((prev) =>
                prev.map((s) =>
                s.stageName === stageName ? {...s, jobs: [...s.jobs, newJob]}:s));
              }}
              onEditJob={(stageName, updatedJob) => {
              setStages((prev) =>
                prev.map((s) =>
                  s.stageName === stageName
                    ? {
                        ...s,
                        jobs: s.jobs.map((j) =>
                          j.id === updatedJob.id ? updatedJob : j
                        ),
                      }
                    : s
                )
              );
            }}
            onDeleteJob={(stageName, jobId) => {
              setStages((prev) =>
                prev.map((s) =>
                  s.stageName === stageName
                    ? { ...s, jobs: s.jobs.filter((j) => j.id !== jobId) }
                    : s
                )
              );
            }}
            onEditStage={(oldName, newName) => {
            setStages((prev) =>
              prev.map((s) =>
                s.stageName === oldName
                  ? { ...s, stageName: newName } 
                  : s
              )
            );
          }}
          onDeleteStage={(stageName) => {
            setStages((prev) => prev.filter((s) => s.stageName !== stageName));
          }}
            />
          ))}
        </div>
      </DragDropContext>

      {/* Button to add new stages */}
      <button className="add-stage-btn" onClick={handleAddStage}>+ Add Stage</button>

      <HistoryModal
        open={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        allJobs={allJobs} 
      />

    </div>
  );
  
}

