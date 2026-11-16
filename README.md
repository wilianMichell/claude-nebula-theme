# Nebula · tema para o Claude

Tema escuro em roxo e azul para o app Claude (aba Code no desktop e no mobile), pensado para ser **agradável aos olhos** em sessões longas. Foi inspirado na paleta do [Dracula](https://draculatheme.com) e ajustado com teoria das cores.

## O que ele faz

- **Fundos** num único matiz azul-violeta, pouco saturado, com degraus de luminosidade iguais: os painéis se separam sem linhas duras.
- **Texto** em branco levemente lavanda (`#e6e6f2`) em vez de branco puro, para reduzir o brilho em fundo escuro, com contraste acima de 10:1.
- **Destaques em tons pastel**: roxo lavanda, azul, verde menta, âmbar e coral. A paleta é fria (roxo + azul) e as cores quentes aparecem só para aviso e erro.
- Destaque de código com o tema `dracula`, quando o app oferece esse nome.

| Papel | Cor |
| --- | --- |
| Fundo da página | `#1d1e29` |
| Cards / painéis / menus | `#232533` · `#292b3a` · `#2d2f40` |
| Texto principal / secundário / apagado | `#e6e6f2` · `#c1c4da` · `#9ca2c4` |
| Destaque (roxo) | `#bca8f8` |
| Azul | `#88c4ee` |
| Sucesso / aviso / erro | `#8ae8a8` · `#eec07e` · `#f48a94` |

O tema é só escuro: com ele ativo, o app fica no modo escuro mesmo se estiver configurado como claro. O terminal e os editores não desenham temas de mod, então ele não muda nada lá.

## Instalação

No prompt de uma sessão do Claude Code no terminal:

```
/plugin install nebula-theme --marketplace wilianMichell/claude-nebula-theme
```

Responda `y` para adicionar o marketplace e escolha o escopo (o escopo de usuário vem primeiro).

Pelo shell:

```bash
claude plugin install nebula-theme --marketplace wilianMichell/claude-nebula-theme
```

No app desktop, onde `/plugin` não roda: clique no **+** ao lado da caixa de mensagem, depois **Plugins**, **Add marketplace** com `wilianMichell/claude-nebula-theme` e então **Add plugin**.

## Desinstalar

```
/plugin uninstall nebula-theme
```

## Licença

MIT. Veja [LICENSE](LICENSE).
