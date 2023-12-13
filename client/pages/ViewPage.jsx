import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState, useEffect } from "react";




export default function ViewPage() {

  const [story1, setStory1] = useState(null);
  const [title1, setTitle1] = useState(null);

  const storyId = "657893add9e0d46dce9a3c9a"

  useEffect(() => {
    fetch(`/api/story/${storyId}`, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setTitle1(data.title)
        setStory1(data.story);;

      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>

      <div>
        <h1 style={{ textAlign: 'center' }}>Story</h1>
      </div>

      <Container>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <Card style={{ width: '35rem', height: '45rem', margin: '.5rem', alignItems: "center" }}>
              <Card.Body>
                <Card.Title>{title1}</Card.Title><br></br>
                <Card.Text>
                  {story1}
                </Card.Text>
              </Card.Body>
            </Card>
            <form>
              <textarea defaultValue="enter a comment!" style={{ width: '30rem', height: '10rem', margin: '.5rem', alignItems: "center" }}></textarea>
              <button>Send Comment</button>
            </form>
          </Col>
          <Col></Col>
        </Row>
      </Container>








    </>
  )
}