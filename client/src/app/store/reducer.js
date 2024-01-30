
import { SHOW_MODAL, HIDE_MODAL, REFRESH_POST } from './constants';

const initState = {
    isShow: false,
    refreshPosts: false,
};

function reducer(state = initState, action) {
    const { type, payload } = action;
    switch (type) {
        case SHOW_MODAL:
        case HIDE_MODAL:
            return {
                ...state,
                isShow: payload
            }
        case REFRESH_POST:
            return {
                ...state,
                refreshPosts: payload
            }
        default:
            throw new Error('Invalid action');
    }
}

export { initState };
export default reducer;
