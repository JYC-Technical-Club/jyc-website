import { Link } from 'react-router-dom';
import Card1 from './Card1';
import Heading from './Heading';
function Upcoming_Events() {
  return (
      <div className="App" id='latest-events'>
        <Heading/>
        <Card1/>
      </div>
  );
}

export default Upcoming_Events;