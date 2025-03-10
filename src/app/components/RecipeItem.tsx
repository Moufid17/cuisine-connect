"use client";
import * as React from "react";
import {
  IconButton,
  Typography,
  Divider,
  Card,
  CardContent,
  CardOverflow,
  Link,
} from "@mui/joy";
import { Heart } from "react-feather";

export default function RecipeCard({ nom, description, temps }) {
  const nameUrl = nom.replace(/ /g, "-").toLowerCase();
  return (
    <Card variant="outlined" sx={{ width: 350 }}>
      <CardOverflow>
        <IconButton
          onClick={() => alert("TODO : Ajouter en favoris")}
          aria-label="Like minimal photography"
          size="md"
          variant="solid"
          color="danger"
          sx={{
            position: "absolute",
            zIndex: 2,
            borderRadius: "50%",
            right: "1rem",
            bottom: -20,
            transform: "translateY(50%)",
          }}
        >
          <Heart color="grey" />
        </IconButton>
      </CardOverflow>
      <CardContent>
        <Typography level="title-md">
          <Link href={`/recipes/${ nameUrl }`} overlay underline="none">
            {nom}
          </Link>
        </Typography>
        <Typography level="body-sm">
          {description}
        </Typography>
      </CardContent>
      <CardOverflow variant="soft">
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Typography level="body-xs">{temps}</Typography>
        </CardContent>
      </CardOverflow>
    </Card>
  );
}
