import Snippet30css from './snippet30.module.css';


function Snippet30 () {
    return(
    <div className={Snippet30css.codediv}>
        <div className={Snippet30css.code}>
        <section className={Snippet30css.dotscontainer}>
  <div className={Snippet30css.dot}></div>
  <div className={Snippet30css.dot}></div>
  <div className={Snippet30css.dot}></div>
  <div className={Snippet30css.dot}></div>
  <div className={Snippet30css.dot}></div>
</section>
        </div>
        <div className={Snippet30css.codewraper}>
            <div className={Snippet30css.html}>
            <div className={Snippet30css.codeeditor}>
      <div className={Snippet30css.header}>
        <span className={Snippet30css.title}>HTML</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet30css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet30css.editorcontent}>
        <code className={Snippet30css.code}>
           
        <pre>

  &lt;section class="dots-container"&gt;
    &lt;div class="dot"&gt;&lt;/div&gt;
    &lt;div class="dot"&gt;&lt;/div&gt;
    &lt;div class="dot"&gt;&lt;/div&gt;
    &lt;div class="dot"&gt;&lt;/div&gt;
    &lt;div class="dot"&gt;&lt;/div&gt;
  &lt;/section&gt;

</pre>

      
        </code>
      </div>
    </div>
            </div>
            <div className={Snippet30css.css}>
            <div className={Snippet30css.codeeditor}>
      <div className={Snippet30css.header}>
        <span className={Snippet30css.title}>CSS</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet30css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet30css.editorcontent}>
        <code className={Snippet30css.code}>
           
        <pre>

  .dots-container {'{'}
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  {'}'}

  .dot {'{'}
    height: 20px;
    width: 20px;
    margin-right: 10px;
    border-radius: 10px;
    background-color: #b3d4fc;
    animation: pulse 1.5s infinite ease-in-out;
  {'}'}

  .dot:last-child {'{'}
    margin-right: 0;
  {'}'}

  .dot:nth-child(1) {'{'}
    animation-delay: -0.3s;
  {'}'}

  .dot:nth-child(2) {'{'}
    animation-delay: -0.1s;
  {'}'}

  .dot:nth-child(3) {'{'}
    animation-delay: 0.1s;
  {'}'}

  @keyframes pulse {'{'}
    0% {'{'}
      transform: scale(0.8);
      background-color: #b3d4fc;
      box-shadow: 0 0 0 0 rgba(178, 212, 252, 0.7);
    {'}'}

    50% {'{'}
      transform: scale(1.2);
      background-color: #6793fb;
      box-shadow: 0 0 0 10px rgba(178, 212, 252, 0);
    {'}'}

    100% {'{'}
      transform: scale(0.8);
      background-color: #b3d4fc;
      box-shadow: 0 0 0 0 rgba(178, 212, 252, 0.7);
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



export default Snippet30; 
