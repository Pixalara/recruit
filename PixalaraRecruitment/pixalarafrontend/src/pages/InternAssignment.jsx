import React, { useState } from "react";
import "../App.css";

export default function Assignment() {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, startDate, endDate, details });
    alert("Assignment Saved!");
  };

  return (
    <div className="form-page">
      {/* PAGE HEADING */}
      <h1 className="page-heading">Assignment</h1>

      {/* CARD */}
      <div className="form-card">
        <form className="vertical-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Assignment Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />

          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />

          <textarea
            placeholder="Assignment Details / Matter"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />

          <button type="submit" className="primary-btn">
            Save Assignment
          </button>
        </form>
      </div>
    </div>
  );
}
