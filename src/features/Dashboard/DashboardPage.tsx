import "./Dashboard.css";

import ActivitySummary from "./components/ActivitySummary";
import StatsGrid from "./components/StatsGrid";


export default function DashboardPage(){
     return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <StatsGrid />
      <ActivitySummary />
    </div>
  );
}