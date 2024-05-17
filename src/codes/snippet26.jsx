import Snippet26css from './snippet26.module.css';


function Snippet26 () {
    return(
    <div className={Snippet26css.codediv}>
        <div className={Snippet26css.code}>
        <div className={Snippet26css.spinner}>
    <div className={Snippet26css.spinner1}></div>
</div>
        </div>
        <div className={Snippet26css.codewraper}>
            <div className={Snippet26css.html}>
            <div className={Snippet26css.codeeditor}>
      <div className={Snippet26css.header}>
        <span className={Snippet26css.title}>HTML</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet26css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet26css.editorcontent}>
        <code className={Snippet26css.code}>
           
        <pre>

  &lt;div class="spinner"&gt;
    &lt;div class="spinner1"&gt;&lt;/div&gt;
  &lt;/div&gt;

</pre>

      
        </code>
      </div>
    </div>
            </div>
            <div className={Snippet26css.css}>
            <div className={Snippet26css.codeeditor}>
      <div className={Snippet26css.header}>
        <span className={Snippet26css.title}>CSS</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet26css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet26css.editorcontent}>
        <code className={Snippet26css.code}>
           
        <pre>

  .spinner {'{'}
    background-image: linear-gradient(rgb(186, 66, 255) 35%,rgb(0, 225, 255));
    width: 100px;
    height: 100px;
    animation: spinning82341 1.7s linear infinite;
    text-align: center;
    border-radius: 50px;
    filter: blur(1px);
    box-shadow: 0px -5px 20px 0px rgb(186, 66, 255), 0px 5px 20px 0px rgb(0, 225, 255);
  {'}'}

  .spinner1 {'{'}
    background-color: rgb(36, 36, 36);
    width: 100px;
    height: 100px;
    border-radius: 50px;
    filter: blur(10px);
  {'}'}

  @keyframes spinning82341 {'{'}
    to {'{'}
      transform: rotate(360deg);
    {'}'}
  {'}'}

</pre>

        </code>
      </div>
    </div>  
            </div>
        </div>
    </div>
    )
}



export default Snippet26; 
