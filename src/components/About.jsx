import React from "react";


const About = () => {

  return <div className="container">
    <h4>This is about NoteApp:</h4>
    <p className="mx-3 mt-5"> Using NoteApp you could-</p>
    <ul className="list-group list-group-flush list-group-numbered mx-5">
      <li className="list-group-item">Create your daily / weekly tasks</li>
      <li className="list-group-item">Secure your notes on cloud</li>
      <li className="list-group-item">Access your notes from anywhere / from any devices</li>
      <li className="list-group-item">Update or Remove your tasks</li>
      <li className="list-group-item">Assign your tasks a specific tag</li>
    </ul>
  </div>;
};

export default About;
