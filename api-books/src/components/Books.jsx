import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Books.css";

function Books() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: {
          Authorization: "whatever-you-want",
        },
      })
      .then((response) => {
        setData(response.data.books);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <div className="main">
        {data.length > 0 ? (
          data.map((item) => (
            <div className="container">
              <hr />
              <h3>{item.title}</h3>
              <div className="display" key={item.id}>
                <img src={item.imageLinks.thumbnail} />
                <p>{item.description}</p>
              </div>
              <h4>{item.authors[0]}</h4>
            </div>
          ))
        ) : (
          <p className="spinner"></p>
        )}
      </div>
    </div>
  );
}

export default Books;
