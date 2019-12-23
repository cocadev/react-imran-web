import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import { images } from '../utils/images';

export default class About extends React.Component {
  render() {
    return (
      <div>

        <Header />
        <div className="container mb-20">

          <img src={images.Thankyou_1} className="w-full h-400"/>

          <div style={dotline}>
             <img src={images.TSP_services_fivesteps} className="w-full h-220 "/>
          </div>

          <div className="row">
             <div className="col-md-4">
                <div className="font-10 line-height-16 ">Do you need someone to source pictures, footage or illustrations? Would you rather leave the hassle of copyright clearance, licensing and payments to another experienced professional? Do you insist on the best quality and speed of service? If yes, then welcome to The Studio Partner.</div>
             </div>
             <div className="col-md-4">
                <div className="font-10 line-height-16 ">Our unique on-demand offering will not only find you the right pictures, footage and illustrations but we will also:</div>
                <i class="fa fa-minus" style={minus}></i>
                <div className="font-10 line-height-16 ">Sort out copyright and licensing permissions and payments</div>
                <i class="fa fa-minus" style={minus}></i>
                <div className="font-10 line-height-16 ">Put media online for you to easily choose and download</div>
                <i class="fa fa-minus" style={minus}></i>
                <div className="font-10 line-height-16 ">Work within your budget and to your schedule</div>
                <i class="fa fa-minus" style={minus}></i>
                <div className="font-10 line-height-16 ">Provide unbeatable value and an imaginative, friendly service</div>

             </div>
             <div className="col-md-4">
                <div className="font-10 line-height-16 ">So, whatever content you need, talk to The Studio Partner for Picture Research, Footage Research, Licensing, Copyright, Permissions, 3rd Party Rights, Photo and Video Production, Commissioned Projects and Media Asset Management</div>
             </div>
          </div>


        </div>
        <Footer />

      </div>
    )
  }
}

const minus = {
  padding:0, 
  backgroundColor:'#000', 
  color:'#6b0c10', 
  margin:0
}

const dotline = {
    borderStyle: 'dotted',
    borderLeftStyle:'none',
    borderRightStyle:'none',
    boderColor: '#BFBFBF',
    borderWidth: 1,
    marginTop: 40,
    marginBottom: 40
}