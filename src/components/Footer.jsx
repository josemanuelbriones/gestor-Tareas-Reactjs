import * as React from 'react';
import { Box, Container, IconButton, Link, Stack, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const socialLinks = [
  {
    icon: <LinkedInIcon />,
    href: "https://www.linkedin.com/in/jose-manuel-briones-hernandez/",
    label: "LinkedIn",
  },
  {
    icon: <GitHubIcon />,
    href: "https://github.com/josemanuelbriones",
    label: "GitHub",
  },
  {
    icon: <InstagramIcon />,
    href: "https://www.instagram.com/jmbrionesh/",
    label: "Instagram",
  },
];

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
      {'Copyright © '}
      <Link color="text.secondary" href="https://github.com/josemanuelbriones">
        JM
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <React.Fragment>

      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 4, sm: 8 },
          py: { xs: 8, sm: 10 },
          textAlign: { sm: 'center', md: 'left' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            pt: { xs: 4, sm: 8 },
            width: '100%',
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <div>
            <Link color="text.secondary" variant="body2" href="#">
              Politicas de privacidad
            </Link>
            <Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}>
              &nbsp;•&nbsp;
            </Typography>
            <Link color="text.secondary" variant="body2" href="#">
              Terminos de uso
            </Link>
            <Copyright />
          </div>
           <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{ justifyContent: 'left', color: 'text.secondary' }}
        >
          {socialLinks.map((item) => (
            <IconButton
              key={item.label}
              color="inherit"
              size="small"
              href={item.href}
              aria-label={item.label}
              sx={{ alignSelf: 'center' }}
            >
              {item.icon}
            </IconButton>
          ))}
        </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
}
