import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad – ServiGo",
  description: "Conoce cómo ServiGo gestiona y protege tus datos personales.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#F9FAFB] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-block text-[#1E3A8A] text-sm font-medium hover:underline mb-8"
        >
          ← Volver al inicio
        </Link>
        <article className="bg-white rounded-[12px] shadow-sm border border-[#E5E7EB] p-8 prose prose-slate max-w-none">
          <h1>Política de Privacidad</h1>

          <h2>1. Responsable del tratamiento</h2>
          <p>
            ServiGo es un proyecto en fase de pre-lanzamiento enfocado en conectar profesionales con
            clientes en Perú.
          </p>
          <p>
            Para cualquier consulta sobre datos personales, puedes contactar en:{" "}
            <a href="mailto:hola@usaservigo.com">hola@usaservigo.com</a>
          </p>

          <h2>2. Datos que recopilamos</h2>
          <p>A través del formulario de registro, recopilamos los siguientes datos:</p>
          <ul>
            <li>Nombre completo</li>
            <li>Número de celular (WhatsApp)</li>
            <li>Correo electrónico (opcional)</li>
            <li>Ciudad de trabajo</li>
            <li>Servicios ofrecidos</li>
            <li>Años de experiencia</li>
            <li>Disponibilidad</li>
            <li>Información adicional proporcionada voluntariamente</li>
            <li>Aceptación de las políticas de privacidad</li>
          </ul>

          <h2>3. Finalidad del tratamiento</h2>
          <p>Los datos serán utilizados para:</p>
          <ul>
            <li>Contactar contigo sobre el lanzamiento de ServiGo</li>
            <li>Informarte sobre oportunidades relacionadas con tu actividad</li>
            <li>Validar el interés en la plataforma</li>
            <li>Enviar comunicaciones informativas y comerciales relacionadas con ServiGo</li>
          </ul>

          <h2>4. Base legal</h2>
          <p>
            El tratamiento de datos se basa en el consentimiento del usuario al completar y enviar
            el formulario.
          </p>

          <h2>5. Almacenamiento de los datos</h2>
          <p>Los datos se almacenan en herramientas de terceros como:</p>
          <ul>
            <li>Google Forms</li>
            <li>Google Sheets</li>
          </ul>
          <p>Estas herramientas cumplen con estándares de seguridad adecuados.</p>

          <h2>6. Cesión de datos</h2>
          <p>No compartimos datos personales con terceros, salvo obligación legal.</p>

          <h2>7. Derechos del usuario</h2>
          <p>Puedes ejercer en cualquier momento tus derechos de:</p>
          <ul>
            <li>Acceso</li>
            <li>Rectificación</li>
            <li>Eliminación</li>
          </ul>
          <p>
            Enviando una solicitud a:{" "}
            <a href="mailto:hola@usaservigo.com">hola@usaservigo.com</a>
          </p>

          <h2>8. Legislación aplicable</h2>
          <p>
            Esta política se rige por la normativa peruana vigente en materia de protección de datos
            personales, incluyendo la Ley N° 29733.
          </p>
        </article>
      </div>
    </main>
  );
}
