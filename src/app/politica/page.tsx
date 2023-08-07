"use client"
import { useTranslation } from "react-i18next"

import Footer from "../components/Footer";
import '../../lib/i18n';

export default function Politica() {
  const { i18n } = useTranslation()

  return (
    <main className="text-black">
      <div className="container mx-auto p-6 max-w-screen-md">
        {i18n.resolvedLanguage === 'es' ? <Spanish /> : <English />}
      </div>
      <Footer />
    </main>
  )
}

const Spanish = () => (
  <>
    <div className="text-lg font-bold text-center mb-4">Política de Privacidad de Paponga</div>
    <div className="mb-4">Fecha de entrada en vigor: 07/08/2023</div>
    <div>Bienvenido/a a Paponga</div>
    <p>
      En esta política de privacidad explicamos cómo recopilamos, utilizamos y protegemos la información personal 
      que nos proporcionas cuando utilizas nuestra aplicación. Tu privacidad es importante para nosotros y estamos
      comprometidos a proteger tus datos personales. Al utilizar nuestra aplicación, aceptas los términos descritos en esta política.
    </p>
    <ul className="mt-4">
      <li className="mb-4">
        <strong>Información recopilada: </strong>
        La única información personal que recopilamos es tu dirección de correo electrónico.
        No recopilamos ni utilizamos ningún otro dato del dispositivo u otra información personal que no sea tu dirección de correo electrónico.
      </li>
      <li className="mb-4">
        <strong>Uso de la información: </strong>
        Utilizamos tu dirección de correo electrónico exclusivamente con el propósito de identificarte dentro de la aplicación "Paponga" y
        brindarte una experiencia personalizada. No compartimos, vendemos ni divulgamos tu dirección de correo electrónico a terceros sin tu consentimiento previo.
      </li>
      <li className="mb-4">
        <strong>Seguridad de los datos: </strong>
        Mantenemos medidas de seguridad apropiadas para proteger tu información personal contra el acceso no autorizado,
        la divulgación o la destrucción accidental. Toda la información se almacena de manera segura y solo el personal autorizado tiene acceso a ella.
      </li>
      <li className="mb-4">
        <strong>Retención de datos: </strong>
        Conservamos tu dirección de correo electrónico durante el tiempo que sea necesario para cumplir con los fines establecidos
        en esta política de privacidad, a menos que la ley exija lo contrario.
      </li>
      <li className="mb-4">
        <strong>Enlaces a sitios web de terceros: </strong>
        La aplicación "Paponga" podría contener enlaces a sitios web de terceros. No somos responsables de las
        prácticas de privacidad de estos sitios web, por lo que te recomendamos leer sus políticas de privacidad antes de proporcionarles cualquier información personal.
      </li>
      <li className="mb-4">
        <strong>Cambios en la política de privacidad: </strong>
        Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento.
        Si realizamos cambios significativos, te informaremos mediante una notificación en la aplicación o por correo electrónico.
        Te recomendamos revisar esta política periódicamente para estar al tanto de cualquier actualización.
      </li>
      <p className="mb-4">
        <strong>Contacto: </strong>
        Si tienes alguna pregunta, inquietud o solicitud relacionada con esta política de privacidad,
        no dudes en contactarnos a través del correo electrónico <strong><a href="mailto:develop@paponga.com">develop@paponga.com</a></strong>.
      </p>
      <p>
        Al utilizar la aplicación "Paponga" y proporcionarnos tu dirección de correo electrónico,
        aceptas los términos de esta política de privacidad. Gracias por confiar en nosotros para proteger tu privacidad.
      </p>
    </ul>
  </>
)

const English  = () => (
  <>
    <div className="text-lg font-bold text-center mb-4">Privacy Policy for Paponga</div>
    <div className="mb-4">Effective Date: 07/08/2023</div>
    <div>Welcome to Paponga</div>
    <p>
      In this privacy policy, we explain how we collect, use, and protect the personal information you provide
      when using our application. Your privacy is important to us, and we are committed to safeguarding your
      personal data. By using our application, you agree to the terms outlined in this policy.
    </p>
    <ul className="mt-4">
      <li className="mb-4">
        <strong>Information Collected: </strong>
        The only personal information we collect is your email address.
        We do not collect or use any other device data or personal information other than your email address.
      </li>
      <li className="mb-4">
        <strong>Use of Information: </strong>
        We use your email address solely for the purpose of identifying you within the "Paponga" application
        and providing you with a personalized experience. We do not share, sell, or disclose your email address 
        to third parties without your prior consent.
      </li>
      <li className="mb-4">
        <strong>Data Security: </strong>
        We maintain appropriate security measures to protect your personal information from unauthorized access, 
        disclosure, or accidental destruction. All information is securely stored, and only authorized personnel have access to it.
      </li>
      <li className="mb-4">
        <strong>Data Retention: </strong>
        We retain your email address for as long as necessary to fulfill the purposes set forth in this privacy policy,
        unless otherwise required by law.
      </li>
      <li className="mb-4">
        <strong>Links to Third-Party Websites: </strong>
        The "Paponga" application may contain links to third-party websites. We are not responsible for the privacy practices of these websites, 
        so we recommend reviewing their privacy policies before providing them with any personal information.
      </li>
      <li className="mb-4">
        <strong>Changes to the Privacy Policy: </strong>
        We reserve the right to modify this privacy policy at any time. If significant changes are made,
        we will inform you through a notification in the application or via email. We recommend checking this policy
        periodically to stay informed of any updates.
      </li>
      <p className="mb-4">
        <strong>Contact: </strong>
        If you have any questions, concerns, or requests related to this privacy policy,
        please do not hesitate to contact us at <strong><a href="mailto:develop@paponga.com">develop@paponga.com</a></strong>.
      </p>
      <p>
        By using the "Paponga" application and providing us with your email address, you agree to the terms of this privacy policy.
        Thank you for trusting us to protect your privacy.
      </p>
    </ul>
  </>
)