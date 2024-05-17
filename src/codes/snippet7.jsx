import Snippet7css from './snippet7.module.css';


function Snippet7 () {
    return(
    <div className={Snippet7css.codediv}>
        <div className={Snippet7css.code}>
        <div className={Snippet7css.button}>
    <div className={Snippet7css.box}>H</div>
    <div className={Snippet7css.box}>O</div>
    <div className={Snippet7css.box}>V</div>
    <div className={Snippet7css.box}>E</div>
    <div className={Snippet7css.box}>R</div>
</div>
        </div>
        <div className={Snippet7css.codewraper}>
            <div className={Snippet7css.html}>
            <div className={Snippet7css.codeeditor}>
      <div className={Snippet7css.header}>
        <span className={Snippet7css.title}>HTML</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet7css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet7css.editorcontent}>
        <code className={Snippet7css.code}>
           
        &lt;div class="button"&gt;{'\n'}
                &nbsp;&nbsp;&lt;div class="box"&gt;H&lt;/div&gt;{'\n'}
                &nbsp;&nbsp;&lt;div class="box"&gt;O&lt;/div&gt;{'\n'}
                &nbsp;&nbsp;&lt;div class="box"&gt;V&lt;/div&gt;{'\n'}
                &nbsp;&nbsp;&lt;div class="box"&gt;E&lt;/div&gt;{'\n'}
                &nbsp;&nbsp;&lt;div class="box"&gt;R&lt;/div&gt;{'\n'}
                &lt;/div&gt;
      
        </code>
      </div>
    </div>
            </div>
            <div className={Snippet7css.css}>
            <div className={Snippet7css.codeeditor}>
      <div className={Snippet7css.header}>
        <span className={Snippet7css.title}>CSS</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet7css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet7css.editorcontent}>
        <code className={Snippet7css.code}>
           
        .button {'{'}
                  display: flex;
                {'}'}

                .box {'{'}
                  width: 35px;
                  height: 40px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  font-size: 15px;
                  font-weight: 700;
                  color: #fff;
                  transition: all .8s;
                  cursor: pointer;
                  position: relative;
                  background: rgb(58, 165, 253);
                  overflow: hidden;
                {'}'}

                .box:before {'{'}
                  content: "W";
                  position: absolute;
                  top: 0;
                  background: #0f0f0f;
                  width: 100%;
                  height: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  transform: translateY(100%);
                  transition: transform .4s;
                {'}'}

                .box:nth-child(2)::before {'{'}
                  transform: translateY(-100%);
                  content: 'O';
                {'}'}

                .box:nth-child(3)::before {'{'}
                  content: 'R';
                {'}'}

                .box:nth-child(4)::before {'{'}
                  transform: translateY(-100%);
                  content: 'L';
                {'}'}

                .box:nth-child(5)::before {'{'}
                  content: 'D';
                {'}'}

                .button:hover .box:before {'{'}
                  transform: translateY(0);
                {'}'}
        </code>
      </div>
    </div>  
            </div>
        </div>
    </div>
    )
}



export default Snippet7; 
