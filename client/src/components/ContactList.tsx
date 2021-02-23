import React from "react";
import {
  Box,
  Spinner,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  Portal,
  IconButton,
  Button,
  PopoverFooter,
  ButtonGroup,
} from "@chakra-ui/react";
import { FiMoreVertical, FiEdit } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";

// redux actions
import {
  fetchingContacts,
  deleteContact,
} from "../store/actions/contactActions";
import { setCurrent } from "../store/actions";
import { RootStore } from "../store";
import { IContact } from "../store/reducers/contactReducer";

const ContactList = () => {
  const dispatch = useDispatch();

  const { contacts, loading } = useSelector(
    (state: RootStore) => state.contacts
  );
  const { gelöscht } = useSelector((state: RootStore) => state.toasts);
  React.useEffect(() => {
    dispatch(fetchingContacts());
  }, [dispatch, gelöscht]);
  if (loading) {
    return (
      <Box mt={4} mb={8} w={{ base: "100%", md: "45%" }}>
        {loading && <Spinner color="cyan.400" />}
      </Box>
    );
  }
  if (contacts?.length === 0) {
    return (
      <Box mt={4} mb={8} w={{ base: "100%", md: "45%" }}>
        <Text>Du hast noch keine Kontakte :/</Text>
      </Box>
    );
  }
  return (
    <Box w={{ base: "100%", md: "45%" }}>
      <Heading mt={4} mb={8} color="cyan.500">
        Deine Kontakte
      </Heading>
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>E-mail</Th>
            <Th>Nummer</Th>
            <Th>Art</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {contacts &&
            contacts.map((item: IContact) => {
              return (
                <Tr key={item._id}>
                  <Td>{item.name}</Td>
                  <Td>{item.email}</Td>
                  <Td>{item.phone}</Td>
                  <Td>{item.type}</Td>
                  <Popover size="sm">
                    <PopoverTrigger>
                      <IconButton
                        aria-label="settings"
                        icon={<FiMoreVertical />}
                        variant="ghost"
                      ></IconButton>
                    </PopoverTrigger>
                    {/* <Portal> */}
                    <PopoverContent>
                      <PopoverArrow />

                      {/* <PopoverCloseButton /> */}
                      <PopoverBody d="flex" justifyContent="center">
                        <ButtonGroup>
                          <Link to={`/edit/${item._id}`}>
                            <IconButton
                              aria-label="edit"
                              icon={<FiEdit />}
                              variant="ghost"
                              colorScheme="green"
                              onClick={() => {
                                console.log(item);
                                dispatch(setCurrent(item));
                              }}
                            ></IconButton>
                          </Link>
                          <IconButton
                            onClick={() => {
                              if (window.confirm("Bist du sicher?")) {
                                dispatch(deleteContact(item._id!));
                              }
                            }}
                            aria-label="delete"
                            icon={<FaTrash />}
                            variant="ghost"
                            colorScheme="red"
                          ></IconButton>
                        </ButtonGroup>
                      </PopoverBody>
                    </PopoverContent>
                    {/* </Portal> */}
                  </Popover>
                </Tr>
              );
            })}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ContactList;
