import API from "../configs/AxiosConfig";

export const sendEmail = async (
  email: string,
  subject: string,
  body: string
) => {
  try {
    const response = await API.post("/send-email", {
      email,
      subject,
      body,
    });
    return response.data;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
