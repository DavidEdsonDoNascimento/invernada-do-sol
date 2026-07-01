Tenho dois arquivos de fonte da identidade visual da marca Invernada do Sol (ambos estão em src\app\fonts):

* Jedira-Regular.otf
* Jedira-Italic.otf

Quero que você aplique essa fonte como a fonte principal/global do projeto inteiro, respeitando boas práticas do Next.js.

Tarefas:

1. Configure a fonte usando `next/font/local`, preferencialmente no arquivo `app/layout.tsx` ou `src/app/layout.tsx`.

2. Configure as duas variações:

   * `Jedira-Regular.otf` como `normal`, peso `400`
   * `Jedira-Italic.otf` como `italic`, peso `400`

3. Crie uma variável CSS chamada `--font-jedira`.

4. Aplique essa fonte globalmente no projeto, preferencialmente no `body`, usando:
   `font-family: var(--font-jedira), serif;`

5. Remova ou substitua fontes antigas que estejam sendo aplicadas globalmente, como Google Fonts, Inter, Playfair, Cormorant, serif genérica ou qualquer outra que esteja sobrescrevendo a identidade visual.

6. Verifique também classes Tailwind ou CSS que estejam forçando outra fonte, como:

   * `font-serif`
   * `font-sans`
   * `font-display`
   * `font-playfair`
   * `font-cormorant`
   * qualquer variável de fonte antiga

7. Caso exista configuração de Tailwind para fontes, atualize para que `font-sans`, `font-serif` ou a fonte principal do projeto usem a Jedira, sem quebrar o design.

8. Garanta que a fonte seja aplicada em:

   * títulos
   * textos
   * botões
   * cards
   * menus
   * formulários
   * footer
   * componentes reutilizáveis

9. Depois de aplicar, rode uma checagem no projeto para garantir que não existem imports de fontes antigas nem conflitos de CSS sobrescrevendo a Jedira.

Importante:

* Não alterar layout, cores, espaçamentos ou animações.
* Alterar apenas o necessário para aplicar a fonte da identidade visual.
* Se encontrar algum lugar onde a fonte antiga é usada propositalmente, me avise antes de remover, mas aplique a Jedira como padrão global.
* Manter o projeto sem erros de TypeScript, ESLint e build.
