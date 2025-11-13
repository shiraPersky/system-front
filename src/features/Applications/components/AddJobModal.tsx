import "./AddJobModal.css";

import { useState } from "react";

import { type JobItem } from "./JobSection";

type AddModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAddJob: (_stageName: string, _job: JobItem) => void;
  stageName: string;
};

export default function AddJobModal({
  isOpen,
  onClose,
  onAddJob,
  stageName,
}: AddModalProps) {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [date, setDate] = useState("");
  const [summary, setSummary] = useState("");
  const [conclusion, setConclusion] = useState("");

  const handleSubmit = () => {
    if (!title || !company) return;
    const newJob: JobItem = {
      id: `${stageName}-${Date.now()}`,
      title,
      company,
      date,
      summary,
      conclusion,
    };
    onAddJob(stageName, newJob);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      role="button"
      tabIndex={0}
      aria-label="Close modal"
      onClick={onClose}
      onKeyDown={(e) => {
        if (["Escape", "Enter"].includes(e.key)) onClose();
      }}
    >
    {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */}
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="modal-title">Add New Job</h2>

        <div className="form-group">
          <label htmlFor="title">Job Title</label>
          <input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Frontend Developer"
          />
        </div>

        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Google"
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="summary">Summary</label>
          <input
            id="summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Short description..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="conclusion">Conclusion</label>
          <input
            id="conclusion"
            value={conclusion}
            onChange={(e) => setConclusion(e.target.value)}
            placeholder="Final notes..."
          />
        </div>

        <div className="modal-buttons">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="add-btn" onClick={handleSubmit}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
