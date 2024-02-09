function ModeToggler() {
    let darkModeOn = true;
    const darkMode = <h1>Dark Mode in On</h1>
    const lightMode = <h1>Light mode is On</h1>
    function handleClick() {
        darkModeOn = !darkModeOn;
        if(darkModeOn === true) {
            console.log("Dark mode is on")
        } else {
            console.log("Light mode is On")
        }
    }
    

    return (
            <div>
                {darkModeOn ? darkMode : lightMode}
                <button onClick={handleClick}>Click Me</button>
            </div>
           ) 
}
export default ModeToggler;