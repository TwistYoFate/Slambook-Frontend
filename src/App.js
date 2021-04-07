import styles from "./styles.css"
import App_desktop from "./Root/App.desktop";
import axios from 'axios'
import { Container } from "@material-ui/core";

export default function App() {
  //Entry point for this web app

  axios.defaults.withCredentials = true;

  return (
    <div className="App" >
      <App_desktop />
    </div>
  );
}