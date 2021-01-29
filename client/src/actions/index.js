import axios from 'axios'
import { FETCH_USER } from './types'


export const fetchUser = () => async dispatch => {
    //dispatch an action after the request has successfully been completed
        const res = await axios.get('/api/current_user')
        // console.log(res)
        dispatch({ type: FETCH_USER, payload: res.data }) //dispatch action after axios promise has been resolved
} 

//taking token from stripe and sending to backend server
export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token);

    dispatch({ type: FETCH_USER, payload: res.data }) //assuming we are getting same user model as fetchUser and want to dispatch same info
}

export const submitSurvey = values => async dispatch => {
    const res = await axios.post('/api/surveys', values)

    dispatch({ type: FETCH_USER, payload: res.data })
}