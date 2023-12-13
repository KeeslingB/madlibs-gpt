import { useEffect, useState } from "react"




export default function Commenting(){

    const [commentData, setCommentData] = useState({ story: "", commenterName: "", commentText: "", });

    function handleInputChange(e) {
        setCommentData({...commentData, [e.target.name]: e.target.value })
    };

    async function getStory(){
        // something await fetch("api/story/storyid").
    }

    async function sendForm(){
        // do i need to check if the user is signed in here, or will the comment form component be loaded in other components conditionally? or are we allowing anonymous comments all the way?
        // also, where do i set the story id?

        try {
            console.log("sending comment...")

        } catch (err) {
            console.log(err.message)
        }
    }

    return
    <>
    <form>
        
    </form>
    </>

}