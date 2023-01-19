import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Button, Chip, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

export default function Footer() {
  return (
    <Box>
      <Box sx={{ mt: 10 }}>
        <Container>
          <Grid
            justify="center"
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
            direction="row"
            align="center"
          >
            <Grid xs={12} md={6} sm={12}>
              <Box>
                <img
                  src={require("../assets/Oyxon-removebg.png")}
                  alt=""
                  width="60%"
                />
              </Box>
            </Grid>
            <Grid xs={12} md={6} sm={12}>
              <Chip label="Download App" color="success" variant="outlined" />
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", fontFamily: "cursive", mt: 1 }}
              >
                Simple Way To Order Your Organic Fruit
              </Typography>
              <Typography variant="body2" sx={{ mt: 3 }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                ipsam expedita tenetur dolorum ducimus perspiciatis iure nisi
                commodi distinctio odit nam amet, reprehenderit nemo animi
                cumque illum, maxime iusto ipsum.
              </Typography>
              <Box sx={{ mt: 3 }}>
                <img src={require("../assets/appstore.png")} alt="" />
              </Box>
              <Box>
                <img src={require("../assets/play.png")} alt="" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container maxWidth="xl" sx={{ mt: 10 }}>
        <Grid
          justify="center"
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          direction="row"
          align="center"
        >
          <Grid item xs={12} md={3} sm={12}>
            <img src={require("../assets/earth.png")} alt="" width="10%" />
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga rem
              soluta, officia vel quos quae necessitatibus vitae doloribus sed
              quidem explicabo doloremque, omnis cum debitis consectetur qui
              consequatur adipisci. Iste.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} sm={12}>
            <Box>
              <Box>
                <Typography fontWeight={800}>Navigation</Typography>
              </Box>
              <Button sx={{ textTransform: "none", color: "black" }}>
                About Us
              </Button>
            </Box>
            <Box>
              <Button sx={{ textTransform: "none", color: "black" }}>
                Service
              </Button>
            </Box>
            <Button sx={{ textTransform: "none", color: "black" }}>Menu</Button>
          </Grid>
          <Grid item xs={12} md={3} sm={12}>
            <Typography fontWeight={800}>Resources</Typography>
            <Box>
              <Button sx={{ textTransform: "none", color: "black" }}>
                Reviews
              </Button>
            </Box>
            <Box>
              <Button sx={{ textTransform: "none", color: "black" }}>
                Blog
              </Button>
            </Box>
            <Button sx={{ textTransform: "none", color: "black" }}>
              Update News
            </Button>
          </Grid>
          <Grid item xs={12} md={3} sm={12}>
            <Typography fontWeight={800}>Contact Us</Typography>
            <Typography variant="body2">abduodirovhumoyun@gmail.com</Typography>
            <Box>
              <Facebook />
              <Twitter />
              <Instagram />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
