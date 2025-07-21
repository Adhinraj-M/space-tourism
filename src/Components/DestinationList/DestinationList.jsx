import "./destinationlist.css";
import { useEffect, useState } from "react";

function DestinationList() {
  const [data, setData] = useState();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function DataFetching() {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setData(data.destination);
      } catch (error) {
        console.log(error);
      }
    }
    DataFetching();
  }, []);

  const handleNavDest = (i) => {
    setIndex(i);
  };

  const len = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % len);
    }, 6000);

    return () => clearInterval(interval);
  }, [len]);

  return (
    <>
      {!data ? (
        <div className="Loading">Loading...</div>
      ) : (
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
              {data.map((item, i) => {
                return (
                  <div key={item.id}>
                    <p
                      className={`destination-name ${
                        i == index ? "active" : ""
                      }`}
                      onClick={() => handleNavDest(i)}
                    >
                      {item.name}
                    </p>
                  </div>
                );
              })}
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
