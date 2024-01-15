import Lacey from '../canaries/img1.jpg';

const Post = ({image, name}) => {

    const handleClick = (canaryName) => {
        return window.alert('You clicked ' + canaryName + '!')
    }

    return (
        <li className='post-component'>
            <button onClick={() => handleClick(name)}>
                <img src={image} alt={name}/>
                <p className='post-name'>{name}</p>
            </button>
        </li>
    )
}

export default Post;