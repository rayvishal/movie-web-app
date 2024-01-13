import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
export default function () {
  const [searchInput, setSearchInput] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  // console.log("searchParams", searchParams);

  useEffect(() => {
    const inistalQueryt = searchParams.get("query");
    if (inistalQueryt) {
      setSearchInput(inistalQueryt);
      getData(inistalQueryt);
    }
  }, []);

  const getData = async (searchValue) => {
    try {
      setLoading(true);
      const change = encodeURIComponent(searchValue.trim());
      let api = `https://api.themoviedb.org/3/search/movie?query=${change}&api_key=${process.env.REACT_APP_APIKEY}`;

      const response = await axios.get(api);
      setData(response.data.results);
      // console.log("line 18");
      // console.log(data);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async () => {
    setSearchParams({ query: searchInput });
    getData(searchInput);
  };
  // console.log("line 26");

  // console.log(data);
  return (
    <>
      <Link to="/">
        <button
          style={{
            padding: "15px",
            borderRadius: "10px",
            margin: "10px 0px",
            backgroundColor: "black",
            color: "white",
          }}
        >
          Go To The Home Page
        </button>
      </Link>
      {/* <div>{JSON.stringify(data)}</div> */}
      <div className="form-inline d-flex flex-row">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            // setSearchParams({ query: e.target.value });
          }}
        />

        {/* <Link to="/search"> */}
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
          onClick={handleClick}
        >
          Search
        </button>
        {/* </Link> */}
      </div>

      {data.length ? (
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face${data[0].backdrop_path}`}
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">{data[0].title}</p>
            <p className="card-text">{data[0].overview}</p>
          </div>
        </div>
      ) : null}
      <div>{loading ? <h2>loading.....</h2> : null}</div>
    </>
  );
}
//
