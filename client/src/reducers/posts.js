export default (posts = [], action) => { // reducers state are supposed to be a value so we send an empty array
    switch (action.type) {
        case 'UPDATE':
            return posts.map((post)=> post._id === action.payload._id ? action.payload : post) 
        case 'FETCH_ALL':
            return action.payload ;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    }
}

//reducers are function that accepts posts and action and returns new posts based on action.