import axios from "axios";
import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Forms(props) {
  const nameRef = useRef();
  const emailRef = useRef();
  const ageRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      age: ageRef.current.value,
    };
    axios
      .post("http://localhost:9000/user/register", formData)
      .then((res) => {
        console.log("Success:", res);
        props.fetchData();
        event.target.reset();
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" ref={nameRef} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="Enter age" ref={ageRef} />
      </Form.Group>
      <Button variant="primary" type="submit" className="form-control mt-3">
        Submit
      </Button>
    </Form>
  );
}

export default Forms;
