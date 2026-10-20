import type { Tint } from '../../components/Avatar';

export type Queue = 'Vendas' | 'Suporte' | 'Financeiro';

export const AGENTS: Record<Queue, { name: string; short: string; tint: Tint }> = {
  Vendas: { name: 'Ana Ribeiro', short: 'Ana', tint: 1 },
  Suporte: { name: 'Diego Martins', short: 'Diego', tint: 2 },
  Financeiro: { name: 'Beatriz Lopes', short: 'Beatriz', tint: 3 },
};

export const INCOMING: { name: string; tint: Tint; text: string; queue: Queue }[] = [
  { name: 'Mariana Souza', tint: 4, text: 'Vocês têm a camisa azul no tamanho M?', queue: 'Vendas' },
  { name: 'Carlos Pereira', tint: 6, text: 'Meu boleto venceu ontem, ainda consigo pagar?', queue: 'Financeiro' },
  { name: 'Juliana Alves', tint: 5, text: 'O pedido chegou com a caixa amassada', queue: 'Suporte' },
  { name: 'Rafael Lima', tint: 3, text: 'Qual o prazo de entrega para Niterói?', queue: 'Vendas' },
  { name: 'Patrícia Gomes', tint: 2, text: 'Preciso da segunda via da nota fiscal', queue: 'Financeiro' },
  { name: 'Bruno Costa', tint: 1, text: 'Como troco a senha do aplicativo?', queue: 'Suporte' },
  { name: 'Fernanda Rocha', tint: 4, text: 'Vocês parcelam em quantas vezes?', queue: 'Vendas' },
  { name: 'Lucas Martins', tint: 6, text: 'Consigo trocar o tamanho do tênis?', queue: 'Suporte' },
];

/** Uma conversa nova a cada N passos; ela ganha fila no passo seguinte e responsável no outro. */
export const TICKS_PER_ARRIVAL = 3;
export const VISIBLE_ROWS = 6;
/** Depois de tantos passos a conversa conta como lida. */
export const READ_AFTER = 7;

export function clockFor(index: number) {
  const minutes = 9 * 60 + 12 + index * 3;
  const h = Math.floor(minutes / 60) % 24;
  const m = minutes % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}
