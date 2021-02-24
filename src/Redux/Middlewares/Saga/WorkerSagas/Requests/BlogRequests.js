import axios from "axios";

export default function BlogRequests() {
  return axios.request({
    url: "https://my-json-server.typicode.com/TwistYoFate/SlambookTestDB/blogs"
  });
}
