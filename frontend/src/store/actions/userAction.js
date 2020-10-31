// action creator
import baseUrl from "../../helpers/baseUrl";

export const setUserData = (type, data) => {
    return {
        type: type,
        payload: data,
    }
} 

export const userAction = (urlPath, method, type, body) => async (dispatch, getState) => {   
    const { authReducer:{ token } } = getState();  
    
    const url = baseUrl + urlPath;
    const config = {
        method: method,
        headers: new Headers({
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }),
        body: body
    };
    
    const response = await fetch(url, config)
    const data = await response.json();
    
    dispatch(setUserData(type, data));
};