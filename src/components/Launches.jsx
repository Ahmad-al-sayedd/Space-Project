
import { NavLink } from "react-router-dom";
const Launches = ({launches}) => {
  

  return (
    <>
      {" "}
      <h1 className="launchesH1">Launches History</h1>
      <div className="launches_container">
        {launches.map((launch) => {
          return (
            <section key={launch.mission_name}>
              <h2>{launch.mission_name}</h2>
              {launch.links.mission_patch && (
                <img
                  src={launch.links.mission_patch}
                  alt={`Mission Patch for ${launch.mission_name}`}
                />
              )}
              <p>
                <strong>Flight Number: </strong>
                {launch.flight_number}
              </p>
              <p>
                <strong>Rocket Name: </strong>
                {launch.rocket.rocket_name}
              </p>
              <button className="launches-button">
              <NavLink to={`/launches/${launch.flight_number}`}> More Infos </NavLink>
          
                
              </button>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default Launches;
