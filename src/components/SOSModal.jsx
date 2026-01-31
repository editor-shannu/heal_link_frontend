import { useEffect, useState } from "react";

export default function SOSModal({ onClose, onConfirm }) {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    // start countdown
    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // auto confirm when timer ends
    if (seconds === 0) {
      onConfirm();
    }
  }, [seconds, onConfirm]);

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>Emergency SOS</h3>

        <p>
          Emergency alert will be sent automatically in{" "}
          <strong>{seconds}</strong> seconds.
        </p>

        <div className="countdown">{seconds}</div>

        <div className="modal-actions">
          <button className="danger" onClick={onConfirm}>
            Confirm
          </button>

          <button className="secondary" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
