import React from 'react';
import { Form } from 'react-bootstrap';
import fs from 'fs';

export default function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};

    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }

    const text = JSON.stringify(data);

    fs.appendFile('data.txt', text + '\n', (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Data saved to data.txt');
      }
    });
  };

  return (
    <div className="container">
      <h1>Registration</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your first name" />
        </Form.Group>
        <Form.Group controlId="surname">
          <Form.Label>Surname</Form.Label>
          <Form.Control type="text" placeholder="Enter your surname" />
        </Form.Group>
        <Form.Group controlId="yearJoined">
          <Form.Label>Year Joined</Form.Label>
          <Form.Control as="select">
            {Array.from({ length: new Date().getFullYear() - 2014 + 1 }, (_, index) => (
              <option key={index} value={2014 + index}>
                {2014 + index}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="mobileOperatingSystem">
          <Form.Label>Mobile Operating System</Form.Label>
          <Form.Control as="select">
            <option value="apple-ios">Apple iOS</option>
            <option value="android">Android</option>
            <option value="blackberry-os">Blackberry OS</option>
            <option value="windows">Windows</option>
            <option value="bada">Bada</option>
            <option value="web-os">Web OS</option>
            <option value="harmony-os">Harmony OS</option>
            <option value="palm-os">Palm OS</option>
            <option value="symbian-os">Symbian OS</option>
            <option value="tizen">Tizen</option>
            <option value="meego">MeeGo</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="mobileDeviceModel">
          <Form.Label>Mobile Device Model</Form.Label>
          <Form.Control type="text" placeholder="Enter your mobile device model" />
        </Form.Group>
        <button type="submit" className="btn btn-primary">Register</button>
      </Form>
    </div>
  );
}
