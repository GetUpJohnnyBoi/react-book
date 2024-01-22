function ShuffleButton ({canaryArrayState, setCanaryArrayState, setSelectedPostName}) {
    const handleClick = () => {
        const newCanaryArray = [...canaryArrayState];
        const shuffleItem = newCanaryArray.shift();
        newCanaryArray.push(shuffleItem);
        setCanaryArrayState(newCanaryArray);
        setSelectedPostName(newCanaryArray[4].name);
    };
    return (
        <button onClick={handleClick}>Shuffle</button>
    );
}

export default ShuffleButton;