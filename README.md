# JB Luthier

Projeto da presença digital + gestão da oficina de Jandir Borges (luthier).

## Estrutura

```
JBLuthieria/
├── logos-originais/    # PNGs originais (preto e branco) — não mexer
├── site/               # site público (Astro + Tailwind + Sanity)
├── cms/                # configuração Sanity (próxima etapa)
└── oficina-app/        # app local Windows (Electron + SQLite, próxima etapa)
```

## Site

Stack: **Astro + Tailwind CSS v4**. Estático, deploy na Vercel.

```bash
cd site
npm run dev     # http://localhost:4321
npm run build   # gera dist/
npm run preview # serve dist/ localmente
```

Domínio: `jbluthieria.com` (registrado via Cloudflare Registrar, ~US$10/ano).

## Roadmap

- [x] Scaffold do site (Astro + Tailwind)
- [x] Páginas base: home, catálogo, serviços, sobre, contato
- [ ] Conteúdo real (textos, fotos, telefone, e-mail)
- [ ] Integração Sanity CMS para catálogo
- [ ] Formulário conectado ao Formspree
- [ ] Deploy na Vercel + DNS
- [ ] App local Electron (oficina-app/)
