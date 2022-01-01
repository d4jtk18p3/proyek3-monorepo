import baseHttp from "./http"
import { BAP_URL } from "./const"

const postBAP = async (data) => {
  try {
    console.log(data);
    const BAPEndpoint = BAP_URL + "/new";
    const result = await baseHttp.post(BAPEndpoint, data)
    return result.data
  } catch (err) {
    console.error(err)
  }
}

export default {
  postBAP
}