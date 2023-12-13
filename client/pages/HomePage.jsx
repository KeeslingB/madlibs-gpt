import React from "react";
import HomeAnime from "../components/HomeAnime";
import Blob from "../components/Blob";
// importing css
import "../Homepage.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from "react";


export default function HomePage() {

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


  useEffect(() => {
    fetch(`/api/story`, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0]._id)

        fetch(`/api/story/${data[0]._id}`, {
          method: "GET"
        })
          .then((response) => response.json())
          .then((data) => {
            setStory1(data.story);
            setTitle1(data.title);
          })
        fetch(`/api/story/${data[1]._id}`, {
          method: "GET"
        })
          .then((response) => response.json())
          .then((data) => {
            setStory2(data.story);
            setTitle2(data.title);
          })
        fetch(`/api/story/${data[2]._id}`, {
          method: "GET"
        })
          .then((response) => response.json())
          .then((data) => {
            setStory3(data.story);
            setTitle3(data.title);
          })
        fetch(`/api/story/${data[3]._id}`, {
          method: "GET"
        })
          .then((response) => response.json())
          .then((data) => {
            setStory4(data.story);
            setTitle4(data.title);
          })
        fetch(`/api/story/${data[4]._id}`, {
          method: "GET"
        })
          .then((response) => response.json())
          .then((data) => {
            setStory5(data.story);
            setTitle5(data.title);
          })
        fetch(`/api/story/${data[5]._id}`, {
          method: "GET"
        })
          .then((response) => response.json())
          .then((data) => {
            setStory6(data.story);
            setTitle6(data.title);
          })
        fetch(`/api/story/${data[6]._id}`, {
          method: "GET"
        })
          .then((response) => response.json())
          .then((data) => {
            setStory7(data.story);
            setTitle7(data.title);
          })
        fetch(`/api/story/${data[7]._id}`, {
          method: "GET"
        })
          .then((response) => response.json())
          .then((data) => {
            setStory8(data.story);
            setTitle8(data.title);
          })
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch(`/api/story`, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <HomeAnime></HomeAnime><Blob></Blob>
      <div >
        <h1 className="stories">Stories</h1><br></br>
      </div>
      <div className="box" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 'wrap', backgroundColor: "purple", width: '100%' }}>
        <Card style={{ width: '20rem', height: '35rem', margin: '.5rem' }}>
          <Card.Body >
            <Card.Title>{title1}</Card.Title><br></br>
            <Card.Text>
              {story1}
            </Card.Text>
            <Button variant="primary" style={{ bottom: '0' }}>View Story</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '20rem', height: '35rem', margin: '.5rem' }}>
          <Card.Body>
            <Card.Title>{title2}</Card.Title><br></br>
            <Card.Text>
              {story2}
            </Card.Text>
            <Button variant="primary" style={{ bottom: '0' }}>View Story</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '20rem', height: '35rem', margin: '.5rem' }}>
          <Card.Body>
            <Card.Title>{title3}</Card.Title><br></br>
            <Card.Text>
              {story3}
            </Card.Text>
            <Button variant="primary">View Story</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '20rem', height: '35rem', margin: '.5rem' }}>
          <Card.Body>
            <Card.Title>{title4}</Card.Title><br></br>
            <Card.Text>
              {story4}
            </Card.Text>
            <Button variant="primary">View Story</Button>
          </Card.Body>
        </Card>
      </div>
      <br></br>
      <div className="box-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 'wrap', backgroundColor: "purple" }}>
        <Card style={{ width: '20rem', height: '35rem', margin: '.5rem' }}>
          <Card.Body>
            <Card.Title>{title5}</Card.Title><br></br>
            <Card.Text>
              {story5}
            </Card.Text>
            <Button variant="primary" style={{ bottom: '0' }}>View Story</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '20rem', height: '35rem', margin: '.5rem' }}>
          <Card.Body>
            <Card.Title>{title6}</Card.Title><br></br>
            <Card.Text>
              {story6}
            </Card.Text>
            <Button variant="primary" style={{ bottom: '0' }}>View Story</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '20rem', height: '35rem', margin: '.5rem' }}>
          <Card.Body>
            <Card.Title>{title7}</Card.Title><br></br>
            <Card.Text>
              {story7}
            </Card.Text>
            <Button variant="primary">View Story</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '20rem', height: '35rem', margin: '.5rem' }}>
          <Card.Body>
            <Card.Title>{title8}</Card.Title><br></br>
            <Card.Text>
              {story8}
            </Card.Text>
            <Button variant="primary">View Story</Button>
          </Card.Body>
        </Card>
      </div>

    </>
  )
}