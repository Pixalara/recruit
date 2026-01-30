import React, { useState, useMemo } from "react";
import "../App.css";

const Shortlisted = () => {
  const [candidates] = useState(
    JSON.parse(localStorage.getItem("candidates") || "[]")
  );

  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [eduFilter, setEduFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const shortlistedCandidates = useMemo(() => {
    let data = candidates.filter(c => c.status === "Shortlisted");

    if (search) data = data.filter(c => (c.name || "").toLowerCase().includes(search.toLowerCase()));
    if (roleFilter) data = data.filter(c => c.role === roleFilter);
    if (eduFilter) data = data.filter(c => c.education === eduFilter);

    data.sort((a, b) => {
      const nameA = (a.name || "").toLowerCase();
      const nameB = (b.name || "").toLowerCase();
      return sortOrder === "asc" ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });

    return data;
  }, [candidates, search, roleFilter, eduFilter, sortOrder]);

  return (
    <div className="page-container">
      <h1>Shortlisted Candidates</h1>

      <div className="form-card">
        <div className="form-grid">
          <input
            placeholder="Search by Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)}>
            <option value="">Filter by Role</option>
            {[...new Set(shortlistedCandidates.map(c => c.role))].map((r, i) => (
              <option key={i} value={r}>{r}</option>
            ))}
          </select>

          <select value={eduFilter} onChange={(e) => setEduFilter(e.target.value)}>
            <option value="">Filter by Education</option>
            {[...new Set(shortlistedCandidates.map(c => c.education))].map((e, i) => (
              <option key={i} value={e}>{e}</option>
            ))}
          </select>

          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="asc">Sort Name A–Z</option>
            <option value="desc">Sort Name Z–A</option>
          </select>
        </div>
      </div>

      {shortlistedCandidates.length === 0 ? (
        <div className="form-card" style={{ textAlign: "center" }}>
          <div style={{ fontSize: "42px", marginBottom: "15px" }}>⭐</div>
          <p>No candidates have been shortlisted yet.</p>
        </div>
      ) : (
        shortlistedCandidates.map((c, index) => (
          <div key={index} className="form-card">
            <h3>{c.name}</h3>
            <p><b>Education:</b> {c.education}</p>
            <p><b>Role:</b> {c.role}</p>
            <p><b>Status:</b> {c.status}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Shortlisted;