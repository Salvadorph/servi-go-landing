import { DollarSign, UserCheck, Clock, Wrench, MapPin, Send } from "lucide-react";

export default function AppFeatures() {
  return (
    <section id="la-app" className="bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#111827]">
            Así funcionará la app de ServiGo
          </h2>
          <p className="text-[#6B7280] mt-3 max-w-xl mx-auto">
            En ServiGo podrás trabajar de <strong>dos formas</strong>, según el tipo de servicio.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Servicios por hora */}
          <div className="bg-white rounded-[12px] shadow-sm border border-[#E5E7EB] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#FFC300] rounded-lg flex items-center justify-center text-2xl">
                🧹
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#111827]">Servicios por hora</h3>
                <p className="text-sm text-[#6B7280]">Ej: limpieza, clases, cuidado, belleza</p>
              </div>
            </div>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <DollarSign size={20} className="flex-shrink-0 text-[#1E3A8A] mt-0.5" />
                <div>
                  <p className="font-medium text-[#111827] text-sm">Tú defines tu tarifa por hora</p>
                  <p className="text-[#6B7280] text-sm">Indicas cuánto cobras y tu disponibilidad.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <UserCheck size={20} className="flex-shrink-0 text-[#1E3A8A] mt-0.5" />
                <div>
                  <p className="font-medium text-[#111827] text-sm">
                    Los clientes te contratan directamente
                  </p>
                  <p className="text-[#6B7280] text-sm">
                    Ven tu perfil, precio y horarios, y reservan contigo.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="flex-shrink-0 text-[#1E3A8A] mt-0.5" />
                <div>
                  <p className="font-medium text-[#111827] text-sm">Trabajas y cobras por horas</p>
                  <p className="text-[#6B7280] text-sm">Sin complicaciones, de forma clara y predecible.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Servicios por presupuesto */}
          <div className="bg-white rounded-[12px] shadow-sm border border-[#E5E7EB] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#1E3A8A] rounded-lg flex items-center justify-center text-2xl">
                🔧
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#111827]">Servicios por presupuesto</h3>
                <p className="text-sm text-[#6B7280]">Ej: gasfitería, electricidad, pintura</p>
              </div>
            </div>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <Wrench size={20} className="flex-shrink-0 text-[#1E3A8A] mt-0.5" />
                <div>
                  <p className="font-medium text-[#111827] text-sm">El cliente publica lo que necesita</p>
                  <p className="text-[#6B7280] text-sm">
                    Describe el problema o trabajo (ej: fuga de agua, instalación, reparación).
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 text-[#1E3A8A] mt-0.5" />
                <div>
                  <p className="font-medium text-[#111827] text-sm">Recibes la solicitud cerca de ti</p>
                  <p className="text-[#6B7280] text-sm">
                    Podrás ver los detalles del trabajo y decidir si te interesa.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Send size={20} className="flex-shrink-0 text-[#1E3A8A] mt-0.5" />
                <div>
                  <p className="font-medium text-[#111827] text-sm">Envías tu propuesta</p>
                  <p className="text-[#6B7280] text-sm">
                    Indicas el precio y condiciones según el trabajo.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <UserCheck size={20} className="flex-shrink-0 text-[#1E3A8A] mt-0.5" />
                <div>
                  <p className="font-medium text-[#111827] text-sm">El cliente elige</p>
                  <p className="text-[#6B7280] text-sm">
                    Compara opciones y selecciona al profesional que prefiera.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
