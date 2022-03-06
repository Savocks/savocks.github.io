import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function Hero({ title, subtitle, cta, image }) {
  const CTA = cta;
  const defaultImage = '/images/main-background.jpg';
  return (
    <Card variant="elevation" sx={{ height: '100vh', width: '100%' }}>
      <CardMedia
        component="img"
        image={image ? image : defaultImage}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          zIndex: 1,
          width: '100%',
          height: '100%',
          position: 'absolute',
          background:
            'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%)',
        }}
      />
      <CardContent
        sx={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {title && (
          <Typography component="h1" variant="h1">
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography component="small" variant="subtitle1">
            {subtitle}
          </Typography>
        )}
        {cta && <CTA />}
      </CardContent>
    </Card>
  );
}
