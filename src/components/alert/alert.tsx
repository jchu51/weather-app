import { FunctionComponent } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useAlert } from "../../contexts/alertContext";

const AlertMessage: FunctionComponent = () => {
  const { alert, setAlert } = useAlert();

  if (!alert) return null;

  const handleClose = () => {
    setAlert({
      ...alert,
      showAlert: false,
      message: "",
    });
  };

  return (
    <Snackbar
      open={alert.showAlert}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={alert.anchorOrigin}
    >
      <Alert
        onClose={handleClose}
        severity={alert.severity}
        sx={{ width: "100%" }}
      >
        {alert.message}
      </Alert>
    </Snackbar>
  );
};

export default AlertMessage;
