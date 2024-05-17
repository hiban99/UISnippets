import Snippet2css from './snippet2.module.css';


function Snippet2 () {
    return(
    <div className={Snippet2css.codediv}>
        <div className={Snippet2css.code}>
        <button className={`${Snippet2css.button} ${Snippet2css.type1}`}>
  <span className={Snippet2css.btntxt}>Hello</span>
</button>
        </div>
        <div className={Snippet2css.codewraper}>
            <div className={Snippet2css.html}>
            <div className={Snippet2css.codeeditor}>
      <div className={Snippet2css.header}>
        <span className={Snippet2css.title}>HTML</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet2css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet2css.editorcontent}>
        <code className={Snippet2css.code}>
        &lt;button class="button type1"&gt;{'\n'}
                &nbsp;&nbsp;&lt;span class="btn-txt"&gt;Hello&lt;/span&gt;{'\n'}
                &lt;/button&gt;  
        </code>
      </div>
    </div>
            </div>
            <div className={Snippet2css.css}>
            <div className={Snippet2css.codeeditor}>
      <div className={Snippet2css.header}>
        <span className={Snippet2css.title}>CSS</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet2css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet2css.editorcontent}>
        <code className={Snippet2css.code}>
           
        .button {'{'}
                  height: 50px;
                  width: 200px;
                  position: relative;
                  background-color: transparent;
                  cursor: pointer;
                  border: 2px solid #252525;
                  overflow: hidden;
                  border-radius: 30px;
                  color: #333;
                  transition: all 0.5s ease-in-out;
                {'}'}

                .btn-txt {'{'}
                  z-index: 1;
                  font-weight: 800;
                  letter-spacing: 4px;
                {'}'}

                .type1::after {'{'}
                  content: "";
                  position: absolute;
                  left: 0;
                  top: 0;
                  transition: all 0.5s ease-in-out;
                  background-color: #333;
                  border-radius: 30px;
                  visibility: hidden;
                  height: 10px;
                  width: 10px;
                  z-index: -1;
                {'}'}

                .button:hover {'{'}
                  box-shadow: 1px 1px 200px #252525;
                  color: #fff;
                  border: none;
                {'}'}

                .type1:hover::after {'{'}
                  visibility: visible;
                  transform: scale(100) translateX(2px);
                {'}'}
      
        </code>
      </div>
    </div>  
            </div>
        </div>
    </div>
    )
}



export default Snippet2; 
