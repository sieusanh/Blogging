
import { Button, Modal, TextareaAutosize, TextField } from '@mui/material';
import { useState, useCallback } from 'react';
import FileBase64 from 'react-file-base64';
import axios from 'axios';
import { useStore, actions } from '../../store';
import './styles.css';

export default function PostModal() {
    const [data, setData] = useState({
        title: '',
        content: '',
        attachment: '',
    });
    const [state, dispatch] = useStore();

    const onClose = useCallback(() => {
        dispatch(actions.showModal(false));
    }, [dispatch]);

    const onSubmit = useCallback(() => {
        dispatch(actions.refreshPosts(true));
        axios.post('http://localhost:9000/posts/create', {
            title: data.title,
            content: data.content,
            attachment: data.attachment,
            author: 'Admin'
        })
            .then(res => {
                setPostList(res.data);
            })
            .catch(err => console.log(err));
    }, [data]);

    const body = (
        <div className={'paper'}>
            <h2>Create New Post</h2>
            <form
                noValidate
                autoComplete='off'
                className={'form'}
            >
                <TextField
                    className={'title'}
                    required
                    label='Title'
                    value={data.title}
                    onChange={(e) =>
                        setData({
                            ...data,
                            title: e.target.value
                        })
                    }
                />
                <TextareaAutosize
                    className={'textarea'}
                    rowsMin={10}
                    rowsMax={15}
                    placeholder='Content...'
                    value={data.content}
                    onChange={(e) =>
                        setData({
                            ...data,
                            content: e.target.value
                        })
                    }
                />
                <FileBase64
                    style={{ outline: 'none' }}
                    accept='image/*'
                    multiple={false}
                    type='file'
                    value={data.attachment}
                    onDone={({ base64 }) => setData({
                        ...data,
                        attachment: base64
                    })}
                />
                <div className={'footer'}>
                    <Button
                        variant='contained'
                        color='primary'
                        component='span'
                        fullWidth
                        onClick={onSubmit}
                    >
                        Create
                    </Button>
                </div>
            </form>
        </div>
    );

    return (
        <Modal
            open={state.isShow}
            onClose={onClose}
        >
            <div>
                {body}
            </div>
        </Modal>
    )
}