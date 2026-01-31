import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const AdminCandidateDetails = ({ candidateId }) => {
  const [interview, setInterview] = useState(null);
  const [assignment, setAssignment] = useState(null);

  useEffect(() => {
    loadDetails();
  }, []);

  const loadDetails = async () => {
    const { data: interviewData } = await supabase
      .from("interview_evaluations")
      .select("*")
      .eq("candidate_id", candidateId)
      .single();

    const { data: assignmentData } = await supabase
      .from("assignments")
      .select("*")
      .eq("candidate_id", candidateId)
      .single();

    setInterview(interviewData);
    setAssignment(assignmentData);
  };

  return (
    <div>
      <h3>Interview Evaluation</h3>
      {interview && (
        <>
          <p>Communication: {interview.communication}</p>
          <p>Technical: {interview.technical}</p>
          <p>Decision: {interview.decision}</p>
        </>
      )}

      <h3>Assignment</h3>
      {assignment && (
        <>
          <p>Reference No: {assignment.reference_no}</p>
          <p>Start: {assignment.start_date}</p>
          <p>End: {assignment.end_date}</p>
        </>
      )}
    </div>
  );
};

export default AdminCandidateDetails;
