import React, { Component } from 'react';

class Header extends Component {

    inputChange(event){
        console.log(event.target.value);
    }

    render() {
        return(
            <header>
                <div className = "logo">Logo</div>
                <input onChange={this.inputChange}/>
            </header>
        )
    }
}

export default Header;