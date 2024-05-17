import Snippet1css from './snippet1.module.css';


function Snippet1 () {
    return(
    <div className={Snippet1css.codediv}>
        <div className={Snippet1css.code}>
        <button className={Snippet1css.button}></button>
        </div>
        <div className={Snippet1css.codewraper}>
            <div className={Snippet1css.html}>
            <div className={Snippet1css.codeeditor}>
      <div className={Snippet1css.header}>
        <span className={Snippet1css.title}>HTML</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet1css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet1css.editorcontent}>
        <code className={Snippet1css.code}>
           
        &lt;button class="button"&gt; &lt;/button&gt;
      
        </code>
      </div>
    </div>
            </div>
            <div className={Snippet1css.css}>
            <div className={Snippet1css.codeeditor}>
      <div className={Snippet1css.header}>
        <span className={Snippet1css.title}>CSS</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet1css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet1css.editorcontent}>
        <code className={Snippet1css.code}>
           
        .button {'{'}
                  position: relative;
                  background-color: transparent;
                  color: #e8e8e8;
                  font-size: 17px;
                  font-weight: 600;
                  border-radius: 10px;
                  width: 150px;
                  height: 60px;
                  border: none;
                  text-transform: uppercase;
                  cursor: pointer;
                  overflow: hidden;
                  box-shadow: 0 10px 20px rgba(51, 51, 51, 0.2);
                  transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
                {'}'}
                .button::before {'{'}
                  content: "Hello!";
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  width: 100%;
                  height: 100%;
                  pointer-events: none;
                  background: linear-gradient(135deg,#7b4397,#dc2430 );
                  transform: translate(0%,90%);
                  z-index: 99;
                  position: relative;
                  transform-origin: bottom;
                  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
                {'}'}
                .button::after {'{'}
                  content: "Hover me";
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background-color: #333;
                  width: 100%;
                  height: 100%;
                  pointer-events: none;
                  transform-origin: top;
                  transform: translate(0%,-100%);
                  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
                {'}'}
                .button:hover::before {'{'}
                  transform: translate(0%,0%);
                {'}'}
                .button:hover::after {'{'}
                  transform: translate(0%,-200%);
                {'}'}
                .button:focus {'{'}
                  outline: none;
                {'}'}
                .button:active {'{'}
                  scale: 0.95;
                {'}'}
      
        </code>
      </div>
    </div>  
            </div>
        </div>
    </div>
    )
}



export default Snippet1; 
