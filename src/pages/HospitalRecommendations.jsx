import { useNavigate } from "react-router-dom";
import { useState } from "react";
import HospitalCard from "../components/HospitalCard";

export default function HospitalRecommendations() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("Overall");

    const tabs = ["Private", "Government", "Overall"];

    return (
        <div className="recommendation-container">
            {/* Header */}
            <header className="page-header">
                <span className="back-btn" onClick={() => navigate(-1)}>←</span>
                <h2 className="page-title">Hospital Recommendation</h2>
                <span className="more-options">⋮</span>
            </header>

            {/* Tabs */}
            <div className="filter-tabs">
                {tabs.map((tab) => (
                    <span
                        key={tab}
                        className={`filter-tab ${activeTab === tab ? "active" : ""}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </span>
                ))}
            </div>

            {/* List */}
            <div className="hospitals-list">
                <HospitalCard
                    name="Hospital name 1"
                    category="Services"
                    rating="4.9"
                    reviews="280"
                    showServices={true}
                />
                <HospitalCard
                    name="Hospital name 2"
                    category="Services"
                    rating="4.9"
                    reviews="280"
                    showServices={true}
                />
                <HospitalCard
                    name="Hospital name 3"
                    category="Services"
                    rating="4.9"
                    reviews="280"
                    showServices={true}
                />
                <HospitalCard
                    name="Hospital name 4"
                    category="Services"
                    rating="4.9"
                    reviews="280"
                    showServices={true}
                />
            </div>

            {/* Down Arrow at bottom (from design) */}
            <div style={{ textAlign: 'center', marginTop: '20px', color: '#006d77', fontSize: '24px' }}>
                ⌄
            </div>
        </div>
    );
}
