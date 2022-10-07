import "../Pages/Home.css";
import bricks from "../Images/bricks.png";
import fitness from "../Images/fitness.png";
import ham from "../Images/ham.png";
import kumon from "../Images/kumon.png";
import council from "../Images/council.png";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import group from "../Images/group.png";
import testimonl from "../Images/testimonal.png";

import business from "../Images/business-stars.png";
import metro from "../Images/metro.png";
import print from "../Images/print.png";
import forbes from "../Images/forbes.png";
import enter from "../Images/enterp.png";
import welcome from "../Images/welcome.png";
import choose from "../Images/choose.png";
import logo from "../Images/logo.png";

import tick from "../Images/tick.png"

import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import Services from "../Componenets/Services";
import Response from "../Componenets/Response";
import Reviews from "../Componenets/Reviews";
import Feature from "../Componenets/Feature";
import Plan from "../Componenets/Plan";
import Quality from "../Componenets/Quality";
import Professional from "../Componenets/Professional";
import Case from "../Componenets/Case";
import Areas from "../Componenets/Areas";
import Business from "../Componenets/Business";
import Faq from "../Componenets/Faq";
import Tabss from "../Componenets/Tabss";


function Home() {
    return (
        <>

            <div className="home-template">
                <Grid container spacing={1}>

                    <Grid lg={7} sm={12}>
                        <div className="delivery">

                            <h1>Get<span className="bold-span"> More Calls, More Leads &<br></br>
                                Better Response Rates</span> From<br></br>
                                <span className="compain">Your Campaigns</span> </h1>
                            <p>Using our proven, Industry first<span className="unique"> Unique Leaflet Delivery System™</span></p>
                            <Button className="see-pricing">Click to See Pricing</Button>

                        </div>

                    </Grid>


                    <Grid lg={5} sm={12}>
                        <div className="group">
                            <img className="group-img" src={group} alt="group"></img>
                            <img className="testimonal-img" src={testimonl} alt="testimonal"></img>

                        </div>
                    </Grid>




                </Grid>
            </div>




            <div className="home-logos">
                <Grid container spacing={1}>

                    <Grid lg={2} sm={6}>
                        <div className="council">

                            <img src={council} alt="couoncil"></img>

                        </div>

                    </Grid>


                    <Grid lg={2} sm={6}>
                        <div className="kumon">
                            <img src={kumon} alt="kumon"></img>
                        </div>
                    </Grid>

                    <Grid lg={2} sm={6}>
                        <div className="ham">
                            <img src={ham} alt="group"></img>


                        </div>
                    </Grid>

                    <Grid lg={2} sm={6}>
                        <div className="fitness">
                            <img src={fitness} alt="group"></img>


                        </div>
                    </Grid>

                    <Grid lg={2} sm={6}>
                        <div className="bricks">
                            <img src={bricks} alt="group"></img>


                        </div>
                    </Grid>




                </Grid>
            </div>



            {/** Greate trusted part of the home page from now on*/}

            <div className="home-trust">



                <div className="business-home">
                    <h1 >Trusted By<br></br>
                        <span className="trusted">4,000+ Businesses</span> </h1>

                    <img src={business} alt="stars"></img>
                    <h3>4.8/5</h3>
                    <Button className="see-all"  > See All<TrendingFlatIcon style={{ color: "blue" }} /> </Button>
                </div>

                <div className="business-logos">
                    <h3>“They seem to have shaken up an industry previously associated with certain unscrupulous<br></br>
                        behaviour and revolutionised the way things are done.”</h3>
                    <Grid container spacing={1}>

                        <Grid lg={3} sm={6}>
                            <div className="print">

                                <img src={print} alt="print"></img>


                            </div>

                        </Grid>


                        <Grid lg={3} sm={6}>
                            <div className="enter">
                                <img src={enter} alt="enter"></img>
                            </div>
                        </Grid>

                        <Grid lg={3} sm={6}>
                            <div className="forbes">
                                <img src={forbes} alt="forbes"></img>


                            </div>
                        </Grid>

                        <Grid lg={3} sm={6}>
                            <div className="metro">
                                <img src={metro} alt="metro"></img>


                            </div>
                        </Grid>






                    </Grid>


                </div>


            </div>

            {/* welcome section for homepage */}

            <div className="welcome">



                <Grid container spacing={1}>

                    <Grid lg={6} sm={12}>
                        <div className="welcome-pic">

                            <img src={welcome} alt="welcome"></img>


                        </div>


                    </Grid>


                    <Grid lg={6} sm={12}>
                        <div className="welcome-text">
                            <h1>WelCome To</h1>
                            <img src={logo} alt="logo"></img>
                            <p>London & the South East's biggest leaflet distributor delivering over<br></br>
                               <span className="industry-sapn"> 1,000,000 leaflets a month for local businesses and blue chip companies.</span><br></br>
                              <span className="client-span"> We <span className="sale">generate up to 30% more leads and sales</span> for our partners compared</span> <br></br>
                               <span className="unique-span"> to other leaflet distribution companies using our industry first Unique</span><br></br>
                               <span className="delivery-span"> Leaflet Delivery System (ULDS™).</span></p>
                        </div>
                    </Grid>

                    <Grid lg={6} sm={12}>
                        <div className="choose-text">

                            <h1>Why Choose</h1>
                            <img src={logo} alt="idt" />
                            <h1 className="question">?</h1>
                            <p>At Leaflet Distribution Team, we offer an honest, reliable and professional<br></br>
                             <span className="leaflet">    leaflet distribution service that you can rely on to grow your business, deliver</span><br></br>
                                more qualified leads and generate better return on your investment (ROI). <br></br><br></br>

                                <span className="industry-sapn">Having been in the leaflet distribution industry for well over 15 years, and with</span><br></br>
                                <span className="client-span">1000s of satisfied clients, you can rest assured knowing you are working with the</span><br></br>
                                <span className="brand-span">most trusted brand in the industry.</span>
                            </p>

                            <div className="qualities">
                                <img className="quality-one" src={tick} alt="tick"></img> <p className="quality-pic-one">We are the only company that offer ULDS™</p>
                                <img className="quality-two" src={tick} alt="tick"></img> <p className="quality-pic-two">Audience segmentation and demographic mapping </p>
                                <img className="quality-three" src={tick} alt="tick"></img> <p className="quality-pic-three">Campaign planning, targeting & tracking</p>
                                <img className="quality-four" src={tick} alt="tick"></img> <p className="quality-pic-four">In-house trained leaflet distribution teams</p>
                                <img className="quality-five" src={tick} alt="tick"></img> <p className="quality-pic-five">Managed and supervised campaigns </p>
                                
                            </div>

                        </div>
                    </Grid>

                    <Grid lg={6} sm={12}>
                        <div className="choose-pic">
                            <img src={choose} alt="choose"></img>


                        </div>
                    </Grid>






                </Grid>

                  


            </div>

            <Services/>
            <Response/>
            <Reviews/>
            <Feature/>
            <Plan/>
            <Quality/>
            <Professional/>
            <Case/>
             <Areas/>
             <Business/>
             <Faq/>
             <Tabss/>
        </>
    )
}

export default Home