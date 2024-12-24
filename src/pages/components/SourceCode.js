import React, { useState } from 'react';
import ConfigureModal from '../modal/ConfigureModal';
import DropArea from './DropArea';

const SourceCode = ({ tableData}) => {
  const [modalData, setModalData] = useState(null); // State to hold modal data
  const [showModal, setShowModal] = useState(false); 
  const [showData, setShowData] = useState(false);
  const handleDrop = (item) => {
    setModalData(item); // Set the dropped item's details
    setShowModal(true); // Open the modal
  };

  const closeModal = () => {
    setShowModal(false);
    setModalData(null);
  };
  return (
    <div
      style={{
        padding: '20px',
        marginTop: "-200px"
      }}
    >
      {showData == true && <>
      {/* Table count */}
      <div
        style={{
          marginBottom: '20px',
          fontSize: '18px',
          fontWeight: 'bold',
        }}
      >
        Total: {tableData.length}
      </div>

      {/* Table structure */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr', // Single column layout
          gap: '20px',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 20px',
            borderRadius: '8px',
            fontWeight: 'bold',
          }}
        >
          <span style={{ flex: 1 }}>Source</span>
          <span style={{ flex: 2 }}>Details</span>
          <span style={{ flex: 1 }}>Status</span>
        </div>

        {/* Rows */}
        {tableData.map((row, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '15px 20px',
              borderRadius: '8px',
              backgroundColor: '#fff',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <span style={{ flex: 1, fontWeight: '500', color: '#333' }}>
              {row.source}
            </span>
            {/* Clickable Details */}
            <span
              style={{ flex: 2, color: '#555', cursor: 'pointer' }}
              onClick={() => window.open(row.details, "_blank")} // Open URL in new tab

              // onClick={() => openModal(row.details)} // Trigger the modal on click
            >
              {row.details}
            </span>
            <span
              style={{
                flex: 1,
                color: row.status === 'Active' ? 'green' : 'red',
                fontWeight: 'bold',
              }}
            >
              {row.status}
            </span>
          </div>
        ))}
      </div>
      </>}
      
      <DropArea onDrop={handleDrop} />

      <ConfigureModal show={showModal} showData={showData} setShowData={setShowData} item={modalData} onClose={closeModal} />
    </div>
  );
};

export default SourceCode;
