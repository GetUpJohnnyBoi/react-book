import Barry from '../otters/otter1.jpg';

function Post({ image, name, setSelectedPostName }) {

  const handleClick = (otterName) => {
    return console.log('You clicked ' + otterName)
  }

  const handleMouseEnter = (otterName) => {
    return console.log('Hello, ' + otterName + '!')
  }

  const handleMouseLeave = (otterName) => {
    return console.log('Goodbye, ' + otterName + '!')
  }

    return (
        <li className='post-component'>
          <button onClick={() => setSelectedPostName(name)}
                  onMouseEnter={() => handleMouseEnter(name)}
                  onMouseLeave={() => handleMouseLeave(name)}>
            <img src={image} alt={name}/>
            <p className='post-name'>{name}</p>
          </button>
        </li>
    )
}

export default Post;