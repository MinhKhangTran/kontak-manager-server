import React from "react";
import {
  Box,
  FormErrorMessage,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

// Redux
import { useDispatch } from "react-redux";

// Redux actions
import { addContacts, fetchingContacts } from "../store/actions/contactActions";

const ContactAdd = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { name: "", email: "", phone: 0, type: "privat" },
    validationSchema: Yup.object({
      name: Yup.string().required("Bitte geben Sie einen Namen ein"),
      email: Yup.string()
        .email("Es muss eine E-Mail Adresse sein!")
        .required("Bitte geben Sie eine E-Mail Adresse ein"),

      phone: Yup.number(),
      status: Yup.string(),
    }),
    onSubmit: (daten, { resetForm }) => {
      //   console.log(daten);
      dispatch(addContacts(daten));
      dispatch(fetchingContacts());
      resetForm();
    },
  });
  return (
    <Box p={6} w={{ base: "100%", md: "45%" }}>
      <form onSubmit={formik.handleSubmit}>
        <FormControl
          isInvalid={!!formik.errors.name && formik.touched.name}
          mt={4}
          isRequired
          id="name"
        >
          <FormLabel color="cyan.500">Name</FormLabel>
          <Input
            variant="filled"
            type="text"
            placeholder="Test User"
            {...formik.getFieldProps("name")}
          />
          <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={!!formik.errors.email && formik.touched.email}
          mt={4}
          isRequired
          id="email"
        >
          <FormLabel color="cyan.500">E-mail Addresse</FormLabel>
          <Input
            variant="filled"
            type="email"
            placeholder="test@example.de"
            {...formik.getFieldProps("email")}
          />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl mt={4} id="phone">
          <FormLabel color="cyan.500">Telefonnummer</FormLabel>
          <Input
            variant="filled"
            type="number"
            placeholder="123456789"
            {...formik.getFieldProps("phone")}
          />
        </FormControl>
        <FormControl mt={4} id="type" as="fieldset">
          <FormLabel color="cyan.500">Art</FormLabel>
          <Select {...formik.getFieldProps("type")}>
            <option value="privat">Privat</option>

            <option value="geschäftlich">Geschäftlich</option>
          </Select>
        </FormControl>
        <Button colorScheme="cyan" variant="outline" mt={8} type="submit">
          Hinzufügen
        </Button>
      </form>
    </Box>
  );
};

export default ContactAdd;
