import "./Signup.css";
import { useEffect, useState } from "react";
import Alert from "../../components/alert/Alert";
import { sendEmail, sendTextEmail } from "../../services/AppService";
import logo_small from "../../assets/popup-logo.webp";
import successImage from "../../assets/bookADemoSuccess.webp";
import successImageMan from "../../assets/bookADemoSuccessMan.webp";
import {
  Box,
  Dialog,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import {
  signupConfirmationEmailTemplate,
  signupEmaiTemplate,
} from "../../utils/emailTemplates";
import Slide from "@mui/material/Slide";
import React from "react";
import { signupFormData } from "../../utils/DummyData";
import { useAppContext } from "../../contexts/AppContext";
import { useNavigate } from "react-router-dom";

const steps = [
  "Company Verification",
  "Personal Details",
  "Feature Interests",
  "Demo / Trial Preference",
];

// Label shown in the left panel per step
const stepLabels = [
  "Company Verification",
  "Personal Details",
  "Feature Interests",
  "Getting Started",
];

type signupType = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  abn: string;
  industry: string;
  features: string[];
  otherFeature: string;
  preference: string;
};

type signupErrorsTypes = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  abn: string;
  industry: string;
  features: string;
  preference: string;
  [key: string]: string;
};

const signupInitialValues: signupType = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  abn: "",
  industry: "",
  features: [],
  otherFeature: "",
  preference: "",
};

const signupErrorsInitialValues: signupErrorsTypes = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  abn: "",
  industry: "",
  features: "",
  preference: "",
};

const Signup = () => {
  const { signUp, handleSignup, closeRoute } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (signUp) navigate("/signup");
  }, [signUp]);

  const [signupData, setSignupData] = useState(signupInitialValues);
  const [signupErrors, setSignupErrors] = useState(signupErrorsInitialValues);
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const alertInitialData = { heading: "", text: "", type: "success", isOpen: false };
  const [alertData, setAlertData] = useState(alertInitialData);

  const handleClose = () => {
    setShowSuccess(false);
    setSignupData(signupInitialValues);
    setActiveStep(0);
    if (closeRoute !== "") navigate(closeRoute);
    setTimeout(() => handleSignup(false), 100);
  };

  const isStepOptional = (step: number) => step === 2;
  const isStepSkipped = (step: number) => skipped.has(step);

  const validateStep = () => {
    const errors = {} as signupErrorsTypes;
    let isValid = true;
    const filteredFields = signupFormData[activeStep].map((field) => field.id);
    const filteredSignupData = Object.fromEntries(
      Object.entries(signupData).filter(([key]) => filteredFields.includes(key))
    );
    Object.keys(filteredSignupData).forEach((key) => {
      const value = signupData[key as keyof signupType];
      if (typeof value === "string") {
        if (!value.trim()) { errors[key] = "This field is required"; isValid = false; }
        else errors[key] = "";
      } else if (Array.isArray(value)) {
        if (value.length === 0) { errors[key] = "This field is required"; isValid = false; }
        else errors[key] = "";
      } else {
        errors[key] = "This field is required"; isValid = false;
      }
    });
    setSignupErrors(errors);
    return isValid;
  };

  const handleNext = () => {
    if (validateStep()) {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
      setActiveStep((prev) => prev + 1);
      setSkipped(newSkipped);
    } else {
      setAlertData({
        ...alertData,
        heading: "Validation Error",
        text: "Please fill in all required fields.",
        type: "fail",
        isOpen: true,
      });
    }
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) throw new Error("You can't skip a step that isn't optional.");
    setActiveStep((prev) => prev + 1);
    setSkipped((prev) => { const n = new Set(prev.values()); n.add(activeStep); return n; });
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setSignupData((prev) => {
      if (name === "features" && Array.isArray(prev.features)) {
        const exists = prev.features.includes(value);
        return { ...prev, features: exists ? prev.features.filter((f) => f !== value) : [...prev.features, value] };
      }
      return { ...prev, [name]: value };
    });
  };

  const handleClickSelection = (field: string, value: string) => {
    if (field === "features") {
      const updated = Array.isArray(signupData.features) ? [...signupData.features] : [];
      const idx = updated.indexOf(value);
      if (idx > -1) updated.splice(idx, 1);
      else updated.push(value);
      setSignupData((prev) => ({ ...prev, [field]: updated }));
    } else {
      setSignupData((prev) => ({ ...prev, [field]: value }));
    }
  };

  const submitHandler = () => {
    if (!validateStep()) {
      setAlertData({
        ...alertData,
        heading: "Validation Error",
        text: "Please fill in all required fields.",
        type: "fail",
        isOpen: true,
      });
      return;
    }
    setIsSubmitting(true);
    window.dataLayer?.push({
      event: "try_it_free_form_submit",
      user_data: {
        email: signupData.email,
        phone_number: signupData.phone,
        address: { first_name: signupData.firstName, last_name: signupData.lastName },
      },
    });
    sendTextEmail(
      signupEmaiTemplate.email,
      signupEmaiTemplate.subject,
      signupEmaiTemplate.body({
        firstName: signupData.firstName,
        lastName: signupData.lastName,
        phone: signupData.phone,
        email: signupData.email,
        company: signupData.company,
        abn: signupData.abn,
        industry: signupData.industry,
        features: signupData.features.toString(),
        otherFeature: signupData.otherFeature,
        preference: signupData.preference,
      })
    )
      .then(() => {
        sendConfirmationEmail();
        setShowSuccess(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setAlertData({
          ...alertData,
          heading: "Request Failed",
          text: "There was an error sending your request. Please try again later.",
          type: "fail",
          isOpen: true,
        });
      })
      .finally(() => setIsSubmitting(false));
  };

  const sendConfirmationEmail = () => {
    sendEmail(
      signupData.firstName + " " + signupData.lastName,
      signupData.email,
      signupConfirmationEmailTemplate.subject,
      signupConfirmationEmailTemplate.text(signupData.firstName),
      signupConfirmationEmailTemplate.html(signupData.firstName)
    ).catch((error) => console.error("Error sending confirmation email:", error));
  };

  const getInputClass = (field: keyof signupType) =>
    "signup-form-input" + (signupErrors[field] ? " error" : "");

  return (
    <Dialog
      open={signUp}
      onClose={handleClose}
      fullScreen
      slots={{ transition: Slide }}
      slotProps={{ transition: { direction: "up" } }}
      sx={{ "& .MuiDialog-paper": { padding: 0, margin: 0, overflow: "hidden" } }}
    >
      <Alert setAlertData={setAlertData} alertData={alertData} />

      <button type="button" id="signup-close-btn" onClick={handleClose}>
        ✕ Close
      </button>

      {showSuccess ? (
        <div id="signup-success-container">
          <img loading="lazy" src={successImage} alt="success" className="signup-success-image" />
          <div id="signup-success-title">You're all set!</div>
          <div id="signup-success-message">
            Thank you for signing up! We'll be in touch shortly with your login credentials. Keep an eye on your inbox.
          </div>
          <img loading="lazy" src={successImageMan} alt="success" className="signup-success-image signup-success-image-man" />
        </div>
      ) : (

      <div id="signup-container">

        {/* Left Panel */}
        <div id="signup-text-section">
          <img loading="lazy" src={logo_small} alt="tesseract logo" id="signup-navbar-logo" onClick={() => { navigate("/"); setTimeout(() => handleSignup(false), 100); }} />

          {/* Step label — desktop: above headline. Tablet/mobile: slim bar context text */}
          {/* <div id="signup-step-label">{stepLabels[activeStep]}</div> */}

          {/* Desktop-only: static trust content */}
          <div id="signup-left-content">
            <div id="signup-headline">
              Free trial, up and<br />running in minutes
            </div>
            <ul id="signup-trust-bullets">
              <li>No credit card required</li>
              <li>Full access to all features for 7 days</li>
              <li>Trusted by NDIS, Aged Care &amp; Allied Health providers</li>
            </ul>
          </div>
        </div>

        {/* Right Panel */}
        <div id="signup-form-section">

          {/* Fixed header: stepper */}
          <div id="signup-stepper-wrapper">
            <Box sx={{ width: "100%" }}>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => {
                  const stepProps: { completed?: boolean } = {};
                  const labelProps: { optional?: React.ReactNode } = {};
                  if (isStepOptional(index)) {
                    labelProps.optional = <Typography variant="caption">Optional</Typography>;
                  }
                  if (isStepSkipped(index)) stepProps.completed = false;
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
            </Box>
          </div>

          {/* Scrollable form area */}
          <div id="signup-form-scroll-area">
            {signupFormData[activeStep].map((field) => (
              <div key={field.id} className="signup-form-field">
                <label className="signup-form-label">
                  {field.label}
                  {field.required && <span className="signup-required"> *</span>}
                </label>

                {field.type === "select" ? (
                  field.options ? (
                    <div className="signup-select-options">
                      {field.options.map((option) => (
                        <div
                          key={option.value}
                          className={
                            "signup-select-option" +
                            (field.id !== "features"
                              ? option.value === signupData[field.id as keyof signupType]
                                ? " selected"
                                : ""
                              : (signupData[field.id as keyof signupType] as string[]).includes(option.value)
                                ? " selected"
                                : "")
                          }
                          onClick={() => handleClickSelection(field.id, option.value)}
                        >
                          {option.value}
                        </div>
                      ))}
                      {(signupData[field.id as keyof signupType] as string[]).includes("other") && (
                        <input
                          type="text"
                          placeholder="Please specify"
                          name="otherFeature"
                          value={signupData.otherFeature}
                          onChange={inputChangeHandler}
                          className="signup-form-input signup-other-input"
                        />
                      )}
                    </div>
                  ) : <div />
                ) : field.type === "checkbox" ? (
                  <div className="signup-checkbox-group">
                    {field.options?.map((option) => (
                      <label key={option.value} className="signup-checkbox-label">
                        <input
                          type="checkbox"
                          name={field.id}
                          value={option.value}
                          checked={
                            Array.isArray(signupData[field.id as keyof signupType]) &&
                            (signupData[field.id as keyof signupType] as string[]).includes(option.value)
                          }
                          onChange={inputChangeHandler}
                          className="signup-checkbox-input"
                        />
                        {option.name}
                      </label>
                    ))}
                  </div>
                ) : (
                  <input
                    type={field.type || "text"}
                    name={field.id}
                    value={signupData[field.id as keyof signupType] as string || ""}
                    onChange={inputChangeHandler}
                    className={getInputClass(field.id as keyof signupType)}
                    placeholder={"Enter " + field.label}
                  />
                )}

                {signupErrors[field.id as keyof signupErrorsTypes] &&
                  (field.id as keyof signupErrorsTypes) !== "features" && (
                    <span className="signup-error-text">
                      {signupErrors[field.id as keyof signupErrorsTypes]}
                    </span>
                  )}
              </div>
            ))}
          </div>

          {/* Fixed footer: always Back + Next/Submit + Cancel */}
          <div id="signup-buttons-container">
            <button
              type="button"
              className="signup-btn-secondary"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              Back
            </button>

            {isStepOptional(activeStep) && (
              <button type="button" className="signup-btn-secondary" onClick={handleSkip}>
                Skip
              </button>
            )}

            <button
              type="button"
              className="signup-btn-primary"
              onClick={activeStep === steps.length - 1 ? submitHandler : handleNext}
              disabled={activeStep === steps.length - 1 && isSubmitting}
            >
              {activeStep === steps.length - 1 && isSubmitting ? "Submitting…" : activeStep === steps.length - 1 ? "Submit Request" : "Next"}
            </button>

            <button type="button" className="signup-cancel-link" onClick={handleClose}>
              Cancel
            </button>
          </div>

        </div>
      </div>
      )}
    </Dialog>
  );
};

export default Signup;
