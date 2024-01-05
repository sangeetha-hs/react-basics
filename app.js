import React from "react";


function App(){
    const appName="React Application";
    const profileValid=true;
    const user={
        name:"sangeetha",
        }
        const handle=()=>{
            console.log('button is clicked')
        }
    return(
        <h1 id="header" className="test">lets  laern react;
        {appName}
        <p>user name is {user.name}</p>
        <p>{`${profileValid}`}</p>
        <p>{profileValid ?'valid profile':'invalid profile'}</p>
        <button onClick={handle}>click here</button>
        </h1>
    )
}



export default App;