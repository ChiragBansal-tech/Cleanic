import React from 'react';
import './about.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const AboutPage = () => {
    

    return (
        <div className='MainContainer'>
            <div className='row'>
                <div className='col'>
                    <div className="div1">
                        <div className='row'><h1 >About Us</h1></div>
                        <div className='row'><p>Our story is a passion for</p></div>
                        <div className='row'><p>clean homes and happy clients</p></div>
                    </div>
                </div>
            </div>

            <div className='div2'>
                <div className="row"></div>
            </div>

            <div className='div3'>
                <div className="row">
                    <div className="col"><img className="im8" src="abc-1.webp" alt="About Us" /></div>
                    <div className="col">
                        <div className='box'>
                        <h1 className="sub-heading">Who We Are</h1>
                        <p className="sub-para">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='div4'>
                <div className="row">
                    <h1 className='teamHeading'>Our Stellar Team</h1>
                </div>
            </div>

            <div className='div5'>
                <div className='row'>
                    <div className='col'>
                        <div class="card" className='boxes'>
                            <img class="card-img-top" className='personImage' src="p-1.webp" alt="Card image cap"/>
                            <div class="card-body" >
                                <h5 class="card-title">Roni Lavine</h5>
                                <p class="card-text">CEO</p>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div class="card" className='boxes'>
                            <img class="card-img-top" className='personImage' src="p-2.webp" alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">CEO</p>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div class="card" className='boxes'>
                            <img class="card-img-top" className='personImage' src="p-3.webp" alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">CEO</p>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div class="card" className='boxes'>
                            <img class="card-img-top" className='personImage' src="p-4.webp" alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">CEO</p>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div class="card" className='boxes'>
                            <img class="card-img-top" className='personImage' src="p-5.webp" alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">CEO</p>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div class="card" className='boxes'>
                            <img class="card-img-top" className='personImage' src="p-6.webp" alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">CEO</p>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='div6'>
                <div className='row'>
                    <form>
                        <div className='row'>
                            <div className="col"></div>
                            <div className='col-sm-6' id='box-4'>
                                <div className='row'>
                                    <h1 className='div6mainHeading'>Work With Us</h1>
                                </div>
                                <div className='row'>
                                    <p className='div6subHeading'>Join Our Team For a fulfilling</p>
                                </div>
                                <div className='row'>
                                    <p className='div6subHeading'>and rewarding career</p>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <label htmlfor='firstname'>First Name</label><br/>
                                        <input type='text' name='firstname' required />
                                    </div>
                                    <div className='col'>
                                        <label htmlfor='lastname'>Last Name</label><br/>
                                        <input type='text' name='lastname' required />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <label htmlfor='email'>E-mail</label><br/>
                                        <input type='email' id='inputEmail' name='email' required />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <label htmlfor='phoneno'>Phone number</label><br/>
                                        <input type='tel' name='phoneno' required />
                                    </div>
                                    <div className='col'>
                                        <label htmlFor="position">Position</label>
                                        <select className="employeePosition">
                                            <option>Full-time</option>
                                            <option>Part-time</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <label htmlfor='firstname'>Tell us more</label><br/>
                                        <textarea type='textarea' id='inputTextarea' name='firstname' required />
                                    </div>
                                </div>
                                <div className='row'>
                                    <button className='btn5'>Apply Now</button>
                                </div>
                            </div>
                            <div className="col"></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default AboutPage;
