import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  TextField
} from "@mui/material";
import LocationSvg from "assets/svg/location-svg";
import MapSvg from "assets/svg/map-svg";
import { DEFAULT_DEBOUNCE_DELAY } from "constants/general";
import {
  buyRentOptions,
  priceOptions,
  roomOptions,
  typeOptions
} from "constants/property-filter-options";
import { SearchContext } from "pages/Home";
import { useContext, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const PropertyFilters = () => {
  const { searchParams, setSearchParams } = useContext(SearchContext);
  const [location, setLocation] = useState(searchParams?.location ?? "");

  const [debouncedLocation] = useDebounce(location, DEFAULT_DEBOUNCE_DELAY);

  useEffect(() => {
    setSearchParams?.((prev) => ({ ...prev, location: debouncedLocation }));
  }, [debouncedLocation]);

  return (
    <Box
      sx={{
        minWidth: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "12px",
        flexWrap: "wrap"
      }}
    >
      <TextField
        placeholder="Bundesland, Ort oder Postleitzahl"
        size="small"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <LocationSvg />
              </InputAdornment>
            )
          }
        }}
        value={location}
        onChange={({ target: { value } }) => {
          setLocation(value);
        }}
        sx={{ minWidth: "380px" }}
      />
      <TextField
        select
        sx={{ minWidth: "8.25rem" }}
        size="small"
        label="Buy/Rent"
        value={searchParams?.order}
        onChange={({ target: { value: order } }) => {
          setSearchParams?.((prev) => ({ ...prev, order }));
        }}
      >
        {buyRentOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Type"
        select
        sx={{ minWidth: "8.25rem" }}
        size="small"
        value={searchParams?.type}
        onChange={({ target: { value: type } }) => {
          setSearchParams?.((prev) => ({ ...prev, type }));
        }}
      >
        {typeOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Price"
        select
        sx={{ minWidth: "8.25rem" }}
        size="small"
        value={searchParams?.maxPrice}
        onChange={({ target: { value: maxPrice } }) => {
          setSearchParams?.((prev) => ({ ...prev, maxPrice }));
        }}
      >
        {priceOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Room"
        select
        sx={{ minWidth: "8.25rem" }}
        size="small"
        value={searchParams?.bedrooms}
        onChange={({ target: { value: bedrooms } }) => {
          setSearchParams?.((prev) => ({ ...prev, bedrooms }));
        }}
      >
        {roomOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Button variant="outlined">
        <MapSvg />
      </Button>
    </Box>
  );
};

export default PropertyFilters;
