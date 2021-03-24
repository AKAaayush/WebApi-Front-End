
import {Link} from 'react-router-dom';
const { Component} = require("react")


class Header extends Component{
 render(){
     return (
        //  <div>This is Header</div>
         <div>
                <Link to = '/'>Home</Link>
                <Link to = '/register'>Register</Link>
                <Link to = '/login'>Login</Link>
                <Link to = '/menuadd'>Menu Add</Link>
                <Link to = '/mymenu'>Menu Display</Link>
                <Link to = '/updatemenu'>Update Menu</Link>


         </div>
     )
 }
}

export default Header