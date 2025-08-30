import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Button,
} from "@mui/material";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
export default function CartItem({ product, dispatch }) {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        width: 500,
        boxShadow: "none",
        border: 0.5,
        borderColor: "gainsboro",
        padding: 1,
      }}
    >
      <CardMedia
        sx={{
          width: 100,
          borderRadius: 2,
        }}
        component={"img"}
        src={product.image}
      />
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box>
          {" "}
          <Typography variant={"h3"} sx={{ fontSize: 16, fontWeight: 700 }}>
            {product.name}
          </Typography>
          <Typography variant={"body1"}>{product.price}</Typography>
        </Box>
        <Box>
          <CardActions>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Button
                type="button"
                size="small"
                variant="outlined"
                onClick={() =>
                  dispatch({ type: "increment_qty", payload: product })
                }
              >
                +
              </Button>
              <Typography sx={{ textAlign: "center" }}>
                {product.qty}
              </Typography>
              <Button
                type="button"
                size="small"
                variant="outlined"
                onClick={() =>
                  dispatch({ type: "decrement_qty", payload: product })
                }
              >
                -
              </Button>
            </Box>
            <Box>
              <Button
                type="button"
                variant="outlined"
                color="error"
                size="small"
                onClick={() =>
                  dispatch({ type: "remove_item", payload: product })
                }
              >
                Remove
              </Button>
            </Box>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
}
