import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <>
      <div>
        <div
          style={{
            backgroundColor: "black",
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              wordWrap: "break-word",
              width: "70%",
              color: "red",
              alignItems: "center",
            }}
          >
            Welcome. Millions of movies,TV shows and people to discover. Explore
            now
          </h2>
        </div>
        <div>
          <h1 style={{ fontFamily: "cursive", color: "green" }}>
            To Search Your Favourite Movie Click The Button Below
          </h1>
          <Link to="/search">
            <button
              style={{
                padding: "15px",
                borderRadius: "10px",
                margin: "10px 0px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Go to the search page
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
