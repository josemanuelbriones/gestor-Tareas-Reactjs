import React, { useState } from 'react';
import { Card, CardContent, CardActions, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const STATUS_OPTIONS = [
    { value: 'pendiente', label: 'Marcar como Pendiente' },
    { value: 'en progreso', label: 'Marcar como En Progreso' },
    { value: 'completado', label: 'Marcar como Completado' },
];

const TaskCard = ({ task, onEdit, onDelete, onChangeStatus }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    
    const handleStatusChange = (newStatus) => {
        onChangeStatus(task.id, newStatus);
        handleMenuClose(); 
    };

    return (
        <Card sx={{ marginBottom: 2 }}>
            <CardContent>
                <Typography variant="h6" component="div">
                    {task.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Fecha: {new Date(task.fecha).toLocaleDateString()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Estatus: **{task.estatus}** 
                </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{ justifyContent: 'flex-end' }}>
                <IconButton aria-label="editar tarea" onClick={() => onEdit(task)}>
                    <EditIcon />
                </IconButton>
                <IconButton aria-label="eliminar tarea" onClick={() => onDelete(task.id)}>
                    <DeleteIcon />
                </IconButton>
                <IconButton
                    aria-label="más opciones"
                    id={`more-options-button-${task.id}`} 
                    aria-controls={open ? `status-menu-${task.id}` : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleMenuClick}
                >
                    <MoreVertIcon />
                </IconButton>
                
                <Menu
                    id={`status-menu-${task.id}`} 
                    MenuListProps={{
                        'aria-labelledby': `more-options-button-${task.id}`,
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleMenuClose}
                >
                    {STATUS_OPTIONS.map((option) => (
                        <MenuItem
                            key={option.value}
                            onClick={() => handleStatusChange(option.value)}
                            
                            disabled={task.estatus === option.value}
                        >
                            {option.label}
                        </MenuItem>
                    ))}
                </Menu>
            </CardActions>
        </Card>
    );
};

export default TaskCard;