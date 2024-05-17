import Snippet12css from './snippet12.module.css';


function Snippet12 () {
    return(
    <div className={Snippet12css.codediv}>
        <div className={Snippet12css.code}>
        <button className={Snippet12css.button}>
  GLITCH
</button>        </div>
        <div className={Snippet12css.codewraper}>
            <div className={Snippet12css.html}>
            <div className={Snippet12css.codeeditor}>
      <div className={Snippet12css.header}>
        <span className={Snippet12css.title}>HTML</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet12css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet12css.editorcontent}>
        <code className={Snippet12css.code}>
           
        &lt;button&gt;{'\n'}
                &nbsp;&nbsp;GLITCH{'\n'}
                &lt;/button&gt;
      
        </code>
      </div>
    </div>
            </div>
            <div className={Snippet12css.css}>
            <div className={Snippet12css.codeeditor}>
      <div className={Snippet12css.header}>
        <span className={Snippet12css.title}>CSS</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet12css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet12css.editorcontent}>
        <code className={Snippet12css.code}>
           
        button, button::after {'{'}
                  padding: 10px 50px;{'\n'}
                  font-size: 20px;{'\n'}
                  border: none;{'\n'}
                  border-radius: 5px;{'\n'}
                  color: white;{'\n'}
                  background-color: transparent;{'\n'}
                  position: relative;{'\n'}
                {'}'}{'\n'}
                button::after {'{'}
                  --move1: inset(50% 50% 50% 50%);{'\n'}
                  --move2: inset(31% 0 40% 0);{'\n'}
                  --move3: inset(39% 0 15% 0);{'\n'}
                  --move4: inset(45% 0 40% 0);{'\n'}
                  --move5: inset(45% 0 6% 0);{'\n'}
                  --move6: inset(14% 0 61% 0);{'\n'}
                  clip-path: var(--move1);{'\n'}
                  content: 'GLITCH';{'\n'}
                  position: absolute;{'\n'}
                  top: 0;{'\n'}
                  left: 0;{'\n'}
                  right: 0;{'\n'}
                  bottom: 0;{'\n'}
                  display: block;{'\n'}
                {'}'}{'\n'}
                button:hover::after {'{'}
                  animation: glitch_4011 1s;{'\n'}
                  text-shadow: 10 10px 10px black;{'\n'}
                  animation-timing-function: steps(2, end);{'\n'}
                  text-shadow: -3px -3px 0px #1df2f0, 3px 3px 0px #E94BE8;{'\n'}
                  background-color: transparent;{'\n'}
                  border: 3px solid rgb(0, 255, 213);{'\n'}
                {'}'}{'\n'}
                button:hover {'{'}
                  text-shadow: -1px -1px 0px #1df2f0, 1px 1px 0px #E94BE8;{'\n'}
                  background-color: transparent;{'\n'}
                  border: 1px solid rgb(0, 255, 213);{'\n'}
                  box-shadow: 0px 10px 10px -10px rgb(0, 255, 213);{'\n'}
                {'}'}{'\n'}
                @keyframes glitch_4011 {'{'}
                  0% {'{'}
                    clip-path: var(--move1);{'\n'}
                    transform: translate(0px,-10px);{'\n'}
                  {'}'}{'\n'}
                  10% {'{'}
                    clip-path: var(--move2);{'\n'}
                    transform: translate(-10px,10px);{'\n'}
                  {'}'}{'\n'}
                  20% {'{'}
                    clip-path: var(--move3);{'\n'}
                    transform: translate(10px,0px);{'\n'}
                  {'}'}{'\n'}
                  30% {'{'}
                    clip-path: var(--move4);{'\n'}
                    transform: translate(-10px,10px);{'\n'}
                  {'}'}{'\n'}
                  40% {'{'}
                    clip-path: var(--move5);{'\n'}
                    transform: translate(10px,-10px);{'\n'}
                  {'}'}{'\n'}
                  50% {'{'}
                    clip-path: var(--move6);{'\n'}
                    transform: translate(-10px,10px);{'\n'}
                  {'}'}{'\n'}
                  60% {'{'}
                    clip-path: var(--move1);{'\n'}
                    transform: translate(10px,-10px);{'\n'}
                  {'}'}{'\n'}
                  70% {'{'}
                    clip-path: var(--move3);{'\n'}
                    transform: translate(-10px,10px);{'\n'}
                  {'}'}{'\n'}
                  80% {'{'}
                    clip-path: var(--move2);{'\n'}
                    transform: translate(10px,-10px);{'\n'}
                  {'}'}{'\n'}
                  90% {'{'}
                    clip-path: var(--move4);{'\n'}
                    transform: translate(-10px,10px);{'\n'}
                  {'}'}{'\n'}
                  100% {'{'}
                    clip-path: var(--move1);{'\n'}
                    transform: translate(0);{'\n'}
                  {'}'}{'\n'}
                {'}'}
        </code>
      </div>
    </div>  
            </div>
        </div>
    </div>
    )
}



export default Snippet12; 
