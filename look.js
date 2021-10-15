import * as React from 'react';
import './css/styles.css';
import a from './assets/img/app-store-badge.svg';
import b from './assets/img/google-play-badge.svg';
import c from './assets/img/r.png';
import d from './assets/img/pngwing.png';

export default function AutoGridNoWrapa() {


    return (
   
        <div>
     <div id="intro"class="img-fluid">
          <div >
        <div class="container ">
           <header className="masthead" >
          
           
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="description" content />
          <meta name="author" content />
          <title>New Age - Start Bootstrap Theme</title>
          <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
          {/* Bootstrap icons*/}
          <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
          {/* Google fonts*/}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,600;1,600&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;0,500;0,600;0,700;1,300;1,500;1,600;1,700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,400;1,400&display=swap" rel="stylesheet" />
          {/* Core theme CSS (includes Bootstrap)*/}
          <link href="css/styles.css" rel="stylesheet" />
          {/* Navigation*/}
  
          <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
            <div className="container px-5">
              <a className="navbar-brand fw-bold" href="#">Skribblee</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                
                <i className="bi-list" />
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                  <li className="nav-item"><a className="nav-link me-lg-3" href="#">Menu</a></li>
                  <li className="nav-item"><a className="nav-link me-lg-3" href="#">Menu</a></li>
                  <li className="nav-item"><a className="nav-link me-lg-3" href="#">Menu</a></li>
                </ul>
             
              </div>
            </div>
          </nav>
 
          
        
          <div class="container">
      
    <div class="intro-text">
       
        <div class="intro-heading text-uppercase"><span>Skribble</span></div>
</div>
</div>
            <div className="container px-5">
              <div className="row gx-5 align-items-center">
            
                <div className="col-lg-6">
                  {/* Mashead text and app badges*/}
                  <div >
                    <h1>
The Pandemic - Inevitable
Graduating High School - Memorable
Graduating High School in the Pandemic - Bittersweet</h1>
                    <p className="lead fw-normal text-muted mb-5"> Come aboard Skribblee to relive and create the high school memories we may have missed in the last year! Sign up now to make new ones with old friends!</p>
                    <div className="d-flex flex-column flex-lg-row align-items-center">
                      <a className="me-lg-3 mb-4 mb-lg-0" href="#!"><img className="app-badge" src={b} alt="..." /></a>
                      <a href="#!"><img className="app-badge" src={a} alt="..." /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                <div  className="rcorners1"><img src={c} className="immg"/><img src={d} className="immg2"/></div>
                  <div className="masthead-device-mockup">
                  <div  className="rcorners2"><img src={c} className="immg"/><img src={d} className="immg2"/></div>   
                      
                    <div className="device-wrapper">
                  
                      <div className="device" data-device="iPhoneX" data-orientation="portrait">
                     
                      </div>
               
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          </header>
         
          </div>
            </div>
            </div>
        
        </div>
      
   
     );
    }


