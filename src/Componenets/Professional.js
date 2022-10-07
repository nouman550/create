import "../Componenets/Professional.css";
import { Button, Grid } from "@material-ui/core";
import pro from "../Images/pro.png";

function Professional() {
    return (
        <>
            <div className="pro-section">
                
                <Grid container spacing={2}>

                    <Grid lg={6} sm={12}>
                        <div className="competitive">

                           <h1>Professional Leaflet Distribution<br></br>
                              <span>At Competitive Prices</span></h1>
                        
                        <Button className="price">See pricing</Button>
                        </div>
                    </Grid>

                    <Grid lg={6} sm={12}>
                        

                            <div className="pro">
                                <img src={pro} alt="pro"></img>
                            </div>

                          
                    </Grid>

                   


                </Grid>
            </div>
        </>
    )
}

export default  Professional