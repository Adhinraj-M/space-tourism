import "./technologyList.css";
import { useEffect, useState } from "react";

function TechnologyList() {
  const [data, setData] = useState();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function DataFetching() {
      try {
        const response = await fetch("src/Data/data.json");
        const data = await response.json();
        setData(data.technology);
      } catch (error) {
        console.log(error);
      }
    }
    DataFetching();
  }, []);

  let dataLen = 3

  useEffect(()=>{
    const interval = setInterval(() => {
        setIndex(prev=> (prev+1) % dataLen)
    }, 6000);

    return ()=> clearInterval(interval)

  },[dataLen])

  return (
    <>
      {!data ? (<div className="Loading">Loading...</div>): (
        <section className="space-launch-content">
          <div className="space-img-container">
            <img
              src={data[index]?.technology_image}
              className="space-img"
              alt="lauch-vehicle"
            />
          </div>
          <div className="btn-info-container">
            <div className="button-container">
              {data &&
                data.map((item, i) => (
                  <button className= {`btn ${index === i ? 'active':''}`} key={item.id} onClick={()=>setIndex(i)}>
                    {i + 1}
                  </button>
                ))}
            </div>
            <div className="launch-info-container">
              <p className="technology-heading">THE TERMINOLOGY...</p>
              <p className="technology-name">{data[index]?.technology_name}</p>
              <p className="technology-description">
                {data[index]?.technology_description}
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default TechnologyList;
