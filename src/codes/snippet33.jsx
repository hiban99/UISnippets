import Snippet33css from './snippet33.module.css';


function Snippet33 () {
    return(
    <div className={Snippet33css.codediv}>
        <div className={Snippet33css.code}>
        <div className={Snippet33css.pyramidloader}>
  <div className={Snippet33css.wrapper}>
    <span className={`${Snippet33css.side} ${Snippet33css.side1}`}></span>
    <span className={`${Snippet33css.side} ${Snippet33css.side2}`}></span>
    <span className={`${Snippet33css.side} ${Snippet33css.side3}`}></span>
    <span className={`${Snippet33css.side} ${Snippet33css.side4}`}></span>
    <span className={Snippet33css.shadow}></span>
  </div>  
</div>        </div>
        <div className={Snippet33css.codewraper}>
            <div className={Snippet33css.html}>
            <div className={Snippet33css.codeeditor}>
      <div className={Snippet33css.header}>
        <span className={Snippet33css.title}>HTML</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet33css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet33css.editorcontent}>
        <code className={Snippet33css.code}>
           
        <pre>

  &lt;div class="pyramid-loader"&gt;
    &lt;div class="wrapper"&gt;
      &lt;span class="side side1"&gt;&lt;/span&gt;
      &lt;span class="side side2"&gt;&lt;/span&gt;
      &lt;span class="side side3"&gt;&lt;/span&gt;
      &lt;span class="side side4"&gt;&lt;/span&gt;
      &lt;span class="shadow"&gt;&lt;/span&gt;
    &lt;/div&gt;  
  &lt;/div&gt;

</pre>

      
        </code>
      </div>
    </div>
            </div>
            <div className={Snippet33css.css}>
            <div className={Snippet33css.codeeditor}>
      <div className={Snippet33css.header}>
        <span className={Snippet33css.title}>CSS</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet33css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet33css.editorcontent}>
        <code className={Snippet33css.code}>
           
        <pre>

  .pyramid-loader {'{'}
    position: relative;
    width: 300px;
    height: 300px;
    display: block;
    transform-style: preserve-3d;
    transform: rotateX(-20deg);
  {'}'}

  .wrapper {'{'}
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation: spin 4s linear infinite;
  {'}'}

  @keyframes spin {'{'}
    100% {'{'}
      transform: rotateY(360deg);
    {'}'}
  {'}'}

  .pyramid-loader .wrapper .side {'{'}
    width: 70px;
    height: 70px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform-origin: center top;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  {'}'}

  .pyramid-loader .wrapper .side1 {'{'}
    transform: rotateZ(-30deg) rotateY(90deg);
    background: conic-gradient( #2BDEAC, #F028FD, #D8CCE6, #2F2585);
  {'}'}

  .pyramid-loader .wrapper .side2 {'{'}
    transform: rotateZ(30deg) rotateY(90deg);
    background: conic-gradient( #2F2585, #D8CCE6, #F028FD, #2BDEAC);
  {'}'}

  .pyramid-loader .wrapper .side3 {'{'}
    transform: rotateX(30deg);
    background: conic-gradient( #2F2585, #D8CCE6, #F028FD, #2BDEAC);
  {'}'}

  .pyramid-loader .wrapper .side4 {'{'}
    transform: rotateX(-30deg);
    background: conic-gradient( #2BDEAC, #F028FD, #D8CCE6, #2F2585);
  {'}'}

  .pyramid-loader .wrapper .shadow {'{'}
    width: 60px;
    height: 60px;
    background: #8B5AD5;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform: rotateX(90deg) translateZ(-40px);
    filter: blur(12px);
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



export default Snippet33; 
