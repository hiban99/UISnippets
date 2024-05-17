import Snippet17css from './snippet17.module.css';


function Snippet17 () {
    return(
    <div className={Snippet17css.codediv}>
        <div className={Snippet17css.code}>
        <div className={Snippet17css.card}>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
  <div className={Snippet17css.cardcontent}>
    <p className={Snippet17css.cardtitle}>Card Title
    </p><p className={Snippet17css.carddescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>

        </div>
        <div className={Snippet17css.codewraper}>
            <div className={Snippet17css.html}>
            <div className={Snippet17css.codeeditor}>
      <div className={Snippet17css.header}>
        <span className={Snippet17css.title}>HTML</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet17css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet17css.editorcontent}>
        <code className={Snippet17css.code}>
           
        <pre>

  &lt;div class="card"&gt;
    &lt;svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"&gt;&lt;path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"&gt;&lt;/path&gt;&lt;/svg&gt;
    &lt;div class="card__content"&gt;
      &lt;p class="card__title"&gt;Card Title
      &lt;/p&gt;&lt;p class="card__description"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
      &lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;

</pre>

      
        </code>
      </div>
    </div>
            </div>
            <div className={Snippet17css.css}>
            <div className={Snippet17css.codeeditor}>
      <div className={Snippet17css.header}>
        <span className={Snippet17css.title}>CSS</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet17css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet17css.editorcontent}>
        <code className={Snippet17css.code}>
           
        <pre>

.card {'{'}
  position: relative;
  width: 300px;
  height: 200px;
  background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100% );
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
{'}'}

.card svg {'{'}
  width: 48px;
  fill: #333;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
{'}'}

.card:hover {'{'}
  transform: rotate(-5deg) scale(1.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
{'}'}

.card__content {'{'}
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #fff;
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
{'}'}

.card:hover .card__content {'{'}
  transform: translate(-50%, -50%) rotate(0deg);
  opacity: 1;
{'}'}

.card__title {'{'}
  margin: 0;
  font-size: 24px;
  color: #333;
  font-weight: 700;
{'}'}

.card__description {'{'}
  margin: 10px 0 0;
  font-size: 14px;
  color: #777;
  line-height: 1.4;
{'}'}

.card:hover svg {'{'}
  scale: 0;
  transform: rotate(-45deg);
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



export default Snippet17; 
