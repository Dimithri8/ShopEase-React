import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
} from "@mui/material";
import "./Filter.css";

export default function Filter({
  category,
  condition,
  selectPrice,
  selectCategory,
  selectConditon,
  clearFilter,
  selectedCategory,
  selectedCondition,
  selectedPrice,
}) {
  const uniqueCategories = [...new Set(category)];
  const uniqueConditions = [...new Set(condition)];

  return (
    <section className="filtersContainer">
      <div className="filterWrapper">
        <FormControl sx={{ width: 200 }} size="small">
          <InputLabel id="category-dropdown-label">Category</InputLabel>
          <Select
            label="Category"
            labelId="category-dropdown-label"
            id="category-dropdown"
            onChange={selectCategory}
            value={selectedCategory}
          >
            {uniqueCategories.map((item, index) => (
              <MenuItem value={item} key={index}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ width: 200 }} size="small">
          <InputLabel id="condition-dropdown-label">Condition</InputLabel>
          <Select
            label="Condition"
            labelId="condition-dropdown-label"
            id="condition-dropdown"
            onChange={selectConditon}
            value={selectedCondition}
          >
            {uniqueConditions.map((item, index) => (
              <MenuItem value={item} key={index}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ width: 200 }} size="small">
          <InputLabel id="price-dropdown-label">Price</InputLabel>
          <Select
            label="Price"
            labelId="price-dropdown-label"
            id="price-dropdown"
            onChange={selectPrice}
            value={selectedPrice}
          >
            <MenuItem value={50}>{"< 50"}</MenuItem>
            <MenuItem value={100}>{"< 100"}</MenuItem>
            <MenuItem value={200}>{"< 200"}</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          onClick={clearFilter}
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
