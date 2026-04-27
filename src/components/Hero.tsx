import { ArrowRight } from "lucide-react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf4tUizgvvDoBv1WINQaKwohcap2QZ7_dT9kXLup_wC4VqAqQ/viewform?usp=publish-editor";

export default function Hero() {
  return (
    <section className="bg-[#1E3A8A] text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block bg-[#FFC300] text-[#111827] text-sm font-semibold px-4 py-1.5 rounded-full mb-8">
          Próximamente en Perú
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
          Estamos preparando el{" "}
          <span>
            <span className="text-[#D91023]">lan</span>
            <span>zamie</span>
            <span className="text-[#D91023]">nto</span>
          </span>{" "}
          de ServiGo en Perú.{" "}
          <span className="text-[#FFC300]">
            Apúntate gratis y accede antes que nadie a nuevas oportunidades de
            trabajo cerca de ti.
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-blue-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          Únete a ServiGo y recibirás solicitudes de trabajo cerca de ti:
          limpieza, reparaciones, clases y muchos más. Elegirás cuánto cobrar,
          cuándo trabajar y con quién aceptar los trabajos.
        </p>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#FFC300] text-[#111827] text-lg font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors shadow-lg"
        >
          Apúntate gratis
          <ArrowRight size={20} />
        </a>
        <p className="text-sm text-blue-300 mt-4">
          Sin compromiso · Totalmente gratis
        </p>
      </div>
    </section>
  );
}
