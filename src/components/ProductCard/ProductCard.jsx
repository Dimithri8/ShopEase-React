import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import "./ProductCard.css";

export default function ProductCard() {
  return (
    <>
      <section className="productCardsContainer">
        <Card
          sx={{
            width: 250,
            boxShadow: "none",
            padding: 0.7,
            border: 1,
            borderRadius: 1,
            borderColor: "gainsboro",
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <CardMedia
            sx={{ height: 200, borderRadius: 1 }}
            image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2a933dd8-2a79-459d-b5a3-1e3e20bd759b/JORDAN+MVP+92.png"
          />
          <CardContent>
            <Typography
              sx={{ fontSize: 16, fontWeight: 400 }}
              variant="h3"
              component={"div"}
            >
              Nike Shoes
            </Typography>

            <div className="card-actions-wrapper">
              <Typography variant="p" sx={{ fontWeight: 700 }}>
                $180.00
              </Typography>

              <FavoriteBorderIcon
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              />
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
