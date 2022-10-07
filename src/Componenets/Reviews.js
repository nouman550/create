import { Grid } from "@material-ui/core"
import stars from '../Images/stars.png';
import active from '../Images/active.png';
import diamond from '../Images/diamond.png';
import night from '../Images/night.png'
import { Button } from "@material-ui/core";
import "../Componenets/Reviews.css";
import line from '../Images/line.png'
function Reviews() {
    return (
        <>
            <div className="review-section">
                <h1>Don't Listen To Us – Listen To Them!</h1>
                <img className="line" src={line} alt="line"></img>
                <Grid container spacing={1}>

                    <Grid lg={4} sm={12}>
                        <div className="active-sect">
                            <img src={active} alt="active"></img>
                            <p>“One disadvantage of Lorum Ipsum is that<br></br>
                                in Latin certain letters appear more<br>
                                </br> frequently than others - which creates a <br></br>
                                distinct visual impression.” </p>

                            <img className="stars" src={stars} alt="stars"></img>

                            <Button className="reviews">Read More Reviews</Button>
                        </div>
                    </Grid>

                    <Grid lg={4} sm={12}>
                        <div className="diamond">
                            <img src={diamond} alt="active"></img>
                            <p>“One disadvantage of Lorum Ipsum is that<br></br>
                                in Latin certain letters appear more<br>
                                </br> frequently than others - which creates a <br></br>
                                distinct visual impression.” </p>

                            <img className="stars" src={stars} alt="stars"></img>

                            <Button className="reviews">Read More Reviews</Button>
                        </div>
                    </Grid>

                    <Grid lg={4} sm={12}>
                        <div className="night">
                            <img src={night} alt="active"></img>
                            <p>“One disadvantage of Lorum Ipsum is that<br></br>
                                in Latin certain letters appear more<br>
                                </br> frequently than others - which creates a <br></br>
                                distinct visual impression.” </p>

                            <img className="stars" src={stars} alt="stars"></img>

                            <Button className="reviews">Read More Reviews</Button>
                        </div>
                    </Grid>


                </Grid>
            </div>
        </>
    )
}

export default Reviews