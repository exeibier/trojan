import Image from "next/image";
import trojanPurple from "../../assets/imgs/10_LOGOTROJAN_MAGENTA.png";

const Header = () => {
  return (
    <div className="main-header pb-40 pt-24">
      <div className="container mx-auto px-auto">
        <div className="header-img text-center">
          <Image
            src={trojanPurple}
            alt="logo-trojan"
            width={120}
            height={120}
          />
        </div>
        <div className="header-title pt-10 pb-5">
          <h1 className="text-center">¡BIENVENIDX!</h1>
        </div>
        <div className="header-text text-center">
          <p className="bold">
            ¿ESTÁS LISTX PARA DISFRUTAR DE LA MEJOR EXPERIENCIA?
          </p>
          <p className="normal">
            CONTESTA LAS SIGUIENTES PREGUNTAS DE MANERA CORRECTA Y SÉ UNO DE
            NUESTROS INVITADXS ESPECIALES PARA VIVIR LA INCREÍBLE EXPERIENCIA
            DEL PRIDE BY TROJAN
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
