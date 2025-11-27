import React, { useState } from "react";
import sampleStudents from "../../data/sampleData";

export default function UpdateStudent() {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  const handleFilter = () => {
    const filtered = sampleStudents.filter(
      (s) => s.class === selectedClass && s.section === selectedSection
    );
    setStudents(filtered);
  };

  const handleEdit = (student) => {
    setEditingStudent({ ...student });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const updated = students.map((s) =>
      s.id === editingStudent.id ? editingStudent : s
    );
    setStudents(updated);
    setEditingStudent(null);
    alert("✅ Student info updated successfully!");
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4 text-center fw-bold">Update Student Information</h3>

      {/* Filter Section */}
      <div className="card shadow-sm p-3 mb-3">
        <div className="row g-2">
          <div className="col-md-4">
            <select
              className="form-select"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              <option value="">Select Class</option>
              <option value="6">Class 6</option>
              <option value="7">Class 7</option>
              <option value="8">Class 8</option>
              <option value="9">Class 9</option>
              <option value="10">Class 10</option>
            </select>
          </div>
          <div className="col-md-4">
            <select
              className="form-select"
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
            >
              <option value="">Select Section</option>
              <option value="A">Section A</option>
              <option value="B">Section B</option>
              <option value="C">Section C</option>
            </select>
          </div>
          <div className="col-md-4">
            <button className="btn btn-primary w-100" onClick={handleFilter}>
              Get Students
            </button>
          </div>
        </div>
      </div>

      {/* Student List */}
      {students.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-bordered align-middle">
            <thead className="table-primary">
              <tr>
                <th>Roll</th>
                <th>Name</th>
                <th>Class</th>
                <th>Section</th>
                <th>Guardian Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.id}>
                  <td>{s.roll}</td>
                  <td>{s.name}</td>
                  <td>{s.class}</td>
                  <td>{s.section}</td>
                  <td>{s.guardianPhone}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() => handleEdit(s)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center mt-3">No students found for selected class and section.</p>
      )}

      {/* Edit Modal */}
      {editingStudent && (
        <div
          className="modal show fade d-block"
          tabIndex="-1"
          style={{ background: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Student Info</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setEditingStudent(null)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={editingStudent.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Roll</label>
                  <input
                    type="text"
                    className="form-control"
                    name="roll"
                    value={editingStudent.roll}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Guardian Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    name="guardianPhone"
                    value={editingStudent.guardianPhone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setEditingStudent(null)}
                >
                  Cancel
                </button>
                <button className="btn btn-success" onClick={handleSave}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
