import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

const AuditLogs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const { data, error } = await supabase
        .from('audit_logs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching audit logs:', error);
      } else {
        setLogs(data || []);
      }
    };

    fetchLogs();
  }, []);

  return (
    <div>
      <h2>Audit Logs</h2>
      {logs.length === 0 ? (
        <p>No logs found.</p>
      ) : (
        logs.map((log) => (
          <div key={log.id}>
            {log.action} - {new Date(log.created_at).toLocaleString()}
          </div>
        ))
      )}
    </div>
  );
};

export default AuditLogs;
