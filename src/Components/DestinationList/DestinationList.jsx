import "./destinationlist.css";
import { useEffect, useState } from "react";

function DestinationList() {
  const [data, setData] = useState();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function DataFetching() {
      try {
        const response = await fetch("/src/Data/data.json");
        const data = await response.json();
        setData(data.destination);
      } catch (error) {
        console.log(error);
      }
    }
    DataFetching();
  }, []);

  const handleNavDest = (index) => {
    setIndex(index);
  };

  return (
    <>
      {data && (
        <div className="destination">
          <div className="destination-img-container">
            <img
              className="destination-img"
              src={data[index]?.image}
              width={140}
              height={140}
              alt={data[index]?.name}
            />
          </div>

          <div className="content-wrapper">
            <div className="destination-list">
              <p className="destination-name" onClick={() => handleNavDest(0)}>
                {data[0]?.name}
              </p>
              <p className="destination-name" onClick={() => handleNavDest(1)}>
                {data[1]?.name}
              </p>
              <p className="destination-name" onClick={() => handleNavDest(2)}>
                {data[2]?.name}
              </p>
              <p className="destination-name" onClick={() => handleNavDest(3)}>
                {data[3]?.name}
              </p>
            </div>

            <h1 className="current-dest-name">{data[index]?.name}</h1>
            <p className="dest-description">{data[index].description}</p>

            <hr className="hr-line" />

            <div className="travel-details">
              <div className="data-container">
                <p className="data-heading">AVG. DISTANCE</p>
                <h2 className="data-text">{data[index].distance}</h2>
              </div>
              <div className="data-container">
                <p className="data-heading">EST. TRAVEL TIME</p>
                <h2 className="data-text">{data[index].travel_time}</h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DestinationList;
