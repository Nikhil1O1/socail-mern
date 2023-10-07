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