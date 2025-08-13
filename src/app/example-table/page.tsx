import { Box } from "@mui/material";
import { ReactNode } from "react";

import ExampleTable from "@/components/example-table";
import db from "@/db";
import { users } from "@/db/schema";

export default async function ExampleTablePage(): Promise<ReactNode> {
  const allUsers = await db.select().from(users);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        marginTop: "10vh",
      }}
    >
      <ExampleTable users={allUsers} />
    </Box>
  );
}
