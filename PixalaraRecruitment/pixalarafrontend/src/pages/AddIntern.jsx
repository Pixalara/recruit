import { useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

export default function AddIntern() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const save = async () => {
    await supabase.from("candidates").insert([
      {
        full_name: name,
        type: "intern",
        status: "New",
      },
    ]);
    navigate("/interns");
  };

  return (
    <div>
      <h2>Add Intern</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={save}>Save</button>
    </div>
  );
}
