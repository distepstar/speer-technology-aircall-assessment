import axios from "axios";


const acticityEndPoint = "activities";

const aircallApiURL = "https://aircall-job.herokuapp.com";

export const aircallApi = (endpoint = acticityEndPoint, id = null) => {
  const data = axios({
    method: "get",
    url: `${aircallApiURL}/${endpoint}${id ? '/' + id : ''}`,
  }).then(res => {
    return res.data;
  }).catch(err => {
    console.log(err);
    throw err;
  })

  return data;
}

export const aircallApiArchive = (id) => {
  const data = axios({
    method: "post",
    url: `${aircallApiURL}/activities/${id}`,
    data: {
      is_archived: true
    }
  }).then(res => {
    console.log(res);
  }).catch(err => {
    throw err;
  })

  return data;
}
