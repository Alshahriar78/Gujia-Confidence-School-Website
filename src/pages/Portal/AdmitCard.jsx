import React, { useState } from 'react'

export default function AdmitCard() {
  const [studentId, setStudentId] = useState(1)

  function generate() {
    alert('Admit card would be generated (backend needed).')
  }

  return (
    <div>
      <h2>Admit Card Generator</h2>
      <div className="d-flex gap-2 align-items-center">
        <input type="number" className="form-control w-auto" value={studentId} onChange={e=>setStudentId(Number(e.target.value))} />
        <button className="btn btn-primary" onClick={generate}>Generate Admit Card (PDF)</button>
      </div>
    </div>
  )
}
