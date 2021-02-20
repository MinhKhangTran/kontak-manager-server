import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

// components
import Login from "../components/Login";
import Register from "../components/Register";

const Home = () => {
  const [register, setRegister] = React.useState(false);

  return (
    <Box
      bgGradient="linear(to-br,teal.50,cyan.100)"
      mt={12}
      w={{ base: "90%", md: "50%" }}
      mx="auto"
      p={12}
      borderRadius="xl"
      boxShadow="md"
    >
      <Heading color="teal.800" mb={8}>
        {register ? "Anmeldung" : "Login"}
      </Heading>

      {register ? (
        <>
          <Register />
          <Text mt={6} fontStyle="italic">
            <Text
              cursor="pointer"
              as="span"
              color="cyan.600"
              onClick={() => setRegister(!register)}
            >
              Hier klicken
            </Text>{" "}
            um sich einzuloggen
          </Text>
        </>
      ) : (
        <>
          <Login />
          <Text mt={6} fontStyle="italic">
            Haben Sie noch kein Account?{" "}
            <Text
              cursor="pointer"
              as="span"
              color="cyan.600"
              onClick={() => setRegister(!register)}
            >
              Hier klicken
            </Text>{" "}
            um sich anzumelden
          </Text>
        </>
      )}
    </Box>
  );
};

export default Home;
