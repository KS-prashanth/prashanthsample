import React from 'react';

const Tweet = ({ userAvatar, userName, userHandle, tweetText, tweetImage }) => {
    return (
        <div className="tweet">
            <div className="user-avatar">
                <img src={userAvatar} alt="User Avatar" />
            </div>
            <div className="tweet-content">
                <div className="user-info">
                    <span className="user-name">{userName}</span>
                    <span className="user-handle">@{userHandle}</span>
                </div>
                <p className="tweet-text">{tweetText}</p>
                {tweetImage && <img src={tweetImage} alt="Tweet Image" className="tweet-image" />}
                <div className="tweet-actions">
                    <button className="like-button">Like</button>
                    <button className="retweet-button">Retweet</button>
                    <button className="comment-button">Comment</button>
                </div>
            </div>
        </div>
    );
};

export default Tweet;
