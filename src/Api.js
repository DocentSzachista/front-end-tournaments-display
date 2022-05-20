import axios from 'axios';

const URL = "http://127.0.0.1:8000/";
export const fetchTournaments =  () =>{
    return  axios.get(URL,
        {
            headers:{
                "Access-Control-Allow-Origin": "*"
            }
        }).then((response) =>{
        return response.data;
    });
}
export const addToMailingList = (values) =>{
    return axios.post(`${URL}addToMailingList/`, values);
}
export const filterTournaments = (values) =>{
    return  axios.get(`${URL}retrieve/filter/`, 
        {
            params: values,
            headers:{
                "Access-Control-Allow-Origin": "*"
            }
        }).then((response) =>{
        return response.data;
    });
}