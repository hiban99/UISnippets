import Snippet22css from './snippet22.module.css';


function Snippet22 () {
    return(
    <div className={Snippet22css.codediv}>
        <div className={Snippet22css.code}>
        <div className={Snippet22css.cookieCard}>
  <p className={Snippet22css.cookieHeading}>Cookies.</p>
  <p className={Snippet22css.cookieDescription}>By using this website you automatically accept that we use cookies. <a href="#">What for?</a></p>
  <button className={Snippet22css.acceptButton}>Understood</button>
</div>

        </div>
        <div className={Snippet22css.codewraper}>
            <div className={Snippet22css.html}>
            <div className={Snippet22css.codeeditor}>
      <div className={Snippet22css.header}>
        <span className={Snippet22css.title}>HTML</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet22css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet22css.editorcontent}>
    <pre>
  &lt;div class="cookieCard"&gt;
    &lt;p class="cookieHeading"&gt;Cookies.&lt;/p&gt;
    &lt;p class="cookieDescription"&gt;By using this website you automatically accept that we use cookies. &lt;a href="#"&gt;What for?&lt;/a&gt;&lt;/p&gt;
    &lt;button class="acceptButton"&gt;Understood&lt;/button&gt;
  &lt;/div&gt;

</pre>
      </div>
    </div>
            </div>
            <div className={Snippet22css.css}>
            <div className={Snippet22css.codeeditor}>
      <div className={Snippet22css.header}>
        <span className={Snippet22css.title}>CSS</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet22css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet22css.editorcontent}>
           
        <pre>

  .cookieCard {'{'}
    width: 300px;
    height: 200px;
    background: linear-gradient(to right,rgb(137, 104, 255),rgb(175, 152, 255));
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    position: relative;
    overflow: hidden;
  {'}'}

  .cookieCard::before {'{'}
    width: 150px;
    height: 150px;
    content: "";
    background: linear-gradient(to right,rgb(142, 110, 255),rgb(208, 195, 255));
    position: absolute;
    z-index: 1;
    border-radius: 50%;
    right: -25%;
    top: -25%;
  {'}'}

  .cookieHeading {'{'}
    font-size: 1.5em;
    font-weight: 600;
    color: rgb(241, 241, 241);
    z-index: 2;
  {'}'}

  .cookieDescription {'{'}
    font-size: 0.9em;
    color: rgb(241, 241, 241);
    z-index: 2;
  {'}'}

  .cookieDescription a {'{'}
    color: rgb(241, 241, 241);
  {'}'}

  .acceptButton {'{'}
    padding: 11px 20px;
    background-color: #7b57ff;
    transition-duration: .2s;
    border: none;
    color: rgb(241, 241, 241);
    cursor: pointer;
    font-weight: 600;
    z-index: 2;
  {'}'}

  .acceptButton:hover {'{'}
    background-color: #714aff;
    transition-duration: .2s;
  {'}'}

</pre>

      
      
      </div>
    </div>  
            </div>
        </div>
    </div>
    )
}



export default Snippet22; 
