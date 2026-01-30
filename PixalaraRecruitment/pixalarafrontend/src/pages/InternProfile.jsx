import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { useParams } from 'react-router-dom';

const InternProfile = () => {
  const { id } = useParams();
  const [intern, setIntern] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIntern = async () => {
      const { data, error } = await supabase
        .from('candidates')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching intern:', error);
      } else {
        setIntern(data);
      }
      setLoading(false);
    };

    fetchIntern();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!intern) return <p>Intern not found.</p>;

  return (
    <div
      style={{
        maxWidth: '500px',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      }}
    >
      <h2>{intern.full_name}</h2>
      <p>Status: {intern.status}</p>
      {intern.role && <p>Role: {intern.role}</p>}
      {intern.email && <p>Email: {intern.email}</p>}
    </div>
  );
};

export default InternProfile;
