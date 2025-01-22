import { useEffect, useState } from "react";  

const GetWeatherData = () => {
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();
  let [response, setResponse] = useState();

  const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'accept-encoding': 'deflate, gzip, br'}
  };

  useEffect( () => {
    fetch('https://api.tomorrow.io/v4/weather/realtime?location=45.523,-122.676&units=imperial&apikey=T6YySDX0WVjo5bdElAMQUQ0oWBFDZnXw', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));
  });
}

export default GetWeatherData