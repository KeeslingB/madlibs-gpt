import { useEffect, useState } from "react"




export default function Commenting(props) {

    const [commentData, setCommentData] = useState({ story: props, commenterName: "", commentText: "", });

    function handleInputChange(e) {
        setCommentData({ ...commentData, [e.target.name]: e.target.value })
    };

    // useEffect for getting storyid? 

    async function sendForm() {
        //if i can set the story id through props this should be simpler.
        const commentOn = `api/comment/${props}`

        try {
            console.log("sending comment...")
            const query = await fetch(commentOn, {
                method: "POST",
                body: JSON.stringify(commentData),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const response = await query.json()
            return response
        } catch (err) {
            return console.log(err.message)
        }
    }

    return(
    <>
        <form onSubmit={sendForm}>
            <input type="text" placeholder="Enter your name" name="commenterName" value="commenterName" onChange={handleInputChange} />
            <input type="text" placeholder="Write your comment" name="commentText" value="commentText" onChange={handleInputChange} />
            <button>send comment</button>

        </form>
    </>)

}