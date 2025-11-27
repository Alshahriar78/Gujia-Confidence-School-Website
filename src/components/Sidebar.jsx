import React from 'react'
import { Link } from 'react-router-dom'
export default function Sidebar(){
  return (
    <aside className="bg-white border-end" style={{width:240}}>
      <ul className="nav flex-column p-3">
        <li className="nav-item mb-2"><Link className="nav-link" to="/">Dashboard</Link></li>
        <li className="nav-item mb-2"><Link className="nav-link" to="/attendance">Attendance</Link></li>
        <li className="nav-item mb-2"><Link className="nav-link" to="/results">Results</Link></li>
        <li className="nav-item mb-2"><Link className="nav-link" to="/admit">Admit Card</Link></li>
        <li className="nav-item mb-2"><Link className="nav-link" to="/seatplan">Exam Seat Plan</Link></li>
      </ul>
    </aside>
  )
}