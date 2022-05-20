import AppContext from "../../context/AppContext";
import { useContext } from "react";

function ContactInfo(props) {
const {user} = useContext(AppContext);

  return (
    <div className="card-body">
      <div className="table-responsive">
        <table className="table table-borderless mb-0 text-muted">
          <tbody>
            <tr>
              <th scope="row">Email: </th>
              <td>{user.email}</td>
            </tr>
            <tr>
              <th scope="row">Phone:</th>
              <td>(+44) 123 456 789</td>
            </tr>
            <tr>
              <th scope="row">Address:</th>
              <td>74 Guild Street 542B, Great North Town MT.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContactInfo;