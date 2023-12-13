import React, { useState } from 'react';
import '../../Story.css'

export default function PizzaStory() {
  const [userData, setUserData] = useState({
    noun1: "",
    adj1: "",
    noun2: "",
    nationality1: "",
    name1: "",
    adj2: "",
    adj3: "",
    adj4: "",
    noun3: "",
    noun4: "",
    num1: "",
    shape1: "",
    food1: "",
    food2: "",
    num2: "",
  })
  const [story, setStory] = useState("");

  const handleInputChange = ({ target: { name, value } }) => {
    setUserData({ ...userData, [name]: value });
  }

  const generateMadlibs = () => {
    const { noun1, adj1, noun2, nationality1, name1, adj2, adj3, adj4, noun3, noun4, num1, shape1, food1, food2, num2 } = userData;
    const newStory = `Pizza was invented by a ${adj1} ${nationality1} chef named ${name1}. To make a Pizza, you need to take a lump of ${noun1}, and make a thin, round ${adj2} ${noun2}. then you cover it with ${adj3} sauce, ${adj4} cheese, and fresh chopped ${noun3}. Next you have to bake it in a very hot ${noun4}. When it is done, cut it into ${num1} ${shape1}. Some kids like ${food1} pizza the best, but my favorite is the ${food2} pizza. If I could, I would eat pizza ${num2} times a day.`;
    setStory(newStory);
  }

  return (
    <>
      <div>
        <h1 className='storyHeader'>THE PIZZA CHEF</h1>
        <p className='createStoryText'>Create a story:</p>
        <div className='inputContainer'>
          <input className='inputBox' type="text" name="adj1" placeholder="Enter an adjective" value={userData.adj1} onChange={handleInputChange} />
          <input className='inputBox' type="text" name="nationality1" placeholder="Enter an adjective" value={userData.nationality1} onChange={handleInputChange} />
          <input className='inputBox' type="text" name="name1" placeholder="Enter an adjective" value={userData.name1} onChange={handleInputChange} />
          <input className='inputBox' type="text" name="noun1" placeholder="Enter a noun" value={userData.noun1} onChange={handleInputChange} />
          <input className='inputBox' type="text" name="adj2" placeholder="Enter an adjective" value={userData.adj2} onChange={handleInputChange} />
          <input className='inputBox' type="text" name="noun2" placeholder="Enter a noun" value={userData.noun2} onChange={handleInputChange} />
          <input className='inputBox' type="text" name="adj3" placeholder="Enter an adjective" value={userData.adj3} onChange={handleInputChange} />
          <input className='inputBox' type="text" name="adj4" placeholder="Enter an adjective" value={userData.adj4} onChange={handleInputChange} />
          <input className='inputBox' type="text" name="noun3" placeholder="Enter a noun" value={userData.noun3} onChange={handleInputChange} />
          <input className='inputBox' type="text" name="noun4" placeholder="Enter a noun" value={userData.noun4} onChange={handleInputChange} />
          <input className='inputBox' type="text" name="num1" placeholder="Enter a number" value={userData.num1} onChange={handleInputChange} />
          <input className='inputBox' type="text" name="shape1" placeholder="Enter a shape" value={userData.shape1} onChange={handleInputChange} />
          <input className='inputBox' type="text" name="food1" placeholder="Enter a food" value={userData.food1} onChange={handleInputChange} />
          <input className='inputBox' type="text" name="food2" placeholder="Enter a food" value={userData.food2} onChange={handleInputChange} />
          <input className='inputBox' type="text" name="num2" placeholder="Enter a number" value={userData.num2} onChange={handleInputChange} />
          <button className='inputBox' onClick={generateMadlibs}>Generate Story</button>
        </div>
        <p className='storyText'>{story}</p>
      </div>
    </>
  )
}