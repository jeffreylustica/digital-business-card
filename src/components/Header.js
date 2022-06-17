import React from "react"
import displayPhoto from "../images/display-photo.png"

export default function Header() {
    return (
        <div className="header">
            <img className="header-image" src={displayPhoto}/>
            <div className="container">
                <div className="header-profile-info">
                    <h1 className="header-name">Jeffrey Smith</h1>
                    <h5 className="header-specialty">Frontend Developer</h5>
                    <p className="header-portfolio-website">laurasmith.website</p>

                    <div className="header-contact">
                        <a href="#" className="link link-email"><i className="fa-solid fa-envelope"></i>Email</a>
                        <a href="#" className="link link-linkedin"><i className="fa-brands fa-linkedin"></i>LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    )
}