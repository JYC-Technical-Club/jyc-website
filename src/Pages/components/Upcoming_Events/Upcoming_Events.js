import Card1 from './Card1';
import Heading from './Heading';
import Eventcard from './Eventcard';
function Upcoming_Events() {
  return (
      <div className="App" id='latest-events'>
        <Heading/>
        <Card1/>
        <Eventcard/>
      </div>
  );
}

export default Upcoming_Events;