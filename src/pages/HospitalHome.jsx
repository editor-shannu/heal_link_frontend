import { useEffect, useState } from "react";

export default function HospitalHome() {
  const [showSOS, setShowSOS] = useState(false);
  const [showEMR, setShowEMR] = useState(false);

  // Trigger SOS popup immediately upon dashboard load
  useEffect(() => {
    setShowSOS(true);
  }, []);

  return (
    <div className="hospital-home">
      <header className="header">
        <h2 className="hospital-title">City Care Hospital</h2>
        <p style={{ color: '#64748b' }}>Hospital Admin Dashboard</p>
      </header>

      {/* SOS REQUEST POPUP */}
      {showSOS && (
        <div className="modal-backdrop">
          <div className="modal sos-alert">
            <h3>🚨 SOS REQUEST</h3>

            <p><strong>Patient Location</strong><br />MG Road, Bengaluru</p>

            <div className="map-preview"></div>

            <div className="modal-actions">
              <button
                className="danger"
                onClick={() => {
                  setShowSOS(false);
                  setShowEMR(true);
                }}
              >
                Accept
              </button>

              <button
                className="secondary"
                onClick={() => setShowSOS(false)}
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}

      {/* EMR RECEIVED POPUP */}
      {showEMR && (
        <div className="modal-backdrop">
          <div className="modal emr-alert">
            <h3>📄 EMR RECEIVED</h3>

            <p>Patient Emergency Medical Record received.</p>

            <div className="emr-card">
              <p><strong>Name</strong> Ravi Kumar</p>
              <p><strong>Blood Group</strong> B+</p>
              <p><strong>Allergies</strong> Penicillin</p>
              <p><strong>Conditions</strong> Diabetes</p>
            </div>

            <div className="modal-actions">
              <button className="danger" onClick={() => alert("Opening Patient File...")}>Open</button>
              <button className="secondary" onClick={() => alert("Share Link Copied!")}>Share</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
