import "./ActivitySummary.css";

type InterviewItem = {
    id: string;  
    role: string;
    company: string;
};

type InterviewListProps = {
    Interviews: InterviewItem[];
};

export default function InterviewList({Interviews}:InterviewListProps) {
  return (
    <div>
        <h3>Interviews this week</h3>
        {Interviews.map((item) => (
        <div className="interview-row" key={item.id}>
          <span>{item.role}</span>
          <span>{item.company}</span>
        </div>
      ))}
    </div>
  );
}
