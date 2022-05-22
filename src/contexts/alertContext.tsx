import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import isNil from "lodash/isNil";
import { AlertProps } from "@mui/material/Alert";
import { SnackbarOrigin } from "@mui/material/Snackbar";

export interface IAlertState extends AlertProps {
  showAlert: boolean;
  message: string;
  anchorOrigin?: SnackbarOrigin;
}

export interface IAlertContext {
  alert: IAlertState;
  setAlert: Dispatch<SetStateAction<IAlertState>>;
}

export const AlertContext = createContext({} as IAlertContext);

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [alert, setAlert] = useState<IAlertState>({
    showAlert: false,
    message: "",
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center",
    },
  });

  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const AlertConsumer = ({
  children,
}: {
  children: (context: IAlertContext) => ReactNode;
}) => {
  return (
    <AlertContext.Consumer>
      {(context) => {
        if (isNil(context)) {
          throw new Error("AlertConsumer must be used within a AlertProvider");
        }
        return children(context);
      }}
    </AlertContext.Consumer>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (isNil(context)) {
    throw new Error("useAlert must be used within a AlertProvider");
  }
  return context;
};
