<h1>Origem dos Nomes</h1>

<h2>Proposta</h2>
<div>
  <p>
    Criar aplicação React onde o usuário ao digitar um nome pessoal qualquer em um input de texto, consiga o retorno formatado no frontend da maior probabilidade da         origem   do nome com o nome do país de origem.
  </p>
  <p>
    Para isso, utilize estas duas fontes de dados:
    <ul>
      <li>https://api.nationalize.io</li>
      <li>https://gist.github.com/almost/7748738#file-countries-json.</li>
    </ul>
  </p>
  <p>
    <strong>Dica:</strong> no caso de a lista de países ser imutável, ao carregar a página já carregue em memória toda a lista de países. 
  </p>
</div>

<h2>Desenvolvimento da Aplicação</h2>
<br>

> ## Editor de Código-fonte Utilizado

<div>
  <img src="https://portalclique.com/wp-content/uploads/2015/10/cor-branca.png" width="20" alt="Espaço"/>
  <img src="https://static.cdnlogo.com/logos/v/82/visual-studio-code.svg" height="60" width="55" title="VSCODE"/>
</div>
<br>
<br>

> ## Tecnologias Utilizadas

<div>
  <img src="https://portalclique.com/wp-content/uploads/2015/10/cor-branca.png" width="20" alt="Espaço"/>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" height="60" title="HTML5"/>
  <img src="https://portalclique.com/wp-content/uploads/2015/10/cor-branca.png" width="20" alt="Espaço"/>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/1200px-CSS.3.svg.png" height="60" title="CSS3"/>
  <img src="https://portalclique.com/wp-content/uploads/2015/10/cor-branca.png" width="20" alt="Espaço"/>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/1200px-Javascript_badge.svg.png" height="60" title="JAVASCRIPT"/>
  <img src="https://portalclique.com/wp-content/uploads/2015/10/cor-branca.png" width="20" alt="Espaço"/>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" height="60" title="REACT"/>
  <img src="https://portalclique.com/wp-content/uploads/2015/10/cor-branca.png" width="20" alt="Espaço"/>
  <img src="https://axios-http.com/assets/logo.svg" height="60" width="100" title="AXIOS"/>
  <img src="https://portalclique.com/wp-content/uploads/2015/10/cor-branca.png" width="20" alt="Espaço"/>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png" height="60" title="GIT"/>
  <img src="https://portalclique.com/wp-content/uploads/2015/10/cor-branca.png" width="20" alt="Espaço"/>
</div>
<br>
<br>

> ## Língua Padrão da Aplicação
>    Inglês
<br>
<br>

> ## Instalações Utilizadas
> ### `npx create-react-app my-app`
>     Instala base de arquitetura para desenvolvimento da aplicação em React.
> ### `npm install react-icons`
>     Instala biblioteca de ícones do React.
> ### `npm install axios`
>     Instala biblioteca para requisições HTTP do Axios.
<br>
<br>

> ## Comando de Execução Utilizado
> ### `npm start`
>     Executa aplicação em modo de desenvolvimento.
>     Após execução do comando acima, abra a aplicação em http://localhost:3000 para visualizá-la em seu navegador. 
>     A página será recarregada quando você fizer alterações e você também poderá ver erros de lint no console.
<br>
<br>

> ## Funcionamento da Aplicação
> Ao iniciar a aplicação, digite um nome único na entrada de texto circulada abaixo e depois clique na lupa de pesquisa. 

<img src="https://imagizer.imageshack.com/img924/6642/eiPDTi.jpg" title="Tela inicial da aplicação"/>

> Ao fazer isso, você terá o retorno do nome junto as siglas dos países com maiores probabilidades de terem originado tal nome.

<img src="https://imagizer.imageshack.com/img923/4994/6x3S5J.jpg" title="Tela com resultado da pesquisa"/>

> Para pesquisar a quais países as siglas se referem, basta consultar a tabela de países da aplicação se utilizando dos botões acima dela para selecionar a página desejada.

<img src="https://imagizer.imageshack.com/img923/8943/8kfmXG.jpg" title="Tela com página mostrando sigla do país retornado na pesquisa"/>

> A quantidade de países mostrada por página na tabela pode ser controlada através do seletor com valor inicial 5 que está acima da numeração das páginas.
<br>
<br>

> ## Organização da Arquitetura

<img src="https://imagizer.imageshack.com/img923/1888/DrVY6r.jpg" title="Pasta e arquivos da aplicação"/>
<br>
<br>

> ## Principais Pastas e Arquivos
> ### `components`
>     Pasta com arquivos que contém funções que montam os componentes que são renderizados no navegador através do arquivo index.js
> ### `countries.js`
>     Arquivo com a função LoadCountries, responsável pela criação da paginação e da tabela de países.
>     Nesse arquivo já está contido o endpoint referente a lista de países que é buscada através da função fetch, usada em conjunto 
>     com o useEffect do React para que a lista seja renderizada na tela do navegador assim que a aplicação iniciar.
> ### `name.js`
>     Arquivo com a função LoadNameInput, responsável pela criação da entrada de texto e do resultado da pesquisa do usuário.
> ### `services`
>     Pasta que contém os serviços da aplicação.
> ### `namesApi.js`
>     Arquivo responsável por gerar a url base para pesquisa de nomes na fonte de dados.
>     Essa url é chamada no arquivo name.js junto ao método get para que quando o usuário pesquise por um único nome pessoal, gere
>     um endpoint onde as informações desse nome serão buscadas e trazidas via requisição HTTP.
> ### `App.js`
>     Arquivo com a função App, responsável pela organização da ordem de exibição dos componentes na aplicação.
> ### `index.css`
>     Arquivo que contém estilizações gerais da aplicação.
> ### `index.js`
>     Arquivo responsável por renderizar a função App, que contém todos os componentes da aplicação, no navegador.
> ### `styles.css`
>     Arquivo que contém estilizações dos componentes da aplicação.
<br>
<br>

> ## Desenvolvedor

<div>
  <img src="https://i.postimg.cc/c1mGDJRK/wellington-silva.jpg" width="138" title="Wellington Silva"/>
  <div>
    <a href="https://github.com/welsda/" ><img src="https://img.shields.io/badge/-Github-lightgrey" height="26" ></a>
    <a href="https://www.linkedin.com/in/wellington-silva-de-almeida-7537a3221/" ><img src="https://img.shields.io/badge/-Linkedin-blue" height="26" ></a>
  </div>
</div>  



