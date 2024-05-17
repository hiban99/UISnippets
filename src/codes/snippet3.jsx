import Snippet3css from './snippet3.module.css';


function Snippet3 () {
    return(
    <div className={Snippet3css.codediv}>
        <div className={Snippet3css.code}>
        <button className={Snippet3css.button}>
    Hover me
</button>        </div>
        <div className={Snippet3css.codewraper}>
            <div className={Snippet3css.html}>
            <div className={Snippet3css.codeeditor}>
      <div className={Snippet3css.header}>
        <span className={Snippet3css.title}>HTML</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet3css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet3css.editorcontent}>
        <code className={Snippet3css.code}>
           
        &lt;button&gt;{'\n'}
                &nbsp;&nbsp;Hover me{'\n'}
                &lt;/button&gt;
      
        </code>
      </div>
    </div>
            </div>
            <div className={Snippet3css.css}>
            <div className={Snippet3css.codeeditor}>
      <div className={Snippet3css.header}>
        <span className={Snippet3css.title}>CSS</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet3css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet3css.editorcontent}>
        <code className={Snippet3css.code}>
           
        button {'{'}
                  width: 10em;
                  position: relative;
                  height: 3.5em;
                  border: 3px ridge #149CEA;
                  outline: none;
                  background-color: transparent;
                  color: white;
                  transition: 1s;
                  border-radius: 0.3em;
                  font-size: 16px;
                  font-weight: bold;
                  cursor: pointer;
                {'}'}

                button::after {'{'}
                  content: "";
                  position: absolute;
                  top: -10px;
                  left: 3%;
                  width: 95%;
                  height: 40%;
                  background-color: #212121;
                  transition: 0.5s;
                  transform-origin: center;
                {'}'}

                button::before {'{'}
                  content: "";
                  transform-origin: center;
                  position: absolute;
                  top: 80%;
                  left: 3%;
                  width: 95%;
                  height: 40%;
                  background-color: #212121;
                  transition: 0.5s;
                {'}'}

                button:hover::before, button:hover::after {'{'}
                  transform: scale(0)
                {'}'}

                button:hover {'{'}
                  box-shadow: inset 0px 0px 25px #1479EA;
                {'}'}
      
        </code>
      </div>
    </div>  
            </div>
        </div>
    </div>
    )
}



export default Snippet3; 
