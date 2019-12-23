import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';

export default class Brief extends React.Component {

  render() {
    return (
      <div>

        <Header />
        <div >

          <h1>This is My Brief screen</h1>

        </div>
        <Footer />

      </div>
    )
  }
}