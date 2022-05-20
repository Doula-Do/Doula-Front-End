import AppContext from "../../context/AppContext";
import { useContext } from "react";

function About(props) {
  const {user} = useContext(AppContext);
  
  return (
    <div className="card-body mb-3">
      <p className="mb-0 text-center">Gender: {user.gender}</p>
      {user.medicaid === "No" && (
        <>
          <p className="mb-0 text-center">Has Medicaid: No</p>
        </>
      )}
      {user.medicaid === "Yes" && (
        <>
          <p className="mb-0 text-center">Has Medicaid: Yes</p>
        </>
      )}
      <p className="mb-0 text-center">Birthday: {user.birthday}</p>
    </div>
  );
}

export default About;
