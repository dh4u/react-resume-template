import React, { Component } from 'react';

class Header extends Component {
  
   render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = {__html: this.props.data.description };
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var networks = this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url} target="_blank" rel="noopener noreferrer"><i className={network.className}></i></a></li>
      });
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm {name}</h1>
            <h3 style={{whiteSpace: "pre-wrap", color: "#fff"}}><span style={{fontWeight: "bold"}}>{occupation}</span> in {city}, {state}
            <br /><br />
            <div dangerouslySetInnerHTML={description} />
            </h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
