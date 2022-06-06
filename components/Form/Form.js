import Image from "next/image";
import hiImg from "../../assets/imgs/11_MANO.png";
import eggplantImg from "../../assets/imgs/12_BERENJENA.png";
import hotEmoji from "../../assets/imgs/13_EMOJIHOT.png";
import partyEmoji from "../../assets/imgs/14_PARTYEMOJI.png";
const Form = () => {
  return (
    <div className="form-content">
      <form action="" className="text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-3 bg-first-section py-32">
          <div className="animate-bounce">
            <Image src={hiImg} alt="Hand" width={120} height={120} />
          </div>
          <div>
            <div className="input-item">
              <input type="text" id="name" placeholder="NOMBRE" />
            </div>
            <div className="input-item">
              <input
                type="text"
                id="last-name-first"
                placeholder="APELLIDO PATERNO"
              />
            </div>
            <div className="input-item">
              <input
                type="text"
                id="last-name-last"
                placeholder="APELLIDO MATERNO"
              />
            </div>
            <div className="input-item">
              <input type="email" id="email" placeholder="MAIL" />
            </div>
            <div className="input-item">
              <input type="number" id="tel" placeholder="TELÉFONO" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-3 bg-second-section py-32">
          <div></div>
          <div>
            <p className="bold form-texts">
              1. MENCIONA 3 DE NUESTROS PRODUCTOS
            </p>
            <div className="radio-item">
              <input id="1" value="1" name="products" type="radio" />
              TROJAN FIRE & ICE/ TROJAN SAFE/ TROJAN ECSTASY
            </div>
            <div className="radio-item">
              <input id="2" value="2" name="products" type="radio" />
              TROJAN PRO-TECH/ TROJAN SAFE/ TROJAN SENSIBILIDAD
            </div>
            <div className="radio-item">
              <input id="3" value="3" name="products" type="radio" />
              TROJAN PRO-TECH/ TROJAN ECSTASY/ TROJAN PIEL DESNUDA, SENSIBILIDAD
            </div>
          </div>
          <div className="animate-bounce">
            <Image src={eggplantImg} alt="Hand" width={120} height={120} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-3 bg-third-section py-32">
          <div className="animate-bounce">
            <Image src={hotEmoji} alt="Hand" width={120} height={120} />
          </div>
          <div>
            <p className="bold form-texts">
              2. NUESTRO LOGO ES EL CASCO DE UN:
            </p>
            <div className="radio-item">
              <input
                id="astronaut"
                value="astronaut"
                name="logo-brand"
                type="radio"
              />
              ASTRONAUTA
            </div>
            <div className="radio-item">
              {" "}
              <input
                id="trojan"
                value="trojan"
                name="logo-brand"
                type="radio"
              />
              TROJANO
            </div>
            <div className="radio-item">
              {" "}
              <input
                id="motorcycle"
                value="motorcycle"
                name="logo-brand"
                type="radio"
              />
              MOTOCICLISTA
            </div>
            <div className="radio-item">
              <input
                id="cyclist"
                value="cyclist"
                name="logo-brand"
                type="radio"
              />
              CICLISTA
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-3 bg-fourth-section py-32">
          <div></div>
          <div>
            <p className="bold form-texts">
              3. DURANTE JUNIO SE CELEBRA EL MES DEL:
            </p>
            <div className="radio-item">
              <input id="pride" value="pride" name="celebration" type="radio" />
              PRIDE
            </div>
            <div className="radio-item">
              <input
                id="enviorement"
                value="enviorement"
                name="celebration"
                type="radio"
              />
              MEDIO AMBIENTE
            </div>
            <div className="radio-item">
              <input
                id="activism"
                value="activism"
                name="celebration"
                type="radio"
              />
              ACTIVISMO
            </div>
          </div>
          <div className="animate-bounce">
            <Image src={partyEmoji} alt="Hand" width={120} height={120} />
          </div>
          <div></div>
          <div className="text-center pt-24">
            <input className="send-btn" type="submit" value="Enviar" />
          </div>
        </div>
      </form>
      <div></div>
    </div>
  );
};

export default Form;
