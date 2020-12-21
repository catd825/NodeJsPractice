import { FETCH_USER } from '../actions/types'

export default function (state = null, action){
    // console.log(action)
    switch(action.type){
        case FETCH_USER: //if we see an action with the type fetch user, then we return below
            return action.payload || false;
        default:
            return state;
    }
}