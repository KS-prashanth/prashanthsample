import React from 'react';
import {useSelector} from "react-redux";
import PostSummaryItem from './post-summary-item';

const PostSummaryList = () => {
    const postData = useSelector(state => state.explore)
    return (
        <ul className='list-group'>
            {
                postData.map(post => <PostSummaryItem key={post.id} post={post}/>)
            }
        </ul>
    );
};

export default PostSummaryList;