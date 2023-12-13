import React, { useState, useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion';
import { useAppCtx } from "../utils/AppProvider"




export default function UserPage() {

  const { user } = useAppCtx()


  // console.log(user._id)

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


  // const userId = "6578f6cbbdc71ab96f7dea8b"


  



  useEffect(() => {
    if( user?._id) {
      console.log("yes!!!")
      fetchData()
    }

    async function fetchData(){
      const response = await fetch(`/api/user/${user._id}`)
      const data = await response.json()
      setDate(data.payload.createdOn)

      if (data.payload.story.length > 0){
        const response2 = await fetch(`/api/story/${data.payload.story[0]}`)
        const data2 =  await response2.json()
        console.log(data2)
        setStory1(data2.story);
        setTitle1(data2.title);
      } else {
        setTitle1("No Story");
      }

      if (data.payload.story.length > 1){
        const response3 = await fetch(`/api/story/${data.payload.story[1]}`)
        const data3 = await response3.json()
        console.log(data3)
        setStory2(data3.story);
        setTitle2(data3.title);
      } else {
        setTitle2("No Story");
      } 

      if (data.payload.story.length > 2){
        const response4 = await fetch(`/api/story/${data.payload.story[2]}`)
        const data4 = await response4.json()
        setStory3(data4.story);
        setTitle3(data4.title);
      } else {
        setTitle3("No Story");
      }

      if (data.payload.story.length > 3){
        const response5 = await fetch(`/api/story/${data.payload.story[3]}`)
        const data5 = await response5.json()
        setStory4(data5.story);
        setTitle4(data5.title);
      } else {
        setTitle4("No Story");
      }

      if (data.payload.story.length > 4){
        const response6 = await fetch(`/api/story/${data.payload.story[4]}`)
        const data6 = await response6.json()
        setStory5(data6.story);
        setTitle5(data6.title);
          }
      else {
        setTitle5("No Story");
      }

      if (data.payload.story.length > 5){
        const response7 = await fetch(`/api/story/${data.payload.story[5]}`)
        const data7 = await response7.json()
        setStory6(data7.story);
        setTitle6(data7.title);
          }
      else {
        setTitle6("No Story");
      }

      if (data.payload.story.length > 6){
        const response8 = await fetch(`/api/story/${data.payload.story[6]}`)
        const data8 = await response8.json()
        setStory7(data8.story);
        setTitle7(data8.title);
          }
      else {
        setTitle7("No Story");
      }

      if (data.payload.story.length > 7){
        const response9 = await fetch(`/api/story/${data.payload.story[7]}`)
        const data9 = await response9.json()
        setStory8(data9.story);
        setTitle8(data9.title);
          }
      else {
        setTitle8("No Story");
      }

      if (data.payload.story.length > 8){
        const response10 = await fetch(`/api/story/${data.payload.story[8]}`)
        const data10 = await response10.json()
        setStory9(data10.story);
        setTitle9(data10.title);
          }
      else {
        setTitle9("No Story");
      }

      if (data.payload.story.length > 9){
        const response11 = await fetch(`/api/story/${data.payload.story[9]}`)
        const data11 = await response11.json()
        setStory10(data11.story);
        setTitle10(data11.title);
          }
      else {
        setTitle10("No Story");
      }
    } 
  }, [user]);


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