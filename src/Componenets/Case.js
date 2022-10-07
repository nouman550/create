
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import '../Componenets/Case.css';
import easy from "../Images/easy.png";
import uber from "../Images/uber.png";
import snapy from "../Images/snapy.png";

function Case() {
    return (
        <>
            <div className="case-section">
                <h1>Case Studies</h1>
                <p>Read how our leaflet advertising campaigns deliver great result for brands like yours!</p>
                <Grid container spacing={1}>

                    <Grid lg={4} sm={12}>
                        <div className="snappy">

                            <div>
                                <img src={snapy} alt="snapy"></img>
                            </div>

                            <h3>Snappybox</h3>
                            <p>“368% Return on Investment”</p>
                            <Button className="story">Read Client Story</Button>
                        </div>
                    </Grid>

                    <Grid lg={4} sm={12}>
                        <div className="easy">

                            <div>
                                <img src={easy} alt="easy"></img>
                            </div>

                            <h3>Easygroup</h3>
                            <p>“Increase in traffic & sales”</p>



                            <Button className="story">Read Client Story</Button>
                        </div>
                    </Grid>

                    <Grid lg={4} sm={12}>
                        <div className="uber">

                            <div>
                                <img src={uber} alt="uber"></img>
                            </div>
                            <h3>Uber</h3>

                            <p>“83 leads in the very first week”</p>



                            <Button className="story">Read Client Story</Button>
                        </div>
                    </Grid>


                </Grid>
            </div>
        </>
    )
}

export default Case