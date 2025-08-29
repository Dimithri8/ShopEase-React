import { Card, CardMedia, Typography, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function getProduct() {
      await fetch(`http://localhost:3001/products/${id}`).then((response) =>
        response.json().then((data) => setProduct(data))
      );
    }
    getProduct();
  }, []);

  if (!product) return <p>No Products Found</p>;
  return (
    <section className="product-details-container">
      <div className="column">
        <Card>
          <CardMedia component={"img"} src={product.image} />
        </Card>
      </div>
      <div className="column">
        <div className="product-info">
          <Typography variant="h2">{product.name}</Typography>
          <Typography variant={"body1"}>{product.price}</Typography>
          <Typography variant={"body2"}>{product.stock}</Typography>
          <div className="product-desc">
            <Typography variant="h3">Description</Typography>
            <Typography variant={"body2"}>{product.description}</Typography>
          </div>
        </div>
        <div className="product-actions">
          <Button type={"button"} className="add-to-cart-btn">
            Add to Cart
          </Button>
          <Button type={"button"} className="buy-btn">
            Buy Now
          </Button>
        </div>
      </div>
    </section>
  );
}
