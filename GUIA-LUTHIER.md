# Guia do Luthier — JB Luthier

Bem-vindo. Este guia ensina como **adicionar, editar e remover violões** do seu
site. Você não precisa saber programar — toda a parte técnica fica com o
desenvolvedor. Sua função é o conteúdo: violões, fotos, descrições.

Tempo pra aprender: **15 minutos**. Depois disso, é só repetir.

---

## 1. Visão geral: três coisas importantes

| Lugar | Pra que serve | Você usa? |
|---|---|---|
| **Site público** (`jbluthieria.com`) | É o que seus clientes veem na internet | Só pra conferir resultado |
| **Painel Sanity** (`jbluthieria.sanity.studio`) | Onde você cadastra e edita seus violões | **Sim, é a sua oficina digital** |
| **GitHub / Vercel** | Onde o código do site mora (parte técnica) | **Não. Nem entre.** |

Foque no **Painel Sanity**. É o único lugar onde você precisa entrar.

---

## 2. Primeiro acesso

### 2.1. Entre no painel

Abre no navegador (Chrome, Firefox, Edge — qualquer um):

```
https://jbluthieria.sanity.studio
```

### 2.2. Faça login

Vai aparecer uma tela pedindo login. Clica em **"Sign in with GitHub"** e usa a
sua conta `jandirborges`.

Se for a primeira vez, o GitHub pode pedir pra autorizar o Sanity. Clica em
**"Authorize"** (verde). Só precisa fazer isso uma vez.

### 2.3. Tela inicial

Depois do login, você vê a tela do **Studio** — o "escritório" dos seus
violões. No menu esquerdo aparece **"Violão"** (com ícone de documento).
Clica nele.

A primeira vez vai estar vazio. Vamos cadastrar o primeiro.

---

## 3. Adicionar um violão novo

### 3.1. Clica em "Create"

No canto superior direito, tem um botão azul ou cinza escrito **"Create"** com
um símbolo de `+`. Clica.

Abre o formulário em branco com os campos do violão.

### 3.2. Preenche os campos

Tudo é direto. Os campos importantes:

#### **Nome do modelo** *(obrigatório)*
Ex: `Modelo OM Pau-ferro`, `Clássico Jacarandá`, `Folk Mogno`.
É o título grande que aparece no catálogo.

#### **URL (slug)**
Tem um botão **"Generate"** ao lado — clica que ele gera sozinho a partir do
nome. Ex: "Modelo OM Pau-ferro" → vira `modelo-om-pau-ferro` na URL.
Não precisa mexer manualmente.

#### **Status** *(obrigatório)*
Duas opções:
- **À venda** — violão disponível pra cliente comprar. Aparece com etiqueta
  preta destacada no site.
- **Amostra** — violão que você mostra como exemplo do seu trabalho (sem
  estar à venda). Pode ser uma peça antiga que já vendeu, ou um modelo
  experimental. Aparece com etiqueta branca discreta.

Por que ter "Amostra"? Pra montar **portfólio** — cliente entra e vê tudo que
você já fez, mesmo coisas vendidas. Gera confiança.

#### **Madeiras (resumo curto)**
Ex: `Pau-ferro & Spruce`, `Jacarandá & Cedro`. Aparece como subtítulo no card.
Mantém curto, 1 linha.

#### **Descrição**
Texto livre, vários parágrafos. Conte sobre o instrumento — timbre, projeção,
quem é o público alvo, particularidades. Pode quebrar linhas com Enter — o
site respeita as quebras.

#### **Fotos** *(obrigatório, no mínimo 1)*
Arraste as fotos do seu computador pra área. A **primeira foto é a capa** do
card no catálogo — escolha a melhor.

Você pode adicionar várias (recomendo 4 a 6 por violão: frente, costas,
cabeça/headstock, ponte, detalhe de madeira, e perfil completo). Pode
arrastar pra reordenar.

Cada foto tem um campo "Texto alternativo" pequeno — só preenche se quiser
(serve pra acessibilidade). Pode deixar em branco.

**Dicas de foto** (ver seção 7).

#### **Especificações técnicas**
Opcional, mas recomendo preencher pra dar autoridade. Cada linha é uma
característica + valor. Ex:

| Característica | Valor |
|---|---|
| Tampo | Spruce sólido |
| Fundo e laterais | Pau-ferro |
| Braço | Mogno |
| Escala | Ébano |
| Tensor | Duplo ação |
| Tarraxas | Gotoh dourada |

Clica em **"Add item"** pra adicionar cada linha. Preenche "Característica"
(label) e "Valor".

#### **Ordem na lista**
Opcional. Um número. Menor número aparece **primeiro** no catálogo.

Ex: se você quer que um violão específico abra a página, coloca ordem `1`.
Outros podem ficar com `2`, `3`, etc., ou deixar vazio (vão pro fim).

Deixe vazio se não tem preferência — o site usa a data de criação automaticamente.

### 3.3. Publica

Tudo preenchido? No **canto inferior direito** tem um botão verde escrito
**"Publish"**. Clica.

> ⚠️ **Importante**: enquanto não clicar em Publish, o violão está em rascunho
> e **não aparece no site**. Publicar é o que torna ele público.

### 3.4. Aguarda 1 a 2 minutos

Depois de publicar, o site público se atualiza automaticamente em **1 a 2
minutos**.

Pra conferir: abre `https://jbluthieria.com/catalogo` no navegador (ou
`https://jbluthieria.vercel.app/catalogo` enquanto o domínio não estiver
ligado). Atualiza a página (F5) — o violão novo aparece.

---

## 4. Editar um violão existente

1. Abre `jbluthieria.sanity.studio`
2. Clica em **"Violão"** no menu esquerdo
3. Aparece a lista. Clica no violão que quer editar
4. Edita os campos que quiser (qualquer um)
5. Clica em **"Publish"** de novo (canto inferior direito)
6. Espera 1-2 minutos e confere no site

### Mudando status

Caso mais comum: vendeu um violão que estava "À venda".

1. Abre o violão na lista
2. Muda o **Status** de "À venda" pra "Amostra"
3. **Publish**
4. No site, o card continua aparecendo, mas a etiqueta muda pra "Amostra" —
   o cliente entende que aquele violão específico não está mais à venda, mas
   foi um trabalho seu.

Se preferir **sumir totalmente** com um violão vendido em vez de mantê-lo
como portfólio, veja a seção 5.

---

## 5. Remover um violão do site

1. Abre o violão na lista
2. No canto superior direito do violão, tem três pontinhos `⋮` → clica
3. Escolhe **"Delete"** → confirma
4. Espera 1-2 minutos → ele some do site

> 💡 **Sugestão**: em vez de deletar violões vendidos, deixa eles como
> "Amostra". Quanto mais violões aparecem no catálogo, mais profissional o
> site fica e mais confiança o cliente sente.

---

## 6. Quando aparece no site? — perguntas comuns

**"Publiquei e não aparece. O que faço?"**
Espera mais 1-2 minutos e atualiza a página (F5). O site não atualiza em
tempo real — ele precisa "reconstruir" depois que você publica.

**"Já se passou 5 minutos e ainda não aparece."**
Verifica se você realmente clicou em **Publish** (não só "Save"). Se sim,
abre `https://jbluthieria.sanity.studio` e confere se o violão está
listado *sem* a etiqueta amarela "Unpublished".

Se persistir, fala com o desenvolvedor (seção 10).

**"Posso editar um violão depois que publiquei?"**
Sim, sempre. Edita os campos, clica Publish de novo, espera 1-2 min.

**"Salvei mas não cliquei em Publish. O que acontece?"**
Fica como rascunho. Só você consegue ver no Studio. Ninguém no site público
vê. Pra ir ao ar, precisa clicar em Publish.

---

## 7. Tirar boas fotos dos violões

A qualidade das fotos é o que mais impacta a impressão do site. Vale gastar
30 minutos pra tirar fotos boas.

### Equipamento
Celular moderno serve. Não precisa de câmera profissional.

### Iluminação
- Use luz **natural** de janela em dia claro (não sol direto — luz indireta)
- **Não use flash** — cria reflexo no verniz
- Sem luz artificial amarelada (lâmpada incandescente)

### Fundo
- Parede branca, cinza claro, ou pano preto não-reflexivo
- Sem distrações (móveis, ferramentas, panos coloridos)
- **Mesmo fundo pra todos os violões** — dá unidade ao catálogo

### Ângulo (a capa)
A primeira foto de cada violão é a capa. Sugestão:
- Violão **na vertical**, cordas pra cima
- **Frontal**, com a peça inteira no quadro
- Mesma distância pra todos os violões (proporção igual entre eles)

### Fotos extras (galeria)
4 a 6 por violão. Sugestões:
1. **Frente** (capa) — instrumento inteiro
2. **Costas** — fundo do corpo
3. **Cabeça/headstock** — detalhe da escala, tarraxas, marca
4. **Ponte/cavalete** — detalhe da ponte e rosácea
5. **Detalhe da madeira** — close-up do veio (lateral ou fundo)
6. **Perfil** — visto de lado

### Formato e tamanho
- **JPG** ou **PNG** (qualquer um)
- Foto vinda direto do celular **já está boa**. Não precisa redimensionar.
- Se for arquivo muito grande (>10 MB), reduz pra 4-5 MB pra subir mais rápido.

---

## 8. Mudando seus dados de contato

WhatsApp, e-mail, Instagram — esses ficam no **código** do site, não no
Sanity. Pra trocar, **fala com o desenvolvedor** que ele atualiza e em
poucos minutos está no ar.

Não tenta mexer no GitHub/Vercel pra isso.

---

## 9. Senhas e segurança

### "Esqueci como entrar no Sanity"

Você entra com a sua conta **GitHub** (`jandirborges`). Não tem senha
separada do Sanity. Se esquecer a senha do GitHub, recupera no
[github.com/password_reset](https://github.com/password_reset).

### "Posso compartilhar o login com outra pessoa?"

Não compartilhe sua senha. Se quiser que outra pessoa também consiga editar
os violões (ex: alguém que te ajuda na oficina), peça ao desenvolvedor pra
te dar acesso de "Membro" no Sanity — aí cada um loga com a própria conta.

---

## 10. Quando algo der errado, fale com o desenvolvedor

Casos pra chamar o dev:
- Erro estranho no Studio (tela em branco, mensagem em vermelho)
- Site público está fora do ar ou com erro
- Quer adicionar uma nova seção/página no site
- Quer trocar telefone, e-mail, ou outras informações fixas
- Quer mudar cores, fontes, layout do site

Casos pra **não** chamar o dev (você resolve sozinho):
- Adicionar um violão novo → seção 3
- Editar um violão existente → seção 4
- Mudar status de um violão → seção 4.1
- Remover um violão → seção 5
- Trocar/adicionar fotos de um violão → seção 4

---

## 11. Resumo: o fluxo do dia a dia

1. Terminou um violão novo
2. Tira boas fotos (ver seção 7)
3. Entra em `jbluthieria.sanity.studio`
4. Clica em **"Violão"** → **"Create"**
5. Preenche nome, madeiras, descrição, especificações
6. Sobe as fotos
7. Define o status (À venda)
8. Clica em **"Publish"** (canto inferior direito)
9. Espera 1-2 minutos
10. Abre o site no navegador e confere

Vendeu? Volta na lista, abre o violão, muda status pra **Amostra**, Publish.

É isso. Bom trabalho. 🎸
