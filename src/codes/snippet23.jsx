import Snippet23css from './snippet23.module.css';


function Snippet23 () {
    return(
    <div className={Snippet23css.codediv}>
        <div className={Snippet23css.code}>
        <div className={Snippet23css.onediv}>
  <div className={Snippet23css.text}>Hello There</div>
</div>

        </div>
        <div className={Snippet23css.codewraper}>
            <div className={Snippet23css.html}>
            <div className={Snippet23css.codeeditor}>
      <div className={Snippet23css.header}>
        <span className={Snippet23css.title}>HTML</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet23css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet23css.editorcontent}>
        <code className={Snippet23css.code}>
           
    
  &lt;div class="one-div"&gt;
    &lt;div class="text"&gt;Hello There&lt;/div&gt;
  &lt;/div&gt;


      
        </code>
      </div>
    </div>
            </div>
            <div className={Snippet23css.css}>
            <div className={Snippet23css.codeeditor}>
      <div className={Snippet23css.header}>
        <span className={Snippet23css.title}>CSS</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet23css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet23css.editorcontent}>
      <pre>

  .one-div {'{'}
    position: relative;
    height: 250px;
    width: 200px;
    background-color: rgb(15, 15, 15);
    transform-style: preserve-3d;
    animation: rot 2s infinite ease;
    border-radius: 20px;
    box-shadow: 0 0 50px 0px, inset 0 0 90px 0px;
    color: white;
    transition: 1s;
    display: flex;
    justify-content: center;
    align-items: center;
  {'}'}

  .one-div .text {'{'}
    opacity: 0;
    transition: all 0.5s;
  {'}'}

  .one-div:hover.one-div .text {'{'}
    scale: 1.2;
    opacity: 0.7;
  {'}'}

  .one-div:hover {'{'}
    box-shadow: 0 0 50px 0px, inset 5px 5px 20px 0px black;
  {'}'}

  @keyframes rot {'{'}
    0% {'{'}
      transform: rotateX(-15deg) translateY(0px);
    {'}'}

    50% {'{'}
      transform: rotateX(-15deg) translateY(-10px);
    {'}'}

    100% {'{'}
      transform: rotateX(-15deg) translateY(0px);
    {'}'}
  {'}'}

</pre>

      </div>
    </div>  
            </div>
        </div>
    </div>
    )
}



export default Snippet23; 
