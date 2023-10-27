import React from 'react'
import followData from '../data/who.json'
import WhoToFollowListItem from './who-to-follow-list-item'
import { useSelector as UseSelector } from "react-redux";

const WhoToFollowList = () => {
    const whoArray = UseSelector(
        (state) => state.who
    );
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <h3>Who to follow</h3>
            </li>
            {
                followData.map(
                    who => <WhoToFollowListItem key={who._id} who={who} />
                ) 
            }
        </ul>
    );
};

export default WhoToFollowList