// PDMP User Interface with CRISP-like Features and Prescription Tab
// Using React.js for the frontend

// Import dependencies
import React, { useState, useEffect } from "react";
import "./App.css"; // Assuming CSS styles for the application are in App.css

const PDMPApp = () => {
  // State for holding prescription data and filters
  const [prescriptions, setPrescriptions] = useState([]);
  const [filters, setFilters] = useState({
    drugName: "",
    prescriber: "",
    pharmacy: "",
    activeStatus: "",
  });

  const [view, setView] = useState("data"); // 'data' or 'prescription'

  // Fetch controlled prescriptions (simulated API call)
  useEffect(() => {
    const fetchPrescriptions = async () => {
      const data = [
        {
          dispensed: "11/13/2024",
          drug: "HYDROMORPHONE 4 MG",
          prescribed: "11/13/2024",
          quantity: 12,
          days: 3,
          refills: 0,
          pharmacy: "Giant Pharmacy",
          prescriber: "Sofia Rivera, M.D.",
          mme: 30,
          schedule: "CII",
          active: "Yes",
        },
        {
          dispensed: "11/13/2024",
          drug: "HYDROMORPHONE 4 MG",
          prescribed: "11/13/2024",
          quantity: 12,
          days: 3,
          refills: 0,
          pharmacy: "CVS Pharmacy",
          prescriber: "John Smith, M.D.",
          mme: 30,
          schedule: "CII",
          active: "No",
        },
        {
          dispensed: "11/07/2024",
          drug: "HYDROMORPHONE 4 MG",
          prescribed: "11/07/2024",
          quantity: 12,
          days: 3,
          refills: 0,
          pharmacy: "Giant Pharmacy",
          prescriber: "Sofia Rivera, M.D.",
          mme: 30,
          schedule: "CII",
          active: "No",
        },
        {
          dispensed: "10/10/2024",
          drug: "HYDROMORPHONE 4 MG",
          prescribed: "10/10/2024",
          quantity: 60,
          days: 30,
          refills: 0,
          pharmacy: "Giant Pharmacy",
          prescriber: "Sofia Rivera, M.D.",
          mme: 30,
          schedule: "CII",
          active: "No",
        },
        {
          dispensed: "09/11/2023",
          drug: "HYDROMORPHONE 4 MG",
          prescribed: "09/11/2023",
          quantity: 60,
          days: 30,
          refills: 0,
          pharmacy: "Giant Pharmacy",
          prescriber: "Sofia Rivera, M.D.",
          mme: 30,
          schedule: "CII",
          active: "No",
        },
        {
          dispensed: "10/15/2022",
          drug: "CODEINE 30 MG",
          prescribed: "10/15/2022",
          quantity: 30,
          days: 10,
          refills: 0,
          pharmacy: "Walgreens",
          prescriber: "Sofia Rivera, M.D.",
          mme: 5,
          schedule: "CIII",
          active: "No",
        },
        {
          dispensed: "09/25/2021",
          drug: "DIAZEPAM 5 MG",
          prescribed: "09/25/2021",
          quantity: 20,
          days: 10,
          refills: 1,
          pharmacy: "CVS Pharmacy",
          prescriber: "Sofia Rivera, M.D.",
          mme: "-",
          schedule: "CIV",
          active: "No",
        },
        {
          dispensed: "10/10/2020",
          drug: "OXYCODONE 5 MG",
          prescribed: "10/09/2020",
          quantity: 40,
          days: 10,
          refills: 0,
          pharmacy: "Walgreens",
          prescriber: "Sofia Rivera, M.D.",
          mme: 7.5,
          schedule: "CII",
          active: "No",
        },
        {
          dispensed: "09/22/2019",
          drug: "MORPHINE 15 MG",
          prescribed: "09/22/2019",
          quantity: 15,
          days: 7,
          refills: 0,
          pharmacy: "Giant Pharmacy",
          prescriber: "Sofia Rivera, M.D.",
          mme: 10,
          schedule: "CII",
          active: "No",
        },
      ];
      setPrescriptions(data);
    };
    fetchPrescriptions();
  }, []);

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  // Apply filters to prescriptions
  const filteredPrescriptions = prescriptions.filter((prescription) => {
    const { drugName, prescriber, pharmacy, activeStatus } = filters;
    return (
      (!drugName ||
        prescription.drug.toLowerCase().includes(drugName.toLowerCase())) &&
      (!prescriber ||
        prescription.prescriber
          .toLowerCase()
          .includes(prescriber.toLowerCase())) &&
      (!pharmacy ||
        prescription.pharmacy.toLowerCase().includes(pharmacy.toLowerCase())) &&
      (!activeStatus ||
        prescription.active.toLowerCase() === activeStatus.toLowerCase())
    );
  });

  const renderPrescriptionView = () => (
    <div className="prescription-view">
      <h2>Prescription</h2>
      <img
        src="/image.png"
        alt="Prescription for Hydromorphone"
        style={{
          width: "100%",
          border: "1px solid #ccc",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      />
    </div>
  );
  function renderDataView() {
    return (
      <section className="prescription-table">
        <h2>Filters</h2>
        <div className="filter-group">
          <label>Drug Name:</label>
          <input
            type="text"
            name="drugName"
            value={filters.drugName}
            onChange={handleFilterChange}
          />
        </div>
        <div className="filter-group">
          <label>Prescriber:</label>
          <input
            type="text"
            name="prescriber"
            value={filters.prescriber}
            onChange={handleFilterChange}
          />
        </div>
        <div className="filter-group">
          <label>Pharmacy:</label>
          <input
            type="text"
            name="pharmacy"
            value={filters.pharmacy}
            onChange={handleFilterChange}
          />
        </div>
        <div className="filter-group">
          <label>Active Status:</label>
          <select
            name="activeStatus"
            value={filters.activeStatus}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <h2>Prescription Data</h2>
        <table>
          <thead>
            <tr>
              <th>Dispensed</th>
              <th>Drug</th>
              <th>Prescribed</th>
              <th>Quantity</th>
              <th>Days</th>
              <th>Refills</th>
              <th>Pharmacy</th>
              <th>Prescriber</th>
              <th>MME/day</th>
              <th>Schedule</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>
            {filteredPrescriptions.map((prescription, index) => (
              <tr key={index}>
                <td>{prescription.dispensed}</td>
                <td>{prescription.drug}</td>
                <td>{prescription.prescribed}</td>
                <td>{prescription.quantity}</td>
                <td>{prescription.days}</td>
                <td>{prescription.refills}</td>
                <td>{prescription.pharmacy}</td>
                <td>{prescription.prescriber}</td>
                <td>{prescription.mme}</td>
                <td>{prescription.schedule}</td>
                <td>{prescription.active}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }

  return (
    <div className="pdmp-app">
      <aside className="sidebar">
        <h3>PDMP</h3>
        <ul>
          <li onClick={() => setView("data")}>Prescription Data</li>
          <li onClick={() => setView("prescription")}>Prescription</li>
        </ul>
      </aside>
      <main className="main-content">
        <header className="app-header">
          <h1>PDMP</h1>
          <p>Patient: Ruben Quill | Controlled Medications</p>
        </header>

        {view === "data" ? renderDataView() : renderPrescriptionView()}
      </main>
    </div>
  );
};

export default PDMPApp;
