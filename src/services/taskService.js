import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api/tasks';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000, 
});


const taskService = {
    getAllTasks: async () => {
        try {
            const response = await api.get('/');
            return response.data;
        } catch (error) {
            console.error("Error al obtener todas las tareas:", error);
            throw error; 
        }
    },

    
    createTask: async (task) => {
        try {
            const response = await api.post('/', task);
            return response.data;
        } catch (error) {
            console.error("Error al crear la tarea:", error);
            throw error;
        }
    },

    
    updateTask: async (id, updatedTask) => {
        try {
            const response = await api.put(`/${id}`, updatedTask);
            return response.data;
        } catch (error) {
            console.error(`Error al actualizar la tarea con ID ${id}:`, error);
            throw error;
        }
    },

    
    updateTaskStatus: async (id, status) => {
        try {
            const response = await api.patch(`/${id}`, { estatus: status });
            return response.data;
        } catch (error) {
            console.error(`Error al actualizar el estatus de la tarea con ID ${id}:`, error);
            throw error;
        }
    },

    
    deleteTask: async (id) => {
        try {
            const response = await api.delete(`/${id}`);
            return response.data; // Retorna la respuesta para confirmar éxito (puede ser vacío)
        } catch (error) {
            console.error(`Error al eliminar la tarea con ID ${id}:`, error);
            throw error;
        }
    }
};

export default taskService;