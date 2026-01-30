import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

const InternList = () => {
  const [interns, setInterns] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInterns = async () => {
      const { data, error } = await supabase
        .from('candidates')
        .select('*')
        .eq('type', 'intern');

      if (error) {
        console.error('Error fetching interns:', error);
      } else {
        setInterns(data || []);
      }
    };

    fetchInterns();
  }, []);

  return (
    <div>
      <h2>Intern Candidates</h2>
      <button
        style={{ marginBottom: '15px', padding: '8px 12px', cursor: 'pointer' }}
        onClick={() => navigate('/interns/add')}
      >
        Add Intern
      </button>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {interns.length === 0 ? (
          <p>No intern candidates found.</p>
        ) : (
          interns.map((i) => (
            <div
              key={i.id}
              onClick={() => navigate(`/interns/${i.id}`)}
              style={{
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '6px',
                cursor: 'pointer',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              {i.full_name} - {i.status}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default InternList;
