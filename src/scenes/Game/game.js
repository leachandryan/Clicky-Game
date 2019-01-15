import React, { Component } from 'react';

import Navbar from '../../components/Navbar';
import Jumbotron from '../../components/Jumbotron';
import Card from '../../components/Cards';
import cards from '../../cards.json';

class Game extends Component {
  state = {
    count: 0,
    topScore: 0,
    gameMessage: "Click an image to begin!",
    cards
  }

  // When app starts, shuffle cards
  componentDidMount() {
    this.shuffle(cards)
  }

  // Shuffle cards by mixing up json array
  shuffle = cards => {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    this.setState({ cards });
  }

  handleClick = id => {
    // Check if clicked is true, clear score to 0 and reset game if true
    if (this.state.cards[id - 1].isClicked) {
      const cards = this.state.cards.map(card => {
        card.isClicked = false
        return card
      })
      this.shuffle(cards)
      return this.setState({ count: 0, cards, gameMessage: "Wrong! Game Over!" });
    }

    // If card hasn't been clicked
    const cards = this.state.cards.map(card => {
      if (card.id === id) {
        card.isClicked = true
        return card
      } else {
        return card
      }
    })

    this.shuffle(cards);
    this.checkTopScore();
    this.setState({ count: this.state.count + 1, cards, gameMessage: "Correct!" });
  }

  checkTopScore = () => {
    if (this.state.count + 1 > this.state.topScore){
      return this.setState({ topScore: this.state.count + 1})
    }
  }

  render() {
    const { cards, count, topScore, gameMessage } = this.state;
    return(
      <div>
        <Navbar
          count={count}
          topScore={topScore}
          gameMessage={gameMessage}
        />
        <Jumbotron />
        <div className="container">
        <h2>Pick a Character but don't click on the same one more than once!</h2>
          {cards.map(card => (
            <Card
              id={card.id}
              key={card.id}
              image={card.img}
              handleClick={this.handleClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Game;
