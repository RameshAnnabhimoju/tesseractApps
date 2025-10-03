import "./Signup.css";
// import signupImage from "../../assets/Signup-image.png";
import closeIcon from "../../assets/close.png";
import { useState } from "react";
import Alert from "../../components/alert/Alert";
import { sendEmail, sendTextEmail } from "../../services/AppService";
// import logo_small from "../../assets/tesseract_logo_small.png";
// import signinBackground from "../../assets/Signin-background.png";
import {
  Box,
  Button,
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
// import { useNavigate } from "react-router-dom";

const Signup = ({
  dialog,
  // setDialog,
  handleDialog,
}: {
  dialog: boolean;
  setDialog: React.Dispatch<React.SetStateAction<boolean>>;
  handleDialog: (value?: boolean | undefined) => void;
}) => {
  type signupType = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    // gender: string;
    // dateOfBirth: string;
    company: string;
    abn: string;
    // acn: string;
    // ndisProviderID: string;
    // branchCode: string;
    // contactName: string;
    industry: string;
    features: string[];
    otherFeature: string;
    preference: string;
    // contactNumber: string;
    // companyEmail: string;
    // streetAddress: string;
    // city: string;
    // province: string;
    // postalCode: string;
    // country: string;
  };

  type signupErrorsTypes = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    // gender: string;
    // dateOfBirth: string;
    company: string;
    abn: string;
    // acn: string;
    // ndisProviderID: string;
    // branchCode: string;
    // contactName: string;
    industry: string;
    features: string;
    preference: string;
    // contactNumber: string;
    // companyEmail: string;
    // streetAddress: string;
    // city: string;
    // province: string;
    // postalCode: string;
    // country: string;
    [key: string]: string; // Add index signature
  };

  const signupInitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    // gender: "",
    // dateOfBirth: "",
    company: "",
    abn: "",
    // acn: "",
    // ndisProviderID: "",
    // branchCode: "",
    // contactName: "",
    industry: "",
    features: [],
    otherFeature: "",
    preference: "",
    // contactNumber: "",
    // companyEmail: "",
    // streetAddress: "",
    // city: "",
    // province: "",
    // postalCode: "",
    // country: "",
  } as signupType;

  const signupErrorsInitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    // gender: "",
    // dateOfBirth: "",
    company: "",
    abn: "",
    // acn: "",
    // ndisProviderID: "",
    // branchCode: "",
    // contactName: "",
    industry: "",
    features: "",
    preference: "",
    // contactNumber: "",
    // companyEmail: "",
    // streetAddress: "",
    // city: "",
    // province: "",
    // postalCode: "",
    // country: "",
  } as signupErrorsTypes;
  const [signupData, setSignupData] = useState(signupInitialValues);
  const [signupErrors, setSignupErrors] = useState(signupErrorsInitialValues);
  const alertInitialData = {
    heading: "",
    text: "",
    type: "success",
    isOpen: false,
  };
  // const navigate = useNavigate();
  // console.log("signupData ", signupData);
  // console.log("signupErrors ", signupErrors);
  const [alertData, setAlertData] = useState(alertInitialData);

  const inputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setSignupData((prevData) => {
      // Handle features array separately
      if (name === "features" && Array.isArray(prevData.features)) {
        const exists = prevData.features.includes(value);

        const updatedFeatures = exists
          ? prevData.features.filter((f) => f !== value)
          : [...prevData.features, value];

        return {
          ...prevData,
          features: updatedFeatures,
        };
      }

      // Default update for single values
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const submitHandler = () => {
    const errors = {} as signupErrorsTypes;
    let isValid = true;
    const filteredFields = signupFormData[activeStep].map((field) => field.id);
    const filteredSignupData = Object.fromEntries(
      Object.entries(signupData).filter(([key]) => filteredFields.includes(key))
    );
    // Loop through all fields
    Object.keys(filteredSignupData).forEach((key) => {
      const value = signupData[key as keyof typeof signupData];
      if (typeof value === "string") {
        if (!value.trim()) {
          errors[key] = "This field is required";
          isValid = false;
        } else {
          errors[key] = "";
        }
      } else if (Array.isArray(value)) {
        if (value.length === 0) {
          errors[key] = "This field is required";
          isValid = false;
        } else {
          errors[key] = "";
        }
      } else if (value === null || value === undefined || value === "") {
        errors[key] = "This field is required";
        isValid = false;
      } else {
        errors[key] = "";
      }
    });

    setSignupErrors(errors);

    if (!isValid) {
      setAlertData({
        ...alertData,
        heading: "Validation Error",
        text: "Please fill in all required fields.",
        type: "fail",
        isOpen: true,
      });
      return; // stop here if there are errors
    }
    sendRequestEmail();
  };
  const sendRequestEmail = () => {
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
      .then((response) => {
        console.log("Email sent successfully:", response);
        sendConfirmationEMail();
        // alert("Thank you for your request! We will be in touch soon.");
        setAlertData({
          ...alertData,
          heading: "Request Submitted",
          text: "Thank you for Signing Up! We will be in touch soon to provide login credentials. Keep an eye on youe inbox!",
          type: "success",
          isOpen: true,
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        // alert(
        //   "There was an error sending your request. Please try again later."
        // );
        setAlertData({
          ...alertData,
          heading: "Request Failed",
          text: "There was an error sending your request. Please try again later.",
          type: "fail",
          isOpen: true,
        });
      });
  };
  const sendConfirmationEMail = () => {
    sendEmail(
      signupData.firstName + " " + signupData.lastName,
      signupData.email,
      signupConfirmationEmailTemplate.subject,
      signupConfirmationEmailTemplate.text(signupData.firstName),
      signupConfirmationEmailTemplate.html(signupData.firstName)
    )
      .then((response) => {
        console.log("Confirmation email sent successfully:", response);
      })
      .catch((error) => {
        console.error("Error sending confirmation email:", error);
      });
  };
  const getInputClass = (field: keyof signupType) =>
    "signup-form-input" + (signupErrors[field] ? " error" : "");
  const steps = [
    "Company Verification",
    "Personal Details",
    "Feature Interests",
    "Demo / Trial Preference",
  ];
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 2;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    const errors = {} as signupErrorsTypes;
    let isValid = true;

    // Loop through all fields
    const filteredFields = signupFormData[activeStep].map((field) => field.id);
    const filteredSignupData = Object.fromEntries(
      Object.entries(signupData).filter(([key]) => filteredFields.includes(key))
    );
    Object.keys(filteredSignupData).forEach((key) => {
      const value = signupData[key as keyof typeof signupData];
      if (typeof value === "string") {
        if (!value.trim()) {
          errors[key] = "This field is required";
          isValid = false;
        } else {
          errors[key] = "";
        }
      } else if (Array.isArray(value)) {
        if (value.length === 0) {
          errors[key] = "This field is required";
          isValid = false;
        } else {
          errors[key] = "";
        }
      } else if (value === null || value === undefined || value === "") {
        errors[key] = "This field is required";
        isValid = false;
      } else {
        errors[key] = "";
      }
    });

    setSignupErrors(errors);
    if (isValid) {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };
  const handleClickSelection = (field: string, value: string) => {
    if (field === "features") {
      const updatedFeatures = Array.isArray(signupData.features)
        ? [...signupData.features]
        : [];
      const index = updatedFeatures.indexOf(value);
      if (index > -1) {
        updatedFeatures.splice(index, 1); // Remove if already selected
      } else {
        updatedFeatures.push(value); // Add if not selected
      }
      setSignupData((prevData) => ({
        ...prevData,
        [field]: updatedFeatures,
      }));
    } else {
      setSignupData((prevData) => ({
        ...prevData,
        [field]: value,
      }));
    }
  };
  console.log("signupErrors", signupErrors);
  return (
    <Dialog
      open={dialog}
      onClose={() => {
        handleDialog(false);
      }}
      fullScreen
      slots={{ transition: Slide }}
      slotProps={{ transition: { direction: "up" } }}
      sx={{ margin: "auto", maxWidth: "1920px" }}
    >
      {/* <div id="dialog-header">
        <div id="navbar-logo">
          <img src={logo_small} alt="tesseract logo" />
          TesseractApps
        </div>
        <img
          src={closeIcon}
          alt="close icon"
          id="dialog-close-icon"
          onClick={() => handleDialog(false)}
        />
      </div> */}
      <img
        src={closeIcon}
        alt="close icon"
        id="dialog-close-icon"
        onClick={() => {
          console.log("close clicked");
          setTimeout(() => {
            handleDialog(false);
          }, 100);
        }}
      />
      <div id="signup-container">
        <Alert setAlertData={setAlertData} alertData={alertData} />
        {/* <div id="signup-image-container">
          <span id="signup-image-text">
            We build simple, so you can deliver smart.
          </span>
          <img src={signupImage} alt="signupImage" id="signup-image" />
        </div> */}
        <div id="signup-image-container"></div>
        <div id="signup-form-container">
          <Box sx={{ width: "100%" }}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label, index) => {
                const stepProps: { completed?: boolean } = {};
                const labelProps: {
                  optional?: React.ReactNode;
                } = {};
                if (isStepOptional(index)) {
                  labelProps.optional = (
                    <Typography variant="caption">Optional</Typography>
                  );
                }
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                Step {activeStep + 1}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", pt: 2 }}>
                {signupFormData[activeStep].map((field) => (
                  <div key={field.id} className="signup-form-field">
                    <label className="signup-form-label">
                      {field.label}
                      {field.required && (
                        <span className="required-indicator"> * </span>
                      )}
                    </label>
                    {field.type === "select" ? (
                      field.options ? (
                        <div className="select-options-container">
                          {field.options.map((option) => (
                            <div
                              className={
                                "select-option" +
                                (field.id != "features"
                                  ? option.value ===
                                    signupData[field.id as keyof signupType]
                                    ? " selected"
                                    : ""
                                  : signupData[
                                      field.id as keyof signupType
                                    ].includes(option.value)
                                  ? " selected"
                                  : "")
                              }
                              onClick={() => {
                                handleClickSelection(field.id, option.value);
                              }}
                            >
                              {option.value}
                            </div>
                          ))}
                          {signupData[field.id as keyof signupType].includes(
                            "other"
                          ) ? (
                            <input
                              type="text"
                              className={getInputClass(
                                field.id as keyof signupType
                              )}
                              placeholder="Please specify"
                              name="otherFeature"
                              value={
                                signupData[
                                  "otherFeature" as keyof signupType
                                ] || ""
                              }
                              onChange={inputChangeHandler}
                            />
                          ) : (
                            ""
                          )}
                        </div>
                      ) : (
                        <div></div>
                      )
                    ) : field.type === "checkbox" ? (
                      <div className="checkbox-group">
                        {field.options &&
                          field.options.map((option) => (
                            <label
                              key={option.value}
                              className="checkbox-label"
                            >
                              <input
                                type="checkbox"
                                name={field.id}
                                value={option.value}
                                checked={
                                  Array.isArray(
                                    signupData[field.id as keyof signupType]
                                  ) &&
                                  (
                                    signupData[
                                      field.id as keyof signupType
                                    ] as string[]
                                  ).includes(option.value)
                                }
                                onChange={inputChangeHandler}
                                className="checkbox-input"
                              />
                              {option.name}
                            </label>
                          ))}
                      </div>
                    ) : (
                      <input
                        type={field.type || "text"}
                        name={field.id}
                        value={signupData[field.id as keyof signupType] || ""}
                        onChange={inputChangeHandler}
                        className={getInputClass(field.id as keyof signupType)}
                        placeholder={"Enter " + field.label}
                      />
                    )}
                    {signupErrors[field.id as keyof signupErrorsTypes] &&
                      (field.id as keyof signupErrorsTypes) !== "features" && (
                        <span className="error-text">
                          {signupErrors[field.id as keyof signupErrorsTypes]}
                        </span>
                      )}
                  </div>
                ))}
                <div className="signup-bottom-buttons-container">
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{
                      mr: 1,
                      color: "var(--color-primary)",
                      border: "1px solid var(--color-primary)",
                      borderColor:
                        activeStep === 0
                          ? "transparent"
                          : "var(--color-primary)",
                    }}
                  >
                    Back
                  </Button>
                  {isStepOptional(activeStep) && (
                    <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                      Skip
                    </Button>
                  )}
                  <Button
                    onClick={
                      activeStep === steps.length - 1
                        ? submitHandler
                        : handleNext
                    }
                    sx={{
                      backgroundColor: "var(--color-primary)",
                      color: "white",
                    }}
                  >
                    {activeStep === steps.length - 1
                      ? "Submit Request"
                      : "Next"}
                  </Button>
                </div>
              </Box>
            </React.Fragment>
          </Box>
        </div>
      </div>
    </Dialog>
  );
};

export default Signup;
