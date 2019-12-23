import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import { images } from '../utils/images';

export default class About extends React.Component {
  render() {
    return (
      <div>

        <Header />
        <div className="container">

          <img src={images.Services_1} className="w-full h-400" />

          <div style={dotline}>
          </div>

          <div className="row mb-20">
            <div className="col-md-4">
              <div className="color-tint font-weight-600 mb-10">RESEARCH</div>
              <div className="font-10 line-height-16 ">Areas covered are stock photography, rights managed, royalty free, micro stock, subscriptions, photo portfolios, editorial, niche, specialist, amateur and professional:</div>
              <div className="font-10 line-height-16 ">Creative Brief consultation, interpretation and execution</div>
              <i class="fa fa-minus" style={minus}></i>
              <div className="font-10 line-height-16 ">Picture / Photo research</div>
              <i class="fa fa-minus" style={minus}></i>
              <div className="font-10 line-height-16 ">Footage research</div>
              <i class="fa fa-minus" style={minus}></i>
              <div className="font-10 line-height-16 ">Animation research</div>
              <i class="fa fa-minus" style={minus}></i>
              <div className="font-10 line-height-16 ">Music & Sound research</div>
              <i class="fa fa-minus" style={minus}></i>
              <div className="font-10 line-height-16 ">Illustration Research</div>
              <i class="fa fa-minus" style={minus}></i>
              <div className="font-10 line-height-16 ">General Research</div>

            </div>
            <div className="col-md-4">
              <div className="color-tint font-weight-600 mb-10">CREATIVE SERVICES
          </div>

              <div className="font-10 line-height-16 ">The Studio Partner is linked with over 500 photographers, illustrators and animators worldwide:</div>
              <i class="fa fa-minus" style={minus}></i>
              <div className="font-10 line-height-16 ">Photo commissioning</div>
              <i class="fa fa-minus" style={minus}></i>
              <div className="font-10 line-height-16 ">Animation commissioning</div>
              <i class="fa fa-minus" style={minus}></i>
              <div className="font-10 line-height-16 ">Illustration commissioning</div>
     
            </div>
            <div className="col-md-4">
              <div className="color-tint font-weight-600 mb-10">PRODUCTION</div>

              <div className="font-10 line-height-16 ">Online selection</div>
              <i class="fa fa-minus" style={minus}></i>
              <div className="font-10 line-height-16 ">Online delivery</div>
              <i class="fa fa-minus" style={minus}></i>
              <div className="font-10 line-height-16 ">Image Licensing</div>
              <i class="fa fa-minus" style={minus}></i>
              <div className="font-10 line-height-16 ">Copyright clearance</div>
              <i class="fa fa-minus" style={minus}></i>
              <div className="font-10 line-height-16 ">Third party rights clearance</div>
              <i class="fa fa-minus" style={minus}></i>
              <div className="font-10 line-height-16 ">Project budgeting</div>

              <div className="color-tint font-weight-600 mb-10 mt-20">CONSULTANCY</div>
              <div className="font-10 line-height-16 ">Media Consultants for all of the listed service areas</div>
              <i class="fa fa-minus" style={minus}></i>
              <div className="font-10 line-height-16 ">Legal Advice</div>

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