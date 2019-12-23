import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import { images } from '../utils/images';

export default class Account extends React.Component {
  render() {
    return (
      <div>

        <Header />
        <div className="container">

          <img src={images.MyAccount_1} className="w-full h-400" />

          <div style={dotline}>
          </div>

          <div className="row mb-20">
            <div className="col-md-4">
              <div className="color-tint font-weight-600 mb-10">SIGN IN</div>
              <div className="font-10 line-height-16 ">To see your lightboxes, purchase history, and invoices login in to your account:</div>
              <div className="font-10 line-height-16 color-red mt-10 mb-5">Username</div>
              <input />
              <div className="font-10 line-height-16 color-red mt-10 mb-5">Password</div>
              <input />
              <br/>
              <div className="bg-tint w-60 font-10 mt-20 pl-4 pt-2 cursor">LOGIN</div>
             
            </div>
            <div className="col-md-4">
              <div className="color-tint font-weight-600 mb-10">REGISTER</div>

              <div className="font-10 line-height-16 ">Not a registered client?</div> 
              <div className="font-10 line-height-16 ">Contact us to create an account:</div>
              <div className="font-10 line-height-16 color-red mt-10 underline mt-10 cursor">Register me for an account</div>
           
     
            </div>
            <div className="col-md-4">
              <div className="color-tint font-weight-600 mb-10">FORGOTTEN DETAILS</div>

              <div className="font-10 line-height-16 ">Forgotten your account details? Email us:</div>
              <div className="font-10 line-height-16 color-red underline mt-10 cursor">I’ve forgotten my password</div>
              <div className="font-10 line-height-16 color-red underline cursor">I’ve forgotten my username</div>
            
            </div>
          </div>


        </div>
        <Footer />

      </div>
    )
  }
}

const minus = {
  padding: 0,
  backgroundColor: '#000',
  color: '#6b0c10',
  margin: 0
}

const dotline = {
  borderTopStyle: 'dotted',
  boderColor: '#BFBFBF',
  borderWidth: 1,
  marginTop: 40,
  marginBottom: 40
}