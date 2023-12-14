import Button from 'react-bootstrap/Button';
import '../../assets/css/story.css'


export default function PrivatePage(props) {

  return (
    <>
      <h1 className='storyCreateHeader'>Create Some Stories Here:</h1>
      <div>
        <div>
          <h4 className='storyCreateTitle'>AT THE ARCADE</h4>
          <Button id="storyCreateBtn" href="/arcade-story">Create</Button>
        </div>
        <div>
          <h4 className='storyCreateTitle'>THE FUN PARK</h4>
          <Button id="storyCreateBtn" href="/park-story">Create</Button>
        </div>
        <div>
          <h4 className='storyCreateTitle'>A DAY AT THE ZOO</h4>
          <Button id="storyCreateBtn" href="/zoo-story">Create</Button>
        </div>
        <div>
          <h4 className='storyCreateTitle'>THE PIZZA CHEF</h4>
          <Button id="storyCreateBtn" href="/pizza-story">Create</Button>
        </div>

      </div>
    </>
  )
}