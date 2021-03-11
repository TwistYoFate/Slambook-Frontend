import styles from "./styles.css"
import App_mobile from "./Root/App.mobile";
import App_desktop from "./Root/App.desktop";
import axios from 'axios'
import { Container } from "@material-ui/core";

export default function App() {
  //Entry point for this web app

  axios.defaults.withCredentials = true;

  /*
    Firstly fetching a variable from the browser's navigator object
    which will tell us if the current browser has been opened on a
    mobile or a desktop
  */
  const isMobile = navigator.userAgentData.mobile;

  /*
    Now depending on the value we will render the custom App.js component
    for the mobile or desktop
  */
  return (
    <div className="App" >
      {isMobile ? <App_mobile /> : <App_desktop />}
    </div>
  );
}