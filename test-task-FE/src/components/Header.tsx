import { Box, Button, Typography } from "@mui/material";
import LogSvg from "assets/svg/logo-svg";

const Header = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap={2}
      padding="2rem 0"
    >
      <Box display="flex" alignItems="center" gap={2}>
        <LogSvg />
        <Typography variant="h6" component="h6">
          Immobilien Suche
        </Typography>
      </Box>
      <Box display="flex" gap={2}>
        <Button variant="text">Kaufen</Button>
        <Button variant="text">Mieten</Button>
        <Button variant="text">Inserat schalten</Button>
        <Button variant="contained">Sign In</Button>
        <Button variant="text">ENG</Button>
      </Box>
    </Box>
  );
};

export default Header;
