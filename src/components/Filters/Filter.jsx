import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
} from "@mui/material";
import "./Filter.css";

export default function Filter() {
  return (
    <section className="filtersContainer">
      <div className="filterWrapper">
        <FormControl sx={{ width: 200 }} size="small">
          <InputLabel id="category-dropdown-label">Category</InputLabel>
          <Select
            label="Category"
            labelId="category-dropdown-label"
            id="category-dropdown"
          >
            <MenuItem value="Electronics">Electronics</MenuItem>
            <MenuItem value="Electronics">Gym Equipment</MenuItem>
            <MenuItem value="Electronics">Kitchen Supplies</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: 200 }} size="small">
          <InputLabel id="model-dropdown-label">Model</InputLabel>
          <Select
            label="Model"
            labelId="model-dropdown-label"
            id="model-dropdown"
          >
            <MenuItem value="Electronics">Electronics</MenuItem>
            <MenuItem value="Electronics">Gym Equipment</MenuItem>
            <MenuItem value="Electronics">Kitchen Supplies</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: 200 }} size="small">
          <InputLabel id="condition-dropdown-label">Condition</InputLabel>
          <Select
            label="Condition"
            labelId="condition-dropdown-label"
            id="condition-dropdown"
          >
            <MenuItem value="New">New</MenuItem>
            <MenuItem value="Used">Used</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: 200 }} size="small">
          <InputLabel id="price-dropdown-label">Price</InputLabel>
          <Select
            label="Price"
            labelId="price-dropdown-label"
            id="price-dropdown"
          >
            <MenuItem value="Electronics">1,000 - 10,000</MenuItem>
            <MenuItem value="Electronics">10,000 - 50,000</MenuItem>
            <MenuItem value="Electronics">50,000 - 100,000</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#cccccc50",
            color: "black",
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
            },
          }}
        >
          Clear filter
        </Button>
      </div>
    </section>
  );
}
