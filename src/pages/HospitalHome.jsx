import { useEffect, useState } from "react";

export default function HospitalHome() {
  const [showSOS, setShowSOS] = useState(false);
  const [showEMR, setShowEMR] = useState(false);

  // Global click listener (for demo)
  useEffect(() => {
    const handleClick = () => {
      if (!showSOS && !showEMR) {
        setShowSOS(true);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [showSOS, showEMR]);

  return (
    <div className="hospital-home">
      {/* DEBUG PROOF */}
      <div
        style={{
          position: "fixed",
          top: 10,
          left: 10,
          background: "red",
          color: "white",
          padding: "6px",
          zIndex: 9999
        }}
      >
        HOSPITAL HOME LOADED
      </div>

      <h2 className="hospital-title">City Care Hospital</h2>
      <p>Hospital Admin Dashboard</p>
      <p style={{ fontSize: "12px", opacity: 0.6 }}>
        (Click anywhere to simulate SOS request)
      </p>

      {/* SOS REQUEST POPUP */}
      {showSOS && (
        <div className="modal-backdrop">
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>🚨 SOS REQUEST</h3>

            <p><strong>Patient Location</strong></p>
            <p>MG Road, Bengaluru</p>

            <div className="map-preview">
              📍 Map Preview
            </div>

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
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>📄 EMR RECEIVED</h3>

            <p>Patient Emergency Medical Record received.</p>

            <div className="emr-card">
              <p><strong>Name:</strong> Ravi Kumar</p>
              <p><strong>Blood Group:</strong> B+</p>
              <p><strong>Allergies:</strong> Penicillin</p>
              <p><strong>Conditions:</strong> Diabetes</p>
            </div>

            <div className="modal-actions">
              <button className="danger">Open</button>
              <button className="secondary">Share</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
