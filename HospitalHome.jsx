export default function HospitalHome() {
  const doctors = [
    {
      name: "Dr. Ananya Rao",
      specialization: "Cardiologist",
      experience: "10 years"
    },
    {
      name: "Dr. Vikram Singh",
      specialization: "Orthopedic Surgeon",
      experience: "8 years"
    },
    {
      name: "Dr. Meera Patel",
      specialization: "General Physician",
      experience: "5 years"
    }
  ];

  return (
    <div className="hospital-home">
      <div className="news-slider">
        <div className="news-card">New ICU wing inaugurated</div>
        <div className="news-card">Free health camp this Sunday</div>
        <div className="news-card">COVID booster available</div>
      </div>

      <h2 className="hospital-title">City Care Hospital</h2>

      <h4 className="section-title">Doctors Working Here</h4>

      {doctors.map((doc, index) => (
        <div className="doctor-card" key={index}>
          <h5>{doc.name}</h5>
          <p>Specialization: {doc.specialization}</p>
          <p>Experience: {doc.experience}</p>
        </div>
      ))}
    </div>
  );
}
