import type { Tint } from '../../components/Avatar';

export const LANES: { queue: string; agent: string; tint: Tint }[] = [
  { queue: 'Vendas', agent: 'Ana Ribeiro', tint: 1 },
  { queue: 'Suporte', agent: 'Diego Martins', tint: 2 },
  { queue: 'Financeiro', agent: 'Beatriz Lopes', tint: 3 },
];

export const SLOTS_PER_LANE = 4;

type Chip = {
  name: string;
  tint: Tint;
  text: string;
  waiting: number;
  lane: number;
  slot: number;
  /** Posição no caos, em fração da área livre do palco, e inclinação em graus. */
  chaos: [x: number, y: number, rotate: number];
  /** Ordem de partida: quem voa primeiro. */
  order: number;
};

export const CHIPS: Chip[] = [
  {
    name: 'Mariana Souza',
    tint: 4,
    text: 'Tem a camisa azul no M?',
    waiting: 4,
    lane: 0,
    slot: 0,
    chaos: [0.04, 0.1, -7],
    order: 0,
  },
  {
    name: 'Rafael Lima',
    tint: 3,
    text: 'Entregam em Niterói?',
    waiting: 12,
    lane: 0,
    slot: 1,
    chaos: [0.62, 0.02, 5],
    order: 4,
  },
  {
    name: 'Fernanda Rocha',
    tint: 4,
    text: 'Parcela em 10 vezes?',
    waiting: 7,
    lane: 0,
    slot: 2,
    chaos: [0.3, 0.55, -3],
    order: 8,
  },
  {
    name: 'Gustavo Nunes',
    tint: 5,
    text: 'Quero fazer um pedido grande',
    waiting: 31,
    lane: 0,
    slot: 3,
    chaos: [0.86, 0.66, 8],
    order: 11,
  },
  {
    name: 'Juliana Alves',
    tint: 5,
    text: 'A caixa chegou amassada',
    waiting: 18,
    lane: 1,
    slot: 0,
    chaos: [0.42, 0.18, 4],
    order: 2,
  },
  {
    name: 'Bruno Costa',
    tint: 1,
    text: 'Esqueci minha senha',
    waiting: 3,
    lane: 1,
    slot: 1,
    chaos: [0.08, 0.72, 6],
    order: 6,
  },
  {
    name: 'Lucas Martins',
    tint: 6,
    text: 'Trocar o tamanho do tênis',
    waiting: 26,
    lane: 1,
    slot: 2,
    chaos: [0.74, 0.38, -9],
    order: 9,
  },
  {
    name: 'Camila Duarte',
    tint: 2,
    text: 'O rastreio não atualiza',
    waiting: 9,
    lane: 1,
    slot: 3,
    chaos: [0.55, 0.88, -4],
    order: 3,
  },
  {
    name: 'Carlos Pereira',
    tint: 6,
    text: 'O boleto venceu ontem',
    waiting: 15,
    lane: 2,
    slot: 0,
    chaos: [0.18, 0.34, 9],
    order: 1,
  },
  {
    name: 'Patrícia Gomes',
    tint: 2,
    text: 'Segunda via da nota fiscal',
    waiting: 41,
    lane: 2,
    slot: 1,
    chaos: [0.9, 0.16, -6],
    order: 7,
  },
  {
    name: 'Renata Freitas',
    tint: 3,
    text: 'Paguei duas vezes',
    waiting: 6,
    lane: 2,
    slot: 2,
    chaos: [0.02, 0.95, -2],
    order: 5,
  },
  {
    name: 'Thiago Ramos',
    tint: 1,
    text: 'Tem desconto à vista?',
    waiting: 22,
    lane: 2,
    slot: 3,
    chaos: [0.38, 0.8, 7],
    order: 10,
  },
];
