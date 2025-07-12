import { Box, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const statusOptions = [
    { value: 'all', label: 'Todos' },
    { value: 'pendiente', label: 'Pendiente' },
    { value: 'en progreso', label: 'En Progreso' },
    { value: 'completado', label: 'Completado' },
];

const FilterBar = ({ filterStatus, setFilterStatus, searchText, setSearchText }) => {
    return (
        <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap', alignItems: 'center' }}>
            <TextField
                label="Buscar por descripción"
                variant="outlined"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                sx={{ flexGrow: 1 }}
                InputProps={{
                    startAdornment: (
                        <SearchIcon sx={{ mr: 1, color: 'action.active' }} />
                    ),
                }}
            />

            <FormControl sx={{ minWidth: 100 }}>
                <InputLabel id="filter-status-label">Filtrar por estatus</InputLabel>
                <Select
                    labelId="filter-status-label"
                    value={filterStatus}
                    label="Filtrar por estatus"
                    onChange={(e) => setFilterStatus(e.target.value)} 
                >
                    {statusOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default FilterBar;