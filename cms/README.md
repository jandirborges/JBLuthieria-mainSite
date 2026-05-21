# JB Luthier — CMS (Sanity Studio)

Painel onde o luthier gerencia os violões do catálogo. Roda independente do site.

## Setup inicial (uma vez só)

1. Criar conta em https://www.sanity.io (login com Google ou e-mail).
2. Criar um novo projeto pelo dashboard do Sanity:
   - Project name: `JB Luthier`
   - Dataset: `production` (deixar default)
3. Copiar o **Project ID** do projeto criado.
4. Substituir `REPLACE_WITH_YOUR_PROJECT_ID` em:
   - `cms/sanity.config.ts`
   - `cms/sanity.cli.ts`
   - Variável de ambiente `PUBLIC_SANITY_PROJECT_ID` do site (em `.env` local e na Vercel).
5. Instalar dependências e fazer login:
   ```bash
   cd cms
   npm install
   npx sanity login   # autenticação via browser
   ```

## Comandos

```bash
npm run dev      # roda o Studio localmente em http://localhost:3333
npm run deploy   # publica o Studio em <projectId>.sanity.studio (acesso do luthier)
npm run build    # build sem publicar
```

## Adicionando o luthier como editor

Depois do primeiro `deploy`, no dashboard do Sanity:
- Project → Members → Invite member → e-mail do luthier (role: Editor)

Ele recebe um link, cria senha, e acessa o Studio em `<projectId>.sanity.studio`.

## Como o site consome os dados

O site (em `../site/`) busca os violões via `@sanity/client` em build time. Cada
publicação do luthier no Studio dispara um webhook que faz a Vercel rebuildar o
site público — automaticamente, em ~1-2 minutos.

Para configurar o webhook (uma vez só):
1. Na Vercel: Project → Settings → Git → Deploy Hooks → criar hook "Sanity publish"
2. Copiar a URL gerada
3. No Sanity: Project → API → Webhooks → criar webhook apontando pra essa URL
   - Dataset: production
   - Trigger on: Create, Update, Delete
