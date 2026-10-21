export const WHATSAPP_LINK = 'https://wa.me/5522992904831';
export const WHATSAPP_NUMBER = '(22) 99290-4831';
export const CONTACT_EMAIL = 'contato@altartech.com.br';

export const APP_URL = 'https://app.altarchat.com.br';

/** Link do WhatsApp de vendas com a mensagem já escrita. */
export function whatsappWithText(text: string) {
  return `${WHATSAPP_LINK}?text=${encodeURIComponent(text)}`;
}

export const TRIAL_MESSAGE = 'Olá! Quero testar o Altar Chat por 7 dias.';

/** Funil principal: o teste grátis começa numa conversa com o time de vendas. */
export const TRIAL_LINK = whatsappWithText(TRIAL_MESSAGE);

export type Plan = {
  name: string;
  description: string;
  price: number;
  features: string[];
  featured?: boolean;
};

export const PLANS: Plan[] = [
  {
    name: 'Básico',
    description: 'Essencial para pequenos times começarem',
    price: 150,
    features: ['2 atendentes', '1 número WhatsApp', 'Chatbot básico', 'Relatórios simples', 'Suporte por email'],
  },
  {
    name: 'Profissional',
    description: 'A escolha ideal para times em crescimento',
    price: 350,
    featured: true,
    features: [
      'Até 5 atendentes',
      '3 números WhatsApp',
      'Chatbot avançado',
      'Relatórios completos',
      'API de integração',
      'Suporte prioritário',
    ],
  },
  {
    name: 'Empresarial',
    description: 'Escalabilidade total para sua operação',
    price: 500,
    features: [
      'Até 10 atendentes',
      'Números ilimitados',
      'Chatbot com IA',
      'Business Intelligence',
      'API dedicada',
      'Suporte 24/7',
      'Gerente de conta',
    ],
  },
];
