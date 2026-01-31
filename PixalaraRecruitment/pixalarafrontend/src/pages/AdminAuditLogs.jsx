import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const AdminAuditLogs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    const { data } = await supabase
      .from("audit_logs")
      .select("*")
      .order("created_at", { ascending: false });

    setLogs(data);
  };

  return (
    <div className="table-wrapper">
      <h2>Audit Logs</h2>

      <table className="data-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Action</th>
            <th>Table</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {logs.map(log => (
            <tr key={log.id}>
              <td>{log.user_id}</td>
              <td>{log.action}</td>
              <td>{log.table_name}</td>
              <td>{new Date(log.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAuditLogs;
