import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const useAlerts = () => {
  const showAlert = (icon, title, text) => {
    MySwal.fire({
      icon: icon,
      title: title,
      text: text,
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });
  };

  const showConfirmDialog = async (title, text, confirmButtonText, cancelButtonText) => {
    const result = await MySwal.fire({
      title: title,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText
    });
    return result.isConfirmed;
  };

  return { showAlert, showConfirmDialog };
};

export default useAlerts;