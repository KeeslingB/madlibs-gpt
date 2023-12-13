import React, { useState } from 'react';
import '../../Story.css'

export default function ArcadeStory() {
  const [userData, setUserData] = useState({
    noun1: "",
    adj1: "",
    verb1: "",
    noun2: "",
    noun3: "",
    noun4: "",
    noun5: "",
    noun6: ""
  })
  const [story, setStory] = useState("");

  const handleInputChange = ({ target: { name, value } }) => {
    setUserData({ ...userData, [name]: value });
  }

  const generateMadlibs = () => {
    const { noun1, verb1, noun2, noun3, noun4, noun5, noun6 } = userData;
    const newStory = `When I go to the arcade with my ${noun1} there are lots of games to play. I spend lots of time there with my friends. In the game X-Men you can be different ${noun2}. The point of the game is to ${verb1} every robot. You also need to save people. Then you can go to the next level. In the game Star Wars you are Luke Skywalker and you try to destroy every ${noun3}. In a car racing/motorcycle racing game you need to beat every computerized vehicle that you are ${verb1} against. There are a whole lot of other cool games. When you play some games you win ${noun4} for certain scores. Once you're done you can cash in your tickets to get a big ${noun5}. You can save your ${noun6} for another time. When I went to this arcade I didn't believe how much fun it would be. So far I have had a lot of fun every time I've been to this great arcade!`;
    setStory(newStory);
  }

  return (
    <>
      <div>
        <h1 className='storyHeader'>AT THE ARCADE</h1>
        <p className='createStoryText'>Create a story:</p>
        <div className='inputContainer'>
          <input className='inputBox' type="text" name="noun1" placeholder="Enter a plural noun" value={userData.noun1} onChange={handleInputChange} />
          <input className='inputBox' type="text" name="noun2" placeholder="Enter a plural noun" value={userData.noun2} onChange={handleInputChange} />
          <input className='inputBox' type="text" name="noun3" placeholder="Enter a noun" value={userData.noun3} onChange={handleInputChange} />
          <input className='inputBox' type="text" name="verb1" placeholder="Enter a -ing verb" value={userData.verb1} onChange={handleInputChange} />
          <input className='inputBox' type="text" name="noun4" placeholder="Enter a plural noun" value={userData.noun4} onChange={handleInputChange} />
          <input className='inputBox' type="text" name="noun5" placeholder="Enter a noun" value={userData.noun5} onChange={handleInputChange} />
          <input className='inputBox' type="text" name="noun6" placeholder="Enter a plural noun" value={userData.noun6} onChange={handleInputChange} />
          <button className='inputBox' onClick={generateMadlibs}>Generate Story</button>
        </div>
        <p className='storyText'>{story}</p>
      </div>
    
    </>
  )
}