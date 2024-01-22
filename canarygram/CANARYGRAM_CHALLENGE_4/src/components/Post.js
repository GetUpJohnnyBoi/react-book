const Post = ({image, name, setSelectedPostName}) => {

    const handleClick = (canaryName) => {
        return window.alert('You clicked ' + canaryName + '!')
    }

    return (
        <li className='post-component'>
            <button onClick={() => setSelectedPostName(name)}>
                <img src={image} alt={name}/>
                <p className='post-name'>{name}</p>
            </button>
        </li>
    )
}

export default Post;