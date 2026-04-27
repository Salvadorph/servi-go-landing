import { CheckCircle } from "lucide-react";

const proSteps = [
  "Déjanos tus datos en el formulario",
  "Tardarás menos de 1 minuto",
  "Validamos tu perfil",
  "Te incluimos en la lista de profesionales de tu zona",
  "Te avisamos del lanzamiento",
  "Serás de los primeros en empezar a recibir clientes",
  "Empiezas a trabajar (cuando lancemos)",
  "Accede antes que otros a nuevas oportunidades y obtén beneficios exclusivos por ser de los primeros",
];

const clientSteps = [
  "Buscarán profesionales cerca",
  "Según el servicio que necesiten",
  "Compararán opciones: precios, perfiles y disponibilidad",
  "Elegirán a quién contratar de forma rápida y sencilla",
  "Insertarán trabajos a realizar en su zona para que puedas aplicar",
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#111827]">Pasos para apuntarse</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Para profesionales */}
          <div className="bg-[#1E3A8A] text-white rounded-[12px] p-8">
            <h3 className="text-xl font-semibold mb-6 text-[#FFC300]">Para profesionales</h3>
            <ul className="flex flex-col gap-4">
              {proSteps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#FFC300] text-[#111827] rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </span>
                  <span className="text-sm text-blue-100 pt-0.5">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Para clientes */}
          <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-[12px] p-8">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-semibold text-[#111827]">Para clientes</h3>
              <span className="text-xs bg-[#E5E7EB] text-[#6B7280] px-2 py-1 rounded-full font-medium">
                Próximamente
              </span>
            </div>
            <p className="text-sm text-[#6B7280] mb-6">
              Cuando lancemos la plataforma, así podrán encontrarte los clientes.
            </p>
            <ul className="flex flex-col gap-4">
              {clientSteps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle size={20} className="flex-shrink-0 text-[#22C55E] mt-0.5" />
                  <span className="text-sm text-[#6B7280]">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
