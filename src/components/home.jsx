import "./home.css"

export function Home() {
  return (
    <div className="content">
      <div className="marquee">
        <div className="marquee_blur" aria-hidden="true">
          <p className="marquee_text">Free Realm</p>
        </div>
        <div className="marquee_clear">
          <p className="marquee_text">Free Realm</p>
        </div>
      </div>

      <p className="text">
      En nuestro sitio, ofrecemos una amplia colección de recursos gratuitos para satisfacer todas tus necesidades creativas. Navega a través de nuestra selección cuidadosamente curada de fotos, videos, fuentes, bibliotecas y más, todo disponible sin costo alguno.
      </p>
    </div>
  );
}
