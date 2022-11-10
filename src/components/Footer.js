import React from "react";
import github from "../images/icons8-github-48.png";

const Footer = () =>{ //footer element with link the github code

    return(
        <div className="Footer">
            <p>Created by: Zachary Smith</p>
            <a href="https://github.com/zjs6631/shopping-cart" target="_blank"><div className='github'><img src={github}/></div></a> 
        </div>
    )
}

export default Footer;