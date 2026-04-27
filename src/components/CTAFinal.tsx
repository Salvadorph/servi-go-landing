import { ArrowRight } from "lucide-react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf4tUizgvvDoBv1WINQaKwohcap2QZ7_dT9kXLup_wC4VqAqQ/viewform?usp=publish-editor";

export default function CTAFinal() {
  return (
    <section className="bg-[#1E3A8A] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
          Asegura tu lugar antes del lanzamiento
        </h2>
        <p className="text-blue-200 mb-10 max-w-xl mx-auto leading-relaxed">
          Los primeros profesionales tendrán ventaja cuando activemos ServiGo en Perú. Aparecerán
          primero en los resultados orgánicos y tendrán descuentos en los resultados destacados.
        </p>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#FFC300] text-[#111827] text-lg font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors shadow-lg"
        >
          Quiero ser de los primeros
          <ArrowRight size={20} />
        </a>
        <p className="text-sm text-blue-300 mt-4">Sin compromiso · Totalmente gratis</p>
      </div>
    </section>
  );
}
