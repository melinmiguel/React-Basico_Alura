import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import './assets/App.css';
import './assets/index.css';
class App extends Component {
  constructor() {
    super();

    this.state = {
      notas: [],
    };
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;

/*O App só pode retornar 1 elemento, isto é, 1 container com todos os filhos dentro dele, e não varios itens
por isso que nos projetos, sempre vemos um app return container, e dentro desse container acontecendo tudo que o projeto realiza.
aqui criamos o section para deixar como se fosse um container unico.

O 'export default class' que utilizamos nas classes/componentes faz com que seja retornado todo aquele código como classe, do
contrário, precisariamos dos colchetes para que o componente viesse sempre que importassemos, lembre-se que, o "export default" é no componente q eu ta sendo exportado.

No react, quando vamos importar, utilizamos o {] quando não é default da classe, isto é, a classe retorna ele de padrão, do contrário não utilizamos.
para colocar código javascript dentro do render do componente, precisa colocar ele entre {}, desta forma, pode dar console log e afins.

Array.of(itens que você quer adicionar no array) ÓTIMO MÉTODO!
Quando for utilizar uma key para fazer o loop, pode criar um index e atribuir este a key

Quando vamos atribuir class aos componentes do react, trabalhamos com o className, pois o class da conflito no react, então ele possui o className que faz a msm coisa.
Quando as pessoas vão trabalhar com o css, é normal eles utilizarem o nome do componente pai para se referir aos filhos, como no exemplo:

/*<componente1 className="componente1">
    <componente2 className="componente1_componente2">

    </componente2>
</componente1>

é indicado fazer da seguinte forma:

.componente1{css aqui dentro}

.componente1_componente2{css do componente 2 aqui dentro}


É sempre bom criar um index.css, que é a pasta onde vai ter as estilizações padrões do projeto, desta forma, podemos definir métricas mínimas para nossos componentes no decorrer
do projeto.


*/
