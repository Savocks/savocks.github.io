import { useTheme } from 'next-themes';
import Header from '../components/Header/Header';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import Hero from '../components/Hero/Hero';
import { IoLogoNodejs } from '@react-icons/all-files/io/IoLogoNodejs';
import { IoLogoJavascript } from '@react-icons/all-files/io/IoLogoJavascript';
import { IoLogoAngular } from '@react-icons/all-files/io/IoLogoAngular';
import { IoLogoReact } from '@react-icons/all-files/io5/IoLogoReact';
import { IoLogoPython } from '@react-icons/all-files/io/IoLogoPython';

const words = [
  'Frontend',
  'Backend',
  'JavaScript',
  'Node.js',
  'Angular',
  'React',
];

const colors = ['#143059', '#2F6B9A', '#82a6c2'];

export default function Home() {
  return (
    <div className="relative h-screen w-full font-sans">
      <Header />
      <Box component="main" className="relative h-screen w-full">
        <Hero title="Giulio Savoca" subtitle="Web developer" />
        <Box component="main">
          <Container component="section" sx={{ marginY: 10 }}>
            <Grid
              container
              spacing={8}
              justifyContent="center"
              alignItems="stretch"
            >
              <Grid item xs={12} sm={6}>
                <Card sx={{ p: 4, height: '100%' }} elevation={0}>
                  <CardHeader title="WHO AM I?" />
                  <CardContent>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iure, nisi, sapiente. Consectetur, doloremque esse eveniet
                      harum hic id iste laborum nam, odio quibusdam repudiandae
                      suscipit tempora temporibus totam velit voluptates.
                    </Typography>
                    <figure>
                      <blockquote cite="https://www.huxley.net/bnw/four.html">
                        <Typography typography="overline">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit
                        </Typography>
                      </blockquote>
                      <Typography component="figcaption" typography="overline">
                        —Aldous Huxley, <cite>Brave New World</cite>
                      </Typography>
                    </figure>
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItem: 'center',
                  justifyContent: 'center',
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: 'transparent',
                    maxHeight: '400px',
                    overflowY: 'auto',
                    width: '100%',
                  }}
                >
                  <Stack spacing={2}>
                    <Card sx={{ p: 4 }}>
                      <div>Frontend</div>
                    </Card>
                    <Card sx={{ p: 4 }}>
                      <div>Angular</div>
                    </Card>
                    <Card sx={{ p: 4 }}>
                      <div>React</div>
                    </Card>
                    <Card sx={{ p: 4 }}>
                      <div>Backend</div>
                    </Card>
                    <Card sx={{ p: 4 }}>
                      <div>Node.js</div>
                    </Card>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Container>
          <Box component="section">
            <Paper className="flex place-content-center place-items-center gap-8 p-8 shadow-inner shadow-2xl">
              <IoLogoNodejs className="text-9xl " />
              <IoLogoJavascript className="text-9xl" />
              <IoLogoAngular className="text-9xl" />
              <IoLogoReact className="text-9xl" />
              <IoLogoPython className="text-9xl" />
            </Paper>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
