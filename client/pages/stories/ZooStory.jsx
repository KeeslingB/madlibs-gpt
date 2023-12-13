import React, { useState } from 'react';
import '../../Story.css'

export default function ZooStory() {
  const [userData, setUserData] = useState({
    noun1: "",
    adj1: "",
    verb1: "",
    noun2: "",
    adverb1: "",
    adj2: "",
    noun3: "",
    adj3: "",
    verb2: "",
    adverb2: "",
    verb3: "",
    adj4: ""
  })
  const [story, setStory] = useState("");

  const handleInputChange = ({ target: { name, value } }) => {
    setUserData({ ...userData, [name]: value });
  }

  const generateMadlibs = () => {
    const { noun1, adj1, verb1, noun2, adverb1, adj2, noun3, adj3, verb2, adverb2, verb3, adj4 } = userData;
    const newStory = `Today I went to the zoo. I saw a(n) ${adj1} ${noun1} jumping up and down in its tree. He ${verb1} ${adverb1} through the large tunnel that led to its ${adj2} ${noun2}. I got some peanuts and passed them through the cage to a gigantic gray ${noun3} towering above my head. Feeding that animal made me hungry. I went to get a ${adj3} scoop of ice cream. It filled my stomach. Afterwards I had to ${verb2} ${adverb2} to catch our bus. When I got home I ${verb3} my mom for a ${adj4} day at the zoo.`;
    setStory(newStory);

  }

  return (
    <>
      <div>
        <h1 className='storyHeader'>A DAY AT THE ZOO</h1>
        <p className='createStoryText'>Create a story:</p>
        <div className='inputContainer'>
          <input className='inputBox' type="text" name="adj1" placeholder="Enter an adjective" value={userData.adj1} onChange={handleInputChange} />
          <input className='inputBox' type="text" name="noun1" placeholder="Enter a noun" value={userData.noun1} onChange={handleInputChange} />
          <input className='inputBox' type="text" name="verb1" placeholder="Enter a verb, past tense" value={userData.verb1} onChange={handleInputChange} />
          <input className='inputBox' type="text" name="adverb1" placeholder="Enter an adverb" value={userData.adverb1} onChange={handleInputChange} />
          <input className='inputBox' type="text" name="adj2" placeholder="Enter an adjective" value={userData.adj2} onChange={handleInputChange} />
          <input className='inputBox' type="text" name="noun2" placeholder="Enter a noun" value={userData.noun2} onChange={handleInputChange} />
          <input className='inputBox' type="text" name="noun3" placeholder="Enter a noun" value={userData.noun3} onChange={handleInputChange} />
          <input className='inputBox' type="text" name="adj3" placeholder="Enter an adjective" value={userData.adj3} onChange={handleInputChange} />
          <input className='inputBox' type="text" name="verb2" placeholder="Enter a verb" value={userData.verb2} onChange={handleInputChange} />
          <input className='inputBox' type="text" name="adverb2" placeholder="Enter an adverb" value={userData.adverb2} onChange={handleInputChange} />
          <input className='inputBox' type="text" name="verb3" placeholder="Enter a verb" value={userData.verb3} onChange={handleInputChange} />
          <input className='inputBox' type="text" name="adj4" placeholder="Enter an adjective" value={userData.adj4} onChange={handleInputChange} />
        <button className='inputBox' onClick={generateMadlibs}>Generate Story</button>
        </div>
        <p className='storyText'>{story}</p>
      </div>
    </>
  )
}