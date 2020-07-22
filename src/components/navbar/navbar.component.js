export default class Navbar extends HTMLElement {

    createStyle() {
        let cssStyle = document.createElement('style');
        cssStyle.textContent = `        
        /* basic style */
        body {
          padding: 0;
          margin: 0;
          font-family: 'Roboto ', sans-serif;
          font-size: 14px;
          color: #212121;
          line-height: 1.4;
          background-color: #F9F9F9;
        }
        
        .container {
          margin: 0 auto;
        }      
        
        
        /* navbar */
        .navbar {
          padding: 20px 0;
          margin-bottom: 20px;
          width: 100%;
          height: auto;
          background-color: #2196F3;
        }
        
        .logo,
        .nav {
          display: inline-block;
          margin: 0;
        }
        
        /* nav links */
        .nav {
          padding: 0;
          margin: 0;
          list-style: none;
        }
        
        .nav li {
          display: inline-block;
          margin-left: 40px;
        }
        
        .navbar a {
          color: #FFF;
          text-decoration: none;
        }
        
        .navbar a:hover {
          color: #DDD;
        }
        
        /* if you want pull right nav links */
        .nav-right {
          float: right;
          line-height: 39px;
        }
        
        
        
        /* responsive */
        @media screen and (max-width: 677px) {
          .container {
            width: 80%;
          }
        }
        
        @media screen and (max-width: 767px) {
          .container {
            width: 90%;
          }
        }
        
        @media screen and (min-width: 768px) {
          .container {
            width: 750px;
          }
        }
        
        @media screen and (min-width: 992px) {
          .container {
            width: 960px;
          }
        }
        
        @media screen and (min-width: 1200px) {
          .container {
            width: 1170px;
          }
        }
        `

        this.shadow.appendChild(cssStyle);
    }

    constructor() {
        super();
        this.links = ['toto', 'tata', 'tutu'];
        this.title = this.getAttribute('data-text');
        this.shadow = this.attachShadow({ mode: 'open' });

        this.createStyle();

        this.shadow.appendChild(wrapper);
    }  
}
customElements.define('custom-navbar', Navbar);
