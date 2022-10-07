import "../Componenets/Business.css";
import {Button, Grid } from "@material-ui/core";
import car from "../Images/car.png";
import edu from "../Images/edu.png"
import event from "../Images/event.png";
import food from "../Images/food.png"
import gym from "../Images/gym.png";
import healthy from "../Images/healthy.png"
import travel from "../Images/travel.png";
import agent from "../Images/agent.png"
function Business() {
    return (
        <>
            <div className="business-section">
                
            
                       <div className="example">
                        <h1>
                        Please see examples of<br></br>
                         the types of businesses<br></br>
                          which benefit from our<br></br>
                           <span>expertise...</span>
                        </h1>
                        <Button className="show">Show More</Button>
                       </div>

                    
                  
                       <div className="white-box">

                      
                  <Grid container spacing={2}>
                    
                        
                        <Grid lg={3} sm={12}>
                           <div className="agent">
                            <div>
                              <img src={agent} alt="agent"></img> 
                            </div>
                            <h2>
                                Estate Agents
                            </h2>
                           </div>
                        </Grid>

                        <Grid lg={3} sm={12}>
                            <div className="food">
                            <div>
                            <img src={food} alt="food"></img>
                            </div>
                            <h2>
                            Food Franchises
                            </h2>
                            </div>
                        </Grid>

                        <Grid lg={3} sm={12}>
                            <div className="gym">
                             
                            <div>
                            <img src={gym} alt="agent"></img>
                               </div>
                               <h2>
                               Gyms
                               </h2>

                            </div>
                        </Grid>

                        <Grid lg={3} sm={12}>
                            <div className="event">
                            <div>
                            <img src={event} alt="agent"></img>
                            </div>
                            <h2>
                            Event
                            </h2>
                            </div>
                        </Grid>

                        <Grid lg={3} sm={12}>
                           <div className="edu">
                           <div>
                           <img src={edu} alt="agent"></img>
                               </div>
                               <h2>
                               Education
                               </h2>
                           </div>
                        </Grid>

                        <Grid lg={3} sm={12}>
                            <div className="travel">
                            <div>
                            <img src={travel} alt="agent"></img>
                            </div>
                            <h2>
                            Travel
                            </h2>
                            </div>
                        </Grid>

                        <Grid lg={3} sm={12}>
                            <div className="car">
                            <div>
                            <img src={car} alt="agent"></img>
                               </div>
                               <h2>
                               Car Garege
                               </h2>
                            </div>
                        </Grid>

                        <Grid lg={3} sm={12}>
                            <div className="healthy">
                            <div>
                            <img src={healthy} alt="agent"></img>
                            </div>
                            <h2>
                            Health & Beauty
                            </h2>
                            </div>
                        </Grid>

                    
                      
                          
                    </Grid>

                   


                
                </div>
            </div>
        </>
    )
}

export default  Business