import React, { useState, useMemo } from "react";
import "../App.css";

const InternCandidates = () => {
  const [candidates] = useState(
    JSON.parse(localStorage.getItem("internCandidates") || "[]")
  );

  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [eduFilter, setEduFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  /* 🔍 SEARCH + FILTER + SORT LOGIC */
  const filteredCandidates = useMemo(() => {
    let data = [...candidates];

    // Search by name
    if (search) {
      data = data.filter(c =>
        (c.fullName || "").toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by role
    if (roleFilter) {
      data = data.filter(c => c.internRole === roleFilter);
    }

    // Filter by education
    if (eduFilter) {
      data = data.filter(c => c.education === eduFilter);
    }

    // Filter by status
    if (statusFilter) {
      data = data.filter(c => c.status === statusFilter);
    }

    // Sort by name
    data.sort((a, b) => {
      const nameA = (a.fullName || "").toLowerCase();
      const nameB = (b.fullName || "").toLowerCase();
      return sortOrder === "asc"
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });

    return data;
  }, [candidates, search, roleFilter, eduFilter, statusFilter, sortOrder]);

  return (
    <div className="page-container" style={{ minHeight: "60vh" }}>
      <h1 style={{ marginBottom: "20px" }}>Intern Candidates</h1>

      {/* 🔍 Search & Filter Bar */}
      <div className="form-card">
        <div className="form-grid">
          <input
            placeholder="Search by Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select onChange={(e) => setRoleFilter(e.target.value)}>
            <option value="">Filter by Role</option>
            <option value="Frontend Intern">Frontend Intern</option>
            <option value="Backend Intern">Backend Intern</option>
            <option value="Full Stack Intern">Full Stack Intern</option>
          </select>

          <select onChange={(e) => setEduFilter(e.target.value)}>
            <option value="">Filter by Education</option>
            <option value="B.Tech">B.Tech</option>
            <option value="B.E">B.E</option>
            <option value="MCA">MCA</option>
          </select>

          <select onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="">Filter by Status</option>
            <option value="New">New</option>
            <option value="Shortlisted">Shortlisted</option>
            <option value="Interviewed">Interviewed</option>
            <option value="Selected">Selected</option>
            <option value="Rejected">Rejected</option>
          </select>

          <select onChange={(e) => setSortOrder(e.target.value)}>
            <option value="asc">Sort Name A–Z</option>
            <option value="desc">Sort Name Z–A</option>
          </select>
        </div>
      </div>

      {/* 📄 Candidate List */}
      {filteredCandidates.length === 0 && (
        <div
          style={{
            background: "#2f3b4a",
            padding: "40px",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "42px", marginBottom: "10px" }}>📄</div>
          <p>No intern candidates found</p>
        </div>
      )}

      {filteredCandidates.map((c, index) => (
        <div key={index} className="form-card">
          <h3>{c.fullName || "Unnamed Candidate"}</h3>
          <p><b>Education:</b> {c.education}</p>
          <p><b>Role:</b> {c.internRole}</p>
          <p><b>Status:</b> {c.status}</p>
        </div>
      ))}
    </div>
  );
};

export default InternCandidates;