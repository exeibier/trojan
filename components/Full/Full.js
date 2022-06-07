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
            PARA BRINDARTE UNA MEJOR EXPERIENCIA NUESTRO CUPO ES LIMITADO POR LO
            QUE NUESTROS ACCESOS PARA ESTA ACTIVIDAD ESTÁN AGOTADOS
          </p>
          <p className="normal">
            TE INVITAMOS A ESTAR PENDIENTE DE LAS REDES SOCIALES DE TROJAN
            MÉXICO PARA REVISAR TODAS LAS ACTIVIDADES QUE PREPARÁMOS DURANTE EL
            AÑO PARA TI
          </p>

          <p className="normal">
            NO OLVIDES SEGUIRNOS COMO <br />
            <a
              className="trojan-ig"
              href="https://www.instagram.com/trojan_mx/?hl=es"
              target="_blank"
              rel="noopener"
            >
              @TROJAN_MX
            </a>
          </p>
          <p className="normal">
            UTILIZA LOS HASHTAGS <br/>
            <span>#SIGUETUINSTITO </span> <br />
            <span> #HAZLOTUYO</span>
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
