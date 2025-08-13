"use client";

import { Box, Card, CardContent } from "@mui/material";
import { useSession } from "next-auth/react";
import { ReactNode } from "react";

import HomeCardContent from "./home-card-content";

export default function Home(): ReactNode {
  const { data: session, status } = useSession();

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "grey.50",
      }}
    >
      <Card
        sx={{
          maxWidth: 400,
          width: "90%",
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <CardContent sx={{ p: 4, textAlign: "center" }}>
          <HomeCardContent session={session} status={status} />
        </CardContent>
      </Card>
    </Box>
  );
}
