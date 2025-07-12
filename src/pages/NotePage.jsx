import {Container,Box,Typography,Button,CircularProgress,Dialog,DialogTitle,DialogContent} from '@mui/material'; 
import AddIcon from '@mui/icons-material/Add'; 
import TaskCard from '../components/TaskCard';
import TaskForm from '../components/TaskForm';
import FilterBar from '../components/FilterBar';
import useTaskManagement from '../hooks/useTaskManagement'; 

const NotePage = () => {
    
    const {
        loading,
        openForm,
        setOpenForm,
        editingTask,
        setEditingTask,
        filterStatus,
        setFilterStatus,
        searchText,
        setSearchText,
        isSubmitting,
        handleCreateTask,
        handleEditTask,
        handleUpdateTask,
        confirmDelete,
        handleChangeStatus,
        handleCloseForm,
        filteredTasks,
    } = useTaskManagement();

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3,textAlign: 'center' }}>
                <Typography variant="h3"  component="h1" sx={{ fontWeight: 'bold' }}>
                    Gestión de tareas en notas
                </Typography>
                <Button
                    variant="contained"
                    color="success"
                    startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <AddIcon />}
                    onClick={() => { setOpenForm(true); setEditingTask(null); }} 
                    disabled={isSubmitting} 
                >
                    {isSubmitting ? 'Creando...' : 'Nueva nota'}
                </Button>
            </Box>

            
            <FilterBar
                filterStatus={filterStatus}
                setFilterStatus={setFilterStatus}
                searchText={searchText}
                setSearchText={setSearchText}
            />

           
            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 4, flexDirection: 'column' }}>
                    <CircularProgress />
                    <Typography sx={{ mt: 2 }}>Cargando notas...</Typography>
                </Box>
            ) : (
                <Box>
                    {filteredTasks.length === 0 ? (
                        <Typography variant="h6" align="center" sx={{ mt: 4, color: 'text.secondary' }}>
                            No hay notas de tareas para mostrar con los filtros actuales.
                        </Typography>
                    ) : (
                        filteredTasks.map(task => (
                            <TaskCard
                                key={task.id}
                                task={task}
                                onEdit={handleEditTask}
                                onDelete={confirmDelete}
                                onChangeStatus={handleChangeStatus}
                            />
                        ))
                    )}
                </Box>
            )}

           
            <Dialog open={openForm} onClose={handleCloseForm} fullWidth maxWidth="sm">
                <DialogTitle position="static">
                    {editingTask ? 'Editar nota' : 'Crear nueva nota'}
                </DialogTitle>
                <DialogContent sx={{ paddingTop: '24px', paddingBottom: '24px', paddingLeft: '24px', paddingRight: '24px' }}>
                    <TaskForm
                        initialTask={editingTask}
                        onSubmit={editingTask ? handleUpdateTask : handleCreateTask}
                        onClose={handleCloseForm}
                        isSubmitting={isSubmitting}
                    />
                </DialogContent>
            </Dialog>
        </Container>
    );
};

export default NotePage;