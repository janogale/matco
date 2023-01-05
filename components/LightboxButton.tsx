import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const LightboxButton = ({ onClick }: any) => (
  <Box sx={{ mb: 2 }}>
    <Button variant="contained" onClick={onClick} className='bg-primary'>
      Open Lightbox
    </Button>
  </Box>
);

export default LightboxButton;