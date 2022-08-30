
import {
    gql,
    useQuery,
  } from "@apollo/client";
  import { settings } from '../config';
  import { NavLink } from "react-router-dom";

  // GraphQL queries
const POST = gql`
query Team {
    teams {
      id
      name
      type
      image
    }
  }
  
`;




const SearchPage = () => {
    const { loading, error, data } = useQuery(POST);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;



    return (
    <div class="mx-auto p-center align-middle">
            <div class="container-fluid py-5 text-center">
            <h1 class="text-black">Zoeken</h1>
        </div>
        <div class="col-md-4 offset-md-4 mt-5 pt-3">
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Zoeken..." aria-label=""></input>
  </div>
  
  <ul>
    {data.teams.map((team) => (
          <div class="card mx-auto p-center align-middle m-4" style={{width: "20rem"}}>
          <div class="card-body">
              <h5 class="card-title"> { team.name } </h5>
                <NavLink to={`/member/${team.id}`}>
                    <button type="button" class="btn btn-success">View team member</button>
                </NavLink>  
          </div>
      </div>
    ))}
    </ul>
</div>

    </div>
    );
  };
  
  export default SearchPage;

  