import { ACTIONS } from "./constant.data"

function todoReducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [newTodo(action.payload.title), ...todos];
        case ACTIONS.TOGGLE_TODO:
            return todos.map((todo => {
                if (todo.id == action.payload.id) {
                    return {...todo, completed: !todo.completed};
                }
                return todo;
            }));
        default:
            throw Error("Unknown Action: " + action.type);

    }
}


function newTodo(title) {
    return {
        "userId": 1, //for later usage in API
        "id": Date.now(),
        "title": title,
        "completed": false
    }
}






export { todoReducer }