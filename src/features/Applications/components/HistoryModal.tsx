import "./HistoryModal.css";

type Job = {
  id: string;
  title: string;
  company: string;
  date: string;
  summary: string;
  conclusion: string;
};

type HistoryModalProps = {
  open: boolean;
  onClose: () => void;
  allJobs: Job[];
};

export default function HistoryModal({ open, onClose, allJobs }: HistoryModalProps) {
  if (!open) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="history-modal" onClick={(e) => e.stopPropagation()}>
        <h2>All Summaries & Conclusions</h2>

        <table className="history-table">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Company</th>
              <th>Date</th>
              <th>Summary</th>
              <th>Conclusion</th>
            </tr>
          </thead>
          <tbody>
            {allJobs.length === 0 ? (
              <tr>
                <td colSpan={5}>No jobs found.</td>
              </tr>
            ) : (
              allJobs.map((job) => (
                <tr key={job.id}>
                  <td>{job.title}</td>
                  <td>{job.company}</td>
                  <td>{job.date}</td>
                  <td>{job.summary}</td>
                  <td>{job.conclusion}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        <div className="modal-actions">
          <button className="close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
