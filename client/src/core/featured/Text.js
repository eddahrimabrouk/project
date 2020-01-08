import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';

import Este from '../../img/este.png'

class Text extends Component {

    animateNumber = () => (
        <Animate
            show={true}
            start={{
                opacity:0,
                rotate:0
            }}
            enter={{
                opacity:[1],
                rotate:[360],
                timing:{duration: 1000, ease:easePolyOut}
            }}
        >
            {({opacity,rotate})=>{
               return(
                   <div className="featured_number"
                        style={{
                            opacity,
                            transform: `translate(165px,200px) rotateY(${rotate}deg)`,
                            fontSize: '73px',
                            color: '#ffffff',
                            position: 'absolute'
                        }}
                   >
                    Bienvenue
                   </div>
               ) 
            }}
        </Animate>
    );


    animateFirst = () => (
        <Animate
            show={true}
            start={{
                opacity:0,
                x:503,
                y:450
            }}
            enter={{
                opacity:[1],
                x:[390],
                y:[420],
                timing:{duration: 500, ease:easePolyOut}
            }}
        >
            {({opacity, x, y})=>{
            return(
                <div className="featured_first"
                        style={{
                            opacity,
                            transform: `translate(${x}px,${y}px)`,
                            position: 'absolute',
                            backgroundColor: '#2460A7FF',
                            color: '#ffffff',
                            fontSize: '46px',
                            textTransform: 'uppercase',
                            padding: '0px 20px'
                        }}
                >
                    Gestion des Notes
                </div>
            ) 
            }}
        </Animate>
    )



    animatePlayer  = () => (
        <Animate
        show={true}
        start={{
            opacity:0,
        }}
        enter={{
            opacity:[1],
            timing:{delay:800,duration: 500, ease:easePolyOut}
        }}
    >
        {({opacity})=>{
        return(
            <div className="featured_este"
                    style={{
                        opacity,
                        background: `url(${Este})`,
                        transform: `translate(558px,151px)`
                    }}
            >
            </div>
        ) 
        }}
    </Animate>
    )

    render() {
        return (
            <div className="featured_text"
            style={{
                position: 'relative',
                 fontFamily: 'Righteous'
            }}>
                {this.animatePlayer()}
                {this.animateNumber()}
                {this.animateFirst()}
                
            </div>
        );
    }
}

export default Text;