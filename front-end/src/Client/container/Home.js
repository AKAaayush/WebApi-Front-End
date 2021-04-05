import React, { Component } from "react";
//var Carousel = require('react-responsive-carousel').Carousel;
import OurFood from './OurFood'
import axios from 'axios'
class Home extends Component{
     constructor(){
       super();
       this.state = {
         'date':'',
         'time': '',
         'user_email':'',
         'people':'',
         config: {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('userToken')}` }
        }
       }
     }
     inputHandler=(e)=>{
      this.setState({
          [e.target.name] : e.target.value
      })
  }
  componentDidMount(){
    axios.get('http://localhost:100/checkuserlogin', this.state.config)
    .then((response)=>
    this.setState({
        // user: response.data,
        // name : response.data.name,
        // address : response.data.address,
        // email : response.data.email
    })
    )

    .catch((err)=>{
        console.log(err.response)
    })
    
}

  addTable = (e) =>{
    e.preventDefault();
    const data = {
        date : this.state.date,
        time : this.state.time,
        user_email : this.state.user_email,
        people : this.state.people
    }

  
    axios.post('http://localhost:100/addtable',data, this.state.config)
     
    .then((response)=>{
        console.log(response)
      
    })
    .catch((err)=>{
        console.log(err.response)
    })

      
}
        render(){ 
          if (localStorage.getItem('userToken')) {
            var verify= 
          
  <div class="parallax-banner-2">
  <div class="content-reservation">
    <div class="text-reservation wow fadeInUp" data-wow-delay="0.2">
      <h6>Reservation</h6>
      <h3 style ={{color: 'black'}}>Book a table</h3>
    </div>
    <div class="container">
      <form>
        <div class="input-reservation row wow flipInX" data-wow-delay="0.7s">
          <div class="wrap-input-find col-12 col-sm-12 col-md-10">
            <div class="input-find row">
              <div class="col-10 col-sm-5 col-md-2">
                <select class="chose-people" name="people"  style={{    width: '100%', height: '100%'}} onChange={this.inputHandler}>
                  <option name="people" >1 people</option>
                  <option name="people" >2 people</option>
                  <option name="people" >3 people</option>
                  <option name="people" >4 people</option>
                  <option name="people" >5 people</option>
                  <option name="people" >6 people</option>
                </select>
              </div>

              <div class="col-10 col-sm-8 col-md-3 chose-calendar">
                <input class="my-calendar" type="date" name="date" onChange={this.inputHandler}/>
              </div>
              

              <div class="col-10 col-sm-8 col-md-2">
                <select class="chose-time" name="time" onChange={this.inputHandler} style={{    width: '100%', height: '100%'}}>
                  <option name="time" >7:00 PM</option>
                  <option name="time" >8:00 PM</option>
                  <option name="time" >9:00 PM</option>
                </select>
              </div>
              <div class="col-10 col-sm-8 col-md-5 chose-calendar">
                <input class="my-calendar" type="email" placeholder="Email" name="user_email" onChange={this.inputHandler}/>
              </div>
            </div>
          </div>
          <div class="col-5 col-sm-3 col-md-2">
            <button class="btn-find-table" onClick={this.addTable}>FIND A TABLE</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
          }
            return(
              <>
             
              <section id="slider-deli">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src="assets/images/icons/visa.png" alt="First slide"/>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="assets/images/icons/visa.png" alt="Second slide"/>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="assets/images/icons/visa.png" alt="Third slide"/>
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>

      
              </div>
              </section>
              <OurFood/>

  <div class="parallax-banner" >
		<div class="content-banner">
			<div class="text-banner wow zoomIn">
				<h3 style = {{color :'black'}}>Feeling at Home</h3>
			</div>
			<div class="symbol-banner wow zoomIn" data-wow-delay="0.5s">
				<img alt="symbol" src="assets/images/icons/symbol-banner.png"/>
				<div class="line-symbol-banner wow fadeInLeftBig" id="short-line-left" data-wow-delay="0.5s"></div>
				<div class="line-symbol-banner wow fadeInLeftBig" id="long-line-left" data-wow-delay="0.5s"></div>
				<div class="line-symbol-banner wow fadeInRightBig" id="short-line-right" data-wow-delay="0.5s"></div>
				<div class="line-symbol-banner wow fadeInRightBig" id="long-line-right" data-wow-delay="0.5s"></div>
			</div>
		</div>
	</div>

  <section id="event">
		<div class="container">
			<div class="wrap-title-event row">
				<div id="title-event" class="col-12">
					<h6>Discover Our</h6>
					<h2>Upcoming Events</h2>
				</div>
					<div class="content-event col-sm-10 col-md-8 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
						<div class="img-event">
							<a href="blog-detail.html"><img alt="picture-event" src="assets/images/img-event-01.jpg"/></a>
						</div>
						<h3><a class="hover-link-color" href="blog-detail.html">Deli Summer Auscoutics</a></h3>
						<p>
							Proin lacinia nisl ut ultricies posuere nulla ut imperdiet nunc. Quisque id tellus vitae mauris feugiat comodone, donec pretium odio nec sagittis euismod.
						</p>
						<span class="date-event"><i class="fa fa-calendar" aria-hidden="true"></i> 21 June, 2017</span>
						<span class="time-event"><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00AM - 22:00PM</span>
					</div>

					<div class="content-event col-sm-10 col-md-8 col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
						<div class="img-event">
							<a href="blog-detail.html"><img alt="picture-event" src="assets/images/img-event-02.jpg"/></a>
						</div>
						<h3><a class="hover-link-color" href="blog-detail.html">The Live Jazz Music Night</a></h3>
						<p>
							Proin lacinia nisl ut ultricies posuere nulla ut imperdiet nunc. Quisque id tellus vitae mauris feugiat comodone, donec pretium odio nec sagittis euismod.
						</p>
						<span class="date-event"><i class="fa fa-calendar" aria-hidden="true"></i> 22 June, 2017</span>
						<span class="time-event"><i class="fa fa-clock-o" aria-hidden="true"></i> 19:00PM - 23:00PM</span>
					</div>

					<div class="content-event col-sm-10 col-md-8 col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
						<div class="img-event">
							<a href="blog-detail.html"><img alt="picture-event" src="assets/images/img-event-03.jpg"/></a>
						</div>
						<h3><a class="hover-link-color" href="blog-detail.html">Mother’s Day Celebrating at Deli</a></h3>
						<p>
							Proin lacinia nisl ut ultricies posuere nulla ut imperdiet nunc. Quisque id tellus vitae mauris feugiat comodone, donec pretium odio nec sagittis euismod.
						</p>
						<span class="date-event"><i class="fa fa-calendar" aria-hidden="true"></i> 23 June, 2017</span>
						<span class="time-event"><i class="fa fa-clock-o" aria-hidden="true"></i> 10:00AM - 22:00PM</span>
					</div>
			</div>			
		</div>
	</section>

  {verify}
              </>
        )
    
      }
    }
    export default Home