import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f61aa5decd6948c9bf45ed86876a4176",
  },
});
