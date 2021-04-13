import React , { Component} from 'react';
import "./footer.css"
class Footer extends Component {
    render() {
        return (
            <div class="footer"><div className="footer1">
                <br></br>
                <div class="footer-text">Copyright © 2019</div>
                <div class="footer-text">HodlInfo.com</div>
                <div class="footer-text">Developed By <a class="footer-text-link" rel="nofollow" href="https://www.quadbtech.com" target="_blank"> QuadBTech</a></div>
                <div class="footer-text pointer"><a href="mailto:support@hodlinfo.com" class="footer-text">Support</a></div>
                </div></div>
        );
    }
}
export default Footer;