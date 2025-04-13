import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

class App extends Component {
  // Construtor da classe App
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/fechado.png'),
      botaoVisivel: true,
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    // Array contendo frases que podem ser exibidas ao "quebrar o biscoito"
    this.frases = [
      'Siga os bons e aprenda com eles.',
      'O bom-senso vale mais do que muito conhecimento.',
      'O riso é a menor distância entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.',
    ];
  }

  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    // Esconde o botão
    this.setState({
      textoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
      img: require('./src/aberto.png'),
      botaoVisivel: false,
    });
    // Após 2,5 segundos, restaura o biscoito para o estado inicial
    setTimeout(() => {
      this.setState({
        textoFrase: '',
        img: require('./src/fechado.png'),
        botaoVisivel: true,
      });
    }, 2500);
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Exibe a imagem do biscoito (fechado ou aberto, dependendo do estado) */}
        <Image source={this.state.img} style={styles.img} />
        {/* Exibe a frase que foi escolhida aleatoriamente */}
        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        {/* O botão "Quebrar Biscoito" só é renderizado se 'botaoVisivel' for true */}
        {this.state.botaoVisivel && (
          <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
            <View style={styles.btnArea}>
              <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
});

export default App;