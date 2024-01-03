import Barry from '../otters/otter1.jpg';

function Post({ image, name }) {
  
  const handleClick = (event) => {
    return console.log(event)
  }

    return (
        <li className='post-component'>
          <button>
            <img src={image} alt={name}/>
            <p className='post-name'>{name}</p>
          </button>
        </li>
    )
}

export default Post;