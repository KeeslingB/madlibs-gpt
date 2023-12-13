import { useEffect, useState } from "react"




export default function Commenting(props){

    const [commentData, setCommentData] = useState({ story: props.storyId, commenterName: "", commentText: "", });

    function handleInputChange(e) {
        setCommentData({...commentData, [e.target.name]: e.target.value })
    };

    // useEffect for getting storyid? 
    // async function setStory(){
    //     // something await fetch("api/story/storyid").
    //     const whichStory = await fetch("/api/story/${story._id}")
    //     setCommentData(story, whichStory)
    // }

    async function sendForm(){
        //if i can set the story id through props this should be simpler.

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