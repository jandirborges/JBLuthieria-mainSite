# JB Luthier

Projeto da presença digital + gestão da oficina de Jandir Borges (luthier).

## Estrutura

```
JBLuthieria/
├── logos-originais/    # PNGs originais (preto e branco) — não mexer
├── site/               # site público (Astro + Tailwind + Sanity client)
├── cms/                # Sanity Studio — painel do luthier (ver cms/README.md)
└── oficina-app/        # app local Windows (Electron + SQLite, próxima etapa)
```

## Site

Stack: **Astro + Tailwind CSS v4 + @sanity/client**. Estático, deploy na Vercel.

```bash
cd site
npm run dev     # http://localhost:4321
npm run build   # gera dist/
npm run preview # serve dist/ localmente
```

Domínio: `jbluthieria.com` (registrado via Cloudflare Registrar, ~US$10/ano).

## CMS

Sanity Studio standalone (rodando em `<projectId>.sanity.studio`). Ver `cms/README.md`
para setup inicial e instruções de uso para o luthier.

## Roadmap

- [x] Scaffold do site (Astro + Tailwind)
- [x] Páginas base: home, catálogo, serviços, sobre, contato
- [x] Card de violão com status badges (À venda / Amostra)
- [x] Página de detalhe `/catalogo/[slug]` com carrossel
- [x] WhatsApp centralizado em `site/src/data/site.ts`
- [x] Deploy na Vercel + GitHub
- [x] Sanity scaffold (config + schemas)
- [x] Criar projeto Sanity (ID `wf9oeu41`) e deploy do Studio (`jbluthieria.sanity.studio`)
- [ ] Configurar webhook Sanity → Vercel (auto-rebuild)
- [ ] Conteúdo real (fotos, textos, contatos finais)
- [ ] Conectar domínio jbluthieria.com na Vercel
- [ ] Formulário de contato (Formspree)
- [ ] App local Electron (`oficina-app/`)
