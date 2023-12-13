import { useEffect, useState } from "react"




export default function Commenting(){

    const [commentData, setCommentData] = useState({ story: "", commenterName: "", commentText: "", });

    function handleInputChange(e) {
        setCommentData({...commentData, [e.target.name]: e.target.value })
    };

    async function sendForm(){


        try {
            console.log("sending comment...")

        } catch (err) {
            console.log(err.message)
        }
    }

    return

}