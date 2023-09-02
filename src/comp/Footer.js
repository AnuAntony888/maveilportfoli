import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import useMediaQuery from "@mui/material/useMediaQuery";
import { TypographyText } from '../Reuse/Reuse';
import styles from '../styles/Contact.module.css'
import {navItems} from './Header'
import Button from "@mui/material/Button";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Footer = () => {
    const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <div >
       <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
<img src='/logo.jpg' alt='' width={'250px'}     className={styles.footerimage}/>
<TypographyText
                variant={"h4"}
                component="div"
                color={"black"}
                fontWeight={"bolder"}
             
                Typography={<>Maveli</>}
              />
        </Grid>
        <Grid item xs={12}>
        <Box>
                {navItems.map((item) => (
                  <Button key={item} sx={{ color: "black" ,fontWeight:'bolder'}}>
                    {item}
                  </Button>
                ))}
              </Box>
              <div className="footer_socials">
    <a href='https://www.linkedin.com/in/Mavile/' className="social" target='_blank'><LinkedInIcon/></a>
    <a href='https://github.com/maveli' className="social" target='_blank'><GitHubIcon/></a>
      <a href='https://wa.me/99999999' className="social" target='_blank'><WhatsAppIcon/></a>
    </div>
    <div className="footer_copyright">
      <small>@copyright Maveli</small>
    </div>
        </Grid>
        </Grid>
        </Box>
    </div>
  )
}

export default Footer
