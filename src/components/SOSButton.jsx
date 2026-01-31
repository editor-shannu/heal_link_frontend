import { useState } from "react";
import SOSModal from "./SOSModal";

export default function SOSButton() {
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    setOpen(false);
    alert("🚨 Emergency confirmed. Help is on the way!");
  };

  return (
    <>
      <button className="sos" onClick={() => setOpen(true)}>
        SOS
      </button>

      {open && (
        <SOSModal
          onClose={() => setOpen(false)}
          onConfirm={handleConfirm}
        />
      )}
    </>
  );
}
