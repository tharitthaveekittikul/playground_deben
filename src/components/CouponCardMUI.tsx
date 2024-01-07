import React from "react";
import { Card, CardContent, Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function CouponCardMUI({
  imageSrc,
  couponName,
  description,
}: TabObjectContent) {
  const navigate = useNavigate();
  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        alignItems: "center",
        my: 2,
        boxShadow: 2,
        borderRadius: 2,
      }}
      onClick={() => {
        navigate(`/coupon-details`);
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img
          src={imageSrc}
          alt={couponName}
          style={{ width: 120, height: 136, objectFit: "cover" }}
        />
        <CardContent sx={{ p: 0, ml: 2 }}>
          <Typography variant="h6" component="div">
            {couponName}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

export default CouponCardMUI;
