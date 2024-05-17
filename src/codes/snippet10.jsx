import Snippet10css from './snippet10.module.css';


function Snippet10 () {
    return(
    <div className={Snippet10css.codediv}>
        <div className={Snippet10css.code}>
        <button className={Snippet10css.button}>
  <span>PLAY NOW</span>
</button>       </div>
        <div className={Snippet10css.codewraper}>
            <div className={Snippet10css.html}>
            <div className={Snippet10css.codeeditor}>
      <div className={Snippet10css.header}>
        <span className={Snippet10css.title}>HTML</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet10css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet10css.editorcontent}>
        <code className={Snippet10css.code}>
           
        &lt;button&gt;{'\n'}
                &nbsp;&nbsp;&lt;span&gt;PLAY NOW&lt;/span&gt;{'\n'}
                &lt;/button&gt;
      
        </code>
      </div>
    </div>
            </div>
            <div className={Snippet10css.css}>
            <div className={Snippet10css.codeeditor}>
      <div className={Snippet10css.header}>
        <span className={Snippet10css.title}>CSS</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet10css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet10css.editorcontent}>
        <code className={Snippet10css.code}>
           
        button {'{'}
                  border: none;{'\n'}
                  position: relative;{'\n'}
                  width: 200px;{'\n'}
                  height: 73px;{'\n'}
                  padding: 0;{'\n'}
                  z-index: 2;{'\n'}
                  -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='868' width='2500' viewBox='0 0 726 252.17'%3E%3Cpath d='M483.92 0S481.38 24.71 466 40.11c-11.74 11.74-24.09 12.66-40.26 15.07-9.42 1.41-29.7 3.77-34.81-.79-2.37-2.11-3-21-3.22-27.62-.21-6.92-1.36-16.52-2.82-18-.75 3.06-2.49 11.53-3.09 13.61S378.49 34.3 378 36a85.13 85.13 0 0 0-30.09 0c-.46-1.67-3.17-11.48-3.77-13.56s-2.34-10.55-3.09-13.61c-1.45 1.45-2.61 11.05-2.82 18-.21 6.67-.84 25.51-3.22 27.62-5.11 4.56-25.38 2.2-34.8.79-16.16-2.47-28.51-3.39-40.21-15.13C244.57 24.71 242 0 242 0H0s69.52 22.74 97.52 68.59c16.56 27.11 14.14 58.49 9.92 74.73C170 140 221.46 140 273 158.57c69.23 24.93 83.2 76.19 90 93.6 6.77-17.41 20.75-68.67 90-93.6 51.54-18.56 103-18.59 165.56-15.25-4.21-16.24-6.63-47.62 9.93-74.73C656.43 22.74 726 0 726 0z'/%3E%3C/svg%3E") no-repeat 50% 50%;{'\n'}
                  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='868' width='2500' viewBox='0 0 726 252.17'%3E%3Cpath d='M483.92 0S481.38 24.71 466 40.11c-11.74 11.74-24.09 12.66-40.26 15.07-9.42 1.41-29.7 3.77-34.81-.79-2.37-2.11-3-21-3.22-27.62-.21-6.92-1.36-16.52-2.82-18-.75 3.06-2.49 11.53-3.09 13.61S378.49 34.3 378 36a85.13 85.13 0 0 0-30.09 0c-.46-1.67-3.17-11.48-3.77-13.56s-2.34-10.55-3.09-13.61c-1.45 1.45-2.61 11.05-2.82 18-.21 6.67-.84 25.51-3.22 27.62-5.11 4.56-25.38 2.2-34.8.79-16.16-2.47-28.51-3.39-40.21-15.13C244.57 24.71 242 0 242 0H0s69.52 22.74 97.52 68.59c16.56 27.11 14.14 58.49 9.92 74.73C170 140 221.46 140 273 158.57c69.23 24.93 83.2 76.19 90 93.6 6.77-17.41 20.75-68.67 90-93.6 51.54-18.56 103-18.59 165.56-15.25-4.21-16.24-6.63-47.62 9.93-74.73C656.43 22.74 726 0 726 0z'/%3E%3C/svg%3E") no-repeat 50% 50%;{'\n'}
                  -webkit-mask-size: 100%;{'\n'}
                  cursor: pointer;{'\n'}
                  background-color: transparent;{'\n'}
                  transform: translateY(8px){'\n'}
                {'}'}{'\n'}
                button:after {'{'}
                  content: '';{'\n'}
                  position: absolute;{'\n'}
                  left: 0;{'\n'}
                  right: 0;{'\n'}
                  bottom: 0;{'\n'}
                  box-shadow: 0px 0 0 0 white;{'\n'}
                  transition: all 2s ease;{'\n'}
                {'}'}{'\n'}
                button:hover:after {'{'}
                  box-shadow: 0px -13px 56px 12px #ffffffa6;{'\n'}
                {'}'}{'\n'}
                button span {'{'}
                  position: absolute;{'\n'}
                  width: 100%;{'\n'}
                  font-size: 15px;{'\n'}
                  font-weight: 100;{'\n'}
                  left: 50%;{'\n'}
                  top: 39%;{'\n'}
                  letter-spacing: 3px;{'\n'}
                  text-align: center;{'\n'}
                  transform: translate(-50%,-50%);{'\n'}
                  color: black;{'\n'}
                  transition: all 2s ease;{'\n'}
                {'}'}{'\n'}
                button:hover span {'{'}
                  color: white;{'\n'}
                {'}'}{'\n'}
                button:before {'{'}
                  content: '';{'\n'}
                  position: absolute;{'\n'}
                  width: 0;{'\n'}
                  height: 100%;{'\n'}
                  background-color: black;{'\n'}
                  left: 50%;{'\n'}
                  top: 50%;{'\n'}
                  transform: translate(-50%, -50%);{'\n'}
                  transition: all 1s ease;{'\n'}
                {'}'}{'\n'}
                button:hover:before {'{'}
                  width: 100%;{'\n'}
                {'}'}
        </code>
      </div>
    </div>  
            </div>
        </div>
    </div>
    )
}



export default Snippet10; 
