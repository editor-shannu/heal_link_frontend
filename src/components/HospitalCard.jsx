export default function HospitalCard({ name }) {
  return (
    <div className="hospital-card">
      <div className="image" />
      <div>
        <h5>{name}</h5>
        <p>⭐ 4.9 (280 Reviews)</p>
      </div>
    </div>
  );
}
