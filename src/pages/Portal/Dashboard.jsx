import React from 'react'
import StatCard from '../../components/StatCard'
export default function Dashboard(){
  const stats = {students: 420, classes: 12, todayPresent: 380}
  return (
    <div>
      <h2>Dashboard</h2>
      <div className="row g-3 mt-3">
        <StatCard title="Total Students" value={stats.students}/>
        <StatCard title="Classes" value={stats.classes}/>
        <StatCard title="Present Today" value={stats.todayPresent}/>
      </div>
    </div>
  )
}