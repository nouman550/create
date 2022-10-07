import "../Componenets/Quality.css";
import { Grid } from "@material-ui/core";
import team from "../Images/team.png";
import Gps from "../Images/Gps.png";
import back from "../Images/Backtracking.png";

function Quality() {
    return (
        <>
            <div className="quality-section">
                <h1>Our Quality Control Measures</h1>
                <p>Learn how all our leaflet distribution campaigns are monitored and tracked</p>
                <Grid container spacing={1}>

                    <Grid lg={4} sm={12}>
                        <div className="gps">

                            <div>
                                <img src={Gps} alt="gps"></img>
                            </div>

                            <h3>Live GPS Monitoring</h3>
                            <p>At leaflet Distribution Team, we know you<br></br>
                                wouldn’t just hand over your leaflets to any<br></br>
                                Tom, Dick and I larry that has a bag. </p>

                        </div>
                    </Grid>

                    <Grid lg={4} sm={12}>
                        <div className="teams">

                            <div>
                                <img src={team} alt="team"></img>
                            </div>

                            <h3>Supervised Teams</h3>
                            <p>Our leaflet distribution teams consist of 4-5<br></br>
                                externally vetted, in house trained leaflet<br></br>
                                disteributors that work together as a team<br></br>
                                to deliver each campaign expertly.</p>




                        </div>
                    </Grid>

                    <Grid lg={4} sm={12}>
                        <div className="back">

                            <div>
                                <img src={back} alt="back"></img>
                            </div>
                            <h3>Backtracking</h3>

                            <p>As an extra quality control measure all<br></br>
                                our campaigns are backtracked by our<br></br>
                                distribution supervisors to ensure quality<br></br>
                                of distribution for every leafleting<br></br> 
                                campaign.</p>

                        </div>
                    </Grid>


                </Grid>
            </div>
        </>
    )
}

export default Quality