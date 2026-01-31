export default function HospitalCard({ name, category = "Dentist", rating = "4.9", reviews = "280", showServices = false }) {
  return (
    <div className="hospital-item-card">
      <div className="hospital-img" /> {/* Placeholder for image */}
      <div className="hospital-info">
        <h5 className="hospital-name">{name}</h5>
        <p className="hospital-meta">{category}</p>

        <div className="hospital-imgs-row">
          <div className="rating">
            ⭐ {rating} <span style={{ color: '#aaa', fontWeight: 400, marginLeft: 4 }}>({reviews} Reviews)</span>
          </div>

          {showServices && (
            <div className="service-icons">
              <span className="service-icon">🦷</span>
              <span className="service-icon">❤️</span>
              <span className="service-icon">💊</span>
              <span className="service-icon">🚑</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
