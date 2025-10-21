import React from 'react'
import "./NavBar.css"
import logo from "../../assets/logo1.jpg"
import { Globe } from 'lucide-react';
export default function NavBar() {
  return (
    <div className='nav-container'>
        <div className="nav-top">
            <h3>👋Bonjour!Cette page existe dans d'autres langues. Souhaitez-vous modiffier la langue d'affichage?</h3>
            <button>Francais/france</button>
        </div>
        <div className="nav-bottom">
            <img src={logo} alt="" />
            <ul>
              <li>List des produits</li>
              <li>A props de bio 7</li>
              <li>testimonial client</li>
            </ul>
            <div className="nav-contact">
              <Globe size={20} />
              <button>Nous contacter</button>
            </div>
        </div>
    </div>
  )
}
