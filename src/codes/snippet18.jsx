import Snippet18css from './snippet18.module.css';


function Snippet18 () {
    return(
    <div className={Snippet18css.codediv}>
        <div className={Snippet18css.code}>
        <div className={Snippet18css.card}>
  <div className={Snippet18css.card2}>
  </div>
</div>
        </div>
        <div className={Snippet18css.codewraper}>
            <div className={Snippet18css.html}>
            <div className={Snippet18css.codeeditor}>
      <div className={Snippet18css.header}>
        <span className={Snippet18css.title}>HTML</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet18css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet18css.editorcontent}>
        <code className={Snippet18css.code}>
           
        <pre>

  &lt;div class="card"&gt;
    &lt;div class="card2"&gt;
    &lt;/div&gt;
  &lt;/div&gt;

</pre>

      
        </code>
      </div>
    </div>
            </div>
            <div className={Snippet18css.css}>
            <div className={Snippet18css.codeeditor}>
      <div className={Snippet18css.header}>
        <span className={Snippet18css.title}>CSS</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet18css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet18css.editorcontent}>
        <code className={Snippet18css.code}>
           
        <pre>

.card {'{'}
  width: 190px;
  height: 254px;
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  border-radius: 20px;
  transition: all .3s;
{'}'}

.card2 {'{'}
  width: 190px;
  height: 254px;
  background-color: #1a1a1a;
  transition: all .2s;
{'}'}

.card2:hover {'{'}
  transform: scale(0.98);
  border-radius: 20px;
{'}'}

.card:hover {'{'}
  box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
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



export default Snippet18; 
