import Snippet11css from './snippet11.module.css';


function Snippet11 () {
    return(
    <div className={Snippet11css.codediv}>
        <div className={Snippet11css.code}>
        <button className={Snippet11css.btn}>
  Watch
</button>

        </div>
        <div className={Snippet11css.codewraper}>
            <div className={Snippet11css.html}>
            <div className={Snippet11css.codeeditor}>
      <div className={Snippet11css.header}>
        <span className={Snippet11css.title}>HTML</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet11css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet11css.editorcontent}>
        <code className={Snippet11css.code}>
           
        &lt;button class="btn"&gt;{'\n'}
                &nbsp;&nbsp;Watch{'\n'}
                &lt;/button&gt;
      
        </code>
      </div>
    </div>
            </div>
            <div className={Snippet11css.css}>
            <div className={Snippet11css.codeeditor}>
      <div className={Snippet11css.header}>
        <span className={Snippet11css.title}>CSS</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet11css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet11css.editorcontent}>
        <code className={Snippet11css.code}>
           
        .btn {'{'}
                  font-size: 1.2rem;{'\n'}
                  padding: 1rem 2.5rem;{'\n'}
                  border: none;{'\n'}
                  outline: none;{'\n'}
                  border-radius: 0.4rem;{'\n'}
                  cursor: pointer;{'\n'}
                  text-transform: uppercase;{'\n'}
                  background-color: rgb(14, 14, 26);{'\n'}
                  color: rgb(234, 234, 234);{'\n'}
                  font-weight: 700;{'\n'}
                  transition: 0.6s;{'\n'}
                  box-shadow: 0px 0px 60px #1f4c65;{'\n'}
                  -webkit-box-reflect: below 10px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4));{'\n'}
                {'}'}{'\n'}
                .btn:active {'{'}
                  scale: 0.92;{'\n'}
                {'}'}{'\n'}
                .btn:hover {'{'}
                  background: rgb(2,29,78);{'\n'}
                  background: linear-gradient(270deg, rgba(2, 29, 78, 0.681) 0%, rgba(31, 215, 232, 0.873) 60%);{'\n'}
                  color: rgb(4, 4, 38);{'\n'}
                {'}'}
      
        </code>
      </div>
    </div>  
            </div>
        </div>
    </div>
    )
}



export default Snippet11; 
