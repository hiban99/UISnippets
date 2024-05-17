import Snippet8css from './snippet8.module.css';


function Snippet8 () {
    return(
    <div className={Snippet8css.codediv}>
        <div className={Snippet8css.code}>
        <button className={Snippet8css.button} data-text="Awesome">
    <span className={Snippet8css.actualtext}>&nbsp;uisnippets&nbsp;</span>
    <span aria-hidden="true" className={Snippet8css.hovertext}>&nbsp;uisnippets&nbsp;</span>
</button>
        </div>
        <div className={Snippet8css.codewraper}>
            <div className={Snippet8css.html}>
            <div className={Snippet8css.codeeditor}>
      <div className={Snippet8css.header}>
        <span className={Snippet8css.title}>HTML</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet8css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet8css.editorcontent}>
        <code className={Snippet8css.code}>
           
        &lt;button class="button" data-text="Awesome"&gt;{'\n'}
                &nbsp;&nbsp;&lt;span class="actual-text"&gt;&amp;nbsp;uiverse&amp;nbsp;&lt;/span&gt;{'\n'}
                &nbsp;&nbsp;&lt;span aria-hidden="true" class="hover-text"&gt;&amp;nbsp;uiverse&amp;nbsp;&lt;/span&gt;{'\n'}
                &lt;/button&gt;
      
        </code>
      </div>
    </div>
            </div>
            <div className={Snippet8css.css}>
            <div className={Snippet8css.codeeditor}>
      <div className={Snippet8css.header}>
        <span className={Snippet8css.title}>CSS</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet8css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet8css.editorcontent}>
        <code className={Snippet8css.code}>
           
        /* === removing default button style ===*/{'\n'}
                .button {'{'}
                  margin: 0;{'\n'}
                  height: auto;{'\n'}
                  background: transparent;{'\n'}
                  padding: 0;{'\n'}
                  border: none;{'\n'}
                  cursor: pointer;{'\n'}
                {'}'}{'\n'}
                
                /* button styling */{'\n'}
                .button {'{'}
                  --border-right: 6px;{'\n'}
                  --text-stroke-color: rgba(255,255,255,0.6);{'\n'}
                  --animation-color: #37FF8B;{'\n'}
                  --fs-size: 2em;{'\n'}
                  letter-spacing: 3px;{'\n'}
                  text-decoration: none;{'\n'}
                  font-size: var(--fs-size);{'\n'}
                  font-family: "Arial";{'\n'}
                  position: relative;{'\n'}
                  text-transform: uppercase;{'\n'}
                  color: transparent;{'\n'}
                  -webkit-text-stroke: 1px var(--text-stroke-color);{'\n'}
                {'}'}{'\n'}
                
                /* this is the text, when you hover on button */{'\n'}
                .hover-text {'{'}
                  position: absolute;{'\n'}
                  box-sizing: border-box;{'\n'}
                  content: attr(data-text);{'\n'}
                  color: var(--animation-color);{'\n'}
                  width: 0%;{'\n'}
                  inset: 0;{'\n'}
                  border-right: var(--border-right) solid var(--animation-color);{'\n'}
                  overflow: hidden;{'\n'}
                  transition: 0.5s;{'\n'}
                  -webkit-text-stroke: 1px var(--animation-color);{'\n'}
                {'}'}{'\n'}
                
                /* hover */{'\n'}
                .button:hover .hover-text {'{'}
                  width: 100%;{'\n'}
                  filter: drop-shadow(0 0 23px var(--animation-color)){'\n'}
                {'}'}
        </code>
      </div>
    </div>  
            </div>
        </div>
    </div>
    )
}



export default Snippet8; 
