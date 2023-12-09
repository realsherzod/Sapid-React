import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import './Card.css';

function Card() {
  const { data, isLoading, isError, error } = useQuery(["foods"], () => {
    return axios
      .get("http://127.0.0.1:8000/api/foods")
      .then((res) => res.data)
      .catch((err) => {
        console.error("fetch error", err);
        throw err; 
      });
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  console.log(data);

  return (
    <div className='card_all'>
      {data?.datas?.map((item) => (
        <div key={item.id} className="card-container">
          <div>
            <p className="theme">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;