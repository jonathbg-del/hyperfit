# HyperFit 🏋️

Coach de treino pessoal (PWA) gerado a partir da planilha *Rotina HyperFit Ciclo v6*.
Funciona 100% offline no navegador; dados ficam no aparelho (localStorage) com backup/exportação.

## Recursos
- **Hoje** — treino do ciclo com cargas de referência, gate de sono e registro rápido de séries.
- **Coach** — leitura do dia, treino de hoje e resumo pós-treino (por regras; opcionalmente com IA Gemini, inclusive lendo prints do sono).
- **Progresso** — indicadores clicáveis com histórico e período ajustável (dia/semana/mês/ano).
- **Diário** — sono (pontuação, recuperação, ciclos, profundo, REM), peso, humor/energia/ansiedade.
- **Nutri** — metas de macros e cálculo por gramas (base de alimentos embutida).
- **Editor de programa** — inclua/exclua/reordene/altere exercícios pela própria tela (Ajustes → Editar exercícios).
- **Exportar** — base histórica completa para Excel (.xls) e backup JSON.

## Rodar em qualquer lugar (GitHub Pages)
1. Crie um repositório no GitHub (ex.: `hyperfit`).
2. Suba estes arquivos (veja comandos abaixo).
3. No GitHub: **Settings → Pages → Branch: `main` / (root) → Save**.
4. Abra `https://SEU-USUARIO.github.io/hyperfit` no celular.
5. Chrome/Safari → menu → **Adicionar à tela inicial**. Vira app.

```bash
git remote add origin https://github.com/SEU-USUARIO/hyperfit.git
git branch -M main
git push -u origin main
```

## Levar os dados para outro aparelho
- **Hoje:** Ajustes → *Exportar JSON* no aparelho antigo e *Importar JSON* no novo.
- **Automático (nuvem):** integração opcional com Firebase (em preparação).

## Arquivos
- `index.html` — o app inteiro (HTML+CSS+JS).
- `manifest.json`, `sw.js`, `icon.svg` — recursos PWA (instalação + offline).
