import "../PageContainer.css";
import "./ApplicationsPage.css";

import React from "react";

import StageSection from "./components/StageSection";

export default function ApplicationsPage(){
  const stages = [
    {
      stageName: "Applied",
      numOfJobs: 2,
      jobs: [
        {
          title: "Frontend Developer",
          company: "TechCorp",
          date: "2025-10-01",
          summary: "Submitted via website",
          conclusion: "Waiting for response",
        },
        {
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
      numOfJobs: 1,
      jobs: [
        {
          title: "React Developer",
          company: "WebWorks",
          date: "2025-10-10",
          summary: "Completed first interview",
          conclusion: "Awaiting feedback",
        },
      ],
    },
  ];
    return(
     <div  className="applications-page">
      <div  className="page-header">
        <h1>Request Management</h1>
      </div>

        <div className="stages-container">
          {/* Render the list of stages */}
            {stages.map((stage, index) => (
              <StageSection 
                key = {index} 
                stageName={stage.stageName}
                numOfJobs={stage.numOfJobs}
                jobs={stage.jobs}
              />
            ))}
      </div>
        <button className="add-stage-btn">+ Add Stage</button>
      </div>
    );
};
