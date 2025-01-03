import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {

  const { images, isLoading} = useFetchGifs(category);


  return (
    <>
      <h3>{category}</h3>
      {
        isLoading 
        ? ( <h2>Cargando...</h2>) 
        : null
      }
      {/* {
        isLoading && (<h2>Cargando...</h2>)
      } */}
      <div className="card-grid">
        {images.map((image) => (
          <GifItem 
          key={image.id} 
          {...image} // Spread operator para enviar todas las propiedades de la imagen
          />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
