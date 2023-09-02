import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styles from "../../styles/About.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import WorkIcon from "@mui/icons-material/Work";
import { VscFolderLibrary } from "react-icons/vsc";
import { AboutCard, TypographyText } from "../../Reuse/Reuse";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import Image from "next/image";
import Testmonials from "../Testmonials";
import { CardMedia } from "@mui/material";
const Aboutme = () => {
  const isSmallScreen = useMediaQuery("(max-width:769px)");
  const isSmallScreen2 = useMediaQuery("(max-width:400px)");

  return (
    <div id="aboutme">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{ bgcolor: "#F4AF1B" }}>
          <Grid item xs={12}>
            <TypographyText
              Typography={"Legend of Mahabali"}
              variant={!isSmallScreen ? "h2" : "h5"}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} sx={{ p: "5%" }}>
              {gridData.map((item, index) => (
                <Grid
                  item
                  xs={12}
                  lg={12}
                  md={12}
                  key={index}
                  sx={{
                    textAlign: "left",
                    lineHeight: "1.5rem",
                    fontSize: "1.2rem",
                  }}
                >
                  {item.content}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ bgcolor: "black", p: "5%" }}>
        {imageData.map((data,index) => (
        <Grid item lg={ 4} md={4} sm={6} xs={12} key={data.id}>
          <div
            data-aos={data.aos}
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <CardMedia
              sx={{ height:250 ,borderRadius: '50%',width:'100%' }}
              image={data.image}
              title={data.title}
            />
          </div>
        </Grid>
      ))}

        </Grid>
        <Grid
          container
          spacing={10}
          sx={{ pl: "15%", pr: "15%", pt: "5%", pb: "10%", bgcolor: "black",}}
        >

          
          {Data.map((data, index) => (
            <Grid item lg={4} md={4} sm={12} xs={12} key={index}>
              <AboutCard
                IconButtoncontent={data.IconButtoncontent}
                Typography={data.Typography}
                Typographybody={data.Typographybody}
              />
            </Grid>
          ))}
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Image
              src={"/about2.png"}
              className={styles.aboutimg2}
              width={isSmallScreen2 ? 250 : 400}
              height={isSmallScreen2 ? 250 : 400}
            />
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            sx={{ marginTop: !isSmallScreen ? "100px" : "0" }}
          >
            <TypographyText
              color="white"
              fontSize={"1.2rem"}
              textAlign="left"
              Typography={
                "  Legend has it that Mahabali, the mythical beloved king of Kerala, visits his subjects on the day of Thiruvonam after ascending from the netherworld. Mahabali, a devotee of Lord Vishnu, was the son of Virochan and the grandson of Prahalad. He was a righteous and charitable man and treated all his subjects equally."
              }
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Aboutme;
const Data = [
  {
    IconButtoncontent: (
      <>
        <WorkIcon sx={{ color: "#f4af1b" }} />
      </>
    ),
    Typography: " last wish?",
    Typographybody: "permission to visit his people once in a year. And so Onam is celebrated in the honor and respect of Mahabali.",
  },
  {
    IconButtoncontent: (
      <>
        <VscFolderLibrary style={{ color: "#FFA62B" }} />
      </>
    ),
    Typography: " how powerful is Mahabali?",
    Typographybody: "Mahabali was one of the most generous kings to have walked the earth.",
  },
  {
    IconButtoncontent: (
      <>
        <AiTwotoneSafetyCertificate style={{ color: "#FFA62B" }} />
      </>
    ),
    Typography: "Why is Mahabali called demon king?",
    Typographybody: "King Mahabali was so virtuous that he defeated the Devas/Gods and began ruling over all three 'loks'/worlds",
  },
];
const gridData = [
  {
    content: (
      <>
    Onam is the national festival of Kerala. Celebrated in the month of Chingam, it starts from Atham and lasts for 10 days till Ponnonam.
    Thiruvonam celebrations evoke a wave of nostalgia in Keralites and are
    celebrated by everyone irrespective of religion and caste. After the
    harsh month of Karkidakam comes Chingam, offering the hope of prosperity
    to farmers, making Onam a harvest festival.
    <br />
    <br />
    It is a time when the entire state is decked up with Athapookkalam and
    lights. Visitors to Kerala during the festive season have the
    opportunity to experience the hospitality and culture of the state on a
    first-hand basis. With the boat races, Onasadhya, Athachamayam,
    Pulikali, Kummattikali, Thumbi Thullal and Onam Sadya, the festival also
    showcases artistic and cultural diversity.
    <br />
    <br />
    Legend has it that Mahabali, the mythical beloved king of Kerala, visits
    his subjects on the day of Thiruvonam after ascending from the
    netherworld. Mahabali, a devotee of Lord Vishnu, was the son of Virochan
    and the grandson of Prahalad. He was a righteous and charitable man and
    treated all his subjects equally. There was no poverty, crime or cruelty
    during his rule. Despite Mahabali being a demon king, the state was at
    its most glorious phase and his people adored him. Mahabali&rsquo;s fame grew
    with each passing day which enraged the devas. Afraid of losing power,
    they begged Lord Vishnu to aid them in stopping Mahabali.
    <br />
    <br />
    As a result, Lord Vishnu in his Vamana Avatar (a Brahmin avatar) visited
    Mahabali, who was doing yagna for Lord Vishnu&rsquo;s grace. Upon seeing the
    poor Brahmin boy, Mahabali asked what he desired The boy responded that
    he needed land which could be covered in three steps. Mahabali granted
    the boy&rsquo;s wish. He began to grow in size, covering the entire universe
    with the first two steps. Mahabali then realised that it was no ordinary
    boy before him but Lord Vishnu himself. Seeing that there was no more
    land left, the king bowed before the boy, offering his head for the next
    step.Satisfied by the king&rsquo;s devotion, Lord Vishnu blessed Mahabali and
    sent him to Pathala or the netherworld, with permission to visit his
    subjects once every year. The place where this incident is believed to
    have taken place was given the name Trikalkkara which was later changed
    to Thrikkakara...
    <br />
    <br />
    The incident is said to have occurred on the star sign of Thiruvonam in
    the month of Chingam, and ever since, every year during the 10 days of
    Onam, the people of Kerala eagerly await their beloved king. The tale of
    Mahabali&rsquo;s sacrifice as described in the folk song &ldquo;Maveli nadu vaneedum
    kalam&rdquo; is associated with Onam. Even though the story of Mahabali is the
    most prevalent one related to Onam, there are other such folktales too.
    The Kerala Mahatmyam, related to the Brahmandapurana also has a mention
    of Onam. It is also found in Pathupattu and Mangudi Maruthanar&rsquo;s work
    &lsquo;Madurai Kanji&rsquo;. Another myth is that which connects Parashuram to Onam.
  </>
    ),
  },
];



const imageData = [
  {
    id: 1,
    image: 'https://i.ytimg.com/vi/yV8ElAwXK2U/maxresdefault.jpg',
    title: 'Image 1',
    aos:'fade-down'
  },
  {
    id: 2,
    image: 'https://thumbs.dreamstime.com/b/maveli-sketch-cdr-194678902.jpg',
    title: 'Image 2',
    aos:'fade-up-left'
  },

  {
    id: 4,
    image: 'https://cdn.dribbble.com/users/1118956/screenshots/7127431/media/0c807f93cf5c7f6d653f00ae9d52046b.jpg',
    title: 'Image 2',
    aos:'fade-up-left'
  },
  {
    id: 5,
    image: 'https://feeds.abplive.com/onecms/images/uploaded-images/2022/08/28/dd690a778abc5c6c5d838458a892cd8b1661627245391224_original.jpg?impolicy=abp_cdn&imwidth=720',
    title: 'Image 3',
    aos:'fade-down-left'
  },
  {
    id: 6,
    image: 'https://www.bergerpaints.com/imaginecolours/wp-content/uploads/2016/09/celebrate-the-festival-of-onam.png',
    title: 'Image 3',
    aos:'fade-down-left'
  },
  {
    id: 7,
    image: 'https://imagevars.gulfnews.com/2019/09/10/190910-onam_16d1b6eb3bb_medium.jpg',
    title: 'Image 3',
    aos:'fade-down-left'
  },
  
  
];
