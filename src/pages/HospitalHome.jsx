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
      {/* SOS REQUEST POPUP */}
      {showSOS && (
        <div className="modal-backdrop">
          <div className="modal sos-alert" style={{ maxWidth: '400px', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ fontSize: '24px' }}>🚨</span>
              <h3 style={{ margin: 0, color: '#ef233c', fontSize: '20px' }}>SOS REQUEST</h3>
            </div>

            <p style={{ fontSize: '15px', color: '#1d2366', fontWeight: 600, marginBottom: '4px' }}>Patient Location</p>
            <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '16px' }}>MG Road, Bengaluru</p>

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
