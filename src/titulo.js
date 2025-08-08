import imagen from './imagen.png';

function Titulo(){
    return(
        <div>
            <h1>El Acertijo</h1>
            <hr/>
            <img src={imagen} alt="Logo"></img>
        </div>
    )
}

export default Titulo;