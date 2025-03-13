import { createContext, useReducer} from "react";

const UserContext = createContext();
const initialState = { name: "Jane Smith", isLoggedIn: false};

function userReducer(state, action) {
 switch (action.type) {
 case "LOGIN":
 
 return {...state, isLoggedIn: true};
 
 case "LOGOUT":
 
 return {...state, isLoggedIn: false};
 
 case "UPDATE_NAME":
 
 return {...state, name: action.payload};
 
 default:
 state;
 }
}

export function UserProvider({ children }) {
 const [user, dispatch] = useReducer(userReducer, initialState);


 return (
 <UserContext.Provider value={{user, dispatch}}>
 {children}
 </UserContext.Provider>
 )
}

export default UserContext