import React from 'react';
import "./foot.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container-1">
          <div className="fg-1">
            <div className="row">
              <div className="col-md-3" id="st-1">
                <span id="abc"><img className="im6" src="star.JPG" alt="Logo" /> The Cleanic</span><br /><br /><br /><br />
                <a href="book.html"><button className="btn7">Book now</button></a>
              </div>
              <div className="col-md-3" id="st-2">
                <h2 id="de-1">Legal</h2>
                <h4 id="de-2">Privacy policy</h4>
                <h4 id="de-3">Terms & conditions</h4>
                <h4 id="de-4">Refund Policy</h4>
              </div>
              <div className="col-md-3" id="st-3">
                <h2 id="de-1">Operating hours</h2>
                <h4 id="de-2-2">Mon-Fri: 8am - 8pm</h4>
                <h4 id="de-3-2">Saturday: 9am - 7pm</h4>
                <h4 id="de-4-2">Sunday: 9am - 8pm</h4>
                <h4 id="de-5-2">Follow us for cleaning tips</h4>
                <img id="de-6-2" src="logos.JPG" alt="Social Logos" />
              </div>
              <div className="col-md-3" id="st-4">
                <h2 id="de-1">Contact</h2>
                <h4 id="de-2-1">The Cleanic</h4>
                <h4 id="de-3-1">ABC road</h4>
                <h4 id="de-4-1">XYZ city</h4>
                <h4 id="de-5-1">123-456-7890</h4>
                <h4 id="de-6-1">info@mysite.com</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="container-2">
          <div className="fg-2">
            <h3>© 2035 by The Cleanic. Powered and secured by Wix</h3>
          </div>
        </div>
      </footer>
    </>
  );
}
