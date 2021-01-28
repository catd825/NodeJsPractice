import { FETCH_USER } from '../actions/types'

export default function (state = null, action){
    // console.log("action", action)
    switch(action.type){
        case FETCH_USER: //if we see an action with the type fetch user, then we return below
            // console.log("action.payload", action.payload)
            return action.payload || false;
        default:
            return state;
    }
}