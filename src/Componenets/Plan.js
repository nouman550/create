import { Grid } from "@material-ui/core"
import consult from "../Images/consult.png";
import audience from "../Images/audience.png";
import tick from "../Images/tick.png";
import "../Componenets/Plan.css";
import creative from "../Images/creative.png";
import flyers from "../Images/flyers.png";
import delivery from "../Images/delivery.png";

function Plan() {
    return (
        <>

            <div className="plan">
                <h1>Plan. Execute. Repeat</h1>
                <p>Our cyclical process allows us to test, tweak and refine your print marketing efforts to ensure<br></br>
                    you gain maximum results</p>


                <Grid container spacing={1}>

                    <Grid lg={6} sm={12}>
                        <div className="main-circle">
                        <div className="small-circle">
                         </div>
                        </div>
                        <div className="consult-pic">

                            <img src={consult} alt="consult"></img>


                        </div>


                    </Grid>




                    <Grid lg={6} sm={12}>
                        <div className="first-stop">
                            <h1>1</h1>
                        </div>
                        <div className="consult-text">



                            <h3 className="consult-head">CONSULTATION</h3>
                            <h3 className="individual">Let us understand your individual business goals</h3>
                            <p className="initial-para">Your initial consultation is made up of two stages.</p>

                            <img className="anaylsis-tick" src={tick} alt="tick"></img><p className="analysis-para">An analysis so we can establish your ideas, goals and budget</p>
                            <img className="compain-tick" src={tick} alt="tick"></img><p className="compain-para">We’ll establish the type of campaign that’s appropriate for<br></br>
                                <span className="budget-span"> your goals and budget</span> </p>

                        </div>
                    </Grid>

                    <Grid lg={6} sm={12}>
                        <div className="audience-text">

                            <h3 className="audience-head">AUDIENCE</h3>
                            <h3 className="hunt-head">We’ll hunt down & determine the best audience</h3>
                            <p>After your consultation, we'll use Experian software to delve into<br></br>
                                <span className="target-span">  targeting the most appropriate demographic for your print marketing</span> <br></br>
                                <span className="compain-span">campaign</span> </p>

                        </div>
                    </Grid>

                    <Grid lg={6} sm={12}>
                    <div className="main-circle2">
                        <div className="small-circle2">
                         </div>
                        </div>
                        <div className="second-stop">
                            <h1>2</h1>
                        </div>
                        <div className="audience-pic">
                            <img src={audience} alt="audience"></img>


                        </div>
                    </Grid>


                    <Grid lg={6} sm={12}>
                    <div className="main-circle3">
                        <div className="small-circle">
                         </div>
                        </div>
                        <div className="creative-pic">

                            <img src={creative} alt="creative"></img>


                        </div>


                    </Grid>




                    <Grid lg={6} sm={12}>
                        <div className="third-stop">
                            <h1>3</h1>
                        </div>
                        <div className="design-text">



                            <h3 className="design-head">DESIGN</h3>
                            <h3 className="artwork">Our creative team will design your campaign artwork</h3>

                            <p>We have our own in-house design team at Mr Flyer, specialising in<br></br>
                                <span className="award-para">  creating actionable designs and artwork that are both award-winning,</span><br></br>
                                <span className="proven-para">and proven to deliver results</span> </p>

                        </div>
                    </Grid>




                    <Grid lg={6} sm={12}>
                        <div className="print-text">

                            <h3 className="print-head">PRINT</h3>
                            <h3 className="flyer-head">We’ll professionally print & store your campaign flyers</h3>
                            <p>As a printing.com partner, there’s no end to our print range. We’ll<br></br>
                                <span className="special-span"> print your specially designed campaign in the most appropriate way.</span><br></br>
                                For example, if you offer a budget product or service, it would be<br></br>
                                <span className="appropriate"> appropriate to print your collateral on thinner 130gsm paper.</span> <br></br>
                                However, if you offer high-end products and services, it would be<br></br>
                                <span className="appro-spans">   appropriate to print your marketing materials on a thicker,</span><br></br>
                                <span className="paper-span">300-400gsm paper.</span> </p>

                        </div>
                    </Grid>

                    <Grid lg={6} sm={12}>
                    <div className="main-circle2">
                        <div className="small-circle2">
                         </div>
                        </div>
                        <div className="fourth-stop">
                            <h1>4</h1>
                        </div>
                        <div className="flyers-pic">
                            <img src={flyers} alt="flyers"></img>


                        </div>
                    </Grid>





                    {/*Delivery section*/}

                    <Grid lg={6} sm={12}>
                    <div className="main-circle3">
                        <div className="small-circle">
                         </div>
                        </div>
                        <div className="delivery-pic">

                            <img src={delivery} alt="delivery"></img>


                        </div>


                    </Grid>




                    <Grid lg={6} sm={12}>
                        <div className="fifth-stop">
                            <h1>5</h1>
                        </div>
                        <div className="delivery-text">



                            <h3 className="delivery-head">DELIVERY</h3>
                            <h3 className="delivery-counts">We’ll deliver your campaign right where it counts</h3>

                            <p>We can deliver your print marketing nationwide, so no location is off<br></br>
                              <span className="limit-span"> limits. Whether you’re targeting businesses or consumers, our targeted</span><br></br>
                               <span className="distri-span"> distribution service is suitable for everyone. We provide both</span><br></br>
                               <span className="d2d-span">door-to-door distribution and direct mail.</span>  </p>

                        </div>
                    </Grid>





                </Grid>



            </div>

        </>
    )
}


export default Plan