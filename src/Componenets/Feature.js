import "../Componenets/Feature.css";
import { Grid } from "@material-ui/core";
import business from "../Images/business.png";
import able from "../Images/able.png";
import buzz from "../Images/buzz.png";
import yahoo from "../Images/yahoo.png";
import standard from "../Images/standard.png"
import line from "../Images/line.png";
function Feature() {
    return (
        <>
            <div className="feature-section">
                <h1>Also Featured In</h1>
                <img src={line} alt="line"></img>
                <Grid container spacing={1}>

                    <Grid lg={2} sm={12}>
                        <div className="business">
                            <img src={business} alt="business"></img>
                        </div>
                    </Grid>

                    <Grid lg={3} sm={12}>
                        <div className="able">
                            <img src={able} alt="able"></img>
                        </div>
                    </Grid>

                    <Grid lg={2} sm={12}>
                        <div className="yahoo">
                            <img src={yahoo} alt="yahoo"></img>
                        </div>
                    </Grid>
                    <Grid lg={3} sm={12}>
                        <div className="buzz">
                            <img src={buzz} alt="buzz"></img>
                        </div>
                    </Grid>

                    <Grid lg={2} sm={12}>
                        <div className="standard">
                            <img src={standard} alt="standard"></img>
                        </div>
                    </Grid>


                </Grid>
            </div>
        </>
    )
}

export default Feature