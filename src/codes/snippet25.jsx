import Snippet25css from './snippet25.module.css';


function Snippet25 () {
    return(
    <div className={Snippet25css.codediv}>
        <div className={Snippet25css.code}>
        <div className={Snippet25css.loader}>
    <div className={Snippet25css.bar1}></div>
    <div className={Snippet25css.bar2}></div>
    <div className={Snippet25css.bar3}></div>
    <div className={Snippet25css.bar4}></div>
    <div className={Snippet25css.bar5}></div>
    <div className={Snippet25css.bar6}></div>
    <div className={Snippet25css.bar7}></div>
    <div className={Snippet25css.bar8}></div>
    <div className={Snippet25css.bar9}></div>
    <div className={Snippet25css.bar10}></div>
    <div className={Snippet25css.bar11}></div>
    <div className={Snippet25css.bar12}></div>
</div>
        </div>
        <div className={Snippet25css.codewraper}>
            <div className={Snippet25css.html}>
            <div className={Snippet25css.codeeditor}>
      <div className={Snippet25css.header}>
        <span className={Snippet25css.title}>HTML</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet25css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet25css.editorcontent}>
        <code className={Snippet25css.code}>
           
        <pre>

  &lt;div class="loader"&gt;
    &lt;div class="bar1"&gt;&lt;/div&gt;
    &lt;div class="bar2"&gt;&lt;/div&gt;
    &lt;div class="bar3"&gt;&lt;/div&gt;
    &lt;div class="bar4"&gt;&lt;/div&gt;
    &lt;div class="bar5"&gt;&lt;/div&gt;
    &lt;div class="bar6"&gt;&lt;/div&gt;
    &lt;div class="bar7"&gt;&lt;/div&gt;
    &lt;div class="bar8"&gt;&lt;/div&gt;
    &lt;div class="bar9"&gt;&lt;/div&gt;
    &lt;div class="bar10"&gt;&lt;/div&gt;
    &lt;div class="bar11"&gt;&lt;/div&gt;
    &lt;div class="bar12"&gt;&lt;/div&gt;
  &lt;/div&gt;

</pre>

      
        </code>
      </div>
    </div>
            </div>
            <div className={Snippet25css.css}>
            <div className={Snippet25css.codeeditor}>
      <div className={Snippet25css.header}>
        <span className={Snippet25css.title}>CSS</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet25css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet25css.editorcontent}>
        <code className={Snippet25css.code}>
           
        <pre>

  .loader {'{'}
    position: relative;
    width: 54px;
    height: 54px;
    border-radius: 10px;
  {'}'}

  .loader div {'{'}
    width: 8%;
    height: 24%;
    background: rgb(128, 128, 128);
    position: absolute;
    left: 50%;
    top: 30%;
    opacity: 0;
    border-radius: 50px;
    box-shadow: 0 0 3px rgba(0,0,0,0.2);
    animation: fade458 1s linear infinite;
  {'}'}

  @keyframes fade458 {'{'}
    from {'{'}
      opacity: 1;
    {'}'}

    to {'{'}
      opacity: 0.25;
    {'}'}
  {'}'}

  .loader .bar1 {'{'}
    transform: rotate(0deg) translate(0, -130%);
    animation-delay: 0s;
  {'}'}

  .loader .bar2 {'{'}
    transform: rotate(30deg) translate(0, -130%);
    animation-delay: -1.1s;
  {'}'}

  .loader .bar3 {'{'}
    transform: rotate(60deg) translate(0, -130%);
    animation-delay: -1s;
  {'}'}

  .loader .bar4 {'{'}
    transform: rotate(90deg) translate(0, -130%);
    animation-delay: -0.9s;
  {'}'}

  .loader .bar5 {'{'}
    transform: rotate(120deg) translate(0, -130%);
    animation-delay: -0.8s;
  {'}'}

  .loader .bar6 {'{'}
    transform: rotate(150deg) translate(0, -130%);
    animation-delay: -0.7s;
  {'}'}

  .loader .bar7 {'{'}
    transform: rotate(180deg) translate(0, -130%);
    animation-delay: -0.6s;
  {'}'}

  .loader .bar8 {'{'}
    transform: rotate(210deg) translate(0, -130%);
    animation-delay: -0.5s;
  {'}'}

  .loader .bar9 {'{'}
    transform: rotate(240deg) translate(0, -130%);
    animation-delay: -0.4s;
  {'}'}

  .loader .bar10 {'{'}
    transform: rotate(270deg) translate(0, -130%);
    animation-delay: -0.3s;
  {'}'}

  .loader .bar11 {'{'}
    transform: rotate(300deg) translate(0, -130%);
    animation-delay: -0.2s;
  {'}'}

  .loader .bar12 {'{'}
    transform: rotate(330deg) translate(0, -130%);
    animation-delay: -0.1s;
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



export default Snippet25; 
