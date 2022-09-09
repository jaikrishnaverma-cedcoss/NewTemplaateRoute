import React, { Component } from 'react';
import './../BaseUI.css'
import { Link } from 'react-router-dom';
import './Nav.css'

class Nav extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <>
            <div className="nav">
                <div className="row">
                <button className='btn' ><Link to='/'>HOME</Link></button>
                <button className='btn'><Link to='/Gallery'>GALLERY</Link></button>
                <button className='btn'><Link to='/Event'>EVENT</Link></button>
                <button className='btn'><Link to='/Feedback'>FEEDBACK</Link></button>
                </div>
                </div>
            </>
         );
    }
}
 
export default Nav;