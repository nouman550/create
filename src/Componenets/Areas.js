import "../Componenets/Areas.css";
import {Grid } from "@material-ui/core";
import tick from "../Images/tick.png";

function Areas() {
    return (
        <>
            <div className="Area-section">
                <h1>Other Leaflet Distribution Areas We Cover<br></br> 
                In London</h1>
                <p>Car insurance is a legal requirement. If you own or drive a car in the UK, the law says you must have at least third-party only insurance. You<br></br>
                 must have insurance, even if you don’t drive your car, and you keep it parked on a road, driveway or in a garage. This applies to all drivers, and<br></br>
                  you can find car insurance for.</p>
                <Grid container spacing={2}>

                    <Grid lg={6} sm={12}>
                        <div className="young">
                      <img className="tick-one" src={tick} alt="tick"></img> <p className="line-one">Youg Drivers: If you’re a driver aged between 17 and 24</p> 
                      <img className="tick-two" src={tick} alt="tick"></img> <p className="line-two">Learner Drivers: If you’re taking lessons with a provisional licence </p>
                      <img className="tick-two" src={tick} alt="tick"></img> <p className="line-three">Over 50s: If you’re a driver aged 50 or over</p>
                        </div>
                    </Grid>

                    <Grid lg={6} sm={12}>
                        
                    <div className="drivers">
                      <img className="tick-four" src={tick} alt="tick"></img> <p className="line-four">Names  Drivers: If you want another driver on your policy</p>
                      <img className="tick-five" src={tick} alt="tick"></img> <p className="line-five">New Drivers: If you’re recently passed your driving test </p>
                      <img className="tick-five" src={tick} alt="tick"></img> <p className="line-six">Disabled Drivers: If you need extra protection because of your disability</p>
                        </div>

                          
                    </Grid>

                   


                </Grid>
            </div>
        </>
    )
}

export default  Areas