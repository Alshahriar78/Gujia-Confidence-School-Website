import React, { useState, useEffect } from 'react'
import { sampleStudents } from '../../data/sampleData'

export default function AllStudents() {
  const [students, setStudents] = useState(sampleStudents())
  const [filtered, setFiltered] = useState([])
  const [selectedClass, setSelectedClass] = useState('')
  const [selectedSection, setSelectedSection] = useState('')

  // unique class and section list
  const classList = [...new Set(students.map(s => s.className))].sort()
  const sectionList = [...new Set(students.map(s => s.section))].sort()

  useEffect(() => {
    let result = students
    if (selectedClass) result = result.filter(s => s.className === selectedClass)
    if (selectedSection) result = result.filter(s => s.section === selectedSection)
    setFiltered(result)
  }, [selectedClass, selectedSection, students])

  return (
    <div>
      <h2>All Students</h2>

      {/* Filter controls */}
      <div className="card p-3 mb-3">
        <div className="row g-3 align-items-center">
          <div className="col-md-3">
            <label className="form-label">Class</label>
            <select
              className="form-select"
              value={selectedClass}
              onChange={e => setSelectedClass(e.target.value)}
            >
              <option value="">All Classes</option>
              {classList.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="col-md-3">
            <label className="form-label">Section</label>
            <select
              className="form-select"
              value={selectedSection}
              onChange={e => setSelectedSection(e.target.value)}
            >
              <option value="">All Sections</option>
              {sectionList.map(sec => (
                <option key={sec} value={sec}>{sec}</option>
              ))}
            </select>
          </div>

          <div className="col-md-3">
            <button
              className="btn btn-secondary mt-4"
              onClick={() => {
                setSelectedClass('')
                setSelectedSection('')
              }}
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>

      {/* Student Table */}
      <div className="card">
        <div className="card-body">
          {filtered.length === 0 ? (
            <p className="text-muted">No students found for the selected filters.</p>
          ) : (
            <table className="table table-striped">
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Roll</th>
                  <th>Class</th>
                  <th>Section</th>
                  <th>Phone</th>
                  <th>Guardian</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((s, i) => (
                  <tr key={s.id}>
                    <td>{i + 1}</td>
                    <td>{s.name}</td>
                    <td>{s.roll}</td>
                    <td>{s.className}</td>
                    <td>{s.section}</td>
                    <td>{s.phone}</td>
                    <td>{s.guardianPhone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}
