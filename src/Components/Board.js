import React, { Component } from 'react';
import PropTypes from 'prop-types';
import zombies from '../data/zombies.json';
import Card from './Card';

class Board extends Component {
    constructor() {
        super();
        this.state = {
            zombies: zombies,
            clickedZombies: []
        };
    };

    handleAddnCompare = zombie => {
        if (this.state.clickedZombies.includes(zombie)) {
            this.setState({
                clickedZombies: []
            });
            this.props.gameOver();
        }
        else {  
            if (this.state.clickedZombies.length < this.state.zombies.length - 1) {
                
                let newZombies = this.state.clickedZombies.slice();
                newZombies.push(zombie);
                this.setState({ clickedZombies: newZombies });
                this.props.scoreChange();
                this.shuffleZombies(this.state.zombies)
                console.log(this.state.zombies.length); 
            }
            else {
                this.setState({
                    clickedZombies: []
                });
                this.props.uWin();
            }
        }
    } 

    shuffleZombies = arr => {
        let shuffledZombies = arr.slice();
        // Randomize array using Durstenfeld shuffle algorithm
        for (let i = shuffledZombies.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = shuffledZombies[i];
            shuffledZombies[i] = shuffledZombies[j];
            shuffledZombies[j] = temp;
        }
        // Update the state
        this.setState({
            zombies: shuffledZombies
        });
    }

    render() {
        let eachZombie = this.state.zombies.map(zombie => 
            <Card 
                key={zombie.id}
                id={zombie.id} 
                image={zombie.image} 
                color={zombie.color}
                addCompare={this.handleAddnCompare}
            /> 
        );

        return (
            <div id="board" className={this.props.shake}>
                {eachZombie}
            </div>
        );
    }
}

Board.propTypes = {
    shake: PropTypes.string,
    scoreChange: PropTypes.func,
    gameOver: PropTypes.func,
    uWin: PropTypes.func
};

export default Board;
