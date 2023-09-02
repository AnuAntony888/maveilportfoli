import React from "react";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import TextField from "@mui/material/TextField";
import styles from "../styles/Contact.module.css";
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { AboutCard, ContactCard, TypographyText } from "../Reuse/Reuse";
const Contact = () => {

  const isSmallScreen = useMediaQuery("(max-width:769px)");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jyoqpppnxb",
        "templaorrrte_3nxjfjn",
        form.current,
        "9zScA-1-7777-888V-BCm8E_Ck"
      )
      .then(
        (result) => {
          console.log(result.text, "console.text");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <Box id='contactme'>
        <Grid
          container
          spacing={10}
          sx={{ pl: "10%", pr: "10%", pt: "5%", pb: "10%",bgcolor:'#f4af1b' }}
        >
          <Grid item xs={12}>
            <TypographyText Typography={"Get In Touch"} color="white" />
            <TypographyText
              Typography={"Contact Me"}
              color="black"
              variant={!isSmallScreen ? "h2" : "h5"}
            />
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Grid container spacing={10}>
            {Data.map((data, index) => (
            <Grid item  xs={12} key={index}>
              <ContactCard
                IconButtoncontent={data.IconButtoncontent}
                Typography={data.Typography}
                Typographybody={data.Typographybody}
                href={data.href}
              />
            </Grid>
          ))}
            </Grid>
          </Grid>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <Box>
              <Grid container spacing={10}>
                <Grid item xs={12}>
                  <form action="" ref={form} onSubmit={sendEmail}>
                    <Grid item xs={12} sx={{ pb: "2%" }}>
                      <input
                        fullWidth
                        id="fullWidth"
                        type="text"
                        placeholder="Your Full Name"
                        name="name"
                        required
                        className={styles.textfielsttyles}
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ pb: "2%" }}>
                      <input
                        fullWidth
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        required
                        className={styles.textfielsttyles}
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ pb: "2%" }}>
                      <textarea
                        placeholder="Your message"
                        name="message"
                        rows="7"
                        className={styles.textfielsttyles}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ pb: "2%" }}>
                      <Button
                        variant="contained"
                        type="submit"
                        sx={{
                          bgcolor: "black",
                          color: "white",
                          fontWeight: "bolder",
                          border: "1px solid #f4af1b",
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </form>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Contact;
const Data = [
  {
    IconButtoncontent: (
      
        <MailIcon sx={{ color: "black" }} />
      
    ),
    Typography: "Email",
    Typographybody: "maveli@gmail.com",
    href:'mailto:maveli@gmail.com'
  },
  {
    IconButtoncontent: (
      
        <WhatsAppIcon style={{ color: "black"  }} />
      
    ),
    Typography: "WhatsApp",
    Typographybody: " +91 999999999",
    href:'https://wa.me/91999999999'
  },

];
