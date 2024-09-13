import { Box, Grid2, Typography } from "@mui/material";
import { useAppSelector } from "store";
import { propertyListSelector } from "store/property/selector";
import PropertyItem from "./PropertyItem";

const PropertyList = () => {
  const properties = useAppSelector(propertyListSelector);

  return (
    <Box flexGrow={1}>
      <Grid2 container spacing={4}>
        {properties?.length ? (
          properties?.map((property) => (
            <Grid2 key={property.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <PropertyItem property={property} />
            </Grid2>
          ))
        ) : (
          <Grid2 size={12}>
            <Typography
              variant="body1"
              sx={{ width: "fit-content", margin: "0 auto", padding: "1rem 0" }}
            >
              No items found
            </Typography>
          </Grid2>
        )}
      </Grid2>
    </Box>
  );
};

export default PropertyList;
