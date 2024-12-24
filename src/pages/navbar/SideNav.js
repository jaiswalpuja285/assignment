import React, { useState } from "react";
// import HelpModal from "../modal/HelpModal";
import SourceCodeModal from "../modal/SourceCodeModal";

const SideNav = ({ activeContent, setActiveContent }) => {
  const [activeModal, setActiveModal] = useState(null);
  const [showUserOptions, setShowUserOptions] = useState(false);
  const handleModalClose = () => setActiveModal(null);

  const userName = "Puja Kumari";
  const email = "jaiswalpuja285@gmail.com";
  const navItems = [
    { name: "Source Code Management", modal: "sourceCode", id: "sourceCode" },
    { name: "Help", modal: "help", id: "help" },
  ];

  return (
    <div className="d-flex mt-0">
      {/* Side Navigation */}
      <nav
        className="nav flex-column vh-100 sidebar-btn w-250"
        style={{ backgroundColor: "#0a3364" }}
      >
        {navItems.map((item, index) => (
          <button
            key={index}
            className="nav-link text-start border-0 py-3 px-3"
            style={{
              color: activeContent === item.id ? "#3DC7F6" : "#fff",
              cursor: "pointer",
            }}
            onClick={() => {
              setActiveContent(item.id);
              if (item.modal) setActiveModal(item.modal);
            }}
          >
            {item.name}
          </button>
        ))}

        {/* User Name Block */}
        <div
          className="user-block text-start border-0 py-3 px-3 position-absolute"
          style={{
            bottom: "20px",
            color: "#fff",
            width: "100%",
            cursor: "pointer",
          }}
          onMouseEnter={() => setShowUserOptions(true)}
          onMouseLeave={() => setShowUserOptions(false)}
        >
          <div className="d-flex align-items-center">
            <div
              className="avatar-circle"
              style={{
                backgroundColor: "#3DC7F6",
                color: "#0a3364",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: "16px",
                marginRight: "10px",
              }}
            >
              {userName.charAt(0).toUpperCase()}
            </div>
            <span style={{ color: "#fff" }}>{userName}</span>
          </div>

          {/* Hover Block */}
          {showUserOptions && (
            <div
              className="hover-block caret-left"
              style={{
                position: "absolute",
                top: "-50%",
                left: "12%",
                backgroundColor: "#fff",
                padding: "10px",
                minWidth: "200px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                zIndex: 1000,
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* User Details */}
              <div
                className="user-info d-flex align-items-center"
                style={{
                  width: "100%",
                }}
              >
                {/* Avatar */}
                <div
                  className="avatar-circle"
                  style={{
                    backgroundColor: "#3DC7F6",
                    color: "#0a3364",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  {userName.charAt(0).toUpperCase()}
                </div>

                {/* User Details (Aligned to Avatar Height and Starting from Left) */}
                <div
                  className="user-details"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    marginLeft: "10px", // Space between avatar and details
                  }}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "14px",
                      lineHeight: "20px",
                      color: "#0a3364",
                    }}
                  >
                    {userName}
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      lineHeight: "18px",
                      color: "rgba(0, 0, 0, 0.6)", // Subtle gray for email
                    }}
                  >
                    {email}
                  </span>
                </div>
              </div>

              {/* Horizontal Line */}
              <hr
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  width: "100%",
                  margin: "10px 0",
                }}
              />

              {/* Logout Button */}
              <button
                className="btn btn-outline-primary w-100"
                style={{
                  border: "1px solid #0a3364",
                  color: "#fff",
                  borderRadius: "4px",
                  fontSize: "14px",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Modals */}
      <SourceCodeModal
        show={activeModal === "sourceCode"}
        onClose={handleModalClose}
      />
    </div>
  );
};

export default SideNav;
