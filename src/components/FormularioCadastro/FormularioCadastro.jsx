import React, { Component } from 'react';
import './estilo.css';
class FormularioCadastro extends Component {
  constructor(props) {
    super(props); //esse super é necessário, pois ele instância o construtor do Componente, que está classe está extendendo.
    this.titulo = '';
    this.texto = '';
  }

  _handleMudancaTitulo(evento) {
    evento.stopPropagation(); //utilizado para q ele não faça q a página recarregue quando o evento for disparado.
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation(); //utilizado para q ele não faça q a página recarregue quando o evento for disparado.
    this.texto = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault(); //ele realiza uma renderização dinamica, com este comando, ele para de renderizar dinamicamente;.
    evento.stopPropagation(); //utilizado para q ele não faça q a página recarregue quando o evento for disparado.;
    this.props.criarNota(this.titulo, this.texto);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)} //a bind é necessária, pois estamos disparando um evento/função, desta forma, ele ficaria nulo se não houvesse essa notação bind
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
