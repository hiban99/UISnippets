import Snippet28css from './snippet28.module.css';


function Snippet28 () {
    return(
    <div className={Snippet28css.codediv}>
        <div className={Snippet28css.code}>
        <div className={Snippet28css.boxes}>
    <div className={Snippet28css.box}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div className={Snippet28css.box}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div className={Snippet28css.box}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div className={Snippet28css.box}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>
        </div>
        <div className={Snippet28css.codewraper}>
            <div className={Snippet28css.html}>
            <div className={Snippet28css.codeeditor}>
      <div className={Snippet28css.header}>
        <span className={Snippet28css.title}>HTML</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet28css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet28css.editorcontent}>
        <code className={Snippet28css.code}>
           
        
&lt;div class="boxes"&gt;
    &lt;div class="box"&gt;
        &lt;div&gt;&lt;/div&gt;
        &lt;div&gt;&lt;/div&gt;
        &lt;div&gt;&lt;/div&gt;
        &lt;div&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="box"&gt;
        &lt;div&gt;&lt;/div&gt;
        &lt;div&gt;&lt;/div&gt;
        &lt;div&gt;&lt;/div&gt;
        &lt;div&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="box"&gt;
        &lt;div&gt;&lt;/div&gt;
        &lt;div&gt;&lt;/div&gt;
        &lt;div&gt;&lt;/div&gt;
        &lt;div&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="box"&gt;
        &lt;div&gt;&lt;/div&gt;
        &lt;div&gt;&lt;/div&gt;
        &lt;div&gt;&lt;/div&gt;
        &lt;div&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;


      
        </code>
      </div>
    </div>
            </div>
            <div className={Snippet28css.css}>
            <div className={Snippet28css.codeeditor}>
      <div className={Snippet28css.header}>
        <span className={Snippet28css.title}>CSS</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet28css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet28css.editorcontent}>
        <code className={Snippet28css.code}>
           
       
.boxes {'{'}
  --size: 32px;
  --duration: 800ms;
  height: calc(var(--size) * 2);
  width: calc(var(--size) * 3);
  position: relative;
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
  margin-top: calc(var(--size) * 1.5 * -1);
  transform: rotateX(60deg) rotateZ(45deg) rotateY(0deg) translateZ(0px);
{'}'}

.boxes .box {'{'}
  width: var(--size);
  height: var(--size);
  top: 0;
  left: 0;
  position: absolute;
  transform-style: preserve-3d;
{'}'}

.boxes .box:nth-child(1) {'{'}
  transform: translate(100%, 0);
  -webkit-animation: box1 var(--duration) linear infinite;
  animation: box1 var(--duration) linear infinite;
{'}'}

.boxes .box:nth-child(2) {'{'}
  transform: translate(0, 100%);
  -webkit-animation: box2 var(--duration) linear infinite;
  animation: box2 var(--duration) linear infinite;
{'}'}

.boxes .box:nth-child(3) {'{'}
  transform: translate(100%, 100%);
  -webkit-animation: box3 var(--duration) linear infinite;
  animation: box3 var(--duration) linear infinite;
{'}'}

.boxes .box:nth-child(4) {'{'}
  transform: translate(200%, 0);
  -webkit-animation: box4 var(--duration) linear infinite;
  animation: box4 var(--duration) linear infinite;
{'}'}

.boxes .box &gt; div {'{'}
  --background: #5C8DF6;
  --top: auto;
  --right: auto;
  --bottom: auto;
  --left: auto;
  --translateZ: calc(var(--size) / 2);
  --rotateY: 0deg;
  --rotateX: 0deg;
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--background);
  top: var(--top);
  right: var(--right);
  bottom: var(--bottom);
  left: var(--left);
  transform: rotateY(var(--rotateY)) rotateX(var(--rotateX)) translateZ(var(--translateZ));
{'}'}

.boxes .box &gt; div:nth-child(1) {'{'}
  --top: 0;
  --left: 0;
{'}'}

.boxes .box &gt; div:nth-child(2) {'{'}
  --background: #145af2;
  --right: 0;
  --rotateY: 90deg;
{'}'}

.boxes .box &gt; div:nth-child(3) {'{'}
  --background: #447cf5;
  --rotateX: -90deg;
{'}'}

.boxes .box &gt; div:nth-child(4) {'{'}
  --background: #DBE3F4;
  --top: 0;
  --left: 0;
  --translateZ: calc(var(--size) * 3 * -1);
{'}'}

@-webkit-keyframes box1 {'{'}
  0%, 50% {'{'} transform: translate(100%, 0); {'}'}
  100% {'{'} transform: translate(200%, 0); {'}'}
{'}'}

@keyframes box1 {'{'}
  0%, 50% {'{'} transform: translate(100%, 0); {'}'}
  100% {'{'} transform: translate(200%, 0); {'}'}
{'}'}

@-webkit-keyframes box2 {'{'}
  0% {'{'} transform: translate(0, 100%); {'}'}
  50% {'{'} transform: translate(0, 0); {'}'}
  100% {'{'} transform: translate(100%, 0); {'}'}
{'}'}

@keyframes box2 {'{'}
  0% {'{'} transform: translate(0, 100%); {'}'}
  50% {'{'} transform: translate(0, 0); {'}'}
  100% {'{'} transform: translate(100%, 0); {'}'}
{'}'}

@-webkit-keyframes box3 {'{'}
  0%, 50% {'{'} transform: translate(100%, 100%); {'}'}
  100% {'{'} transform: translate(0, 100%); {'}'}
{'}'}

@keyframes box3 {'{'}
  0%, 50% {'{'} transform: translate(100%, 100%); {'}'}
  100% {'{'} transform: translate(0, 100%); {'}'}
{'}'}

@-webkit-keyframes box4 {'{'}
  0% {'{'} transform: translate(200%, 0); {'}'}
  50% {'{'} transform: translate(200%, 100%); {'}'}
  100% {'{'} transform: translate(100%, 100%); {'}'}
{'}'}

@keyframes box4 {'{'}
  0% {'{'} transform: translate(200%, 0); {'}'}
  50% {'{'} transform: translate(200%, 100%); {'}'}
  100% {'{'} transform: translate(100%, 100%); {'}'}
{'}'}


        </code>
      </div>
    </div>  
            </div>
        </div>
    </div>
    )
}



export default Snippet28; 
