import Snippet29css from './snippet29.module.css';


function Snippet29 () {
    return(
    <div className={Snippet29css.codediv}>
        <div className={Snippet29css.code}>
        <div className={Snippet29css.loader}>
   <div data-glitch="Loading..." className={Snippet29css.glitch}>Loading...</div>
</div>
        </div>
        <div className={Snippet29css.codewraper}>
            <div className={Snippet29css.html}>
            <div className={Snippet29css.codeeditor}>
      <div className={Snippet29css.header}>
        <span className={Snippet29css.title}>HTML</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet29css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet29css.editorcontent}>
        <code className={Snippet29css.code}>
           
        <pre>

  &lt;div class="loader"&gt;
    &lt;div data-glitch="Loading..." class="glitch"&gt;Loading...&lt;/div&gt;
  &lt;/div&gt;

</pre>

      
        </code>
      </div>
    </div>
            </div>
            <div className={Snippet29css.css}>
            <div className={Snippet29css.codeeditor}>
      <div className={Snippet29css.header}>
        <span className={Snippet29css.title}>CSS</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet29css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet29css.editorcontent}>
        <code className={Snippet29css.code}>
           
        <pre>

  .glitch {'{'}
    position: relative;
    font-size: 25px;
    font-weight: 700;
    line-height: 1.2;
    color: #fff;
    letter-spacing: 5px;
    z-index: 1;
    animation: shift 1s ease-in-out infinite alternate;
  {'}'}

  .glitch:before,
  .glitch:after {'{'}
    display: block;
    content: attr(data-glitch);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.8;
  {'}'}

  .glitch:before {'{'}
    animation: glitch 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
    color: #8b00ff;
    z-index: -1;
  {'}'}

  .glitch:after {'{'}
    animation: glitch 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
    color: #00e571;
    z-index: -2;
  {'}'}

  @keyframes glitch {'{'}
    0% {'{'}
      transform: translate(0);
    {'}'}

    20% {'{'}
      transform: translate(-3px, 3px);
    {'}'}

    40% {'{'}
      transform: translate(-3px, -3px);
    {'}'}

    60% {'{'}
      transform: translate(3px, 3px);
    {'}'}

    80% {'{'}
      transform: translate(3px, -3px);
    {'}'}

    to {'{'}
      transform: translate(0);
    {'}'}
  {'}'}

  @keyframes shift {'{'}
    0%, 40%, 44%, 58%, 61%, 65%, 69%, 73%, 100% {'{'}
      transform: skewX(0deg);
    {'}'}

    41% {'{'}
      transform: skewX(10deg);
    {'}'}

    42% {'{'}
      transform: skewX(-10deg);
    {'}'}

    59% {'{'}
      transform: skewX(40deg) skewY(10deg);
    {'}'}

    60% {'{'}
      transform: skewX(-40deg) skewY(-10deg);
    {'}'}

    63% {'{'}
      transform: skewX(10deg) skewY(-5deg);
    {'}'}

    70% {'{'}
      transform: skewX(-50deg) skewY(-20deg);
    {'}'}

    71% {'{'}
      transform: skewX(10deg) skewY(-10deg);
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



export default Snippet29; 
