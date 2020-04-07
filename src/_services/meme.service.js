import axios from "axios";
import config from "../config/config";
export const memeService = {
  get,
};

function get(payload) {
  return axios
    .get(config.baseUrl)
    .then((response) => {
      return response;
    })
    .catch((err) => {});
}
