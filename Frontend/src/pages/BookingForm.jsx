// src/pages/BookingForm.jsx
import { useParams } from "react-router-dom";
import { useState } from "react";

function BookingForm() {
  const { proId } = useParams();
  const profession = professionData[proId];

  const [formData, setFormData] = useState(
    profession?.fields.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {}) || {}
  );

  if (!profession) {
    return <div>Invalid profession selected.</div>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    alert("Booking submitted!");
    // Here you can add actual submit logic (API call etc.)
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h2>Booking for {profession.name}</h2>
      <form onSubmit={handleSubmit}>
        {profession.fields.map((field) => (
          <div key={field.name} style={{ marginBottom: 15 }}>
            <label style={{ display: "block", marginBottom: 5 }}>
              {field.label}:
            </label>
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                rows={4}
                style={{ width: "100%" }}
                required
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                style={{ width: "100%", padding: 8 }}
                required
              />
            )}
          </div>
        ))}
        <button type="submit" style={{ padding: "10px 20px" }}>
          Submit Booking
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
