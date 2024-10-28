import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'

function Home() {
    let slideIndex = 0;

    useEffect(() => {
        showSlides();
    }, []);

    function showSlides() {
        const slides = document.querySelectorAll('.slide');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        
        slideIndex++;
        
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        
        slides[slideIndex - 1].style.display = 'flex';
        setTimeout(showSlides, 5000); // Change image every 5 seconds
    }

    function changeSlide(n) {
        
        slideIndex += n;
        
        const slides = document.querySelectorAll('.slide');
        
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        
        if (slideIndex < 1) {
            slideIndex = slides.length;
        }
        
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        
        slides[slideIndex - 1].style.display = 'flex';
    }
  return (
    <div>
        <main>
            <div className="mainBanner">
                <div className="container">
                    <h1 className="mainBannerheading-1">Remarkably Cleaner.</h1>
                    <h1 className="mainBannerheading-2">Amazingly Simpler.</h1>
                    <h3 className="mainBannersub-heading-1 ">Providing spotless cleaning services for busy people</h3>
                    <h3 className="mainBannersub-heading-2 ">since 2035. Always on time, always smiling.</h3>
                    <button className="btn btn-primary btn2">Book Now</button>
                </div>
            </div>
            <div className="getEstimateForm">
                <div className="container">
                    <h2 className="getEstimateFormheading ">Get a Free Estimate</h2>
                    <h4 className="getEstimateFormsub-heading ">Contact Us</h4>
                    <form>
                        <div className="row mt-4">
                            <div className="col-sm-4">
                                <div className="mb-3">
                                    <label htmlFor="firstname" className="form-label">First Name</label>
                                    <input type="text" className="form-control" id="firstname" name="firstname" required/>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="mb-3">
                                    <label htmlFor="lastname" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" id="lastname" name="lastname" required/>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" required />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="mb-3">
                                    <label htmlFor="phoneno" className="form-label">Phone Number</label>
                                    <input type="tel" className="form-control" id="phoneno" name="phoneno" required />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="address" name="address" required />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="mb-3">
                                    <label htmlFor="city" className="form-label">City</label>
                                    <input type="text" className="form-control" id="city" name="city" required />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="nor" className="form-label">Number of Rooms</label>
                                    <select className="form-select" id="nor" name="nor">
                                        <option>2 Bedroom</option>
                                        <option>3 Bedroom</option>
                                        <option>4 Bedroom</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="mb-3">
                                    <label htmlFor="cys" className="form-label">Choose Your Service</label>
                                    <select className="form-select" id="cys" name="cys">
                                        <option>Deep cleaning</option>
                                        <option>Laundry</option>
                                        <option>Moving In/Out</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary btn3">Get Quote</button>
                    </form>
                </div>
            </div>
            <div className="reviewPanel">
                <div className="container">
                    <p className="reviewPanelheading">Shiny Happy Clients</p>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="reviewBox">
                                    <p className="stars">★★★★★</p>
                                    <h2 className="reviewBoxheading">"I'm addicted to the Cleanic!"</h2>
                                    <p className="reviewBoxContent">
                                        “I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”
                                    </p>
                                    <p className="reviewBoxContent">~Jane Deirs, AR</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="reviewBox">
                                    <p className="stars">★★★★★</p>
                                    <h2 className="reviewBoxheading">"My flat looks like a boutique hotel"</h2>
                                    <p className="reviewBoxContent">
                                        “I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”
                                    </p>
                                    <p className="reviewBoxContent">~Eric Laguardia, CA</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="reviewBox">
                                    <p className="stars">★★★★★</p>
                                    <h2 className="reviewBoxheading">"Soft perfection"</h2>
                                    <p className="reviewBoxContent">
                                        “I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”
                                    </p>
                                    <p className="reviewBoxContent">~Lena Rogel, RI</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="reviewBox">
                                    <p className="stars">★★★★★</p>
                                    <h2 className="reviewBoxheading">"I’m obsessed"</h2>
                                    <p className="reviewBoxContent">
                                        “I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”
                                    </p>
                                    <p className="reviewBoxContent">~Greg Parosa, NV</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="servicePanel">
                <div className="container-3">
                    <div className="row">
                        <div id="col-sm-12">
                            <h2 style={{ color: 'white', fontSize: '44px', fontWeight: 490, paddingTop: '80px' }}>
                                For Anything You Need
                            </h2>
                        </div>
                        <div id="col-sm-12">
                            <h4 style={{ color: 'white', fontSize: '22px', fontWeight: 490, paddingBottom: '40px' }}>
                            Our stellar services
                            </h4>
                        </div>
                        <div className="col-sm-4" id="div6-1">
                            <img src="window-1.webp" alt="Service 1" />
                        </div>
                        <div className="col-sm-4" id="div6-2">
                            <img src="window-2.webp" alt="Service 2" />
                        </div>
                        <div className="col-sm-4" id="div6-3">
                            <img src="window-3.webp" alt="Service 3" />
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <Link to="Services">
                            <button className="btn4">See all services</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="workedfor">
                <div className="row" style={{ background: 'rgb(255, 249, 175)', padding: '30px' }}>
                    <div className="col-sm-12">
                        <h1 className="workedforheading">Featured In</h1>
                    </div>
                    <br /><br /><br />
                    <div className="col">
                        <img src="BD-1.webp" style={{ width: '134px' }} alt="Brand 1" />
                    </div>
                    <div className="col">
                        <img src="BD-2.webp" style={{ width: '184px' }} alt="Brand 2" />
                    </div>
                    <div className="col">
                        <img src="BD-3.webp" style={{ width: '184px' }} alt="Brand 3" />
                    </div>
                    <div className="col">
                        <img src="BD-4.webp" style={{ width: '193px' }} alt="Brand 4" />
                    </div>
                    <div className="col">
                        <img src="BD-5.webp" style={{ width: '171px' }} alt="Brand 5" />
                    </div>    
                </div>
            </div>
            <div className="slideshow-container">
                <div className="row">
                    <div className="col-sm-12">
                        <p className="slideshow-containerheading">Before & After</p>
                    </div>
                    <div className="col">
                        <div className="slideshow">
                            <div className="slide">
                                <img src="images-1.webp" className="before" alt="Before 1" />
                                <img src="images1-2.webp" className="after" alt="After 1" />
                            </div>
                            <div className="slide">
                                <img src="Images-2.webp" className="before" alt="Before 2" />
                                <img src="Images-2-1.webp" className="after" alt="After 2" />
                            </div>
                            <div className="slide">
                                <img src="images-3.webp" className="before" alt="Before 3" />
                                <img src="images3-1.webp" className="after" alt="After 3" />
                            </div>
                        </div>
                        <button className="prev" onClick={() => changeSlide(-1)}>&#10094;</button>
                        <button className="next" onClick={() => changeSlide(1)}>&#10095;</button>
                    </div>
                </div>
                <div className="row" style={{ textAlign: 'center' }}>
                    <div className="col-sm-6" style={{ fontSize: '18px', color: 'rgb(10, 35, 35)' }}>Before</div>
                    <div className="col-sm-6" style={{ fontSize: '18px', color: 'rgb(10, 35, 35)' }}>After</div>
                </div>
            </div>
            <div className="workingBanner">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="workingBannerheading">How It Works</h2>
                        </div>
                    </div>
                    <div className="row" style={{ position: "relative", top: "80px" }}>
                    <div className="col"></div>
                        <div className="col">
                            <div className="process">
                                <img className="processimage" src="WD.JPG" alt="Step 1" />
                            </div>
                        </div>
                        <div className="col">
                            <p id="ao">-&gt;</p>
                        </div>
                        <div className="col">
                            <div className="process">
                                <img className="processimage" src="Shirt.JPG" alt="Step 2" />
                            </div>
                        </div>
                        <div className="col">
                            <p id="ao">-&gt;</p>
                        </div>
                        <div className="col">
                            <div className="process">
                                <img className="processimage" src="key.JPG" alt="Step 3" />
                            </div>
                        </div>
                        <div className="col">
                            <p id="ao">-&gt;</p>
                        </div>
                        <div className="col">
                            <div className="process">
                                <img className="processimage" src="home.JPG" alt="Step 4" />
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className="row" style={{ position: "relative", top: "80px" }}>
                        <div className="col"></div>
                        <div className="col">
                            <h3 className="processdescription">Choose your desired cleaning service</h3>
                        </div>
                        <div className="col">
                            <h3 className="processdescription">Choose your desired cleaning service</h3>
                        </div>
                        <div className="col">
                            <h3 className="processdescription">Choose your desired cleaning service</h3>
                        </div>
                        <div className="col">
                            <h3 className="processdescription">Choose your desired cleaning service</h3>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            </div>
            <div className="planBanner">
                <div className="container">
                    <div className="row">
                        <div className="col" style={{ paddingLeft: "100px", paddingTop: "200px" }}>
                            <div className="row">
                                <span className="planBannerMainHeading" style={{ width: "410px" }}>Our plans & Special Discounts</span>
                                <p className="planBannerDescription">I'm a paragraph! Click here to add your own text and edit me. It's easy. I'm a paragraph. Click here to add your own text and edit me. It's easy.</p>
                                <Link to="Plans">
                                    <button className="btn4">Choose your plan</button>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="planBox">
                                <div className="row">
                                    <div className="planBoxUpper">
                                        <h1 className="planBoxHeading">The Bi-monthly plan</h1>
                                        <h5 className="planBoxSign">$</h5>
                                        <span className="planBoxPrice">280</span>
                                        <h3 className="planBoxTime">Every Month</h3>
                                        <button className="btn8">Select</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="planBoxLower">
                                        <ul className="arrow-list">
                                            <li>I'm a benefit</li>
                                            <li>I'm a benefit</li>
                                            <li>I'm a benefit</li>
                                            <li>I'm a benefit</li>
                                            <li>I'm a benefit</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="specialityBanner">
                <div className="container">
                    <div className="row">
                    <div className="col-md-5">
                        <div className="specialityBannerImage"></div>
                    </div>
                    <div className="col-md-7" style={{ paddingTop: '120px', paddingRight: '80px' }}>
                        <div className="row">
                        <div className="col-sm-12">
                            <h1 style={{ fontSize: '44px', fontWeight: 490, color: 'rgb(10, 35, 35)' }}>
                            Why Choose The Cleanic
                            </h1>
                        </div>
                        <div className="col-sm-6">
                            <div className="sub">
                            <h2 className="specialityBannerSubHeading">
                                <img className="im5" src="star.JPG" alt="star" />Qualified Team
                            </h2>
                            <p id="fe">I'm a paragraph. Click here to add your own text and edit me. It's easy.</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="sub">
                            <h2 className="specialityBannerSubHeading">
                                <img className="im5" src="star.JPG" alt="star" />Same Day Availability
                            </h2>
                            <p id="fe">I'm a paragraph. Click here to add your own text and edit me. It's easy.</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="sub">
                            <h2 className="specialityBannerSubHeading">
                                <img className="im5" src="star.JPG" alt="star" />Outstanding Support
                            </h2>
                            <p id="fe">I'm a paragraph. Click here to add your own text and edit me. It's easy.</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="sub">
                            <h2 className="specialityBannerSubHeading">
                                <img className="im5" src="star.JPG" alt="star" />Eco-friendly Materials
                            </h2>
                            <p id="fe">I'm a paragraph. Click here to add your own text and edit me. It's easy.</p>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <Link to="About">
                                <button className="btn6">Get to know us</button>
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="box-9"></div>
        </main>
    </div>
  );
}

export default Home;
