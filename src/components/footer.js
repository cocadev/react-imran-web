import React from 'react'

class Footer extends React.Component {

    render() {
        return (
            <div>
                <div className="align-center">
                    <a href="http://www.twitter.com/StudioPartner" target="_blank">
                        <div class="twitter">
                            <i class="fa fa-twitter" ></i>
                            <span className='font-16 ml-10'>Follow us on Twitter</span>
                        </div>
                    </a>
                    <span className="font-10 bg-888 pl-30 pr-30 pt-3 pb-3">©&nbsp;The Studio Partner Ltd 2019&nbsp;&nbsp;|&nbsp;&nbsp;<a href="/terms.asp">Terms &amp; Conditions</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="/privacy.asp">Privacy Policy</a></span>
                </div>


                <div className="align-center">
                    <div className="font-26 font-weight-800">Create like a God, command like a king, work like a slave</div>
                    <div className="bg-grey h-5 mt-5 mb-3 img-responsive"></div>
                    <div className="color-tint font-11 font-weight-600">Picture Research, Footage Research, Image Licensing, Image Copyright, Media Consulting, Rights Clearance, Photo and Video production, Commissioned Projects, Media Asset Management</div>
                </div>

            </div>
        )
    }
}

export default Footer