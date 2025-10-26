import ActivitySummary from "./components/ActivitySummary";
import StatsGrid from "./components/StatsGrid";

export default function DashboardPage(){
    return(
     <div>
      <h1>Dashboard</h1>
      <StatsGrid/>
      <ActivitySummary/>
    </div>
    );
};
