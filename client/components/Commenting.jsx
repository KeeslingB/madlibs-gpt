import { useEffect, useState } from "react"




export default function Commenting(){

    const [commentData, setCommentData] = useState({ story: "", commenterName: "", commentText: "", });

    function handleInputChange(e) {
        setCommentData({...commentData, })
    }

    return

}