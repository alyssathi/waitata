import React from "react";
import { Box, Stack, Typography } from "@mui/material";

export const Hero: React.FC = () => {
	const heroImg = require("../assets/WB_hero2.jpg");
	return (
		<Stack sx={{ position: "relative", backgroundImage: `url(${heroImg})`, backgroundSize: "cover", height: "100vh", width: "100%" }}>
			<Box sx={{ backgroundColor: "white", height: "100%", width: "40%", ml: "auto" }}>
				<Typography variant="h1" sx={{ textAlign: "right" }}>
					Welcome to Waitata
				</Typography>
				<Typography>Soak in the beauty of the Marlborough Sounds where there's plenty to do or just do nothing at all. </Typography>
			</Box>
		</Stack>
	);
};
