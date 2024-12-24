import React, { useState } from "react";
import { Modal, Button, Form, Tooltip, OverlayTrigger } from "react-bootstrap";

const ConfigureModal = ({ show, item, onClose, setShowData }) => {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState("");
  const [githubUrl, setGithubUrl] = useState("");

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };
const handleSubmit = () => {
  onClose();
  setShowData(true);
}
  const isStepComplete = (currentStep) => currentStep < step;
  const tooltip = (
    <Tooltip id="tooltip-github-url">Enter the GitHub URL: <br />
    https://github.com/username/repo <br />
    or <br />
    git@github.com:username/repo.git</Tooltip>
  );
  return (
    <Modal className="c-dialog" show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Configure {item?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Stepper */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          {["Select Category", `Enter ${item?.name} URL`, "Review & Confirm"].map(
            (label, index) => {
              const currentStep = index + 1;
              const isActive = step === currentStep;
              return (
                <React.Fragment key={label}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: "100px",
                    }}
                  >
                    <div
                      style={{
                        height: "30px",
                        width: "30px",
                        borderRadius: "50%",
                        backgroundColor: isStepComplete(currentStep)
                          ? "green"
                          : isActive
                          ? "rgb(10, 51, 100)"
                          : "gray",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                      }}
                    >
                      {currentStep}
                    </div>
                    <span
                      style={{
                        marginTop: "10px",
                        fontSize: "12px",
                        fontWeight: "400",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {label}
                    </span>
                  </div>
                  {index < 2 && (
                    <div
                      style={{
                        flexGrow: 1,
                        height: "4px",
                        backgroundColor: isStepComplete(currentStep + 1)
                          ? "green"
                          : "gray",
                        margin: "0 10px",
                      }}
                    />
                  )}
                </React.Fragment>
              );
            }
          )}
        </div>

        {/* Step Content */}
        {step === 1 && (
          <Form.Group>
            <Form.Label  style={{fontSize:"16px"}}>Add Category</Form.Label>
            <Form.Control
            style={{fontSize:"14px"}}
              as="select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              onFocus={(e) => {
                e.target.style.borderColor = "black"; 
                e.target.style.boxShadow = "none"; 
            }}
            onBlur={(e) => {
                e.target.style.borderColor = "#ccc";
                e.target.style.boxShadow = "none";
            }}
            >
              <option value="">Select Category</option>
              <option value="sap_extension_1">SAP Intrgration</option>
              <option value="sap_extension_2">SAP Extension 2</option>
            </Form.Control>
          </Form.Group>
        )}
        {step === 2 && (
          <Form.Group>
            <Form.Label>{`Enter ${item?.name} URL`}</Form.Label>
            <OverlayTrigger
              placement="top"
              overlay={tooltip}
            >
              <Form.Control
                type="url"
                placeholder={`Enter ${item?.name} repository URL`}
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                onFocus={(e) => {
                  e.target.style.borderColor = "black"; 
                  e.target.style.boxShadow = "none"; 
              }}
              onBlur={(e) => {
                  e.target.style.borderColor = "#ccc";
                  e.target.style.boxShadow = "none";
              }}
              />
            </OverlayTrigger>
          </Form.Group>
        )}
        {step === 3 && (
          <div>
            <p>Confirm Configuration</p>
            <ul>
              <li>
                <strong>Category:</strong> {category || "Not provided"}
              </li>
              <li>
                <strong>GitHub URL:</strong> {githubUrl || "Not provided"}
              </li>
            </ul>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer className="justify-content-center mt-4">
        {step < 3 ? (
          <Button
            variant="primary"
            onClick={handleNext}
            disabled={step === 1 && !category}
          >
            Next
          </Button>
        ) : <Button
        variant="primary"
        onClick={handleSubmit}
        disabled={step === 1 && !category}
      >
        Submit
      </Button>}
      </Modal.Footer>
    </Modal>
  );
};

export default ConfigureModal;
