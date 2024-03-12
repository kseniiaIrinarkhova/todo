import { ACTION } from "./constant.data"

function todoReducer(todos, action){
switch(action.type){
    case ACTION.ADD_TODO:
        return [newTodo(action.payload.title) , ...todos];
    case ACTION.TOGGLE_TODO:

    default: 
        throw Error("Unknown Action: " + action.type);

}
}


function newTodo(title){
    return {
        "userId": 1, //for later usage in API
        "id": Date.now(),
        "title": title,
        "completed": false
    }
}






export {todoReducer}