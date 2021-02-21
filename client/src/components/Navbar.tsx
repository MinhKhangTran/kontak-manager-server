import { Box, Text, Flex, Heading, Spacer, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "../store";

// redux action
import { logout } from "../store/actions/userActions";

const Navbar = () => {
  const users = useSelector((state: RootStore) => state.users);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <Box bgGradient="linear(to-r,teal.100,cyan.100)">
      <Flex align="center" w={{ base: "90%", md: "75%" }} mx="auto">
        <Heading fontSize="2xl" p={4} color="teal.600">
          Kontakt Manager
        </Heading>
        <Spacer />
        {users && users.user?._id.length !== 0 && (
          <Text fontSize="2xl">Hi {users.user.email.split("@")[0]}</Text>
        )}

        {users && users.user?._id.length !== 0 && (
          <Button
            onClick={() => logoutHandler()}
            fontSize="2xl"
            colorScheme="teal"
            ml={4}
            variant="ghost"
          >
            Logout
          </Button>
        )}
      </Flex>
    </Box>
  );
};
export default Navbar;
