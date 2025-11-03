import "./ActivitySummary.css";

import InterviewList from "./InterviewList";
import PendingActions from "./PendingActions";


const mockData = [
  { id: '1', role: 'Frontend Dev', company: 'Google' },
  { id: '2', role: 'Fullstack Dev', company: 'Microsoft' },
  { id: '3', role: 'iOS Dev', company: 'Apple' },
];


export default function ActivitySummary() {
  return (
    <div className="activity-summary">
        <h2>Activity Summary</h2>
        <InterviewList Interviews={mockData} />
        <PendingActions/>
        
    </div>
  );
}
