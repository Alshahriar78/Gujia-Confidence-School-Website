import React from "react";

export default function Admission() {
  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">Admission Form</h2>
      <form className="w-50 mx-auto">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" placeholder="Enter full name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Class</label>
          <select className="form-select">
            <option>Select Class</option>
            <option>Class 1</option>
            <option>Class 2</option>
            <option>Class 3</option>
          </select>
        </div>
        <button className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  );
}
