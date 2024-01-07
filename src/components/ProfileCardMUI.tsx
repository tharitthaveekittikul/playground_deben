import {
  Box,
  Card,
  CardContent,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { theme } from "../utils/theme";

function ProfileCardMUI({ name }: ProfileCardProps) {
  return (
    <ThemeProvider theme={theme}>
      <Card>
        <CardContent>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h5" className="">
                Hello
              </Typography>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 1,
                }}
              >
                <div className="border-dashed border-2 border-sky-300">
                  <img
                    src="https://static.bangkokpost.com/media/content/20230418/c1_2551739.jpg"
                    alt="SCB X Logo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </Box>
            </Grid>
          </Grid>
          <Grid container alignItems="center">
            <Grid item>
              <Typography variant="h6">{name}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}

export default ProfileCardMUI;
