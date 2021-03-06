import { Component } from "react";

 class Footer extends Component{
     render(){
         return(
             <>
            <footer>
            <div class="container">
                <div class="content-footer row">
                    <div class="column-footer col-lg-5 col-md-8 col-sm-7">
                        <h3>Contact information</h3>
                        <ul>
                            <li>ADDRESS: Kathmandu Sofwarica</li>
                            <li>FOR BOOKING: (044) 359 0173</li>
                            <li id="follow-us">FOLLOW US ON: 
                                <i class="fa fa-facebook" aria-hidden="true"/>
                                <i class="fa fa-twitter" aria-hidden="true"/>
                                <i class="fa fa-tripadvisor" aria-hidden="true"/>
                                <i class="fa fa-instagram" aria-hidden="true"/>
                            </li>
                        </ul>
                    </div>
    
                    <div class="column-footer col-lg-4 col-md-5 col-sm-7">
                        <h3>Restaurant hours</h3>
                        <ul id="restaurant-hours">
                            <li>
                                <span class="span-left">LUNCH:</span>
                            </li>
                            <li>
                                <span class="span-left">Monday - Friday</span>
                                <span class="span-right">11:30AM - 2:00PM</span>
                            </li>
                            <li>
                                <span class="span-left">DINNER:</span>
                            </li>
                            <li>
                                <span class="span-left">Monday - Friday</span>
                                <span class="span-right">5:30PM - 11:00PM</span>
                            </li>
                            <li>
                                <span class="span-left">Saturday - Sunday</span>
                                <span class="span-right">4:30PM - 10:00PM</span>
                            </li>
                        </ul>
                        <div class="line-divide first-line"></div>
                    </div>
    
                    <div class="column-footer col-lg-3 col-md-3 col-sm-7">
                        <h3>Useful links</h3>
                        <ul id="useful-links">
                            <li>
                                <span class="span-left">
                                    <a href="/home">Home</a>
                                </span> 
                                <span class="span-right">
                                    <a href="/home">Reservation</a>
                                </span> 
                                
                            
                            </li>
                            <li>
                                <span class="span-left">
                                    <a href="/mymenu">Menus</a>
                                </span> 
                                <span class="span-right">
                                    <a href="/contact">Contact us</a>
                                </span>
                               
                            </li>
                        
                            <li><a href="/aboutus">About us</a></li>
                        </ul>
                        <div class="line-divide second-line"></div>
                    </div>
                </div>
            </div>
            <div class="wrap-bottom-footer">
                <div class="container">
                    <div class="bottom-footer row justify-content-between">
                        <div class="col-12 col-sm-7">?? 2021 Aayush All rights reserved.</div>
                        <div class="col-12 col-sm-5"><span>Privacy policy</span><span>Terms of use</span></div>
                    </div>
                </div>
            </div>
        </footer>
        {/* <a href="/" id="toTopBtn" class="cd-top text-replace js-cd-top cd-top--is-visible cd-top--fade-out" data-abc="true"></a> */}

        </>
         )
     }
 }
 export default Footer