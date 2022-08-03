import axios from "axios";

const BASE_URL = "https://polygence-spendtracker.herokuapp.com";

const getData = async () => {
  const response = await axios.get(`${BASE_URL}/spendings`);
  return response.data;
};

const deleteData = (id) => {
  axios({
    url: `${BASE_URL}/spendings/${id}`,
    method: "delete",
  }).then((res) => {
    console.log(res);
  });
};

const editData = (idValue, data) => {
  return axios({
    url: `${BASE_URL}/spendings/${idValue}`,
    put: "post",
    data,
  });
};

export { getData, deleteData, editData };
