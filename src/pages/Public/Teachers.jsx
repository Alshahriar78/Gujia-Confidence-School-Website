import React from "react";

export default function Teachers() {
  const teachers = [
    { name: "Mr. Rahman", subject: "Mathematics" },
    { name: "Ms. Akter", subject: "English" },
    { name: "Mr. Karim", subject: "Science" },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">Our Teachers</h2>
      <div className="row">
        {teachers.map((t, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">{t.name}</h5>
                <p className="card-text text-muted">{t.subject}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
