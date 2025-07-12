import { useState, useEffect } from 'react';
import taskService from '../services/taskService'; 
import useAlerts from './useAlerts'; 

const useTaskManagement = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openForm, setOpenForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchText, setSearchText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { showAlert, showConfirmDialog } = useAlerts();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const data = await taskService.getAllTasks();
      setTasks(data);
    } catch (error) {
      console.error("Error al obtener notas:", error);
      showAlert('error', '¡Error!', 'Error al cargar las notas. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (newTask) => {
    setIsSubmitting(true);
    try {
      await taskService.createTask(newTask);
      showAlert('success', '¡Éxito!', 'nota creada exitosamente.');
      fetchTasks();
      setOpenForm(false);
    } catch (error) {
      console.error("Error al crear nota:", error);
      showAlert('error', '¡Error!', 'Error al crear la nota. Verifica tus datos.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setOpenForm(true);
  };

  const handleUpdateTask = async (updatedTask) => {
    setIsSubmitting(true);
    try {
      await taskService.updateTask(editingTask.id, { ...editingTask, ...updatedTask });
      showAlert('success', '¡Éxito!', 'nota actualizada exitosamente.');
      fetchTasks();
      setOpenForm(false);
      setEditingTask(null);
    } catch (error) {
      console.error("Error al actualizar nota:", error);
      showAlert('error', '¡Error!', 'Error al actualizar la nota.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const confirmDelete = async (id) => {
    const confirmed = await showConfirmDialog(
      '¿Estás seguro?',
      "¡No podrás revertir esto!",
      'Sí, ¡eliminar!',
      'Cancelar'
    );
    if (confirmed) {
      handleDeleteConfirmed(id);
    }
  };

  const handleDeleteConfirmed = async (id) => {
    try {
      await taskService.deleteTask(id);
      showAlert('success', '¡Eliminado!', 'La nota ha sido eliminada.');
      fetchTasks();
    } catch (error) {
      console.error("Error al eliminar nota:", error);
      showAlert('error', '¡Error!', 'Error al eliminar la nota.');
    }
  };

  const handleChangeStatus = async (id, newStatus) => {
    try {
      await taskService.updateTaskStatus(id, newStatus);
      showAlert('success', '¡Actualizado!', 'Estado de la nota actualizado.');
      fetchTasks();
    } catch (error) {
      console.error("Error al actualizar estado de nota:", error);
      showAlert('error', '¡Error!', 'Error al actualizar el estado de la nota.');
    }
  };

  const handleCloseForm = () => {
    setOpenForm(false);
    setEditingTask(null);
  };

  const filteredTasks = tasks.filter(task => {
    const matchesStatus = filterStatus === 'all' || task.estatus === filterStatus;
    const matchesText = task.description.toLowerCase().includes(searchText.toLowerCase());
    return matchesStatus && matchesText;
  });

  return {
    tasks,
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
    fetchTasks,
    handleCreateTask,
    handleEditTask,
    handleUpdateTask,
    confirmDelete,
    handleChangeStatus,
    handleCloseForm,
    filteredTasks,
  };
};

export default useTaskManagement;