import Snippet5css from './snippet5.module.css';


function Snippet5 () {
    return(
    <div className={Snippet5css.codediv}>
        <div className={Snippet5css.code}>
        <button className={Snippet5css.cssbuttonsio}>
  <span
    ><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
        fill="currentColor"
      ></path>
    </svg>
    Code</span>
</button>
        </div>
        <div className={Snippet5css.codewraper}>
            <div className={Snippet5css.html}>
            <div className={Snippet5css.codeeditor}>
      <div className={Snippet5css.header}>
        <span className={Snippet5css.title}>HTML</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet5css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet5css.editorcontent}>
        <code className={Snippet5css.code}>
        &lt;button class="cssbuttons-io"&gt;{'\n'}
                &nbsp;&nbsp;&lt;span&gt;{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"&gt;{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;path d="M0 0h24v24H0z" fill="none"&gt;&lt;/path&gt;{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;path d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z" fill="currentColor"&gt;&lt;/path&gt;{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/svg&gt;{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;Code{'\n'}
                &nbsp;&nbsp;&lt;/span&gt;{'\n'}
                &lt;/button&gt;
      
        </code>
      </div>
    </div>
            </div>
            <div className={Snippet5css.css}>
            <div className={Snippet5css.codeeditor}>
      <div className={Snippet5css.header}>
        <span className={Snippet5css.title}>CSS</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet5css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet5css.editorcontent}>
        <code className={Snippet5css.code}>
           
        .cssbuttons-io {'{'}
                  position: relative;
                  font-family: inherit;
                  font-weight: 500;
                  font-size: 18px;
                  letter-spacing: 0.05em;
                  border-radius: 0.8em;
                  cursor: pointer;
                  border: none;
                  background: linear-gradient(to right, #8e2de2, #4a00e0);
                  color: ghostwhite;
                  overflow: hidden;
                {'}'}

                .cssbuttons-io svg {'{'}
                  width: 1.2em;
                  height: 1.2em;
                  margin-right: 0.5em;
                {'}'}

                .cssbuttons-io span {'{'}
                  position: relative;
                  z-index: 10;
                  transition: color 0.4s;
                  display: inline-flex;
                  align-items: center;
                  padding: 0.8em 1.2em 0.8em 1.05em;
                {'}'}

                .cssbuttons-io::before, .cssbuttons-io::after {'{'}
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  z-index: 0;
                {'}'}

                .cssbuttons-io::before {'{'}
                  content: "";
                  background: #000;
                  width: 120%;
                  left: -10%;
                  transform: skew(30deg);
                  transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
                {'}'}

                .cssbuttons-io:hover::before {'{'}
                  transform: translate3d(100%, 0, 0);
                {'}'}

                .cssbuttons-io:active {'{'}
                  transform: scale(0.95);
                {'}'}
        </code>
      </div>
    </div>  
            </div>
        </div>
    </div>
    )
}



export default Snippet5; 
