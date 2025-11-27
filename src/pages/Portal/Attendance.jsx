import React, { useState } from 'react'
import { sampleStudents } from '../../data/sampleData'

export default function Attendance() {
  const [students, setStudents] = useState(sampleStudents())
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))

  function togglePresent(id) {
    setStudents(prev => prev.map(s => s.id === id ? { ...s, present: !s.present } : s))
  }

  function exportCSV() {
    const rows = [['id','name','present','date'], ...students.map(s=>[s.id,s.name,s.present?1:0,date])]
    const csv = rows.map(r => r.join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `attendance-${date}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div>
      <h2>Attendance</h2>
      <div className="d-flex align-items-center gap-2 mb-3">
        <label className="mb-0">Date:</label>
        <input type="date" className="form-control w-auto" value={date} onChange={e => setDate(e.target.value)} />
        <button className="btn btn-sm btn-success" onClick={exportCSV}>Export CSV</button>
      </div>

      <div className="card">
        <div className="card-body p-0">
          <table className="table m-0">
            <thead className="table-light">
              <tr><th>#</th><th>Name</th><th>Present</th></tr>
            </thead>
            <tbody>
              {students.map(s => (
                <tr key={s.id}>
                  <td>{s.id}</td>
                  <td>{s.name}</td>
                  <td>
                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" checked={s.present} onChange={() => togglePresent(s.id)} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
