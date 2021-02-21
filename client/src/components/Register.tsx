import {
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import React from "react";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { RootStore } from "../store";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Redux actions
import { register } from "../store/actions/userActions";

const Login = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: RootStore) => state.users);
  const formik = useFormik({
    initialValues: { email: "", password: "", name: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Es muss eine E-Mail Adresse sein!")
        .required("Bitte geben Sie eine E-Mail Adresse ein"),
      password: Yup.string().required("Bitte geben Sie Ihr Passwort ein"),
      name: Yup.string().required("Bitte geben Sie Ihren Namen ein"),
    }),
    onSubmit: (daten, { resetForm }) => {
      dispatch(register(daten));
      resetForm();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl
        isInvalid={!!formik.errors.name && formik.touched.name}
        id="name"
      >
        <FormLabel color="teal.700">Name:</FormLabel>
        <Input
          variant="flushed"
          type="name"
          placeholder="testUser"
          {...formik.getFieldProps("name")}
        />
        <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
      </FormControl>
      <FormControl
        isInvalid={!!formik.errors.email && formik.touched.email}
        id="email"
      >
        <FormLabel color="teal.700">E-Mail Adresse:</FormLabel>
        <Input
          variant="flushed"
          type="email"
          placeholder="test@example.de"
          {...formik.getFieldProps("email")}
        />
        <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
      </FormControl>
      <FormControl
        isInvalid={!!formik.errors.password && formik.touched.password}
        id="password"
        mt={6}
      >
        <FormLabel color="teal.700">Password:</FormLabel>
        <Input
          variant="flushed"
          type="password"
          placeholder="******"
          {...formik.getFieldProps("password")}
        />
        <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
      </FormControl>
      <Button isLoading={loading} type="submit" colorScheme="teal" mt={8}>
        Anmelden
      </Button>
    </form>
  );
};

export default Login;
