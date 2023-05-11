import axios from "axios";

const BaseURL = "127.0.0.1:8000/api";

function Axios(method, url, data = {}) {
  return axios({
    method: method,
    url: `${BaseURL}/${url}`,
    data: data,
  })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

export default Axios;
