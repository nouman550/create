import "../Componenets/Tabs.css";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import React from "react";
import { Typography } from '@mui/material';

function Tabss() {

  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="tabs">
        <Box sx={{ width: '100%' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab className="tab-one" value="one" label="Home Explained" ></Tab>
            <Tab className="tab-two" value="two" label="Home Guides" />
            <Tab className="tab-three" value="three" label="Home Articles" />
            <Tab className="tab-four" value="four" label="Home Help" />
          </Tabs>

          <Box sx={{ padding: 2 }}>
            {value === 'one' && (
              <Box sm={12}>
                <Typography className="tabs-content" ><p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others - which creates a distinct visual impression. There is now an abundance of
                 readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to<br></br> 
                <span className="span-one"> the classic Lorem Ipsum texts are often amusing and tell short,
                 funny or nonsensical stories.</span><br></br></p>


                 <p> There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to<br></br> 
                  <span className="span-one">the classic Lorem Ipsum texts are
                   often amusing and tell short, funny or nonsensical stories.</span><br></br></p>

                 <p> It can feel like that, but I have to remind myself that I don’t actually believe success comes from making “ultra productive, wise decisions” all<br></br> 
                  
                  <span className="span-three">the time.

                  The “continually-trying-to-figure-things-out” shuffle goes hand-in-hand with a<a href="home.com"> professional creative life.</a></span><br></br></p>

                 <p> You can practice <a href="https://www.youtube.com/watch?v=90PFRxO96zU">mindful</a> decision-making to increase your chances of a favorable outcome, but that doesn’t make you immune to challenges.<br></br></p>

                <p> <span className="span-four"> And sometimes challenges are exactly what we need to get clear about our priorities and make the next right choice.</span><br></br></p>

                 <p>To remind us that working toward a goal is typically more awkward than elegant, here are seven — seemingly unpleasant — signs of progress.<br></br>
                  Notions that everyone else who has some form of success achieved it by taking smart, consecutive steps that always led them forward,<br></br><span className="span-five"> 
                    while you:</span><br></br></p> 

                 <p> One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others - which creates a distinct visual impression. There is now an abundance of
                  readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to<span className="span-six" >  the classic Lorem Ipsum texts are often amusing and tell short,
                  funny or nonsensical stories.</span><br></br></p>

                  There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to <span className="span-six">the classic Lorem Ipsum texts are
                  often amusing and tell short, funny or nonsensical stories.</span></Typography>
              </Box>
            )}
            {value === 'two' && (
              <Box sm={12}>
                <Typography>The second tab</Typography>
              </Box>
            )}
            {value === 'three' && (
              <Box sm={12}>
                <Typography>The third tab</Typography>
              </Box>
            )}

            {value === 'four' && (
              <Box sm={12}>
                <Typography>The fourth tab</Typography>
              </Box>
            )}
          </Box>

        </Box>



      </div>
    </>
  )
}

export default Tabss