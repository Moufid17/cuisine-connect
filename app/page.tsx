import { Box, Typography } from "@mui/joy";

export default function Home() {
  return (
    <Box sx={{ gap: 2, m: 2, bgcolor: "white" }} justifyContent="space-between">
      <Box>
        <Typography level="h3" sx={{ py: 2 }}> Recipes </Typography>
        <Typography textAlign="center">No recipes to display.</Typography>
      </Box>
    </Box>
  )
}
