import axios from "axios";

export default function UserRequests({ payload }) {
  return axios.post(
    "https://my-json-server.typicode.com/TwistYoFate/SlambookTestDB/users",
    payload
  );
}
