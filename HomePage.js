import { headerString } from "../Layout/Header.js"
import { footerString } from "../Layout/Footer.js";

const header =  document.getElementById("header") ;
const footer = document.getElementById("footer") ;

header.innerHTML = headerString ;
footer.innerHTML = footerString ;
