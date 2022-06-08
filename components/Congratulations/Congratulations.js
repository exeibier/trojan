import Image from "next/image";
import trojanPurple from "../../assets/imgs/19_LOGOTROJAN_MORADO.png";
import fireIcon from "../../assets/imgs/16_FUEGITO.png";
import smileIcon from "../../assets/imgs/15_HAPPYEMOJI.png";
const Congratulations = () => {
  return (
    <div className="congratulations-section py-24">
      <div className="container mx-auto">
        <div className="congratulations-img text-center">
          <Image
            src={trojanPurple}
            alt="Logo-trojan"
            width={120}
            height={120}
          />
        </div>
        <div className="congratulations-title pt-10">
          <h1 className="text-center">¡FELICIDADES!</h1>
        </div>
        <div className="md:flex">
          <div className="fire-img flex-1 text-center md:text-left ">
            <div className="img animate-bounce">
              <Image
                className="fire"
                src={fireIcon}
                alt="icono-fuego"
                width={120}
                height={120}
              />
            </div>
          </div>
          <div className="congratulations-text text-center flex-1 w-70 ">
            <p className="bold">
              ERES UNX DE NUESTROS INVITADXS ESPECIALES A NUESTRA EXPERIENCIA
              PRIDE BY TROJAN
            </p>
            <p className="normal">
              POR FAVOR EL DÍA DEL EVENTO PRESENTA EL CORREO QUE TE LLEGÓ AL
              MAIL QUE REGISTRASTE, ES INDISPENSABLE QUE LLEGUES PUNTUAL, CON TU
              IDENTIFICACIÓN OFICIAL (INE/ PASAPORTE) Y COPIA DEL DOCUMENTO QUE
              ÉSTAS PRESENTANDO, EL NOMBRE DE TU IDENTIFICACIÓN DEBERÁ COINCIDIR
              CON EL NOMBRE QUE TE REGISTRASTE PARA HACER VÁLIDO TU ACCESO.
            </p>
            <p className="normal">
              PUEDES ASISTIR CON UNA ACOMPAÑANTE COMO TU INVITADX (SÓLO UNA
              PERSONA ESTRICTAMENTE POR GANADOR) O SOLX.
            </p>
            <p className="normal">
              TE RECORDAMOS QUE ÉSTA ES UNA EXPERIENCIA SIN ETIQUETAS Y LIBRE DE
              SER QUIEN TÚ ERES, POR LO QUE PUEDES ASISTIR CON EL MEJOR OUTFIT
              QUE CARACTERICE TU INSTINTO TROJANO.
            </p>
            <p className="bold">
              #SIGUETUINSTITO <br />
              #HAZLOTUYO
            </p>
            <p className="normal">
              TODOS LOS DETALLES DEL EVENTO COMO FECHA, VENUE Y HORA VIENEN EN
              EL CORREO QUE TE HICIMOS LLEGAR
            </p>
            <p className="normal">
              SI GANASTE Y NO TE LLEGÓ TU CORREO DE CONFIRMACIÓN, POR FAVOR
              ESCRIBE A EXPERIENCIAS@TROJAN.MX
            </p>
            <p className="bold">¡NOS VEMOS MUY PRONTO TROJANX!</p>
          </div>
          <div className="smile-img text-center animate-bounce md:text-right flex-1 w-15">
            <Image
              src={smileIcon}
              alt="icono-sonrisa"
              width={120}
              height={120}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Congratulations;
