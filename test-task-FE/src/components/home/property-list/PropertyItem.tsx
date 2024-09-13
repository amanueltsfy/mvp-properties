import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography
} from "@mui/material";
import EyeSvg from "assets/svg/eye-svg";
import { HearSvg } from "assets/svg/heart-svg";
import { Property } from "interface/property.interface";

const PropertyItem = ({ property }: { property: Property }) => {
  const imgUrl = `https://loremflickr.com/360/240/${property.type.replaceAll(
    " ",
    "-"
  )}`;
  return (
    <Card>
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          width="360"
          height="240"
          image={imgUrl}
          alt={property.location}
        />
        <IconButton sx={{ position: "absolute", top: "1rem", right: "1rem" }}>
          <HearSvg />
        </IconButton>
      </Box>
      <CardContent>
        <Stack>
          <Typography variant="h5" gutterBottom fontWeight="700">
            {property.location}
          </Typography>
          <Typography variant="caption" sx={{ display: "block" }}>
            ID: {property.propertyID} | {property.type} | {property.location}
          </Typography>
          <Typography variant="caption" gutterBottom sx={{ display: "block" }}>
            {` ${property.bedrooms + property.bathrooms} Rooms | ${
              property.bedrooms
            }
              Bed | ${property.size} `}
            <span>
              m<sup>2</sup> | {property.order}
            </span>
          </Typography>
        </Stack>
        <Box
          display="flex"
          alignItems="flex-end"
          justifyContent="space-between"
          gap={2}
        >
          <Typography variant="h4">{property.price} &#8364;</Typography>
          <Typography
            variant="button"
            display="flex"
            alignItems="center"
            gap={0.5}
          >
            {property.views}
            <EyeSvg />
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PropertyItem;
