// src/data/professionData.js
const professionData = {
  1: {
    name: "Plumber",
    fields: [
      { label: "Customer Name", name: "customerName", type: "text" },
      { label: "Service Date", name: "serviceDate", type: "date" },
      { label: "Issue Description", name: "issue", type: "textarea" },
      { label: "Contact Number", name: "contact", type: "tel" }
    ]
  },
  2: {
    name: "Electrician",
    fields: [
      { label: "Customer Name", name: "customerName", type: "text" },
      { label: "Service Date", name: "serviceDate", type: "date" },
      { label: "Problem Details", name: "problem", type: "textarea" },
      { label: "Contact Number", name: "contact", type: "tel" }
    ]
  }
};

export default professionData;
