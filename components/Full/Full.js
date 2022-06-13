import Image from "next/image";
import trojanYellow from "../../assets/imgs/20_LOGOTROJAN_AMARILLO.png";
import coldEmoji from "../../assets/imgs/18_ICEEMOJI.png";
const Full = () => {
  return (
    <div className="full-section py-24">
      <div className="container mx-auto">
        <div className="full-img text-center">
          <Image
            src={trojanYellow}
            alt="Logo-trojan"
            width={120}
            height={120}
          />
        </div>
        <div className="full-title pt-10">
          <h1 className="text-center">LUGARES LLENOS</h1>
        </div>
        <div className="full-text text-center flex-1 w-70 ">
          <p className="bold">
            EL CUPO DE ESTA EVENTO ES LIMITADO PARA BRINDARTE UNA MEJOR
            EXPERIENCIA, POR LO QUE NUESTROS ACCESOS YA SE ENCUENTRAN AGOTADOS.
          </p>
        </div>
        <div className="cold-img text-center pt-32">
          <Image src={coldEmoji} alt="icono-helado" width={120} height={120} />
        </div>
      </div>
    </div>
  );
};

export default Full;
