import { useParams } from "react-router-dom";

export default function Home() {
  const { arg } = useParams();
  return (
    <div className="home">
      {
        {
          yadav: <div>yadav</div>,
          pandey: <div>pandey</div>,
          haha: <div>haha</div>
        }[arg]
      }
    </div>
  );
}
