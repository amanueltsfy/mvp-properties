import { Box, Card, CardContent, Grid2, Skeleton, Stack } from "@mui/material";

const SkeletonLoader = () => {
  return (
    <Grid2 container spacing={4}>
      {Array.from({ length: 6 }).map((_, index) => (
        <Grid2 key={index}>
          <Card>
            <Skeleton variant="rectangular" width={360} height={240} />

            <CardContent>
              <Stack>
                <Skeleton width="70%" height={25} />
                <Skeleton width="50%" height={10} />
                <Skeleton width="50%" height={10} />
              </Stack>
              <Box
                display="flex"
                alignItems="flex-end"
                justifyContent="space-between"
                gap={2}
              >
                <Skeleton width="30%" height={50} />
                <Skeleton width="10%" />
              </Box>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default SkeletonLoader;
