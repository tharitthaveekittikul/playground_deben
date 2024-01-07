import { createTheme } from "@mui/material";

const brandingColor = "#7631C1";
const dividerColor = "#EAE7EC";

export const theme = createTheme({
  typography: {
    fontFamily: "DB Heavent, sans-serif",
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
