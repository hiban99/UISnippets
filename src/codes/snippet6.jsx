import Snippet6css from './snippet6.module.css';


function Snippet6 () {
    return(
    <div className={Snippet6css.codediv}>
        <div className={Snippet6css.code}>
        <button className={Snippet6css.btn} type="button">
  <strong>SPACE</strong>
  <div id={Snippet6css.containerstars}>
    <div id={Snippet6css.stars}></div>
  </div>

  <div id={Snippet6css.glow}>
    <div className={Snippet6css.circle}></div>
    <div className={Snippet6css.circle}></div>
  </div>
</button>

        </div>
        <div className={Snippet6css.codewraper}>
            <div className={Snippet6css.html}>
            <div className={Snippet6css.codeeditor}>
      <div className={Snippet6css.header}>
        <span className={Snippet6css.title}>HTML</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet6css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet6css.editorcontent}>
        <code className={Snippet6css.code}>
        &lt;button class="btn" type="button"&gt;{'\n'}
                &nbsp;&nbsp;&lt;strong&gt;SPACE&lt;/strong&gt;{'\n'}
                &nbsp;&nbsp;&lt;div id="containerstars"&gt;{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;div id="stars"&gt;&lt;/div&gt;{'\n'}
                &nbsp;&nbsp;&lt;/div&gt;{'\n'}
                &nbsp;&nbsp;&lt;div id="glow"&gt;{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="circle"&gt;&lt;/div&gt;{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class=circle&gt;&lt;/div&gt;{'\n'}
                &nbsp;&nbsp;&lt;/div&gt;{'\n'}
                &lt;/button&gt;
      
        </code>
      </div>
    </div>
            </div>
            <div className={Snippet6css.css}>
            <div className={Snippet6css.codeeditor}>
      <div className={Snippet6css.header}>
        <span className={Snippet6css.title}>CSS</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet6css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet6css.editorcontent}>
        <code className={Snippet6css.code}>
           
        .btn {'{'}
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  width: 13rem;
                  overflow: hidden;
                  height: 3rem;
                  background-size: 300% 300%;
                  backdrop-filter: blur(1rem);
                  border-radius: 5rem;
                  transition: 0.5s;
                  animation: gradient_301 5s ease infinite;
                  border: double 4px transparent;
                  background-image: linear-gradient(#212121, #212121), linear-gradient(137.48deg, #ffdb3b 10%, #FE53BB 45%, #8F51EA 67%, #0044ff 87%);
                  background-origin: border-box;
                  background-clip: content-box, border-box;
                {'}'}

                #container-stars {'{'}
                  position: absolute;
                  z-index: -1;
                  width: 100%;
                  height: 100%;
                  overflow: hidden;
                  transition: 0.5s;
                  backdrop-filter: blur(1rem);
                  border-radius: 5rem;
                {'}'}

                strong {'{'}
                  z-index: 2;
                  font-family: 'Avalors Personal Use';
                  font-size: 12px;
                  letter-spacing: 5px;
                  color: #FFFFFF;
                  text-shadow: 0 0 4px white;
                {'}'}

                #glow {'{'}
                  position: absolute;
                  display: flex;
                  width: 12rem;
                {'}'}

                .circle {'{'}
                  width: 100%;
                  height: 30px;
                  filter: blur(2rem);
                  animation: pulse_3011 4s infinite;
                  z-index: -1;
                {'}'}

                .circle:nth-of-type(1) {'{'}
                  background: rgba(254, 83, 186, 0.636);
                {'}'}

                .circle:nth-of-type(2) {'{'}
                  background: rgba(142, 81, 234, 0.704);
                {'}'}

                .btn:hover #container-stars {'{'}
                  z-index: 1;
                  background-color: #212121;
                {'}'}

                .btn:hover {'{'}
                  transform: scale(1.1)
                {'}'}

                .btn:active {'{'}
                  border: double 4px #FE53BB;
                  background-origin: border-box;
                  background-clip: content-box, border-box;
                  animation: none;
                {'}'}

                .btn:active .circle {'{'}
                  background: #FE53BB;
                {'}'}

                #stars {'{'}
                  position: relative;
                  background: transparent;
                  width: 200rem;
                  height: 200rem;
                {'}'}

                #stars::after {'{'}
                  content: "";
                  position: absolute;
                  top: -10rem;
                  left: -100rem;
                  width: 100%;
                  height: 100%;
                  animation: animStarRotate 90s linear infinite;
                {'}'}

                #stars::after {'{'}
                  background-image: radial-gradient(#ffffff 1px, transparent 1%);
                  background-size: 50px 50px;
                {'}'}

                #stars::before {'{'}
                  content: "";
                  position: absolute;
                  top: 0;
                  left: -50%;
                  width: 170%;
                  height: 500%;
                  animation: animStar 60s linear infinite;
                {'}'}

                #stars::before {'{'}
                  background-image: radial-gradient(#ffffff 1px, transparent 1%);
                  background-size: 50px 50px;
                  opacity: 0.5;
                {'}'}

                @keyframes animStar {'{'}
                  from {'{'}
                    transform: translateY(0);
                  {'}'}

                  to {'{'}
                    transform: translateY(-135rem);
                  {'}'}
                {'}'}

                @keyframes animStarRotate {'{'}
                  from {'{'}
                    transform: rotate(360deg);
                  {'}'}

                  to {'{'}
                    transform: rotate(0);
                  {'}'}
                {'}'}

                @keyframes gradient_301 {'{'}
                  0% {'{'}
                    background-position: 0% 50%;
                  {'}'}

                  50% {'{'}
                    background-position: 100% 50%;
                  {'}'}

                  100% {'{'}
                    background-position: 0% 50%;
                  {'}'}
                {'}'}

                @keyframes pulse_3011 {'{'}
                  0% {'{'}
                    transform: scale(0.75);
                    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
                  {'}'}

                  70% {'{'}
                    transform: scale(1);
                    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
                  {'}'}

                  100% {'{'}
                    transform: scale(0.75);
                    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
                  {'}'}
                {'}'}
        </code>
      </div>
    </div>  
            </div>
        </div>
    </div>
    )
}



export default Snippet6; 
