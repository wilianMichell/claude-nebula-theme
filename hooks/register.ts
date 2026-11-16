import type { Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'

// Nebula: tema escuro roxo/azul, suave para leitura longa.
//
// Inspirado na paleta do Dracula (draculatheme.com), ajustado com teoria das cores:
// - Fundos: um único matiz azul-violeta (~232°), pouca saturação e degraus de
//   luminosidade iguais, para os painéis se separarem sem linhas duras.
// - Texto: branco levemente lavanda (#e6e6f2) em vez de branco puro, para reduzir
//   o brilho (halation) em fundo escuro, mantendo contraste acima de 10:1.
// - Destaques: tons pastel, menos saturados, que cansam menos a vista. A paleta
//   fica fria (roxo + azul) e as cores quentes aparecem só onde têm significado
//   (erro, aviso).
const { theme, problems } = makeColors({
  label: 'Nebula',
  only: 'dark',
  codeTheme: { dark: 'dracula' },
  roles: {
    accent: '#bca8f8', // roxo lavanda
    pro: '#88c4ee', // azul (ciano do Dracula puxado para o azul)
    success: '#8ae8a8', // verde menta
    warning: '#eec07e', // âmbar suave
    danger: '#f48a94', // coral
  },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#1d1e29',
        'surface-1': '#232533',
        'surface-2': '#292b3a',
        'surface-3': '#2d2f40',
        'text-primary': '#e6e6f2',
        'text-secondary': '#c1c4da',
        'text-muted': '#9ca2c4',
      },
    },
    git: {
      added: '#8ae8a8',
      removed: '#f48a94',
      modified: '#eec07e',
      merged: '#bca8f8',
      closed: '#f48a94',
      conflicting: '#e6dc8c',
      draft: '#9ca2c4',
    },
  },
})

const LOOK: ThemeSetArgs = { colors: theme }

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    const unpainted = problems.find(line => line.startsWith("Desktop won't paint"))

    if (unpainted !== undefined) {
      $.ui.toast(unpainted)
    }
    const set = await $.theme.set(LOOK)

    if (!set.isDrawn) {
      $.ui.status(set.reason)
    }

    return next(e)
  })
}
