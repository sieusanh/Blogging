import { SHOW_MODAL, HIDE_MODAL, REFRESH_POST } from './constants';

function showModal(payload) {
    return {
        type: SHOW_MODAL,
        payload
    }
}

function hideModal(payload) {
    return {
        type: HIDE_MODAL,
        payload
    }
}

function refreshPosts(payload) {
    return {
        type: REFRESH_POST,
        payload
    }
}

export { showModal, hideModal, refreshPosts };
