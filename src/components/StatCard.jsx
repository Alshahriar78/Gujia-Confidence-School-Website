import React from 'react'
export default function StatCard({title, value}){
  return (
    <div className="col-sm-4">
      <div className="card p-3">
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          <h3>{value}</h3>
        </div>
      </div>
    </div>
  )
}
