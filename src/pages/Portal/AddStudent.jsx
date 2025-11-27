import React, { useState } from 'react'

export default function AddStudent() {
  const [form, setForm] = useState({
    name: '',
    roll: '',
    className: '',
    section: '',
    phone: '',
    guardianPhone: '',
  })
  const [students, setStudents] = useState([])

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name || !form.roll) {
      alert('Please fill required fields.')
      return
    }

    const newStudent = { id: Date.now(), ...form }
    setStudents(prev => [...prev, newStudent])
    alert('Student added successfully! (Mock frontend only)')
    setForm({
      name: '',
      roll: '',
      className: '',
      section: '',
      phone: '',
      guardianPhone: '',
    })
  }

  return (
    <div>
      <h2>Add New Student</h2>

      <form className="card p-3 mb-4" onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-4">
            <label className="form-label">Student Name *</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter student name"
            />
          </div>
          <div className="col-md-2">
            <label className="form-label">Roll *</label>
            <input
              type="number"
              name="roll"
              value={form.roll}
              onChange={handleChange}
              className="form-control"
              placeholder="Roll no"
            />
          </div>
          <div className="col-md-2">
            <label className="form-label">Class</label>
            <input
              type="text"
              name="className"
              value={form.className}
              onChange={handleChange}
              className="form-control"
              placeholder="e.g. 8"
            />
          </div>
          <div className="col-md-2">
            <label className="form-label">Section</label>
            <input
              type="text"
              name="section"
              value={form.section}
              onChange={handleChange}
              className="form-control"
              placeholder="e.g. A"
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Phone</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="form-control"
              placeholder="Student phone"
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Guardian Phone</label>
            <input
              type="text"
              name="guardianPhone"
              value={form.guardianPhone}
              onChange={handleChange}
              className="form-control"
              placeholder="Guardian phone"
            />
          </div>
        </div>

        <div className="mt-3">
          <button type="submit" className="btn btn-success px-4">
            Add Student
          </button>
        </div>
      </form>

      <div className="card">
        <div className="card-body">
          <h5>Student List (Preview)</h5>
          {students.length === 0 ? (
            <p className="text-muted">No students added yet.</p>
          ) : (
            <table className="table table-bordered">
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
                {students.map((s, i) => (
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
