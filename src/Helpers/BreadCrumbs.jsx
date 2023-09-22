import React from 'react'
import { useLocation, Link } from "react-router-dom";

// se link til tut mv. i gennemgang.txt



const BreadCrumbs = () => {

    const location = useLocation(); 

        console.log("location", location.pathname);
    
        let currentLink = "";
    
        let crumbs = location.pathname.split("/")
    
        crumbs = crumbs.filter( crumb => crumb !== "")
        .map(crumb => {
            currentLink += `/${crumb}`;
    
            return (
                <div className='crumb' key={crumb}>
                    <Link to={currentLink}>{crumb}</Link>
                </div>
            )
        })
    
    
    return (
        <div className='breadcrumbs'>
            <Link to="/">Home</Link> / {crumbs}
        </div>
    )
}

export default BreadCrumbs
