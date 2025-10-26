import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import FaceIcon from '@mui/icons-material/Face';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import Box from '@mui/material/Box';

import StatsCard from "./StatsCard";

export default function StatsGrid() {
  return (
    <Box
      display="grid"
      gridTemplateColumns= "repeat(2, 1fr)"
      gap={2}
    >
      <StatsCard title = "In Progress" value = "4" icon = {<AccessTimeFilledRoundedIcon/>}/>
      <StatsCard title = "Total Applications" value = "6" icon = {<FactCheckIcon/>}/>
      <StatsCard title = "Offers" value = "1" icon = {<ContentPasteIcon/>}/>
      <StatsCard title = "Intreviews" value = "3" icon = {<FaceIcon/>}/>

    </Box>
  );
}
