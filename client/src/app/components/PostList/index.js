'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GridContainer, GridCell } from './styles';
import Post from './Post';
// import store from '../../redux';
// import { actionPost } from '../../redux/actions';

export default function PostList() {
    // const [value, setValue] = useState(store.getState());
    const [postList, setPostList] = useState([]);
    const [change, setChange] = useState(false);

    // // Listener
    // store.subscribe(() => {
    //     setChange(!change);
    // })

    useEffect(() => {
        axios.get('http://localhost:9000/posts/find')
            .then(res => {
                setPostList(res.data.data);
                console.log('data: ', res.data.data)
            })
            .catch(err => console.log(err));
    }, []);

    // useEffect(() => {
    //     setValue(store.getState());
    // }, [change]);

    // function handleInsertPost() {
    //     const { createPost } = actionPost;
    //     store.dispatch(createPost({}));
    // }

    return (
        <GridContainer>
            {(postList.length > 0) && postList.map((post) => (
                <GridCell>
                    <Post
                        key={post._id}
                        post={post}
                    />
                </GridCell>
            ))}
        </GridContainer>
    );
}
