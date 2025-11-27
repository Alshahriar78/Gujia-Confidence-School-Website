import React, { useState } from 'react'
import { sampleStudentsForResults } from '../../data/sampleData'

export default function Results() {
  const [students, setStudents] = useState(sampleStudentsForResults())
  const [selectedTerm, setSelectedTerm] = useState('term1')
  const [selectedStudent, setSelectedStudent] = useState(students[0].id)

  function updateMark(studentId, subjectKey, termKey, value) {
    setStudents(prev => prev.map(st => {
      if(st.id !== studentId) return st
      return {
        ...st,
        subjects: st.subjects.map(sub => sub.key === subjectKey ? {...sub, marks:{...sub.marks,[termKey]: Number(value)}} : sub)
      }
    }))
  }

  function computeTermAverage(student, term) {
    const marks = student.subjects.map(s => s.marks[term] ?? 0)
    const sum = marks.reduce((a,b)=>a+b,0)
    return marks.length ? (sum/marks.length).toFixed(2) : 'N/A'
  }

  function publishTermToGuardian(term) {
    const payload = students.map(s => ({id: s.id, name: s.name, avg: computeTermAverage(s, term)}))
    alert('Pretend to publish to guardians (backend needed). See console for payload.')
    console.log({term, payload})
  }

  const student = students.find(s => s.id === selectedStudent)

  return (
    <div>
      <h2>Results</h2>
      <div className="d-flex gap-2 align-items-center mb-3">
        <select className="form-select w-auto" value={selectedTerm} onChange={e=>setSelectedTerm(e.target.value)}>
          <option value="term1">1st Term</option>
          <option value="term2">2nd Term</option>
          <option value="term3">3rd Term</option>
          <option value="term4">4th Term</option>
        </select>

        <select className="form-select w-auto" value={selectedStudent} onChange={e=>setSelectedStudent(Number(e.target.value))}>
          {students.map(s=> <option key={s.id} value={s.id}>{s.name}</option>)}
        </select>

        <button className="btn btn-outline-primary" onClick={()=>publishTermToGuardian(selectedTerm)}>Publish to Guardians (SMS)</button>
      </div>

      <div className="card">
        <div className="card-body">
          <h5>Marks for {student.name} - {selectedTerm}</h5>
          <table className="table">
            <thead><tr><th>Subject</th><th>Marks</th></tr></thead>
            <tbody>
              {student.subjects.map(sub => (
                <tr key={sub.key}>
                  <td>{sub.name}</td>
                  <td>
                    <input type="number" className="form-control w-auto" value={sub.marks[selectedTerm] ?? ''} onChange={e => updateMark(student.id, sub.key, selectedTerm, e.target.value)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-2">Term Average: <strong>{computeTermAverage(student, selectedTerm)}</strong></div>

          <hr />
          <h6>Aggregate (All Terms) — Student averages</h6>
          <table className="table table-sm">
            <thead><tr><th>Student</th><th>Term1</th><th>Term2</th><th>Term3</th><th>Term4</th><th>Final Avg</th></tr></thead>
            <tbody>
              {students.map(s=>{
                const t1 = Number(computeTermAverage(s,'term1'))
                const t2 = Number(computeTermAverage(s,'term2'))
                const t3 = Number(computeTermAverage(s,'term3'))
                const t4 = Number(computeTermAverage(s,'term4'))
                const avg = ((t1||0)+(t2||0)+(t3||0)+(t4||0)) / ([t1,t2,t3,t4].filter(x=>!!x).length || 1)
                return <tr key={s.id}><td>{s.name}</td><td>{isNaN(t1)?'N/A':t1}</td><td>{isNaN(t2)?'N/A':t2}</td><td>{isNaN(t3)?'N/A':t3}</td><td>{isNaN(t4)?'N/A':t4}</td><td>{isNaN(avg)?'N/A':avg.toFixed(2)}</td></tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
