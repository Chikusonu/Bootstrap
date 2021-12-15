import React from 'react';
import Toast from 'react-bootstrap/Toast';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Toast() {
  return (
    <div>
      <Toast>
        <Toast.Header>
          <img src="https://bit.ly/3yww1FN/20x20" className="rounded me-2" alt="" thumbnail/>
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>
    </div>
  );
}
