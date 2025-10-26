import Box from '@mui/material/Box';

export default function StatsGrid() {
  return (
    <Box
      display="grid"
      gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' }}
      gap={2}
    >
      <Box><p>4</p></Box>
      <Box><p>4</p></Box>
      <Box><p>4</p></Box>
      <Box><p>4</p></Box>
    </Box>
  );
}
