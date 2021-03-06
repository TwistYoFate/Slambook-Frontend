import axios from "axios";

export default function Home() {

  const handleclick = (e)=>{
      e.preventDefault();
      fetch("http://127.0.0.1:8000/users")
      .then(res=>res.json())
      .then(data => console.log(data))
      .catch(e => console.log(e))
  }
  return (
    <div className="home">
      <button onClick={handleclick}></button>
    </div>
  );
}
