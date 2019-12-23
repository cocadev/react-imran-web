import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import { images } from '../utils/images';

export default class Contact extends React.Component {
  render() {
    return (
      <div>

        <Header />
        <div className="container">

          <img src={images.Contact_1} className="w-full h-400" />

          <div style={dotline}>
          </div>

          <div className="row mb-20">
            <div className="col-md-4">
              <div className="color-tint font-weight-600 mb-10">CONTACT</div>
              <div className="font-10 line-height-16 color-red">Telephone:</div>
              <div className="font-10 line-height-16 ">+ 44 (0)1245 450807</div>
              <div className="font-10 line-height-16 color-red mt-10">Mobile:</div>
              <div className="font-10 line-height-16 ">+ 44 (0) 7865 082264</div>
              <div className="font-10 line-height-16 color-red mt-10">Email:</div>
              <div className="font-10 line-height-16 color-red underline">lisa@thestudiopartner.com</div>
              <div className="font-10 line-height-16 color-red mt-10">Address:</div>
              <div className="font-10 line-height-16 ">The Studio Partner Ltd</div>
              <div className="font-10 line-height-16 ">65 Daffodil Way</div>
              <div className="font-10 line-height-16 ">Chelmsford</div>
              <div className="font-10 line-height-16 ">Essex</div>
              <div className="font-10 line-height-16 ">CM1 6XE</div>
              <div className="font-10 line-height-16 ">United Kingdom</div>


            </div>
            <div className="col-md-4">
              <div className="color-tint font-weight-600 mb-10">SEND US YOUR BRIEF</div>

              <div className="font-10 line-height-16 ">Got a job that you require that certain special image for? Let us track it down for you. Fill in the form below with the requirements of your brief.</div> 
              <div className="font-10 line-height-16 ">Contact us to create an account:</div>
              <div className="font-10 line-height-16 ">We’ll get back in touch with you to clarify the details and get the search started. It’s that easy!</div>
              <div className="font-10 line-height-16 color-red mt-10">Your details</div>

              <div className="font-10 line-height-16 mt-10 color-red">Name</div>
              <input />
     
            </div>
            <div className="col-md-4">
              <div className="color-dark font-weight-600 mb-10">.</div>

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