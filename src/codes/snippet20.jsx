import Snippet20css from './snippet20.module.css';


function Snippet20 () {
    return(
    <div className={Snippet20css.codediv}>
        <div className={Snippet20css.code}>
        <div className={Snippet20css.card}>
    <p><span>HOVER ME</span></p>
    <p><span>HOVER ME</span></p>
    <p><span>HOVER ME</span></p>
</div>
        </div>
        <div className={Snippet20css.codewraper}>
            <div className={Snippet20css.html}>
            <div className={Snippet20css.codeeditor}>
      <div className={Snippet20css.header}>
        <span className={Snippet20css.title}>HTML</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet20css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet20css.editorcontent}>

           
<pre>

  &lt;div class="card"&gt;
    &lt;p&gt;&lt;span&gt;HOVER ME&lt;/span&gt;&lt;/p&gt;
    &lt;p&gt;&lt;span&gt;HOVER ME&lt;/span&gt;&lt;/p&gt;
    &lt;p&gt;&lt;span&gt;HOVER ME&lt;/span&gt;&lt;/p&gt;
  &lt;/div&gt;

</pre>
      

      </div>
    </div>
            </div>
            <div className={Snippet20css.css}>
            <div className={Snippet20css.codeeditor}>
      <div className={Snippet20css.header}>
        <span className={Snippet20css.title}>CSS</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet20css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet20css.editorcontent}>
      <pre>

.card {'{'}
  width: 210px;
  height: 254px;
  border-radius: 4px;
  background: #212121;
  display: flex;
  gap: 5px;
  padding: .4em;
{'}'}

.card p {'{'}
  height: 100%;
  flex: 1;
  overflow: hidden;
  cursor: pointer;
  border-radius: 2px;
  transition: all .5s;
  background: #212121;
  border: 1px solid #ff5a91;
  display: flex;
  justify-content: center;
  align-items: center;
{'}'}

.card p:hover {'{'}
  flex: 4;
{'}'}

.card p span {'{'}
  min-width: 14em;
  padding: .5em;
  text-align: center;
  transform: rotate(-90deg);
  transition: all .5s;
  text-transform: uppercase;
  color: #ff568e;
  letter-spacing: .1em;
{'}'}

.card p:hover span {'{'}
  transform: rotate(0);
{'}'}

</pre>

      </div>
    </div>  
            </div>
        </div>
    </div>
    )
}



export default Snippet20; 
