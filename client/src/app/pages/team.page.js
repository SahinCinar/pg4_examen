import {
    gql,
    useQuery,
  } from "@apollo/client";

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

const TeamPage = () => {
    const { loading, error, data } = useQuery(POST);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    

    return (
        <section id="team" class="team_member section-padding p-5">

        <div class="container-fluid py-5">
        <div class="section-title text-center">
                <h1 class="text-black">Team</h1>
            </div>	
            <div class="row text-center">

            {data.teams.map((team) => (

			<div class="col-md-3 col-sm-6 col-xs-12">
                	<div class="our-team">
					<div class="team_img">
						<img src={`${team.image}`}></img>
					
					</div>
					<div class="team-content">
						<h3 class="text-black">{team.name}</h3>
						<span class="post">{team.type}</span>
					</div>
				</div>
            </div>
        ))}
				
			</div>
        </div>
        </section>
    );
  };
  
  export default TeamPage;