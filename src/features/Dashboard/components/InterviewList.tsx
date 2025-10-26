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
        <h2>Interviews this week</h2>
        {Interviews.map((item) => (
          <p key ={item.id}>
            {item.role} - {item.company}
          </p>
        ))}
    </div>
  );
}
