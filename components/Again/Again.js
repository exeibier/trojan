import Image from "next/image";
import trojanPurple from "../../assets/imgs/10_LOGOTROJAN_MAGENTA.png";
import surpriseEmoji from "../../assets/imgs/17_SURPRISEEMOJI.png";
const Again = () => {
  return (
    <div className="again-section py-24">
      <div className="container mx-auto">
        <div className="again-img text-center">
          <Image
            src={trojanPurple}
            alt="Logo-trojan"
            width={120}
            height={120}
          />
        </div>
        <div className="again-title pt-10">
          <h1 className="text-center">¡LO SENTIMOS!</h1>
        </div>
        <div className="again-text text-center flex-1 w-70 ">
          <p className="bold">UNA O VARIAS DE TUS RESPUESTAS ESTÁN MAL</p>
          <p className="normal">
            TE INVITAMOS A ESTAR PENDIENTE DE LAS REDES SOCIALES DE TROJAN
            MÉXICO PARA ASISTIR A LAS SIGUIENTES EXPERIENCIAS
          </p>
        </div>
        <div className="surprise-img animate-bounce text-center pt-32">
          <Image
            src={surpriseEmoji}
            alt="icono-sorpresa"
            width={120}
            height={120}
          />
        </div>
      </div>
    </div>
  );
};

export default Again;
