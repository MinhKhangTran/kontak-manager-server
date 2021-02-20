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

const Login = () => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Es muss eine E-Mail Adresse sein!")
        .required("Bitte geben Sie eine E-Mail Adresse ein"),
      password: Yup.string().required("Bitte geben Ihr Passwort ein"),
    }),
    onSubmit: (daten, { resetForm }) => {
      console.log(daten);
      resetForm();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
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
      <Button type="submit" colorScheme="teal" mt={8}>
        Einloggen
      </Button>
    </form>
  );
};

export default Login;
