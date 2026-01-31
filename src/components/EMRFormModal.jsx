import { useState } from "react";

export default function EMRFormModal({ onClose }) {
    return (
        <div className="modal-backdrop">
            <div className="modal emr-form-modal">
                <h3 className="emr-title">Emergency Medical Record</h3>

                <div className="emr-form">
                    <input type="text" placeholder="Full Name" />
                    <input type="text" placeholder="Address" />
                    <input type="text" placeholder="Blood Group" />
                    <input type="text" placeholder="Allergies" />
                    <input type="text" placeholder="Past Conditions" />
                    <input type="text" placeholder="Surgeries" />

                    <button className="save-emr-btn" onClick={onClose}>
                        Save EMR
                    </button>
                </div>
            </div>
        </div>
    );
}
