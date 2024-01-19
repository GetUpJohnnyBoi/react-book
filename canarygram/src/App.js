import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import SelectedItem from './components/SelectedItem';
import Lacey from './canaries/img1.jpg';
import Mel from './canaries/img2.jpg';
import Jocko from './canaries/img3.jpg';
import Pierre from './canaries/img4.jpg';
import Maurice from './canaries/img5.jpg';

const canariesArray = [
  {image: Lacey, name: 'Lacey', id: 1},
  {image: Mel, name: 'Mel', id: 2},
  {image: Jocko, name: 'Jocko', id: 3},
  {image: Pierre, name: 'Pierre', id: 4},
  {image: Maurice, name: 'Maurice', id: 5}
]

function App() {
  const [selectedPostName, setSelectedPostName] = useState('Lacey');
  const selectedPost = canariesArray.find(canary => canary.name === selectedPostName);

  return (
    <div>
      <Header />
      <subheader className='subheader-component'>
        <h2>I tawt I taw a putty tat.</h2>
      </subheader>
      <div className='app-content'>
        <ul className='post-list'>
          {canariesArray.map((post) => (
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
      <footer className='footer-component'>
        <a href='https://en.wikipedia.org/wiki/Atlantic_canary'>Atlantic Canary</a>
        <a href='https://en.wikipedia.org/wiki/Yellow_canary'>Yellow Canary</a>
      </footer>
    </div>
  );
}

export default App;
