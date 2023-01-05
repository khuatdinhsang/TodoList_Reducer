import { v4 as uuidv4 } from "uuid";
export const initState = {
    list: [
        {
            id: uuidv4(),
            name: "yeu ban than",
            completed: false
        },
        {
            id: uuidv4(),
            name: "kiem tien",
            completed: true
        }
    ],
    todo: ""
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "SET":
            return {
                ...state,
                todo: action.payload
            };
        case "ADD":
            return {
                ...state,
                list: [...state.list, action.payload]
            };
        case "DELETE":
            return {
                ...state,
                list: state.list.filter((item) => item.id !== action.payload)
            };
        case "TOGGLE":
            console.log(action.payload);

            return {
                ...state,
                list: state.list.map((item) =>
                    item.id === action.payload
                        ? { ...item, completed: !item.completed }
                        : item
                )
            };
        case "EDIT":
            return {
                ...state,
                list: state.list.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, name: action.payload.todo }
                        : item
                )
            };
        default:
            return state;
    }
};
