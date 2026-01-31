import React, { useState } from 'react'
import '../App.css'

export default function InterviewEvaluation() {
  const [communication, setCommunication] = useState('')
  const [technical, setTechnical] = useState('')
  const [overall, setOverall] = useState('')
  const [comments, setComments] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ communication, technical, overall, comments })
    alert('Interview Evaluation Saved!')
  }

  return (
    <div className="form-page">
      {/* PAGE HEADING - OUTSIDE BOX */}
      <h1 className="page-heading">Interview Evaluation</h1>

      {/* WHITE BOX */}
      <div className="form-card">
        <form className="vertical-form" onSubmit={handleSubmit}>
          <select value={communication} onChange={(e) => setCommunication(e.target.value)} required>
            <option value="">Communication Skills (1–5)</option>
            {[1,2,3,4,5].map(n => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>

          <select value={technical} onChange={(e) => setTechnical(e.target.value)} required>
            <option value="">Technical Skills (1–5)</option>
            {[1,2,3,4,5].map(n => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>

          <select value={overall} onChange={(e) => setOverall(e.target.value)} required>
            <option value="">Overall Performance (1–5)</option>
            {[1,2,3,4,5].map(n => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>

          <textarea
            placeholder="Comments (optional)"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />

          <button type="submit" className="primary-btn">
            Save Evaluation
          </button>
        </form>
      </div>
    </div>
  )
}
