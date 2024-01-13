import axios from "axios";
import { useEffect, useState } from "react";
export default function Card() {
  const [day, setDay] = useState("day");
  const [week, setWeek] = useState("week");

  const [data, setData] = useState([]);

  const dayButton = async () => {
    try {
      // setDay("day");
      let api = `${process.env.REACT_APP_URL}${day}?language=en-US&api_key=${process.env.REACT_APP_APIKEY}`;

      const response = await axios.get(api);

      setData(response.data.results);

      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const weekButton = async () => {
    try {
      setWeek("week");
      let api = `${process.env.REACT_APP_URL}${week}?language=en-US&api_key=${process.env.REACT_APP_APIKEY}`;
      const response = await axios.get(api);
      setData(response.data.results);

      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div style={{ marginLeft: "10px" }}>
        <h1 style={{ marginTop: "20px" }}>Trending</h1>
        <div style={{ marginTop: "15px" }}>
          <button
            onClick={dayButton}
            style={{
              padding: "10px 30px",
              borderRadius: "10px",
              fontSize: "larger",
            }}
          >
            Today
          </button>
          <button
            onClick={weekButton}
            style={{
              padding: "10px 30px",
              borderRadius: "10px",
              fontSize: "larger",
              marginLeft: "20px",
            }}
          >
            {" "}
            This Week
          </button>
        </div>
        <div style={{ marginTop: "20px" }}>
          <div className="container-fluid">
            <div className="row">
              {data
                ? data.map((e) => (
                    <div key={e.id} className="card" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        src={`https://www.themoviedb.org/t/p/w220_and_h330_face${e.backdrop_path}`}
                        alt="Card-image-cap"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{e.title}</h5>
                        <p className="card-text">{e.overview}</p>
                        <a href="#" className="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
