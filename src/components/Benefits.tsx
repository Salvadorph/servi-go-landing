import { Clock, Users, ShieldCheck, Star } from "lucide-react";

const benefits = [
  {
    Icon: Clock,
    title: "Accede antes que otros profesionales",
    description: "Tendrás prioridad cuando empecemos a activar clientes en tu zona.",
  },
  {
    Icon: Users,
    title: "Más oportunidades de trabajo",
    description: "Estamos construyendo una red de clientes que buscan servicios como el tuyo.",
  },
  {
    Icon: ShieldCheck,
    title: "Sin riesgo",
    description: "Apuntarte es gratis y sin compromiso.",
  },
  {
    Icon: Star,
    title: "Sé visible desde el inicio",
    description:
      "Los primeros profesionales tendrán más visibilidad en la plataforma: aparecerán primero en resultados orgánicos y tendrán descuentos en los resultados destacados.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#111827]">
            Beneficios de apuntarte ahora
          </h2>
          <p className="text-[#6B7280] mt-3 max-w-xl mx-auto">
            Ser de los primeros tiene sus ventajas. Aquí te contamos por qué vale la pena apuntarte
            hoy.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-[12px] shadow-sm border border-[#E5E7EB] p-6 flex flex-col gap-4"
            >
              <div className="w-12 h-12 bg-[#FFC300] rounded-lg flex items-center justify-center">
                <Icon size={24} className="text-[#111827]" />
              </div>
              <h3 className="text-base font-semibold text-[#111827]">{title}</h3>
              <p className="text-[#6B7280] text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
