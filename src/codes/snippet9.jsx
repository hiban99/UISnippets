import Snippet9css from './snippet9.module.css';


function Snippet9 () {
    return(
    <div className={Snippet9css.codediv}>
        <div className={Snippet9css.code}>
        <button className={Snippet9css.button}>
  <svg viewBox="0 0 448 512" className={Snippet9css.svgIcon}><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
</button>        </div>
        <div className={Snippet9css.codewraper}>
            <div className={Snippet9css.html}>
            <div className={Snippet9css.codeeditor}>
      <div className={Snippet9css.header}>
        <span className={Snippet9css.title}>HTML</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet9css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet9css.editorcontent}>
        <code className={Snippet9css.code}>
           
        &lt;button class="button"&gt;{'\n'}
                &nbsp;&nbsp;&lt;svg viewBox="0 0 448 512" class="svgIcon"&gt;{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"&gt;&lt;/path&gt;{'\n'}
                &nbsp;&nbsp;&lt;/svg&gt;{'\n'}
                &lt;/button&gt;
      
        </code>
      </div>
    </div>
            </div>
            <div className={Snippet9css.css}>
            <div className={Snippet9css.codeeditor}>
      <div className={Snippet9css.header}>
        <span className={Snippet9css.title}>CSS</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet9css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet9css.editorcontent}>
        <code className={Snippet9css.code}>
           
        .button {'{'}
                  width: 50px;{'\n'}
                  height: 50px;{'\n'}
                  border-radius: 50%;{'\n'}
                  background-color: rgb(20, 20, 20);{'\n'}
                  border: none;{'\n'}
                  font-weight: 600;{'\n'}
                  display: flex;{'\n'}
                  align-items: center;{'\n'}
                  justify-content: center;{'\n'}
                  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.164);{'\n'}
                  cursor: pointer;{'\n'}
                  transition-duration: .3s;{'\n'}
                  overflow: hidden;{'\n'}
                  position: relative;{'\n'}
                {'}'}{'\n'}
                
                .svgIcon {'{'}
                  width: 12px;{'\n'}
                  transition-duration: .3s;{'\n'}
                {'}'}{'\n'}
                
                .svgIcon path {'{'}
                  fill: white;{'\n'}
                {'}'}{'\n'}
                
                .button:hover {'{'}
                  width: 140px;{'\n'}
                  border-radius: 50px;{'\n'}
                  transition-duration: .3s;{'\n'}
                  background-color: rgb(255, 69, 69);{'\n'}
                  align-items: center;{'\n'}
                {'}'}{'\n'}
                
                .button:hover .svgIcon {'{'}
                  width: 50px;{'\n'}
                  transition-duration: .3s;{'\n'}
                  transform: translateY(60%);{'\n'}
                {'}'}{'\n'}
                
                .button::before {'{'}
                  position: absolute;{'\n'}
                  top: -20px;{'\n'}
                  content: "Delete";{'\n'}
                  color: white;{'\n'}
                  transition-duration: .3s;{'\n'}
                  font-size: 2px;{'\n'}
                {'}'}{'\n'}
                
                .button:hover::before {'{'}
                  font-size: 13px;{'\n'}
                  opacity: 1;{'\n'}
                  transform: translateY(30px);{'\n'}
                  transition-duration: .3s;{'\n'}
                {'}'}
      
        </code>
      </div>
    </div>  
            </div>
        </div>
    </div>
    )
}



export default Snippet9; 
