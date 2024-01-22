import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Subheader from './components/Subheader';
import Footer from './components/Footer';
import ShuffleButton from './components/ShuffleButton';
import Post from './components/Post';
import SelectedItem from './components/SelectedItem';

import Lacey from './canaries/img1.jpg';
import Mel from './canaries/img2.jpg';
import Jocko from './canaries/img3.jpg';
import Pierre from './canaries/img4.jpg';
import Maurice from './canaries/img5.jpg';

const canaryArray = [
  {image: Lacey, name: 'Lacey', id: 1},
  {image: Mel, name: 'Mel', id: 2},
  {image: Jocko, name: 'Jocko', id: 3},
  {image: Pierre, name: 'Pierre', id: 4},
  {image: Maurice, name: 'Maurice', id: 5}
]

function App() {
  const [selectedPostName, setSelectedPostName] = useState(canaryArray[0].name);
  const selectedPost = canaryArray.find(canary => canary.name === selectedPostName);
  const [canaryArrayState, setCanaryArrayState] = useState(canaryArray);

  return (
    <div>
      <Header />
      <ShuffleButton 
        canaryArrayState={canaryArrayState} 
        setCanaryArrayState={setCanaryArrayState} 
        setSelectedPostName={setSelectedPostName} />
      <Subheader />

      <div className='app-content'>
        <ul className='post-list'>
          {canaryArrayState.map((post) => (
            <Post
              image={post.image}
              name={post.name}
              key={post.id}
              setSelectedPostName={setSelectedPostName}
            />
          ))}
        </ul>
        <SelectedItem
          image={selectedPost.image}
          name={selectedPost.name}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
