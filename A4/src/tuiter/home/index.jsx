import React from 'react';
import Tweet from "../tweet/tweet.jsx";

const HomeComponent= () => {
    return (
        <div className="App">
            <Tweet
                userAvatar="/spacex.png"
                userName="Your Name"
                userHandle="yourhandle"
                tweetText="This is a sample tweet. #React #TwitterClone"
                tweetImage="/sx.jpg"
            />
        </div>
    );
};
export default HomeComponent;
