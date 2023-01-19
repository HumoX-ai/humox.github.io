import { East } from "@mui/icons-material";
import { Grid, IconButton, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Sliders from "./Slider";

export default function Section() {
  return (
    <Box>
      <Box sx={{ backgroundColor: "#e0f2f1", mt: 10 }}>
        <Container maxWidth="xl">
          <Box>
            <Grid
              justify="center"
              container
              spacing={3}
              justifyContent="center"
              alignItems="center"
              direction="row"
              align="center"
            >
              <Grid item xs={12} md={6} sm={12}>
                <Box sx={{ backgroundColor: "#bee6d8" }}>
                  <img
                    src={require("../assets/section.png")}
                    alt=""
                    width="100%"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6} sm={12}>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold", fontFamily: "cursive" }}
                >
                  Explor Our Special Items
                </Typography>
                <Typography variant="body2" sx={{ pt: 3 }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti ut dicta quisquam ab dolorem eius. Iure molestiae
                  dignissimos hic, omnis error eos doloremque eaque cupiditate!
                </Typography>
                <Box
                  sx={{
                    textAlign: "center",
                    pt: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="subtitle1" fontWeight={800}>
                    Explore Now
                  </Typography>
                  <IconButton
                    sx={{ backgroundColor: "#09a66d", color: "white", ml: 1 }}
                  >
                    <East />
                  </IconButton>
                </Box>
                <Box>
                  <img
                    src={require("../assets/xandonpista.png")}
                    alt=""
                    width="100%"
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Container maxWidth="xl" sx={{ mt: 10 }}>
        <Box>
          <Grid
            justify="center"
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
            direction="row"
            align="center"
          >
            <Grid item xs={12} md={6} sm={12}>
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", fontFamily: "cursive" }}
              >
                What Our Customers About Us saying
              </Typography>
              <Sliders />
            </Grid>
            <Grid item xs={12} md={6} sm={12}>
              <img src={require("../assets/person.png")} alt="" width="100%" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
