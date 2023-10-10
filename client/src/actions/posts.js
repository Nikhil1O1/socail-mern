import * as api from '../api';

//importing using star means we import everything as api alowing as to quickly use functions like api.function

//action creators
export const getPosts = () => async(dispatch) => {

    try {
        const {data} = await api.fetchPosts();
        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message)
    }
    const action = {type: 'FETCH_ALL', payload: []};

}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: 'CREATE', payload: data }); 
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const {data} = await api.updatePost(id, post)
        dispatch({type: 'UPDATE', payload: data})
    } catch (error) {
        console.log(error.message);
    }
}