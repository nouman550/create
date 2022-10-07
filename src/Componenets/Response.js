
import { Grid } from "@material-ui/core"
import "../Componenets/Response.css";
import revenue from "../Images/revenue.png";
import arrow from "../Images/arrow.png";
import user from "../Images/user.png"
function Response() {
    return (
        <div className="response-sect">
            <Grid container spacing={1}>

                <Grid lg={4} sm={12}>
                    <div className="responses">

                        <div className="symbols">
                        <div>
                           
                           <img src={arrow} alt="arrow"></img>

                        </div>
                       </div>

                            <h3>
                                30% More Responses
                            </h3>
                            <p>
                                On average we get 30% more responses<br></br>
                                And leads for our partners
                            </p>
                        

                    </div>
                </Grid>

                <Grid lg={4} sm={12}>
                    <div className="rate">
                    <div className="symbols">
                        <div>
                     
                     <img src={user} alt="user"></img>

                        </div>
                       </div>

                      

                            <h3>
                                98% Retention Rate
                            </h3>
                            <p>
                                We are in it for the long run & 98% of<br></br>
                                Our clients also stay for the long haul
                            </p>
                       

                    </div>
                </Grid>

                <Grid lg={4} sm={12}>
                    <div className="revenue">
                    <div className="symbols">
                        <div>
                         <img src={revenue} alt="revenue"></img>

                        </div>
                       </div>

                        

                            <h3>
                                £200+ Million in Revenue
                            </h3>
                            <p>
                                We've driven over £200+ million in direct <br></br>
                                marketing revenue for our clients
                            </p>
                        

                    </div>
                </Grid>

            </Grid>
        </div>
    )
}

export default Response