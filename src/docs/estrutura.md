### Estrutura Frontend do Dashboard ANA Automações
```html
|-- [+] public
|-- [-] src
    |-- [+] assets
    |-- [+] components
        |-- [-] common
            |-- [-] CalendarApp
            |-- [-] Header
            |-- [-] Sidebar
        |-- [+] pages
            |-- [+] Agendamentos
            |-- [+] BuscarAgendamentos
            |-- [+] Home
    |-- [+] data
    |-- [+] docs
    |-- [+] models
    |-- [+] styles
    |-- [+] utils
|-- .eslintrc.json
|-- .gitignore
|-- package-lock.json
|-- package.json
|-- README.md
|-- tsconfig.json
  
```
### Conteúdo dos arquivos:

`.eslintrc.json ->` É um arquivo de configurações do ESLint, ferramenta responsável para padronizar o código, notificando falhas em tempo de desenvolvimento da aplicação.

### Conteúdo das pastas

`assets ->` Contém o conteúdo externo do aplicativo, como a logo utilizada para a página inicial.

`components ->` Contem os componentes utilizados na aplicação, separados por common (utilizados por todo o app) e por pages, que são as telas do aplicativo

Em common, temos:

```html

|-- CalendarApp -> Componente de calendário que utilizado na página inicial e de agendamento.

|-- Header -> Componente utilizado para fazer a header das telas.

|-- Sidebar -> Menu lateral da aplicação, onde fica a navegação do sistema.
```

Em pages, temos:

```html
|-- Inicio -> Componente da tela inicial.

|-- Agendamentos -> Componente da tela de agendamentos.

|-- BuscarAgendamentos -> Componente da tela de consulta de agendamentos.
```

`data ->` Aqui ficam as listas de objetos contendo dados mockados para utilizar na aplicação e verificar o coportamento das funcionalidades do sistema.

`docs ->` Arquivos de documentação em geral do sistema.

`models ->` Nesta pasta ficam as interfaces de objetos comuns da aplicação, definindo seus campos e tipos.

`styles ->` Aqui fica a estilização global do projeto, definindo algumas estilizações que são utilizadas por diversos componentes.

`utils ->` Aqui ficam as funções utils, onde podem ser utilizadas para implementação de toda a lógica do aplicativo.
