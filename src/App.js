
import Emoji from './components/composition/Emoji';
import Text from './components/composition/Text';

const App = () => {
  return 
    <Emoji>
      {({ addEmoji }) => <Text addEmoji={addEmoji} />}
    </Emoji>;
  

}

export default App;


