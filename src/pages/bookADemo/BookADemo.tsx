import "./BookADemo.css";
import { Dialog, Stepper, Step, StepLabel } from "@mui/material";
import Slide from "@mui/material/Slide";
import { useEffect, useState } from "react";
import { bookADemoFormData } from "../../utils/DummyData";
import logo_small from "../../assets/popup-logo.webp";
import TextField from "@mui/material/TextField";
import React from "react";
import { sendEmail, sendTextEmail } from "../../services/AppService";
import Alert from "../../components/alert/Alert";
import image1 from "../../assets/bookADemoSuccess.webp";
import image2 from "../../assets/bookADemoSuccessMan.webp";
import {
  bookDemoConfirmationEmailTemplate,
  bookDemoEmailTemplate,
} from "../../utils/emailTemplates";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../contexts/AppContext";

type formDataType = {
  organisationType: string;
  teamRoles: string[];
  goals: string[];
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  schedule: string;
};

const formEmptyData: formDataType = {
  organisationType: "",
  teamRoles: [],
  goals: [],
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  companyName: "",
  schedule: "",
};

const isLastStep = (step: number) => step === bookADemoFormData.length - 1;
const isFirstStep = (step: number) => step === 0;

const BookADemo = () => {
  const { bookADemo, handleBookADemo, closeRoute } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (bookADemo) navigate("/book-a-demo", { replace: true });
  }, [bookADemo]);

  const alertInitialData = { heading: "", text: "", type: "success", isOpen: false };
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(formEmptyData);
  const [alertData, setAlertData] = useState(alertInitialData);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetForm = () => {
    setCurrentStep(0);
    setFormData(formEmptyData);
    setAlertData(alertInitialData);
    setShowSuccess(false);
    setTimeout(() => handleBookADemo(false), 1);
  };

  const handleClose = () => {
    navigate(closeRoute !== "" ? closeRoute : "/", { replace: true });
    resetForm();
  };

  const handleLogoClick = () => {
    navigate("/");
    setTimeout(() => handleBookADemo(false), 100);
  };

  const isSelected = (data: formDataType, id: keyof formDataType, value: string): boolean => {
    const fieldValue = data[id];
    if (typeof fieldValue === "string") return fieldValue === value;
    if (Array.isArray(fieldValue)) return fieldValue.includes(value);
    return false;
  };

  const handlePrevious = () => {
    if (!isFirstStep(currentStep)) setCurrentStep((p) => p - 1);
  };

  const handleNext = () => {
    const step = bookADemoFormData[currentStep];
    if (step.multiSelect) {
      const val = formData[step.id as keyof formDataType];
      if (Array.isArray(val) && val.length === 0) {
        setAlertData({ ...alertData, heading: "Please select at least one option", text: "Select one or more options to continue.", type: "fail", isOpen: true });
        return;
      }
    }
    if (!isLastStep(currentStep)) setCurrentStep((p) => p + 1);
  };

  const handleOptionSelect = (value: string, id: string, multiselect: boolean) => {
    if (!value || !id) return;
    setFormData((prev) => {
      const fieldValue = prev[id as keyof formDataType];
      if (multiselect && Array.isArray(fieldValue)) {
        return {
          ...prev,
          [id]: isSelected(prev, id as keyof formDataType, value)
            ? fieldValue.filter((v) => v !== value)
            : [...fieldValue, value],
        };
      }
      return { ...prev, [id]: value };
    });
    // Single-select: auto-advance but don't advance past the last step
    if (!multiselect && !isLastStep(currentStep)) {
      handleNext();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [event.target.id]: event.target.value }));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    window.dataLayer?.push({
      event: "book_demo_form_submit",
      user_data: {
        email: formData.email,
        phone_number: formData.phoneNumber,
        address: { first_name: formData.firstName, last_name: formData.lastName },
      },
    });

    sendTextEmail(
      bookDemoEmailTemplate.email,
      bookDemoEmailTemplate.subject,
      bookDemoEmailTemplate.body({
        fullName: formData.firstName + " " + formData.lastName,
        email: formData.email,
        phone: formData.phoneNumber,
        organisation: formData.companyName,
        role: Array.isArray(formData.teamRoles) ? formData.teamRoles.join(", ") : formData.teamRoles,
        areas: Array.isArray(formData.goals) ? formData.goals.join(", ") : formData.goals,
        preferredTime: formData.schedule,
      })
    )
      .then(() => {
        confirmationMail();
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

  const confirmationMail = () => {
    const scheduledDate = new Date(formData.schedule);
    const date = scheduledDate.toLocaleDateString("en-AU", { day: "2-digit", month: "2-digit", year: "numeric" });
    const time = scheduledDate.toLocaleTimeString("en-AU", { hour: "2-digit", minute: "2-digit", hour12: true }).toUpperCase();
    sendEmail(
      formData.firstName,
      formData.email,
      bookDemoConfirmationEmailTemplate.subject,
      bookDemoConfirmationEmailTemplate.text(formData.firstName, date, time),
      bookDemoConfirmationEmailTemplate.html(formData.firstName, date, time)
    ).catch((error) => console.error("Error sending confirmation email:", error));
  };

  const getVisualStep = (step: number) => {
    if (step === 0) return 0;
    if (step <= 2) return 1;
    return 2;
  };

  const currentId = bookADemoFormData[currentStep]?.id as keyof formDataType | undefined;
  const stepData = bookADemoFormData[currentStep];
  const isSubmitDisabled =
    !formData.firstName.trim() ||
    !formData.lastName.trim() ||
    !formData.email.trim() ||
    !formData.phoneNumber.trim() ||
    !formData.companyName.trim() ||
    !formData.schedule.trim();

  return (
    <Dialog
      open={bookADemo}
      onClose={handleClose}
      fullScreen
      slots={{ transition: Slide }}
      slotProps={{ transition: { direction: "up" } }}
      sx={{ "& .MuiDialog-paper": { padding: 0, margin: 0, overflow: "hidden" } }}
    >
      <Alert setAlertData={setAlertData} alertData={alertData} />

      <button type="button" id="dialog-close-btn" onClick={handleClose}>
        ✕ Close
      </button>

      {showSuccess ? (
        <div id="bookADemo-Success-Container">
          <img loading="lazy" src={image1} alt="success image" className="bookADemo-Success-image" />
          <div id="bookADemo-Success-Title">Successfully Sent</div>
          <div id="bookADemo-success-message">
            Thank you! Your demo has been successfully booked. Our team will contact you shortly to confirm the details.
          </div>
          <img loading="lazy" src={image2} alt="success" className="bookADemo-Success-image bookADemo-Success-image-man" />
        </div>
      ) : (
        <div id="bookADemo-container">

          {/* Left Panel */}
          <div id="bookADemo-text-section">
            <img loading="lazy" src={logo_small} alt="tesseract logo" id="bookADemo-navbar-logo" onClick={handleLogoClick} />

            {/* Desktop-only: static trust content */}
            <div id="bookADemo-left-content">
              <div id="bookADemo-headline">
                A personalised demo<br />built around your team
              </div>
              <ul id="bookADemo-trust-bullets">
                <li>Tailored to your organisation type</li>
                <li>30-minute walkthrough, no sales pressure</li>
                <li>Used by NDIS, Aged Care &amp; Allied Health providers</li>
              </ul>
            </div>

            {/* Image — desktop only, pushed to bottom */}
            <div id="bookADemo-image-wrap">
              <img loading="lazy" src={stepData.image} alt="book-a-demo-visual" id="bookADemo-image" />
            </div>
          </div>

          {/* Right Panel */}
          <div id="bookADemo-form-section">
            {/* Stepper */}
            <div id="bookADemo-stepper-wrapper">
          <div id="bookADemo-form-question-container">
                <div id="bookADemo-form-question">{stepData.question}</div>
              {"hint" in stepData && stepData.hint && (
                <div id="bookADemo-form-multiple">{stepData.hint}</div>
              )}
          </div>
              <Stepper activeStep={getVisualStep(currentStep)} alternativeLabel>
                {["Organisation", "Team & Goals", "Your Details"].map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </div>

            {/* Scrollable content area */}
            <div id="bookADemo-form-scroll-area">

              <div id="bookADemo-form-fields-container">
                {stepData.fields.map((field, index) => (
                  <React.Fragment key={field.displayName + index}>
                    {field.type === "option" ? (
                      <div
                        className={
                          "bookADemo-field-select" +
                          (currentId && isSelected(formData, currentId, field.value) ? " selected" : "")
                        }
                        onClick={() =>
                          handleOptionSelect(
                            field.value,
                            stepData.id ?? "",
                            stepData.multiSelect ?? false
                          )
                        }
                      >
                        {field.displayName}
                      </div>
                    ) : field.displayName === "Pick a date & time" ? (
                      <TextField
                        className="bookADemo-textInput"
                        id={field?.id}
                        label={field.displayName}
                        variant="outlined"
                        type="datetime-local"
                        slotProps={{ inputLabel: { shrink: true } }}
                        onChange={handleInputChange}
                        fullWidth
                      />
                    ) : (
                      <TextField
                        className="bookADemo-textInput"
                        id={field?.id}
                        label={field.displayName}
                        variant="outlined"
                        type="text"
                        onChange={handleInputChange}
                        fullWidth
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Fixed footer: always Previous + Next/Submit + Cancel */}
            <div id="bookADemo-Buttons-Container">
              <button
                type="button"
                className="bookADemo-Button-alt"
                onClick={handlePrevious}
                disabled={isFirstStep(currentStep)}
                aria-label="Previous step"
              >
                Previous
              </button>

              {isLastStep(currentStep) ? (
                <button
                  type="submit"
                  className="bookADemo-Button"
                  onClick={handleSubmit}
                  disabled={isSubmitDisabled || isSubmitting}
                >
                  {isSubmitting ? "Submitting…" : "Submit"}
                </button>
              ) : (
                <button
                  type="button"
                  className="bookADemo-Button"
                  onClick={handleNext}
                >
                  Next
                </button>
              )}

              <button type="button" className="bookADemo-cancel-link" onClick={handleClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </Dialog>
  );
};

export default BookADemo;
