'use client';
import { useCallback } from 'react';
import Header from '../../components/Header';
import PostList from '../../components/PostList';
import { Fab } from '@mui/material';
import { Add } from '@mui/icons-material';
import PostModal from '../../components/PostModal';
import { useStore, actions } from '../../store';

export default function HomePage() {
    const [state, dispatch] = useStore();
    const openPostModal = useCallback(() => {
        console.log('enter')
        dispatch(actions.showModal(true));
    }, [dispatch]);

    return (
        <>
            <Header />
            <PostList />
            <PostModal />
            <Fab
                color='primary'
                style={{ position: 'absolute', top: '200px', right: '200px' }}
                onClick={openPostModal}
            >
                <Add />
            </Fab>
            {/* <input
                value={state.todoInput}
                placeholder='Enter todo...'
                onChange={e => {
                    dispatch(actions.setTodoInput(e.target.value))
                }}
            /> */}
        </>
    )
}

