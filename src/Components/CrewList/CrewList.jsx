import { useEffect, useState } from "react";
import "./crewlist.css";

function CrewList() {
  const [data, setData] = useState();
  const [index, setIndex] = useState(3);

  const handleChange = (i) => {
    setIndex(i);
  };

  useEffect(() => {
    const fetchCrew = async () => {
      try {
        const response = await fetch("src/Data/data.json");
        const fetchdata = await response.json();
        setData(fetchdata.crew);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCrew();
  }, []);

  const len = 4

  useEffect(()=>{
    const interval =setInterval(()=>{
      setIndex(prev=> (prev + 1) % len)
    },6000)
    return ()=> clearInterval(interval)
  },[len])

  return (
    <>
      {data && (
        <div className="crew-main-container">
          <div className="crew-details">
            <p className="crew-role">{data[index]?.crew_role}</p>
            <p className="crew-name">{data[index]?.crew_name}</p>
            <p className="crew-description">{data[index]?.about_crew}</p>
            <div className="slide-btn-container">
              {data.map((_, i) => (
                <div
                  className={`slide-btn ${i === index ? 'active': ''}`}
                  key={i}
                  onClick={() => handleChange(i)}
                ></div>
              ))}
            </div>
          </div>
          <div className="crew-img-container">
            <img src={data[index]?.crew_img} alt="crew" className="crew-img" />
          </div>
        </div>
      )}
    </>
  );
}

export default CrewList;
