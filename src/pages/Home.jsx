import { useState } from "react";
import Header from "../components/Header";
import HospitalCard from "../components/HospitalCard";
import EMRModal from "../components/EMRModal";

export default function Home() {
  const [showEMR, setShowEMR] = useState(true);

  return (
    <>
      {showEMR && <EMRModal onSubmit={() => setShowEMR(false)} />}

      <div className="content">
        <Header />

        <div className="card blue">
          <h3>DAILY WELLNESS</h3>
          <p>Upcoming appointment • DD/MM/YYYY</p>
        </div>

        <h4 className="section-title">Hospital Recommendation</h4>

        <HospitalCard name="Hospital Name 1" />
        <HospitalCard name="Hospital Name 2" />
      </div>
    </>
  );
}
