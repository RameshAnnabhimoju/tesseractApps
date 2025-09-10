import { Dialog } from "@mui/material";
import "./SignupFlow.css";
import closeIcon from "../../assets/close.png";
import { useNavigate } from "react-router-dom";
const SignupFlow = ({
  dialog,
  handleDialog,
}: {
  dialog: boolean;
  handleDialog: (value?: boolean | undefined) => void;
}) => {
  const navigate = useNavigate();
  return (
    <Dialog
      open={dialog}
      onClose={() => {
        handleDialog(false);
      }}
      fullScreen
    >
      <img
        src={closeIcon}
        alt="close icon"
        id="dialog-close-icon"
        onClick={() => {
          navigate(-1);
          setTimeout(() => {
            handleDialog(false);
          }, 100);
        }}
      />
      <div></div>
    </Dialog>
  );
};

export default SignupFlow;
