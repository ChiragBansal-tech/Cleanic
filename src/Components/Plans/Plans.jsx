import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './plans.css'

function Plans() {
  return (
    <div className='container'>
        <div className='box-6'>
            <div className='row'>
                <h1 className="plansMainHeading">Our Plans</h1>
            </div>
            <div className='row'>
                <span className="plansSubHeading">Elevate your living with our cleaning subscription plan.</span>
            </div>
        </div>    
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <div className="cardBody">
                        <h1 className="cardBodyHeading">The Weekly plan</h1>
                        <h5 className="cardBodySign">$</h5><span className="cardBodyPrice">480</span>
                        <h3 className="cardBodyTime">Every Month</h3>
                        <button className="btn btn-primary btn6">Select</button>
                    </div>
                    <div className='detailsBox'>
                        <ul className="arrow-list list-unstyled">
                            <li>I'm a benefit</li>
                            <li>I'm a benefit</li>
                            <li>I'm a benefit</li>
                            <li>I'm a benefit</li>
                            <li>I'm a benefit</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card">
                    <div className="cardBody" id='specialBody'>
                        <h1 className="cardBodyHeading">Bi-monthly plan</h1>
                        <h5 className="cardBodySign">$</h5><span className="cardBodyPrice">280</span>
                        <h3 className="cardBodyTime">Every Month</h3>
                        <button className="btn btn-primary btn6">Select</button>
                    </div>
                    <div className='detailsBox'>
                        <ul className="arrow-list list-unstyled">
                            <li>I'm a benefit</li>
                            <li>I'm a benefit</li>
                            <li>I'm a benefit</li>
                            <li>I'm a benefit</li>
                            <li>I'm a benefit</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card">
                    <div className="cardBody">
                        <h1 className="cardBodyHeading">The Office plan</h1>
                        <h5 className="cardBodySign">$</h5><span className="cardBodyPrice">980</span>
                        <h3 className="cardBodyTime">Every Month</h3>
                        <button className="btn btn-primary btn6">Select</button>
                    </div>
                    <div className='detailsBox'>
                        <ul className="arrow-list list-unstyled">
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
  );
}

export default Plans;
