import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';


function Media() {


  return (
    <Grid container wrap="nowrap">
      {( Array.from(new Array(3))).map((x,index) => (
        <Box key={index} sx={{ width: 350, marginRight: 1, m:10 }}>
         
            <Skeleton variant="rectangular" width={400} height={418}/>
            {/* <Skeleton variant="rectangular" width={310} height={218} /> */}
         

         
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
        
        </Box>
      ))}
    </Grid>
  );
}


export default function Loading() {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Media  />
    </Box>
  );
}
