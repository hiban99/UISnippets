import Snippet27css from './snippet27.module.css';


function Snippet27 () {
    return(
    <div className={Snippet27css.codediv}>
        <div className={Snippet27css.code}>
        <div className={Snippet27css.loading}>
  <svg width="64px" height="48px">
      <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id={Snippet27css.back}></polyline>
    <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id={Snippet27css.front}></polyline>
  </svg>
</div>
        </div>
        <div className={Snippet27css.codewraper}>
            <div className={Snippet27css.html}>
            <div className={Snippet27css.codeeditor}>
      <div className={Snippet27css.header}>
        <span className={Snippet27css.title}>HTML</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet27css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet27css.editorcontent}>
        <code className={Snippet27css.code}>
           
        <pre>

  &lt;div class="loading"&gt;
    &lt;svg width="64px" height="48px"&gt;
        &lt;polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"&gt;&lt;/polyline&gt;
      &lt;polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"&gt;&lt;/polyline&gt;
    &lt;/svg&gt;
  &lt;/div&gt;

</pre>

      
        </code>
      </div>
    </div>
            </div>
            <div className={Snippet27css.css}>
            <div className={Snippet27css.codeeditor}>
      <div className={Snippet27css.header}>
        <span className={Snippet27css.title}>CSS</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet27css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet27css.editorcontent}>
        <code className={Snippet27css.code}>
           
        <pre>

.loading svg polyline {'{'}
  fill: none;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
{'}'}

.loading svg polyline#back {'{'}
  fill: none;
  stroke: #ff4d5033;
{'}'}

.loading svg polyline#front {'{'}
  fill: none;
  stroke: #ff4d4f;
  stroke-dasharray: 48, 144;
  stroke-dashoffset: 192;
  animation: dash_682 1.4s linear infinite;
{'}'}

@keyframes dash_682 {'{'}
  72.5% {'{'}
    opacity: 0;
  {'}'}

  to {'{'}
    stroke-dashoffset: 0;
  {'}'}
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



export default Snippet27; 
