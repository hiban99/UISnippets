import Snippet4css from './snippet4.module.css';


function Snippet4 () {
    return(
    <div className={Snippet4css.codediv}>
        <div className={Snippet4css.code}>
        <button className={Snippet4css.button}>
    Hover me
</button>        </div>
        <div className={Snippet4css.codewraper}>
            <div className={Snippet4css.html}>
            <div className={Snippet4css.codeeditor}>
      <div className={Snippet4css.header}>
        <span className={Snippet4css.title}>HTML</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet4css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet4css.editorcontent}>
        <code className={Snippet4css.code}>
           
        &lt;button&gt;{'\n'}
                &nbsp;&nbsp;Hover me{'\n'}
                &lt;/button&gt;
      
        </code>
      </div>
    </div>
            </div>
            <div className={Snippet4css.css}>
            <div className={Snippet4css.codeeditor}>
      <div className={Snippet4css.header}>
        <span className={Snippet4css.title}>CSS</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet4css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet4css.editorcontent}>
        <code className={Snippet4css.code}>
           
        button {'{'}
                  color: white;
                  text-decoration: none;
                  font-size: 25px;
                  border: none;
                  background: none;
                  font-weight: 600;
                  font-family: 'Poppins', sans-serif;
                {'}'}

                button::before {'{'}
                  margin-left: auto;
                {'}'}

                button::after, button::before {'{'}
                  content: '';
                  width: 0%;
                  height: 2px;
                  background: #f44336;
                  display: block;
                  transition: 0.5s;
                {'}'}

                button:hover::after, button:hover::before {'{'}
                  width: 100%;
                {'}'}
      
        </code>
      </div>
    </div>  
            </div>
        </div>
    </div>
    )
}



export default Snippet4; 
