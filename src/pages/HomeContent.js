import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AOS from "aos";
import styles from "../styles/About.module.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { HomeCard, TypographyText } from "../Reuse/Reuse";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Typography } from "@mui/material";

const HomeContent = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            lg={12}
            md={12}
            sm={12}
            className={styles.trainContainer}
          >
            <Typography
              className={styles.train}
              fontWeight="bolder"
              variant={isSmallScreen ? "h4" : "h2"}
              textAlign={"left"}
            >
            Hi,<br />I &apos;m Mahabali
            </Typography>{" "}
            &nbsp;&nbsp;
            <img
              src={"/mav.png"} // Replace with your image path
              alt="Moving Train"
              width={isSmallScreen ? "90%" : "30%"}
              className={styles.train}
            />
          </Grid>
        </Grid>
        <Grid container spacing={10} sx={{ p: "10%",bgcolor:'black' }}>
          {Data.map((data, index) => (
            <Grid item xs={12} lg={4} md={4} sm={12} key={index}>
              <HomeCard
                Typography={data.Typography}
                Typographybody={data.Typographybody}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default HomeContent;
const Data = [
  {
    Typography: "What is the real story of Mahabali?",
    Typographybody:
      "Legend has it that Mahabali, the mythical beloved king of Kerala, visits his subjects on the day of Thiruvonam after ascending from the netherworld. Mahabali, a devotee of Lord Vishnu, was the son of Virochan and the grandson of Prahalad. He was a righteous and charitable man and treated all his subjects equally. ",
  },
  {
    Typography: "Why did Vishnu killed Mahabali?",
    Typographybody:
      "The Vamana avatars' purpose was to defeat the demon king Mahabali. The demon king had ruled that the Gods no longer owned the heavens and the Earth, and so Lord Vishnu took on the form of his fifth avatar Vamana to defeat the king and restore balance to Earth. ",
  },
  {
    Typography: "Who is Mahabali in Onam?",
    Typographybody:
      "According to Hindu mythology, Mahabali was a generous and prosperous ruler who was sent to the netherworld by Lord Vishnu. However, Vishnu granted him the opportunity to visit Kerala once a year. This year, Onam will be celebrated on August 29, 2023. ",
  },
  {
    Typography: "Who killed King Mahabali?",
    Typographybody:
      "King Mahabali is also found in the mythologies of Jainism. He is the sixth of nine Prativasudevas (Prati-narayanas, anti-heroes). He is depicted as an evil king who schemed and attempted to rob Purusha's wife. He is defeated and killed by Purusha.",
  },
  {
    Typography: "What was Mahabali last wish?",
    Typographybody:
      "The King then offered his head for his last step, pushing him to the netherworld. However, the King pleaded Lord Vishnu for one last wish - to visit his people once every year. Onam is hence celebrated as King Mahabali's homecoming.",
  },
  {
    Typography: "What is the moral of Mahabali?",
    Typographybody:
      "Mahabali never allowed his mind to be lost. Today, these teachings have more relevance because most of us never value the power and strength of our mind. Our religion teaches God is always with us in the form intelligence and wisdom, use and utilize this and make our mind strong and powerful.in"
  },
];
