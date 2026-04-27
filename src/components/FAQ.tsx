"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "¿ServiGo ya está funcionando?",
    answer:
      "Estamos en fase de lanzamiento en Perú. Puedes apuntarte gratis para tener acceso anticipado.",
  },
  {
    question: "¿Tiene algún costo registrarse?",
    answer: "No, es totalmente gratis.",
  },
  {
    question: "¿Cuándo podré empezar a recibir clientes?",
    answer:
      "Te avisaremos en cuanto activemos tu zona y tengamos la aplicación lanzada en Perú.",
  },
  {
    question: "¿Qué tipo de servicios podrán ofrecerse?",
    answer:
      "De todo tipo: limpieza, reparaciones, clases, cuidado de personas y muchos más. Algunos servicios funcionarán por precio por hora y otros mediante presupuesto.",
  },
  {
    question: "¿Estoy obligado a usar la plataforma después?",
    answer: "No, no hay ningún compromiso.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#111827]">
            Preguntas frecuentes
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-[12px] overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-[#111827] pr-4 text-sm sm:text-base">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp size={20} className="flex-shrink-0 text-[#6B7280]" />
                ) : (
                  <ChevronDown size={20} className="flex-shrink-0 text-[#6B7280]" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-[#6B7280] text-sm">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
