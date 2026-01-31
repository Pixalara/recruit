import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const AdminCandidates = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    const { data, error } = await supabase
      .from("candidates")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setCandidates(data);
  };

  const deleteCandidate = async (id) => {
    if (!window.confirm("Delete candidate permanently?")) return;

    await supabase.from("candidates").delete().eq("id", id);
    fetchCandidates();
  };

  return (
    <div className="table-wrapper">
      <h2>All Candidates</h2>

      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Status</th>
            <th>Resume</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map(c => (
            <tr key={c.id}>
              <td>{c.full_name}</td>
              <td>{c.type}</td>
              <td>{c.status}</td>
              <td>
                <button onClick={() => viewResume(c.id)}>
                  View
                </button>
              </td>
              <td>
                <button onClick={() => deleteCandidate(c.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const viewResume = async (candidateId) => {
  const { data, error } = await supabase.storage
    .from("resumes")
    .createSignedUrl(`${candidateId}/resume.pdf`, 60);

  if (!error) {
    window.open(data.signedUrl, "_blank");
  }
};

export default AdminCandidates;
