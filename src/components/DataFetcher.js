import React, {useEffect} from "react";
import {useState, useDispatch} from "react-redux";
import {fetchData} from "../redux/slices/exampleSlices";
const dataFetcher = () => {
  const dispatch = useDispatch();
  const {data, status, error} = useSelector((state) => state.example);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchData());
    }
  }, [status, dispatch]);

  let content;
  if (status === "loading") {
    content = <p>loding...</p>;
  } else if (status === "succeeded") {
    content = (
      <ul>
        {data.map((item) => {
          <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    );
  } else if (status === "failed") {
    content = <p>{error}</p>;
  }

  return <div>{content}</div>;
};
