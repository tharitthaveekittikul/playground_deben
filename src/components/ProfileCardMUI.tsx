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
      <Card sx={{ height: "88px" }}>
        <CardContent>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h5" className="">
                Hello
              </Typography>
              <Typography variant="h6">{name}</Typography>
            </Grid>
            <Grid item>
              <div className="border-dashed border-2 border-sky-300 mb-4">
                <img
                  src="https://static.bangkokpost.com/media/content/20230418/c1_2551739.jpg"
                  alt="SCB X Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}

export default ProfileCardMUI;
