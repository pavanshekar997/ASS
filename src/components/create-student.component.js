import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class CreateStudent extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentLname = this.onChangeStudentLname.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: "",
      lname: "",
      email: "",
      rollno: "",
      guide: " ",
    };
  }

  onChangeStudentName(e) {
    this.setState({ name: e.target.value });
  }
  onChangeStudentLname(e) {
    this.setState({ lname: e.target.value });
  }

  onChangeStudentEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangeStudentRollno(e) {
    this.setState({ rollno: e.target.value });
  }
  handleChange(e) {
    this.setState({ guide: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const studentObject = {
      name: this.state.name,
      lname: this.state.lname,
      email: this.state.email,
      rollno: this.state.rollno,
      guide: this.state.guide,
    };

    axios
      .post("http://localhost:4000/students/create-student", studentObject)
      .then((res) => console.log(res.data));

    this.setState({
      name: "",
      lname: "",
      email: "",
      rollno: "",
      guide: "",
    });
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Name">
            <Form.Label>FirstName</Form.Label>
            <Form.Control
              type="text"
              value={this.state.name}
              onChange={this.onChangeStudentName}
            />
          </Form.Group>
          <Form.Group controlId="Name">
            <Form.Label>LastName</Form.Label>
            <Form.Control
              type="text"
              value={this.state.lname}
              onChange={this.onChangeStudentLname}
            />
          </Form.Group>

          <Form.Group controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={this.state.email}
              onChange={this.onChangeStudentEmail}
            />
          </Form.Group>

          <Form.Group controlId="Name">
            <Form.Label>UserName</Form.Label>
            <Form.Control
              type="text"
              value={this.state.rollno}
              onChange={this.onChangeStudentRollno}
            />
          </Form.Group>

          <select
            value={this.state.selectValue}
            onChange={this.handleChange}
            id="dropdown"
          >
            <option value="N/A">N/A</option>
            <option value="pavan">pavan</option>
            <option value="aryan kapoor">aryan kapoor</option>
            <option value="parii">pariii</option>
            <option value="fu">fu</option>
          </select>

          <Button variant="danger" size="lg" block="block" type="submit">
            Create Student
          </Button>
        </Form>
      </div>
    );
  }
}
