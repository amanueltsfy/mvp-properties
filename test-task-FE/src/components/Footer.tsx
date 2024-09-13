import { Box } from "@mui/material";
import LogSvg from "assets/svg/logo-svg";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#33443C",
        padding: "1rem",
        marginTop: "4rem",
        borderRadius: "0.5rem"
      }}
    >
      <LogSvg />
    </Box>
  );
};

export default Footer;
