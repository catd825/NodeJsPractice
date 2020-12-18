import axios from 'axios'
import { FETCH_USER } from './types'


export const fetchUser = () => async dispatch => {
    //dispatch an action after the request has successfully been completed
        const res = await axios.get('/api/current_user')
        
        dispatch({ type: FETCH_USER, payload: res.data }) //dispatch action after axios promise has been resolved
} 
