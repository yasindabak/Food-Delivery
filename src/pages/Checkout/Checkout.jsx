import React, { useState } from 'react'
import stripe from '../../assets/stripe_logo.png'
import CartTotal from '../../components/CartTotal/CartTotal'
import './Checkout.css'

const Checkout = () => {

  const [method, setMethod] = useState("cod")
  return (
    <form className='form-container'>
      <div className='form-left'>
        <fieldset className='payment-method'>
          <legend>Payment Options</legend>
          <div className="payment-options">
            <div onClick={()=>setMethod("stripe")} className={`payment-option ${method === "stripe" ? "selected" : ""}`}>
              <img src={stripe} alt="" className='payment-logo' />
            </div>
            <div onClick={()=>setMethod("cod")} className={`payment-option ${method === "cod" ? "selected" : ""}`}>
              <span className="payment-text">CASH ON DELİVERY</span>
            </div>
          </div>
        </fieldset>

        <div className='form-title'>
          <h2>Shipping Address</h2>
        </div>
        
        <div className="form-row">
          <input type="text" className='form-input' placeholder='Adınız'/>
          <input type="text" className='form-input' placeholder='Soyadınız' />
        </div>
        
        <input type="email" className='form-input' placeholder='Email Adresiniz'/>
        <input type="text" className='form-input' placeholder='Telefon Numaranız'/>
        <input type="text" className='form-input' placeholder='Adresiniz'/>
        
        <div className='form-row'>
          <input type="text" className='form-input' placeholder='Şehir'/>
          <input type="text" className='form-input' placeholder='Cadde'/>
        </div>
        
        <div className="form-row">
          <input type="text" className='form-input' placeholder='Posta Kodu' />
          <input type="text" className='form-input' placeholder='Ülke' />
        </div>
      </div>

      <div className="form-right">
        <CartTotal />
        <div className="form-submit">
          <button type='submit' className='submit-button'>Sipariş Ver</button>
        </div>
      </div>
    </form>
  )
}

export default Checkout