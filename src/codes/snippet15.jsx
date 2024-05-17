import Snippet15css from './snippet15.module.css';


function Snippet15 () {
    return(
    <div className={Snippet15css.codediv}>
        <div className={Snippet15css.code}>
        <div className={Snippet15css.card}>
  <div className={Snippet15css.cardinfo}>
    <p className={Snippet15css.title}>Magic Card</p>
  </div>
</div>
        </div>
        <div className={Snippet15css.codewraper}>
            <div className={Snippet15css.html}>
            <div className={Snippet15css.codeeditor}>
      <div className={Snippet15css.header}>
        <span className={Snippet15css.title}>HTML</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet15css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet15css.editorcontent}>
        <code className={Snippet15css.code}>
           
        <pre>
  &lt;div class="card"&gt;
    &lt;div class="card-info"&gt;
      &lt;p class="title"&gt;Magic Card&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
</pre>

        </code>
      </div>
    </div>
            </div>
            <div className={Snippet15css.css}>
            <div className={Snippet15css.codeeditor}>
      <div className={Snippet15css.header}>
        <span className={Snippet15css.title}>CSS</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet15css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet15css.editorcontent}>
        <code className={Snippet15css.code}>
           
        .card {'{'}
  --background: linear-gradient(to left, #f7ba2b 0%, #ea5358 100%);
  width: 190px;
  height: 254px;
  padding: 5px;
  border-radius: 1rem;
  overflow: visible;
  background: #f7ba2b;
  background: var(--background);
  position: relative;
  z-index: 1;
{'}'}

.card::after {'{'}
  position: absolute;
  content: "";
  top: 30px;
  left: 0;
  right: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  transform: scale(0.8);
  filter: blur(25px);
  background: #f7ba2b;
  background: var(--background);
  transition: opacity .5s;
{'}'}

.card-info {'{'}
  --color: #181818;
  background: var(--color);
  color: var(--color);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: visible;
  border-radius: .7rem;
{'}'}

.card .title {'{'}
  font-weight: bold;
  letter-spacing: .1em;
{'}'}

/*Hover*/
.card:hover::after {'{'}
  opacity: 0;
{'}'}

.card:hover .card-info {'{'}
  color: #f7ba2b;
  transition: color 1s;
{'}'}

        </code>
      </div>
    </div>  
            </div>
        </div>
    </div>
    )
}



export default Snippet15; 
