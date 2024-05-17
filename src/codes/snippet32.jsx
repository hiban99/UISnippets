import Snippet32css from './snippet32.module.css';


function Snippet32 () {
    return(
    <div className={Snippet32css.codediv}>
        <div className={Snippet32css.code}>
        <div className={Snippet32css.loader}>
    <span className={Snippet32css.bar}></span>
    <span className={Snippet32css.bar}></span>
    <span className={Snippet32css.bar}></span>
</div>        </div>
        <div className={Snippet32css.codewraper}>
            <div className={Snippet32css.html}>
            <div className={Snippet32css.codeeditor}>
      <div className={Snippet32css.header}>
        <span className={Snippet32css.title}>HTML</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet32css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet32css.editorcontent}>
        <code className={Snippet32css.code}>
           
        <pre>

  &lt;div class="loader"&gt;
    &lt;span class="bar"&gt;&lt;/span&gt;
    &lt;span class="bar"&gt;&lt;/span&gt;
    &lt;span class="bar"&gt;&lt;/span&gt;
  &lt;/div&gt;

</pre>

      
        </code>
      </div>
    </div>
            </div>
            <div className={Snippet32css.css}>
            <div className={Snippet32css.codeeditor}>
      <div className={Snippet32css.header}>
        <span className={Snippet32css.title}>CSS</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet32css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet32css.editorcontent}>
        <code className={Snippet32css.code}>
           
        <pre>

  .loader {'{'}
    display: flex;
    align-items: center;
  {'}'}

  .bar {'{'}
    display: inline-block;
    width: 3px;
    height: 20px;
    background-color: rgba(255, 255, 255, .5);
    border-radius: 10px;
    animation: scale-up4 1s linear infinite;
  {'}'}

  .bar:nth-child(2) {'{'}
    height: 35px;
    margin: 0 5px;
    animation-delay: .25s;
  {'}'}

  .bar:nth-child(3) {'{'}
    animation-delay: .5s;
  {'}'}

  @keyframes scale-up4 {'{'}
    20% {'{'}
      background-color: #ffff;
      transform: scaleY(1.5);
    {'}'}

    40% {'{'}
      transform: scaleY(1);
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



export default Snippet32; 
