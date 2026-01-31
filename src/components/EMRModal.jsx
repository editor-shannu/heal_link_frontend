export default function EMRModal({ onSubmit }) {
  return (
    <div className="modal-backdrop">
      <div className="modal emr">
        <h3>Emergency Medical Record</h3>

        <input placeholder="Full Name" required />
        <input placeholder="Address" required />
        <input placeholder="Blood Group" required />
        <input placeholder="Allergies" />
        <input placeholder="Past Conditions" />
        <input placeholder="Surgeries" />

        <button className="danger" onClick={onSubmit}>
          Save EMR
        </button>
      </div>
    </div>
  );
}
