import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




export default function ViewPage() {



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
                <Card.Title>This is the Title</Card.Title><br></br>
                <Card.Text>
                  This is the Story
                </Card.Text>
              </Card.Body>
            </Card>
            <form>
              <textarea defaultValue="enter a comment!" style={{ width: '50rem', height: '10rem', margin: '.5rem', alignItems: "center" }}></textarea>
            </form>
          </Col>
          <Col></Col>
        </Row>
      </Container>








    </>
  )
}