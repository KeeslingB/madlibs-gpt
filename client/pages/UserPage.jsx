import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';



export default function UserPage() {

  const [date, setDate] = useState(null);

  const [story1, setStory1] = useState(null);
  const [title1, setTitle1] = useState(null);

  const [story2, setStory2] = useState(null);
  const [title2, setTitle2] = useState(null);

  const [story3, setStory3] = useState(null);
  const [title3, setTitle3] = useState(null);

  const [story4, setStory4] = useState(null);
  const [title4, setTitle4] = useState(null);

  const [story5, setStory5] = useState(null);
  const [title5, setTitle5] = useState(null);


  useEffect(() => {
    fetch(`/api/user/6578973dd9e0d46dce9a3d15`, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        setDate(data.payload.createdOn);
        
        fetch(`/api/story/${data.payload.story[0]}`, {
          method: "GET"
        })
          .then((response) => response.json())
          .then((data) => {
            setStory1(data.story);
            setTitle1(data.title);
          })
        fetch(`/api/story/${data.payload.story[1]}`, {
          method: "GET"
        })
          .then((response) => response.json())
          .then((data) => {
            setStory2(data.story);
            setTitle2(data.title);
          })
        fetch(`/api/story/${data.payload.story[2]}`, {
          method: "GET"
        })
          .then((response) => response.json())
          .then((data) => {
            setStory3(data.story);
            setTitle3(data.title);
          })
        fetch(`/api/story/${data.payload.story[3]}`, {
          method: "GET"
        })
          .then((response) => response.json())
          .then((data) => {
            setStory4(data.story);
            setTitle4(data.title);
          })
          fetch(`/api/story/${data.payload.story[4]}`, {
            method: "GET"
          })
            .then((response) => response.json())
            .then((data) => {
              setStory5(data.story);
              setTitle5(data.title);
            })
      })
      .catch((error) => console.log(error));
  }, []);


  return (
    <>
      <div style={{ textAlign: 'center'}}>
        <h1>Welcome Back!</h1>
        <p>You have been a member since: {date}</p>
      </div>

      <div>
        <h2>Your Stories</h2>
      </div>
      <div >
      <Accordion >
        <Accordion.Item eventKey="0">
          <Accordion.Header>{title1}</Accordion.Header>
          <Accordion.Body>
            {story1}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>{title2}</Accordion.Header>
          <Accordion.Body>
            {story2}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </div>

    </>
  );
}