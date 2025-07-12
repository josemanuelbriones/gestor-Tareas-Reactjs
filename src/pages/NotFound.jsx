import error404 from '../assets/img/error404.png';
import '../styles/NotFound.css';

const NotFound = () => {
	return (
		<div className="contenedor">
		<div className="container1">
        <div className="content">
            <div className="col">
                <h2>404</h2>
            <h4>Pagina no encontrada</h4>
            <p>Favor de regresar a la pagina principal.</p>
            <a href="/">Inicio</a>
            
            </div>
            <div className="col">
			<img src={error404} alt="Imagen" className="imagenError" />
                
            </div>
            
        </div>
        </div>
    </div>
	);
}

export default NotFound;
