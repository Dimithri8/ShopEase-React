import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import "./ProductCard.css";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  function handleCardClick() {
    navigate(`/details/${product.id}/${product.name}`);
  }
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
          <CardActionArea onClick={handleCardClick}>
            <CardMedia
              component={"img"}
              sx={{
                height: 250,
                borderRadius: 1,
                objectFit: "cover",
                objectPosition: "center",
              }}
              src={product.image}
            />
            <CardContent>
              <Typography
                sx={{ fontSize: 16, fontWeight: 400 }}
                variant="h3"
                component={"div"}
              >
                {product.name}
              </Typography>

              <div className="card-actions-wrapper">
                <Typography variant="p" sx={{ fontWeight: 700 }}>
                  {product.price}
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
          </CardActionArea>
        </Card>
      </section>
    </>
  );
}
