import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Card, CardMedia, Typography, Button, Link } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { NavigateNext } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import "./ProductDetailsPage.css";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function getProduct() {
      const response = await fetch(`http://localhost:3001/products/${id}`);
      const data = await response.json();
      setProduct(data);
    }
    getProduct();
  }, []);

  if (!product) return <p>Loading...</p>;

  async function handleAddToCart() {
    try {
      const response = await fetch(`http://localhost:3001/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      const data = await response.json();
      console.log(`Product added to cart`, data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <section className="product-details-container">
        <div className="column">
          <Breadcrumbs
            separator={<NavigateNext fontSize="small" />}
            sx={{ mb: 2 }}
          >
            <Link underline="hover" href="/" sx={{ color: "grey" }}>
              Product Lists
            </Link>
            <Typography sx={{ color: "black" }}>{product.name}</Typography>
          </Breadcrumbs>
          <Card>
            <CardMedia
              component={"img"}
              image={product.image}
              sx={{ height: 500, width: 500, borderRadius: 2 }}
            />
          </Card>
        </div>
        <div className="column-text">
          <div className="product-info">
            <Typography variant="h2" sx={{ fontWeight: 400 }}>
              {product.name}
            </Typography>
            <Typography
              variant={"body1"}
              sx={{ fontSize: 24, fontWeight: 500 }}
            >
              ${product.price}
            </Typography>
            <Typography
              variant={"body2"}
              sx={{ color: "rgb(70, 70, 70)", fontWeight: 400 }}
            >
              {product.stock} <span className="span">In stock</span>
            </Typography>
            <div className="product-desc">
              <Typography
                variant="h3"
                sx={{ fontSize: 20, fontWeight: 600, marginBottom: 1 }}
              >
                Description
              </Typography>
              <Typography
                variant={"body2"}
                sx={{ color: "rgb(70, 70, 70)", lineHeight: 1.6 }}
              >
                {product.description}
              </Typography>
            </div>
          </div>
          <div className="product-actions">
            <Button
              sx={{
                boxShadow: "none",
                pl: 5,
                pr: 5,
                pt: 2,
                pb: 2,
              }}
              type={"button"}
              variant="contained"
              className="add-to-cart-btn"
              onClick={handleAddToCart}
            >
              <ShoppingCartOutlinedIcon sx={{ mr: 1 }} />
              Add to Cart
            </Button>
            <Button
              sx={{ pl: 5, pr: 5, pt: 2, pb: 2 }}
              type={"button"}
              variant="outlined"
              className="buy-btn"
            >
              Buy Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
