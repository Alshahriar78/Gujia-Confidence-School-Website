import React, { useState } from 'react'
import { sampleStudents } from '../../data/sampleData'

export default function SeatPlan() {
  const [roomCount, setRoomCount] = useState(5)
  const [studentsPerRoom, setStudentsPerRoom] = useState(20)

  function generatePlan() {
    const total = sampleStudents().length
    const rooms = []
    let i=0
    for(let r=0; r<roomCount; r++) {
      const group = []
      for(let s=0; s<studentsPerRoom && i<total; s++, i++) group.push(sampleStudents()[i])
      rooms.push(group)
    }
    alert(`Generated ${rooms.length} rooms. Frontend preview only.`)
    console.log(rooms)
  }

  return (
    <div>
      <h2>Exam Seat Plan</h2>
      <div className="d-flex gap-2 align-items-center mb-3">
        <label className="mb-0">Rooms:</label>
        <input type="number" className="form-control w-auto" value={roomCount} onChange={e=>setRoomCount(Number(e.target.value))} />
        <label className="mb-0">Students / Room:</label>
        <input type="number" className="form-control w-auto" value={studentsPerRoom} onChange={e=>setStudentsPerRoom(Number(e.target.value))} />
        <button className="btn btn-outline-secondary" onClick={generatePlan}>Generate</button>
      </div>

      <div className="card p-3">
        <strong>Preview:</strong>
        <p className="small text-muted">This preview is a frontend mock; implement seat assignment logic on backend for deterministic assignments and printable PDF.</p>
      </div>
    </div>
  )
}
