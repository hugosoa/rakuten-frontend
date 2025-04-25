import { useState } from "react";
import { Container, Select, MenuItem, InputLabel, FormControl, SelectChangeEvent, Box } from "@mui/material";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

export default function App() {
  const [visibleCount, setVisibleCount] = useState(1);

  const handleChange = (event: SelectChangeEvent<number>) => {
    setVisibleCount(event.target.value as number);
  };

  return (
    <Container sx={{ py: 4 }}>
      <FormControl sx={{ mb: 3 }}>
        <InputLabel id="visible-count-label">Nombre de produits</InputLabel>
        <Select
          labelId="visible-count-label"
          value={visibleCount}
          onChange={handleChange}
          label="Nombre de produits"
          sx={{ maxWidth: 150 }}
        >
          {products.map((_, index) => (
            <MenuItem key={index} value={index + 1}>
              {index + 1}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {products.slice(0, visibleCount).map((product, index) => (
          <Box key={index} sx={{ width: "100%", sm: "48%", md: "30%" }}>
            <ProductCard product={product} />
          </Box>
        ))}
      </Box>
    </Container>
  );
}
