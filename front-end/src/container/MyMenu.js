import axios from "axios";
import { Component } from "react";
import {  Image } from "react-bootstrap";
import { Link } from 'react-router-dom';

class MyMenu extends Component {
    state = {
        menu: [],

    }
    componentDidMount() {
        axios.get('http://localhost:100/menu/display')
            .then((response) => {
                console.log(response)
                this.setState({

                    menu: response.data.data
                })
            })

            .catch()
    }
    deleteProduct = (id) => {
        axios.delete('http://localhost:100/menu/delete/' + id)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err.response)
            })

    }


    render() {
        return (

            <section class="our-menu for-menu-page" >
                <div class="container">

                    <div class="wrap-title-our-menu row">
                        <div class="col-12 title-our-menu">
                            <h6>try &amp; discover</h6>
                            <h2>Our Menu</h2>
                        </div>
                    </div>
                    <div class="wrap-list-food">
                        <div class="row list-food">

                            {this.state.menu.map((menu) => {
                                return (
                                    // <div class="container" >
                                    //         <div className="col-md-4">
                                    //             <p>Id :{b._id}</p>
                                    //             { b.menu_name}
                                    //             <Image src={'http://localhost:100/images/' + b.menu_image}  width='100'/>
                                    //             <Link to={'updatemenu/' + b._id} >Update</Link>/
                                    //             {/* <p><Link to ='mymenu'  onClick={this.deleteProduct.bind(this, b._id)}>Delete</Link></p> */}

                                    //             <a href="mymenu/" onClick={this.deleteProduct.bind(this, b._id)}>Delete</a>
                                    //         </div>
                                    //         </div>



                                    <>

                                        <div class="col-md-10 col-lg-6">

                                            <div class="item-food row wow fadeInDown" data-wow-delay="0.2s">
                                                <div class="col-12 col-sm-2 img-list-food wow zoomIn " data-wow-delay="0.2s">
                                                    <a href="/mymenu"> <Image src={'http://localhost:100/images/' + menu.menu_image}  width='100'/></a>
                                                </div>
                                                <div class="col-12 col-sm-8 text-list-food ">
                                                    <div class="name-price row">
                                                        <div class="name-food col-12 col-sm-auto"><a class="hover-link-color" href="product-detail.html">{menu.menu_name}</a></div>
                                                        <div class="line-food col">
                                                            <div class="add-line-run"></div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-12 col-sm-12 info-food">
                                                            {menu.menu_desc}
                                                </div>
                                                    </div>
                                                </div>
                                                <div class="price-food col-12 col-sm-2">{menu.menu_price}</div>
                                                <Link to={'updatemenu/' + menu._id} >Update</Link>
                                            </div>
                                        </div>



                                    </>
                                )
                            })}
                        </div>
                    </div>


                </div>

            </section>


        )
    }
}

export default MyMenu