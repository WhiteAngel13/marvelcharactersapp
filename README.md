# Marvel Characters App
## _O Primeiro de muitos projetos!_

Oi, meu nome é White, e tem umas coisas que vocês precisam saber!

Esse projeto foi/está sendo um desafio de Front-End para eu entrar em uma empresa que gostei bastante, onde eu tinha que pegar a Api da Marvel e deveria fazer um app que mostrasse os personagens, tipo esse da própria Marvel.

### https://www.marvel.com/characters

Me foram pedidas as seguintes habilidades

- Configuração do axios para consumo da API utilizando sua key da Marvel
- Ter uma página para listagem de sua preferência (characters, stories, series, etc.), com card para cada item da lista.
- Uma página para o item específico
- Criação da UI para as páginas listadas acima

Nos tópicos abaixo irei narrar toda a trajetória que foram esses 3 dias de trabalho desde quando recebi o trabalho.

---

# A Jornada

## 1 - Configuração do axios para consumo da API utilizando sua key da Marvel

Cara, tá isso foi bem interessante, por que a marvel tem duas formas de consumo de Api, usando a chave pública, e a chave privada, a pública é simplesmente botar ela na URL mole mole, mas eu fiquei muito curioso com o fato da Chave Privada, então li a documentação mais a fundo e achei muito interessante o processo, então... por que fazer o fácil? se nós podemos fazer as locuras da vida? os passos eram os seguintes

[ ] Tenha as Chaves Públicas e Privadas da API
Uai, melzinho na chupeta, criei a continha, peguei as duas chaves e......
[x] Tenha as Chaves Públicas e Privadas da API
Tem que criar e já ir marcandinho né? Dopamina é tudo... mas pra não poluir vamos fazer logo tudo de uma vez que também é mó bom marcar um monte de uma vez

[ ] Agora é montar a URL com os requisitos
[ ] Fazer a requisição e funfar

Montar a URL foi interessante por que ele pede 3 coisas

[ ] Chave Pública
[ ] Timestamp
[ ] E uma Hash md5 feita com os dois itens acima e a chave privada (Santo cristo....)

E lá vamos nós!

A chave pública eu já tenho, o timestamp com um ```new Date().getTime()``` já resolve lindamente, e o Hash, eu já tinha brincado nisso com uns projetos Pessoais usando NFT, então usei a Lib **Cryto**, gosto dela... sendo assim, manda tudo na URL pedindo os Characters pelo Server Side e....FOI! MDS FOI! tá....então....tudo quanto é item do Axios ficou lindinho agora é so marcar tudo.

[x] Chave Pública
[x] Timestamp
[x] E uma Hash md5 feita com os dois itens acima e a chave privada (Santo cristo....)
[x] Agora é montar a URL com os requisitos
[x] Fazer a requisição e funfar

Ahhhh Dopamina, por que tão?

### [Código do arquivo que guarda o Axios configurado]( https://github.com/WhiteAngel13/marvelcharactersapp/blob/main/services/api.ts)
---
## 2 - Ter uma página para listagem de sua preferência (characters, stories, series, etc.), com card para cada item da lista.

Agora......E AGORA? eu não sou lá a melhor pessoa do Universo para criar Layouts, às vezes eu tento mas, nhé...não sai lá a melhor coisa do mundo, então senhor White foi buscar socorro nos braços da sua amada, então mandei uma call com a namorada (Designer Perfeitosa) e com muita calma disse

White - AMOR SORRORO EU TENHO QUE FAZER ISSO E NÃO QUERO FAZER UM LAYOUT TOSCO!
Namorada - Vou te mandar uns links delicinha para você se inspirar...

Claro que a conversa não foi tão rápida, só estou acelerando... em meio a muitos sites eu encontrei esse de um jogo que ela é viciada

#### [Site de Inspiração](https://genshin.mihoyo.com/pt/character/liyue)

e eu apaixonei pelo Layout e pronto....tenho meu objetivo de vida....que erro que eu cometi? mas tá foi interessante, então, dei uma escapada legal do foco e fui para um ponto que eu inventei na história

---
### 2.1 - As minhas invenções malucas

Agora é a hora que o filho chora e a.....nunca entendi esse ditado, mas sim! branquelo foi para o código começar a Replicar o design e....MDS QUE TAREFA CHATA QUE EU FUI INVENTAR, mas eu queria muito fazer uma coisa mirabolantos e tudo MEU! então cheguei no meu Arqui-Inimigo que durou 2 dias para fazer....

Esse bendito Slider do Site

Essa coisa! fui simplesmente um saco de fazer por que eu não quis pegar Lib pronta na internet, eu queria fazer uma coisa autoralzáça, e foi onde eu criei essa "Obra Prima", mas bem prima mesmo, vou ter que lapidar muito, mas deu para reestudar muita coisa de ContextAPI e até mesmo Fluxo de Renderização para arruamr um problemas que eu tive usando **useMemo**

Também para não fazer trezentas requisições, eu criei um projeto no Firebase para criar um banco de dados, mas, popular ele todo na mão ia ser **uó**, então eu deixei dentro do projeto uma pasta Data, onde tem todos os meus esboços, neles eu não segui nenhuma lógica bonitinha, eu só queria popular o FireStore rápido, então ai vai ter gambiarra pra caramba hehehe, mas foi interessante fazer um Script que automatizou o processo para mim 

---

### Voltando ao assunto...

Agora eu tenho a Dashboard dos meus sonhos, mas ainda tenho muita coisa para fazer

[ ] - Criar a Página de Apresentação do personagem
[ ] - Utilizar os conceitos de Static Site Generation
---
## Criar a Página de Apresentação do personagem

Ingênuo eu sou...achando que agora tudo ia melhorar, e que eu simplesmente teria que desenhar uma página simples para o personagem e colocar os dados, HA, HA, HA... algo fácil na vida de programador Front-End? só o Next mesmo kkk

Passei um sufoco quando eu notei que cada Gibi que vem na API tem que ser colocado em uma nova requisição....ah meu santinho, e ainda tem que ser tratado individualmente para ficar de uma forma fácil de consumir.....triste estou, mas, vamos lá...se vocês olharem na pasta Utils, as funções de Formatação, vão ver a lindeza que foi formatar esses dados, mas depois de formatados, foi molezinha, coloca tudo na tela e usa o GetStaticProps para deixar tudo estático.....uma vez feito isso, agora é só curtir a vida e marcar os dois de uma vez só!

[x] - Criar a Página de Apresentação do personagem
[x] - Utilizar os conceitos de Static Site Generation

---

# Considerações Finais

- Dicas de uso
- Minhas impressões do projeto

Cara, nessas dicas, eu só queria dizer que....dá para clicar no cardzin que se mexe no Dashboard, mesmo com o cursor pointer e ele sendo bem chamativo, é sempre bom avisar, e....como no código que eu escrevi, cada personagem faz em média 40 requisições, então, caso uma página dê erro 404 é por que meu limite de uso da API da marvel estourou hehehe

E sobre o Projeto, foi meu primeiro assim feito em tão pouco tempo e que.....eu admito ter me orgulhado tanto, eu ainda colocaria bem mais coisas nele, mas para um projeto simples de apresentação de habilidades para conseguir a vaga de emprego, espero que tenha conseguido mostrar o suficiente, espero que gostem da organização do meu código, e claro, estou sempre disposto a aprender coisas novas e novas formas de trabalhar em time... espero que gostem!!!!

Nota: Estou aprendendo Node.JS para o Backend, daqui a pouco vou poder servir nessa área também! abraço! fuiiiiii...