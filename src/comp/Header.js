import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "next/link";
import ResponsiveHeader from "./ResponsiveHeader";

const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  console.log(matches, "matches");
  function refreshPage() {
    window.location.href = "/";
  }

  const [navactive, setNavactive] = useState("#");
  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "white",
          color: "white",

          width: "100%",
          position: "relative",

          justifyContent: "space-between",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {matches ? (
            <>
              <Image
                src={"/logo.jpg"}
                width={120}
                height={120}
                onClick={refreshPage}
              />
              <Box>
                {navItems.map((item,index) => (
                  <Button
                    key={index}
                    sx={{ color: "black", fontWeight: "bolder" }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
            </>
          ) : (
            <>
              <Image
                src={"/logo.jpg"}
                width={130}
                height={100}
                onClick={refreshPage}
              />

              <ResponsiveHeader />
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
export const navItems = [
  <Link href="#" key="home">Home</Link>,
  <Link href="#aboutme" key="about">About Me</Link>,

  <Link href="#contactme" key="contact">Contact Me</Link>,
];
