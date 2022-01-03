import baseHttp from "./http"
import { BAP_URL } from "./const"

const postBAP = async (data) => {
  try {
    const BAPEndpoint = BAP_URL + "/new";
    const result = await baseHttp.post(BAPEndpoint, data, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    return result.data
  } catch (err) {
    console.error(err)
  }
}

const getBAP = async (idPerkuliahan, tanggal) => {
  const BAPEndpoint = BAP_URL + `/find-bap?idJadwal=${idPerkuliahan}&tanggal=${tanggal}`;
  try {
    const result = await baseHttp.get(BAPEndpoint);
    return result.data;
  } catch (error) {
    console.log(error);
  }
}

export default {
  postBAP,
  getBAP,
}