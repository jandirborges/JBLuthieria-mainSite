// Configurações globais do site.
// Para trocar o número de WhatsApp, edite APENAS o campo `whatsapp.digits` abaixo —
// todos os botões e links do site usam essa fonte única.

export const site = {
  name: "JB Luthier",
  baseUrl: "https://jbluthieria.com",

  whatsapp: {
    // Apenas dígitos, no formato internacional (55 + DDD + número).
    // O wa.me ignora espaços, parênteses e traços.
    digits: "553492403298",
    // Versão formatada exibida em texto na página.
    display: "(34) 9240-3298",
  },

  email: "contato@jbluthieria.com",

  instagram: "https://www.instagram.com/jandirborges/",
};

/**
 * Gera URL do WhatsApp (wa.me) com mensagem opcional pré-preenchida.
 * Ex: whatsappLink("Olá! Tenho interesse no Modelo OM.")
 */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.whatsapp.digits}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
