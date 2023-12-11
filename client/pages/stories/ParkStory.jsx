import React, { useState } from 'react';

export default function ParkStory() {
  const [userData, setUserData] = useState({
    noun1: "",
    adj1: "",
    verb1: "",
    noun2: "",
    adverb1: "",
    num1: "",
    adj2: "",
    verb2: "",
    adverb2: "",
    adj3: ""
  })
  const [story, setStory] = useState("");

  const handleInputChange = ({ target: { name, value } }) => {
    setUserData({ ...userData, [name]: value });
  }

  const generateMadlibs = () => {
    const { noun1, adj1, verb1, noun2, adverb1, num1, adj2, verb2, adverb2, adj3 } = userData;
    const newStory = `Today, my fabulous camp group went to a (an) ${adj1} amusement park. It was a fun park with lots of cool ${noun1} and enjoyable play structures. When we got there, my kind counselor shouted loudly, "Everybody off the ${noun2}." We all pushed out in a terrible hurry. My counselor handed out yellow tickets, and we scurried in. I was so excited! I couldn't figure out what exciting thing to do first. I saw a scary roller coaster I really liked so, I ${adverb1} ran over to get in the long line that had about ${num1} people in it. When I finally got on the roller coaster I was ${verb1}. In fact I was so nervous my two knees were knocking together. This was the ${adj2} ride I had ever been on! In about two minutes I heard the crank and grinding of the gears. Thats when the ride began! When I got to the bottom, I was a little ${verb2} but I was proud of myself. The rest of the day went ${adverb2}. It was a(n) ${adj3} day at the fun park.`;
    setStory(newStory);
  }

  return (
    <div>
      <h1>Madlibs!</h1>
      <p>Create a story:</p>
      <input type="text" name="adj1" placeholder="Enter an adjective" value={userData.adj1} onChange={handleInputChange}/>
      <input type="text" name="noun1" placeholder="Enter a plural noun" value={userData.noun1} onChange={handleInputChange}
      />
      <input type="text" name="noun2" placeholder="Enter a noun" value={userData.noun2} onChange={handleInputChange}/>
      <input type="text" name="adverb1" placeholder="Enter an adverb" value={userData.adverb1} onChange={handleInputChange}/>
      <input type="text" name="num1" placeholder="Enter a number" value={userData.num1} onChange={handleInputChange}/>
      <input type="text" name="verb1" placeholder="Enter a verb, past tense" value={userData.verb1} onChange={handleInputChange}/>
      <input type="text" name="adj2" placeholder="Enter an -est adjective" value={userData.adj2} onChange={handleInputChange}/>
      <input type="text" name="verb2" placeholder="Enter a verb, past tense" value={userData.verb2} onChange={handleInputChange}/>
      <input type="text" name="adverb2" placeholder="Enter an adverb" value={userData.adverb2} onChange={handleInputChange}/>
      <input type="text" name="adj3" placeholder="Enter an adjective" value={userData.adj3} onChange={handleInputChange}/>

      <button onClick={generateMadlibs}>Generate Story</button>
      <p>{story}</p>
    </div>
  )
}