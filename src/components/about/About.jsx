import React from 'react'
import "./about.css"
import Photo from "../../img/photographe.png"
import Award from '../../img/award.png'

const About = () => {
  return (
    <div className='a'>
        <div className='a-left'>
          <div className="a-card bg"></div>
          <div className="a-card">
            <img 
            src={Photo}
            alt=''
            className='a-img'
            />
          </div>
        </div>
        <div className='a-right'>
          <h1 className='a-title'>About Me</h1>
          <p className='a-sub'>
            This will be copmleted when the portfolio is done , I will come later to complete all.
          </p>
          <p className='a-desc'>
          Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, 
          le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. 
          Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
          </p>
          <div className='a-award'>
            <img src={Award} alt='' className='a-award-img'/>
            <div className="a-award-texts">
              <h4 className='a-award-title'>International Design</h4>
              <p className='a-award-desc'>
              Utilisez le text generator online pour créer votre propre texte! 
              Le générateur de texte Lorem Ipsum crée un texte fictif, faux, 
              causal ou fictif.
              </p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About