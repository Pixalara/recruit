import React, { useState, useMemo } from "react";
import "../App.css";

const Interviewed = () => {
  const [candidates] = useState(
    JSON.parse(localStorage.getItem("candidates") || "[]")
  );

  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");
  const [education, setEducation] = useState("");
  const [decision, setDecision] = useState("");
  const [sort, setSort] = useState("");

  const filteredCandidates = useMemo(() => {
    let data = candidates.filter(c => c.status === "Interviewed");

    if (search) data = data.filter(c => (c.name || "").toLowerCase().includes(search.toLowerCase()));
    if (role) data = data.filter(c => c.role === role);
    if (education) data = data.filter(c => c.education === education);
    if (decision) data = data.filter(c => c.decision === decision);

    data.sort((a, b) => {
      if (sort === "name") return (a.name || "").localeCompare(b.name || "");
      if (sort === "date") return new Date(b.date) - new Date(a.date);
      return 0;
    });

    return data;
  }, [candidates, search, role, education, decision, sort]);

  return (
    <div className="page-container">
      <h1>Interviewed Candidates</h1>

      <div className="control-bar">
        <input placeholder="Search by name" value={search} onChange={e => setSearch(e.target.value)} />

        <select value={role} onChange={e => setRole(e.target.value)}>
          <option value="">All Roles</option>
          {[...new Set(candidates.map(c => c.role))].map((r, i) => <option key={i} value={r}>{r}</option>)}
        </select>

        <select value={education} onChange={e => setEducation(e.target.value)}>
          <option value="">All Education</option>
          {[...new Set(candidates.map(c => c.education))].map((e, i) => <option key={i} value={e}>{e}</option>)}
        </select>

        <select value={decision} onChange={e => setDecision(e.target.value)}>
          <option value="">All Decisions</option>
          {[...new Set(candidates.map(c => c.decision))].map((d, i) => <option key={i} value={d}>{d}</option>)}
        </select>

        <select value={sort} onChange={e => setSort(e.target.value)}>
          <option value="">Sort By</option>
          <option value="date">Date Added</option>
          <option value="name">Name</option>
        </select>
      </div>

      <div className="list-card">
        {filteredCandidates.length === 0 ? (
          <p className="empty-text">No interviewed candidates found.</p>
        ) : (
          filteredCandidates.map((c, i) => (
            <div key={i} className="candidate-row">
              <span>{c.name}</span>
              <span>{c.role}</span>
              <span>{c.education}</span>
              <span>{c.decision}</span>
              <span>{c.date}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Interviewed;