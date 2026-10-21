# Nova landing — Altar Chat (2026-10-20)

Branch `feat/nova-landing`. Substitui a landing anterior (template com shadcn, partículas e depoimentos genéricos).

## Brief

Landing do Altar Chat para donos e gestores de equipes de atendimento no Brasil (web, desktop e celular).
Objetivo: levar ao teste grátis (hoje pelo WhatsApp de vendas) ou à conversa com o time.
Tom: familiar como o WhatsApp, direto, confiante. Objeções: "minha equipe vai se perder", "meu número vai ser bloqueado", "é complicado".
Gancho: a página é o próprio produto. Começa com uma caixa de entrada que se mexe sozinha e termina num campo de mensagem que manda a mensagem de verdade.

## Referências (pesquisa em 2026-10-20)

| Referência | O que entra | O que fica de fora |
| --- | --- | --- |
| WhatsApp Business (whatsappbusiness.com) — **principal** | Hero em verde-floresta com título inteiro em verde vivo; CTA em pílula verde com texto escuro; seções claras depois do hero | Ativos da Meta (logo, ícones, ilustrações) |
| Attio | Seção de recursos com lista fixa à esquerda e indicador do capítulo ativo; linhas finas no lugar de cartões | Canvas lavanda, tipografia neutra |
| respond.io | Título em forma de cena (situação real do cliente) e produto grande logo abaixo do hero | Hero escuro roxo |
| Login do app (`AuthHero`) | Verdes `#0d4a33` / `#052117`, prévia de conversa animada | Aurora com blobs |

## Reference lock

- **Preservar:** hero verde-floresta; título inteiro em verde vivo; CTA em pílula `#25D366` com texto escuro; produto em tamanho grande; papéis de cor do WhatsApp nos mockups (bolha enviada `#D9FDD3`, papel de parede `#F5F1EB` só em superfícies de chat, ticks azuis só em ticks).
- **Emprestar só:** lista fixa com indicador (Attio) e título-cena (respond.io).
- **Rejeitar:** índigo/violeta, glassmorphism, blobs, partículas, cartões em grade, emoji como ícone, números e depoimentos que não podemos comprovar.
- **Tipografia:** Bricolage Grotesque (títulos) + Roboto (texto e mockups, a fonte do app).
- **Mídia:** mockups de produto feitos em código, fiéis ao app (o produto é a imagem).

## Ledger de decisões

| Decisão | Fonte | Por quê |
| --- | --- | --- |
| Hero verde-floresta + título verde vivo | WhatsApp Business, login do app | Identidade reconhecível no primeiro segundo; casa com a tela de login |
| Caixa de entrada viva no hero | respond.io (produto logo abaixo), `AuthHero` | Mostra o produto em vez de prometer |
| Seção "Do caos à ordem" presa na rolagem | Objeção "equipe se perde" | Momento memorável: as conversas soltas viram filas com dono |
| Recursos com lista fixa | Attio | Cinco capítulos sem grade de cartões |
| Disparos com ritmo visível | PR #32 do app (limite por minuto e horário previsto) | Responde à objeção de bloqueio com um recurso real |
| CTA final em forma de campo de mensagem | Funil atual pelo WhatsApp | O botão "enviar" abre o WhatsApp com a mensagem pronta |
| Sem depoimentos nem números de clientes | Base real tem poucos tenants | Prova inventada derruba a credibilidade |

## Estrutura

1. Navbar (transparente no hero, branca ao rolar) — Entrar + Testar grátis
2. Hero + `InboxDemo` (simulação ao vivo, inclinação que se desfaz na rolagem)
3. `ChaosToOrder` (seção presa: conversas espalhadas → três filas com responsável)
4. `Features` (Atendimento, Automações, Disparos, IA, Relatórios + "e mais")
5. `Steps` (3 passos, linha que se desenha)
6. `Pricing` (preços em `src/constants.ts`)
7. `FAQ`
8. `FinalCTA` (campo de mensagem que envia pelo WhatsApp)
9. Footer

## Movimento

- Tokens em `src/index.css` (`--dur-*`, `--ease-*`). Hover 120ms, estados 200ms, entradas de seção 600ms (marketing).
- Rolagem: um único listener (`useScrollProgress`) grava transformações direto no DOM, sem re-render.
- Loops (hero, vinhetas) pausam fora da tela. `prefers-reduced-motion`: estado final estático, sem inclinação nem voo.

## Estado (2026-10-20)

- Aprovada pelo dono e mesclada na `main` em 2026-10-20 (PR #1); em produção em https://altarchat.com.br (deploy do Vercel `success`).
- `npm run lint` e `npm run build` passam. `node scratch/landing/check.mjs` (no repo do app) não acusa erro de console nem rolagem horizontal em 360, 390, 768, 1024 e 1440 px. Com movimento reduzido, a seção do caos fica estática e já organizada.
- Seções antigas removidas: Testimonials, HowItWorks, CTA, ParticlesBackground e `assets/logo.png`. A pasta `src/components/ui/` (shadcn) e o `src/App.css` já não eram usados antes; ficaram como estavam.

## Armadilhas

- **`node_modules` e `dist/` estão versionados.** O dev server reescreve `node_modules/.vite/deps/*`: `git checkout -- node_modules/.vite` antes do commit, e `npm run build` para atualizar o `dist/`.
- **Deploy pelo Git falhava** com `node_modules/.bin/tsc: Permission denied` (a `node_modules` versionada não tem bit de execução). O `vercel.json` agora usa `"installCommand": "npm ci"`. Log de um deploy: `npx vercel inspect <dpl_id> --logs`.
- **Preflight do Tailwind:** `svg { display: block }`. Ícone no meio do texto quebra a linha; use `display: inline-block`.
- **Destino de elemento que entra com `transform`:** meça com `offsetLeft`/`offsetTop` (ignoram transform), não com `getBoundingClientRect`. As conversas da seção do caos pousavam 24px abaixo do lugar por isso.
- **Prévia logo após recarregar:** a captura sai em branco ou no meio das animações de entrada. Espere uns 6s ou use o Playwright.
- **Prettier sem config no repo:** o padrão troca para aspas duplas. Use `npx prettier --single-quote --print-width 120`.

## Pendências para o dono

- Preços da landing (R$ 150 / 350 / 500) ≠ planos cadastrados em produção ("Plano Growth Modular" R$ 99,90 e "Plano Ilimitado" gratuito).
- CTA principal leva ao WhatsApp de vendas (funil atual). Cadastro direto no app exige revisar o plano gratuito, que hoje não tem prazo.
- `og-image.png` não existe no repositório (a meta tag aponta para ele).
