import React from "react";
import {
  AddShoppingCart,
  East,
  LocalShipping,
  MoreTime,
  Person,
  South,
  Star,
  Warehouse,
} from "@mui/icons-material";
import { Container, Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Main() {
  return (
    <Box>
      <Box sx={{ backgroundColor: "#e0f2f1", height: "93vh" }}>
        <Box sx={{ position: "absolute", mt: 2 }}>
          <img width="40%" src={require("../assets/leave.png")} alt="" />
        </Box>

        <Box sx={{ position: "relative", textAlign: "center", pt: 4 }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", fontFamily: "cursive" }}
          >
            Organic Fruit & Vegatbles
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              pt: 3,
              ml: 15,
              mr: 15,
              display: { md: "block", xs: "none", sm: "none" },
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            odit, reiciendis rem totam obcaecati suscipit dolor dignissimos
            aliquid minima omnis? Provident officiis illum ipsa corporis
            voluptatum eligendi commodi nesciunt hic necessitatibus quod neque,
            nulla, quam, sint adipisci incidunt! Asperiores, laborum ab.
            Cupiditate aspernatur eius optio mollitia aliquam iusto eum beatae
            obcaecati! Aspernatur eius magni debitis fugiat inventore harum,
            quaerat, soluta excepturi tempore saepe doloribus explicabo
            consectetur, exercitationem eos labore nisi.
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              pt: 3,
              ml: 15,
              mr: 15,
              display: { md: "none", xs: "block", sm: "block" },
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nam
            fugit quibusdam aliquam rerum, iure aut tempora odit delectus quidem
            quod quo placeat molestiae, dolor, labore et voluptates dolorem
            perspiciatis!
          </Typography>
        </Box>
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
            Order Now
          </Typography>
          <IconButton
            sx={{ backgroundColor: "#09a66d", color: "white", ml: 1 }}
          >
            <East />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            pt: 9,
          }}
        >
          <Box sx={{ width: "40%" }}>
            <img
              width="100%"
              src={require("../assets/pngwing.com.png")}
              alt=""
            />
          </Box>
          <Box>
            <Box
              sx={{
                position: "relative",
                backgroundColor: "#fff",
                width: "150px",
                pl: 1,
                mb: 2,
                p: 2,
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", m: "auto" }}>
                <Person color="success" fontSize="medium" />
                <Box sx={{ pl: 1 }}>
                  <Typography variant="h5">30K</Typography>
                  <Typography variant="body2">User Order</Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                backgroundColor: "#fff",
                width: "150px",
                pl: 1,
                mb: 2,
                p: 2,
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", m: "auto" }}>
                <Star color="warning" fontSize="medium" />
                <Box sx={{ pl: 1 }}>
                  <Typography variant="h5">20K</Typography>
                  <Typography variant="body2">Reveiews(4.8)</Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                backgroundColor: "#fff",
                width: "150px",
                pl: 1,
                mb: 2,
                p: 2,
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", m: "auto" }}>
                <Warehouse color="success" fontSize="medium" />
                <Box sx={{ pl: 1 }}>
                  <Typography variant="h5">300</Typography>
                  <Typography variant="body2">Items</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Container maxWidth="xl">
        <Box>
          <Grid
            className="parent-container"
            justify="center"
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
            direction="row"
          >
            <Grid item md={6} xs={12}>
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", fontFamily: "cursive", mt: 8 }}
              >
                Why We Are The Best
              </Typography>
              <Typography variant="subtitle1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto quaerat dolore provident optio expedita fugit
                doloribus illo suscipit similique iusto nostrum natus dolorum
                mollitia eaque a ad distinctio possimus quam excepturi quos ea,
                repellendus error. Eos nulla libero similique eaque?
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", pt: 2, pb: 3 }}>
                <LocalShipping color="success" fontSize="large" />
                <Box sx={{ pl: 2 }}>
                  <Typography variant="subtitle1" fontWeight={800}>
                    Fasted delivery Service
                  </Typography>
                  <Typography variant="body2" sx={{ width: "60%" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pt: 2,
                  pb: 3,
                  backgroundColor: "#e0f2f1",
                  width: "310px",
                }}
              >
                <AddShoppingCart color="success" fontSize="large" />
                <Box sx={{ pl: 2 }}>
                  <Typography variant="subtitle1" fontWeight={800}>
                    Online order Service
                  </Typography>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", pt: 2, pb: 3 }}>
                <MoreTime color="success" fontSize="large" />
                <Box sx={{ pl: 2 }}>
                  <Typography variant="subtitle1" fontWeight={800}>
                    24/7 Service
                  </Typography>
                  <Typography variant="body2" sx={{ width: "60%" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit
                  </Typography>
                </Box>
              </Box>
              <IconButton sx={{ backgroundColor: "#e0f2f1" }}>
                <South color="success" />
              </IconButton>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box>
                <img
                  width="100%"
                  src={require("../assets/3333449.jpg")}
                  alt=""
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
