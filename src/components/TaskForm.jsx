import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import useAlerts from '../hooks/useAlerts';
import { STATUS_OPTIONS, DEFAULT_TASK_VALUES } from '../constants/taskConstants';


const TaskForm = ({ initialTask = null, onSubmit, onClose, isSubmitting }) => {
    const { showAlert } = useAlerts();

    const [description, setDescription] = useState('');
    const [date, setDate] = useState(null);
    const [status, setStatus] = useState('pendiente');


    const [descriptionError, setDescriptionError] = useState(false);
    const [dateError, setDateError] = useState(false);
    const today = dayjs();
   
    useEffect(() => {
        if (initialTask) {
            setDescription(initialTask.description || '');
            setDate(initialTask.fecha ? dayjs(initialTask.fecha) : null);
            setStatus(initialTask.estatus || 'pendiente');
        } else {
           
            setDescription(DEFAULT_TASK_VALUES.description);
            setDate(DEFAULT_TASK_VALUES.fecha);
            setStatus(DEFAULT_TASK_VALUES.estatus);
        }
        
        setDescriptionError(false);
        setDateError(false);
    }, [initialTask]); 

    
    const handleSubmit = (e) => {
        e.preventDefault();

        let hasError = false;

        
        if (!description.trim() || description.trim().length < 5 || description.trim().length > 100) {
            setDescriptionError(true);
            hasError = true;
        } else {
            setDescriptionError(false);
        }

       
        if (!date || !date.isValid() || date.isBefore(today) || date.isAfter(today.add(1, 'year'))) {
            setDateError(true);
            hasError = true;
        } else {
            setDateError(false);
        }

      
        if (hasError) {
            showAlert('error', '¡Error de Validación!', 'Por favor, completa todos los campos obligatorios.');
            return;
        }

        
        onSubmit({
            description,
            fecha: date.toISOString(), 
            estatus: status,
        });
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
                label="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
                required
                error={descriptionError}
                helperText={descriptionError ? 'La descripción es obligatoria' : ''}
                sx={{ mt: 1 }}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Fecha"
                    value={date}
                    onChange={(newValue) => setDate(newValue)}
                    minDate={today}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            fullWidth
                            required
                            error={dateError}
                            helperText={dateError ? 'La fecha es obligatoria' : ''}
                        />
                    )}
                />
            </LocalizationProvider>
            <FormControl fullWidth>
                <InputLabel id="status-select-label">Estatus</InputLabel>
                <Select
                    labelId="status-select-label"
                    value={status}
                    label="Estatus"
                    onChange={(e) => setStatus(e.target.value)}
                >
                    {STATUS_OPTIONS.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 2 }}>
                <Button variant="outlined" onClick={onClose} disabled={isSubmitting}>
                    Cancelar
                </Button>
                <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Guardando...' : (initialTask ? 'Actualizar nota' : 'Crear nota')}
                </Button>
            </Box>
        </Box>
    );
};

export default TaskForm;