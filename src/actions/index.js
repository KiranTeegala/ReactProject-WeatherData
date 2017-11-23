
import axios from 'axios';
const API_KEY='63b4a7f3525585eb7798eb82ea733156';

const ROOT_URL=`api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

const FETCH_WEATHER='FETCH_WEATHER';

export function FetchWeatherData(city){

    const url=`${ROOT_URL}&q=${city},us`;
    const request=axios.get(url);
    
    return {
        type:FETCH_WEATHER,
        payload: request
    }

}