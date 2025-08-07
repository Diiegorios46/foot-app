import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <TextField
      sx={{
        background : "#f9fafb",
        borderRadius: "100px", // Esto aplica al contenedor
        "& .MuiOutlinedInput-root": {
          borderRadius: "100px", // Esto aplica al input real
        },
      }}
      variant="outlined"
      placeholder="Buscar recetas..."
      fullWidth
      onChange={(e) => onSearch(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}
