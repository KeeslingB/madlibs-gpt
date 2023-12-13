import React, { useState, useEffect } from "react";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
// import Parse from 'parse/react-native';
import Parse from 'parse/react-native';



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

  const [story6, setStory6] = useState(null);
  const [title6, setTitle6] = useState(null);
  
  const [story7, setStory7] = useState(null);
  const [title7, setTitle7] = useState(null);

  const [story8, setStory8] = useState(null);
  const [title8, setTitle8] = useState(null);

  const [story9, setStory9] = useState(null);
  const [title9, setTitle9] = useState(null);

  const [story10, setStory10] = useState(null);
  const [title10, setTitle10] = useState(null);

  const userId = "6578973dd9e0d46dce9a3d15"

  

  useEffect(() => {
    fetch(`/api/user/${userId}`, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        setDate(data.payload.createdOn);
        if (data.payload.story.length > 0)
          fetch(`/api/story/${data.payload.story[0]}`, {
            method: "GET"
          })
            .then((response) => response.json())
            .then((data) => {
              setStory1(data.story);
              setTitle1(data.title);
            })
        else setTitle1("No Story");
        if (data.payload.story.length > 1)
          fetch(`/api/story/${data.payload.story[1]}`, {
            method: "GET"
          })
            .then((response) => response.json())
            .then((data) => {
              setStory2(data.story);
              setTitle2(data.title);
            })
            else setTitle2("No Story");
        if(data.payload.story.length > 2)
        fetch(`/api/story/${data.payload.story[2]}`, {
          method: "GET"
        })
          .then((response) => response.json())
          .then((data) => {
            setStory3(data.story);
            setTitle3(data.title);
          })
          else setTitle3("No Story");
        if(data.payload.story.length > 3)
        fetch(`/api/story/${data.payload.story[3]}`, {
          method: "GET"
        })
          .then((response) => response.json())
          .then((data) => {
            setStory4(data.story);
            setTitle4(data.title);
          })
          else setTitle4("No Story");
        if(data.payload.story.length > 4)
        fetch(`/api/story/${data.payload.story[4]}`, {
          method: "GET"
        })
          .then((response) => response.json())
          .then((data) => {
            setStory5(data.story);
            setTitle5(data.title);
          })
          else setTitle5("No Story");
          if(data.payload.story.length > 5)
        fetch(`/api/story/${data.payload.story[5]}`, {
          method: "GET"
        })
          .then((response) => response.json())
          .then((data) => {
            setStory6(data.story);
            setTitle6(data.title);
          })
          else setTitle6("No Story");
          if(data.payload.story.length > 6)
        fetch(`/api/story/${data.payload.story[6]}`, {
          method: "GET"
        })
          .then((response) => response.json())
          .then((data) => {
            setStory7(data.story);
            setTitle7(data.title);
          })
          else setTitle7("No Story");
          if(data.payload.story.length > 7)
        fetch(`/api/story/${data.payload.story[7]}`, {
          method: "GET"
        })
          .then((response) => response.json())
          .then((data) => {
            setStory8(data.story);
            setTitle8(data.title);
          })
          else setTitle8("No Story");
          if(data.payload.story.length > 8)
        fetch(`/api/story/${data.payload.story[8]}`, {
          method: "GET"
        })
          .then((response) => response.json())
          .then((data) => {
            setStory9(data.story);
            setTitle9(data.title);
          })
          else setTitle9("No Story");
          if(data.payload.story.length > 9)
        fetch(`/api/story/${data.payload.story[9]}`, {
          method: "GET"
        })
          .then((response) => response.json())
          .then((data) => {
            setStory10(data.story);
            setTitle10(data.title);
          })
          else setTitle10("No Story");
      })
      .catch((error) => console.log(error));
  }, []);


  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '60px' }}>Welcome Back!</h1>
        <p>You have been a member since: {date}</p>
      </div><br></br><br></br>

      <div>
        <h2>Your Stories</h2>
      </div><br></br><br></br>
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
          <Accordion.Item eventKey="2">
            <Accordion.Header>{title3}</Accordion.Header>
            <Accordion.Body>
              {story3}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>{title4}</Accordion.Header>
            <Accordion.Body>
              {story4}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>{title5}</Accordion.Header>
            <Accordion.Body>
              {story5}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>{title6}</Accordion.Header>
            <Accordion.Body>
              {story6}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>{title7}</Accordion.Header>
            <Accordion.Body>
              {story7}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>{title8}</Accordion.Header>
            <Accordion.Body>
              {story8}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>{title9}</Accordion.Header>
            <Accordion.Body>
              {story9}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>{title10}</Accordion.Header>
            <Accordion.Body>
              {story10}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

    </>
  );
}