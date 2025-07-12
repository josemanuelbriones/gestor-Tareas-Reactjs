import React from 'react';
import {
  Container,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CodeIcon from '@mui/icons-material/Code';
const Home = () => {

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
        Reto Técnico – Desarrollo de Aplicación Frontend para Gestión de Tareas (ToDo)
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3, color: 'text.secondary' }}>
        Descripción:
      </Typography>
      <Typography variant="body1" paragraph>
        Desarrollar una aplicación web para gestionar tareas (ToDo), que consuma una API
        REST (puedes usar una API propia o mockearla con herramientas como json-server,
        Mock Service Worker, etc.).
      </Typography>
      <Typography variant="body1" paragraph>
        Cada tarea debe tener los siguientes atributos:
      </Typography>
      <List sx={{ ml: 2 }}>
        <ListItem disableGutters>
          <ListItemText primary="• Descripción (texto)" />
        </ListItem>
        <ListItem disableGutters>
          <ListItemText primary="• Fecha (de creación o ejecución)" />
        </ListItem>
        <ListItem disableGutters>
          <ListItemText primary="• Estatus (por ejemplo: &quot;pendiente&quot;, &quot;en progreso&quot;, &quot;completado&quot;)" />
        </ListItem>
      </List>

      <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4, color: 'text.secondary' }}>
        Requerimientos funcionales:
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="success" />
          </ListItemIcon>
          <ListItemText primary="Mostrar una lista de tareas." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="success" />
          </ListItemIcon>
          <ListItemText primary="Crear una nueva tarea mediante un formulario." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="success" />
          </ListItemIcon>
          <ListItemText primary="Editar la información de una tarea existente." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="success" />
          </ListItemIcon>
          <ListItemText primary="Cambiar únicamente el estatus de una tarea." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="success" />
          </ListItemIcon>
          <ListItemText primary="Eliminar una tarea." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="success" />
          </ListItemIcon>
          <ListItemText primary="Filtrar o buscar tareas por estatus o texto." />
        </ListItem>
      </List>

      <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4, color: 'text.secondary' }}>
        Tecnologías ocupadas:
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <CodeIcon color="info" />
          </ListItemIcon>
          <ListItemText primary="React.js" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CodeIcon color="info" />
          </ListItemIcon>
          <ListItemText primary="Material UI" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CodeIcon color="info" />
          </ListItemIcon>
          <ListItemText primary="sweetalert2" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CodeIcon color="info" />
          </ListItemIcon>
          <ListItemText primary="axios" />
        </ListItem>
      </List>
    </Container>
  );
}


export default Home;
