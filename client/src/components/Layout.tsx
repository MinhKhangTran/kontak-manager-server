import React from "react";

import Navbar from "./Navbar";
import { useToast } from "@chakra-ui/react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "../store";

// Redux action
import { clearToast } from "../store/actions/index";

const Layout: React.FC = ({ children }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const toasts = useSelector((state: RootStore) => state.toasts);

  React.useEffect(() => {
    if (toasts.type === "success") {
      toast({
        title: "Yay",
        description: toasts.msg,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      dispatch(clearToast());
    }
    if (toasts.type === "error") {
      toast({
        title: "Meh",
        description: toasts.msg,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      dispatch(clearToast());
    }
  }, [toasts, dispatch]);

  return (
    <>
      <Navbar />

      {children}
    </>
  );
};

export default Layout;
