import { About } from '../components/Welcome/About';
import { Dog } from '../components/Welcome/Dog';
import { GraphQL } from '../components/Welcome/GraphQL';
import { Plus } from '../components/Welcome/Plus';
import { Team } from '../components/Welcome/Team';
import { Video } from '../components/Welcome/Video';

const Welcome = () => {
  return (
    <div className="welcome">
      <Video />
      <GraphQL />
      <Plus />
      <About />
      <Dog />
      <Team />
    </div>
  );
};

export default Welcome;
