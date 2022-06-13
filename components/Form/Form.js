import Image from "next/image";
import hiImg from "../../assets/imgs/11_MANO.png";
import eggplantImg from "../../assets/imgs/12_BERENJENA.png";
import hotEmoji from "../../assets/imgs/13_EMOJIHOT.png";
import partyEmoji from "../../assets/imgs/14_PARTYEMOJI.png";
import { useCallback, useState } from "react";
import Router from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import APIRoute from "../../config/api-route.json";

const Form = () => {
  const validResponses = async (input) => {
    const { products, logo, activity } = input;
    const inputData = {
      products,
      logo,
      activity,
    };
    const validData = {
      products: "producto_3",
      logo: "trojano",
      activity: "pride",
    };
    if (JSON.stringify(inputData) === JSON.stringify(validData)) {
      return { ...input, isGuest: true };
    } else {
      return { ...input, isGuest: false };
    }
  };

  const sendEmail = async (info) => {
    const data = {
      name: info.name,
      last_name_first: info.last_name_first,
      last_name: info.last_name,
      email: info.email,
    };

    const response = await fetch(APIRoute["contact.send"], {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  };
  const submitHandler = useCallback(async (input) => {
    event.preventDefault();
    const data = {
      name: input.name,
      last_name_first: input.last_name_first,
      last_name: input.last_name,
      email: input.email,
      tel: input.tel,
      isGuest: input.isGuest,
    };

    const response = await fetch(
      "http://trojan.trendsetera.com.mx/api/v1/post/guest",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res = await response.json();
    if (res.description === "guest") {
      sendEmail(data);
      Router.push("/congratulations");
    } else if (res.description === "reject") {
      Router.push("/again");
    } else if (res.description === "full") {
      Router.push("/full");
    }
  }, "");

  const formik = useFormik({
    initialValues: {
      name: "",
      last_name_first: "",
      last_name: "",
      email: "",
      tel: "",
      products: "",
      logo: "",
      activity: "",
      agreement: false,
      elder: false,
      isGuest: false,
    },
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string().required("¡El nombre es obligatorio!"),
      last_name_first: Yup.string().required(
        "¡El apellido paterno es obligatorio!"
      ),
      last_name: Yup.string().required("¡El apellido materno es obligatorio!"),
      email: Yup.string()
        .email("El email no es valido")
        .required("¡El email esl obligatorio!"),
      tel: Yup.number()
        .typeError("Debes poner un número teléfonico")
        .required("¡El teléfono esl obligatorio!"),
      products: Yup.string().required("¡Menciona uno de nuestros productos!"),
      agreement: Yup.boolean().oneOf([true], 'Field must be checked'),
      elder: Yup.boolean().oneOf([true], 'Field must be checked'),
      agreement: Yup.string().required("¡Este campo es requerido!"),
      activity: Yup.string().required("¡Que se celebra el mes de junio!"),
    }),
    onSubmit: (vals) => {
      validResponses(vals).then((newVals) => {
        submitHandler(newVals);
      });
    },
  });

  return (
    <div className="form-content">
      <form onSubmit={formik.handleSubmit} className="text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-3 bg-first-section py-32">
          <div className="animate-bounce pb-10 lg:pb-0">
            <Image src={hiImg} alt="Hand" width={120} height={120} />
          </div>
          <div>
            <div className="input-item">
              <input
                type="text"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                placeholder="NOMBRE"
              />
            </div>
            {formik.errors.name ? (
              <div className="py-2">
                <p className="font-bold text-white-500">{formik.errors.name}</p>
              </div>
            ) : null}
            <div className="input-item">
              <input
                type="text"
                id="last_name_first"
                name="last_name_first"
                placeholder="APELLIDO PATERNO"
                value={formik.values.last_name_first}
                onChange={formik.handleChange}
              />
            </div>
            {formik.errors.last_name_first ? (
              <div className="py-2">
                <p className="font-bold text-white-500">
                  {formik.errors.last_name_first}
                </p>
              </div>
            ) : null}
            <div className="input-item">
              <input
                type="text"
                id="last_name"
                name="last_name"
                placeholder="APELLIDO MATERNO"
                value={formik.values.last_name}
                onChange={formik.handleChange}
              />
            </div>
            {formik.errors.last_name ? (
              <div className="py-2">
                <p className="font-bold text-white-500">
                  {formik.errors.last_name}
                </p>
              </div>
            ) : null}
            <div className="input-item">
              <input
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="MAIL"
              />
            </div>
            {formik.errors.email ? (
              <div className="py-2">
                <p className="font-bold text-white-500">
                  {formik.errors.email}
                </p>
              </div>
            ) : null}
            <div className="input-item">
              <input
                type="string"
                id="tel"
                name="tel"
                value={formik.values.tel}
                onChange={formik.handleChange}
                placeholder="TELÉFONO"
              />
            </div>
            {formik.errors.tel ? (
              <div className="py-2">
                <p className="font-bold text-white-500">{formik.errors.tel}</p>
              </div>
            ) : null}
            <div className="checkbox-item">
              <input
                value="agreement"
                name="agreement"
                type="checkbox"
                onChange={formik.getFieldProps("agreement").onChange}
              />
              ACEPTO EL USO DE MIS DATOS Y EL USO DE MI IMAGEN
            </div>
            {formik.errors.products ? (
              <div className="py-2">
                <p className="font-bold text-white-500">
                  {formik.errors.agreement}
                </p>
              </div>
            ) : null}
            <div className="checkbox-item">
              <input
                value="elder"
                name="elder"
                type="checkbox"
                onChange={formik.getFieldProps("elder").onChange}
              />
              CONFIRMO QUE TENGO MÁS DE 18 AÑOS
            </div>
            {formik.errors.products ? (
              <div className="py-2">
                <p className="font-bold text-white-500">
                  {formik.errors.elder}
                </p>
              </div>
            ) : null}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-3 bg-second-section py-32">
          <div></div>
          <div>
            <p className="bold form-texts">
              1. MENCIONA 3 DE NUESTROS PRODUCTOS
            </p>
            <div className="radio-item">
              <input
                id="1"
                value="producto_1"
                name="products"
                type="radio"
                onChange={formik.getFieldProps("logo").onChange}
              />
              TROJAN FIRE & ICE/ TROJAN SAFE/ TROJAN ECSTASY
            </div>
            <div className="radio-item">
              <input
                id="2"
                value="producto_2"
                name="products"
                type="radio"
                onChange={formik.getFieldProps("logo").onChange}
              />
              TROJAN PRO-TECH/ TROJAN SAFE/ TROJAN SENSIBILIDAD
            </div>
            <div className="radio-item">
              <input
                id="3"
                value="producto_3"
                name="products"
                type="radio"
                onChange={formik.getFieldProps("logo").onChange}
              />
              TROJAN PRO-TECH/ TROJAN ECSTASY/ TROJAN PIEL DESNUDA, SENSIBILIDAD
            </div>
            {formik.errors.products ? (
              <div className="py-2">
                <p className="font-bold text-white-500">
                  {formik.errors.products}
                </p>
              </div>
            ) : null}
          </div>
          <div className="animate-bounce pt-32 lg:pt-0">
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
                value="astronauta"
                name="logo"
                type="radio"
                onChange={formik.getFieldProps("logo").onChange}
              />
              ASTRONAUTA
            </div>
            <div className="radio-item">
              <input
                id="trojan"
                value="trojano"
                name="logo"
                type="radio"
                onChange={formik.getFieldProps("logo").onChange}
              />
              TROJANO
            </div>
            <div className="radio-item">
              <input
                id="motorcycle"
                value="motociclista"
                name="logo"
                type="radio"
                onChange={formik.getFieldProps("logo").onChange}
              />
              MOTOCICLISTA
            </div>
            <div className="radio-item">
              <input
                id="cyclist"
                value="ciclista"
                name="logo"
                type="radio"
                onChange={formik.getFieldProps("logo").onChange}
              />
              CICLISTA
            </div>
            {formik.errors.logo ? (
              <div className="py-2">
                <p className="font-bold text-white-500">{formik.errors.logo}</p>
              </div>
            ) : null}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-3 bg-fourth-section py-32">
          <div></div>
          <div>
            <p className="bold form-texts">
              3. DURANTE JUNIO SE CELEBRA EL MES DEL:
            </p>
            <div className="radio-item">
              <input
                id="pride"
                value="pride"
                name="activity"
                type="radio"
                onChange={formik.getFieldProps("activity").onChange}
              />
              PRIDE
            </div>
            <div className="radio-item">
              <input
                id="enviorement"
                value="medio ambiente"
                name="activity"
                type="radio"
                onChange={formik.getFieldProps("activity").onChange}
              />
              MEDIO AMBIENTE
            </div>
            <div className="radio-item">
              <input
                id="activism"
                value="activismo"
                name="activity"
                type="radio"
                onChange={formik.getFieldProps("activity").onChange}
              />
              ACTIVISMO
            </div>
            {formik.errors.activity ? (
              <div className="py-2">
                <p className="font-bold text-white-500">
                  {formik.errors.activity}
                </p>
              </div>
            ) : null}
          </div>
          <div className="animate-bounce">
            <div className="pt-32 lg:pt-0">
              <Image
                src={partyEmoji}
                alt="party-emoji"
                width={120}
                height={120}
              />
            </div>
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
