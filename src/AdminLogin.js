import React, { useContext } from "react";
import axios from "axios";
import SessionContext from "./contexts/SessionContext";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { url } from "./App";
import { UncontrolledAlert } from "react";

export default function Login({ buttonLabel, className }) {
  const {
    name,
    setName,
    password,
    setPassword,
    setLoggedIn,
    showAdminModal,
    toggleAdminModal,
    toggleAdminLogin,
  } = useContext(SessionContext);

  const handleSubmit = (event) => {
    console.log(`Name: ${name}, Password: ${password}`);
    axios({
      method: "POST",
      url: `${url}/sessions/login/admin`,
      data: {
        name: name,
        password: password,
      },
    })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("jwt", response.data.auth_token);
        console.log(response.data.Error);
        if (response.data.Error !== "Invalid credentials") {
          toggleAdminModal();
          toggleAdminLogin();
          setLoggedIn(false);
        }
      })
      .catch((error) => {
        console.error(error.response);
        return (
          <div>
            <UncontrolledAlert color="danger">
              Incorrect username or password!
            </UncontrolledAlert>
          </div>
        );
      });
  };

  return (
    <div>
      <Modal
        isOpen={showAdminModal}
        toggleLoginModal={toggleAdminModal}
        className={className}
      >
        <ModalHeader toggleLoginModal={toggleAdminModal}>
          Admin Login
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="adminname">Admin Name</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Enter Name of Admin"
                onChange={(e) => setName(e.target.value)}
              />
              <Label className="mt-3" for="password">
                Password
              </Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => handleSubmit()}>
            Login Admin
          </Button>
          <Button color="secondary" onClick={toggleAdminModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
