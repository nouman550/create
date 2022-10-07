import "../Componenets/Services.css";
import design from "../Images/design.png";
import leaflet from "../Images/leaflet.png";
import printing from "../Images/printing.png"
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core"
function Services() {
    return (
        <>
            <div className="Service-section">
                <h1>Our Services</h1>
                <p>Learn more about services and how we help brands achieve great result</p>
                <Grid container spacing={1}>

                    <Grid lg={4} sm={12}>
                        <div className="distribution">
                            <img src={leaflet} alt="active"></img>
                            <h3>Leafelt Distribution</h3>
                            <p>Unique leflet distribution sustem that<br></br>
                                gets youru more responses more<br></br>
                                leads and more business</p>
                                <Button className="pricing">See pricing</Button>
                        </div>
                    </Grid>

                    <Grid lg={4} sm={12}>
                        <div className="printing">
                            <img src={printing} alt="active"></img>
                            <h3>Leaflet Printing</h3>
                            <p>Need printing for your campaign?<br></br>
                                Save up to 30% on your leaflets and<br></br>
                                brochure printing today!  </p>



                                <Button className="pricing">See pricing</Button>
                        </div>
                    </Grid>

                    <Grid lg={4} sm={12}>
                        <div className="design">
                            <img src={design} alt="active"></img>
                            <h3>Leaflet Design</h3>

                            <p>Our designers will design you a<br></br>
                                printing product that you’ll be proud<br></br>
                                of, Say bye to tacky designs! </p>



                            <Button className="pricing">See pricing</Button>
                        </div>
                    </Grid>


                </Grid>
            </div>
        </>
    )
}

export default Services