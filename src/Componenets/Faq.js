import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../Componenets/Faq.css";
import line from "../Images/line.png"
export default function Faq() {
    return (
        <div className='faq'>
            <h1>Frequently Asked Questions</h1>
            <img src={line} alt="line"></img>
            <Accordion className='first-faq'>
                <AccordionSummary 
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>What are the costs for your services?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        For full pricing of our leaflet distribution services, please see our pricing page.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='second-faq'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>What’s your minimum quantity?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        In London our minimum distribution size is 1000 leaflets. For all areas outside London our minimum is 5,000 leaflets.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion className='third-faq'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>How do you go about ensuring leaflets are delivered by your team?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        We’ve developed a well-built system to help put your mind at rest and to give you the best delivery rate possible.

                        We use GPS tracking devices that update every 5 seconds and show our distributors going up and down the street and even up and down people’s driveways.

                        Alongside our GPS trackers, we use the latest data by Royal mail, Experian and GeoPlanner for letterbox counts and to estimate the number of flyers required per street. All our campaigns are also supervised by non-distributing

                        supervisors who constantly provide random spot check on our distributors. This allows us to ensure all your leaflets are being delivered and makes sure they’re being properly posted through every letterbox.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion className='fourth-faq'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>How should we get our leaflets to you?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        You or your printers can deliver them to us or if you like, we can pick your leaflets up from or your printers, this will be at an additional cost.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion className='fifth-faq'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Can we make any special requests?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Absolutely!

                        Helping you achieve the best response rate from your campaign is key to us, because you’ll probably want to use us again if you achieve a great result!

                        To help you, we’re always open to trying any of your suggestions. We’ll even make some suggestions of our own, if we believe you could achieve a higher ROI. Just ask our team for more info.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion className='sixth-faq'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>What companies can benefit from your services?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Any company that has a local presence, or that provide a local service would benefit from our services.

                        Few examples are gyms and personal trainers, estate agents, takeaways & restaurants, mechanics, dealerships, cleaning companies, local authorities and many more.
                    </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion className='seventh-faq'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>What reasons are there for people using your services?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        When people tell us about why they use services like ours, they normally give the following reasons: A new store opening, getting or staying “top of peoples mind”, special offers, political campaigns, brand awareness and so on..
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion className='eigth'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>How long will it take for my leaflets to be delivered?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        This depends on the distribution method and the quantities involved. We will discuss this with you when you make your booking. However, our policy is always ‘less haste, more quality’.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion className='ninth'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>We’re looking for a printer as well, got any recommendations?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        You bet!

                        We offer a full in-house service for design and print. Our prices for leaflet printing and the quality of our leaflet design services are very hard to beat. Call us on 0208-935-5753 before you order your printing. We can save you money!
                    </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion className='tenth'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>what are the typical response rates?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Successful response to a leaflet depends on various factors such as the ‘effectiveness of the leaflet itself’, seasonal influences, the type of product or service you are marketing, whether your leaflet has been delivered on a solus leaflet distribution or shareplan leaflet distribution basis, the size of the market that you are trying to cater for, etc., so there are no ‘typical’ response rates. However, research by the Direct Marketing Association shows that on average, you can expect between 1-2% response rate from your campaign if done correctly. The date also shows that:

                        62-71% of consumers find door drops useful.

                        48% have visited a store, bought a product or sent for information as a result of a door drop.

                        79% keep, pass on, read or glance at door drops
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion className='eleven'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Why do some areas/postcodes cost more than others?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        There are some postcode areas where properties are a lot more spread out than others. These types of areas take longer to complete compared to built-up areas. We can map the area and quote the cost of your campaign depending on the area being targeted.
                    </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion  className='twelve'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>How do i place an order?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Call us on 0208 935 5753 or send us a message using the form on the right.
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}
