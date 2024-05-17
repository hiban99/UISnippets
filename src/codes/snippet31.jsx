import Snippet31css from './snippet31.module.css';


function Snippet31 () {
    return(
    <div className={Snippet31css.codediv}>
        <div className={Snippet31css.code}>
        <div className={Snippet31css.hourglassBackground}>
      <div className={Snippet31css.hourglassContainer}>
        <div className={Snippet31css.hourglassCurves}></div>
        <div className={Snippet31css.hourglassCapTop}></div>
        <div className={Snippet31css.hourglassGlassTop}></div>
        <div className={Snippet31css.hourglassSand}></div>
        <div className={Snippet31css.hourglassSandStream}></div>
        <div className={Snippet31css.hourglassCapBottom}></div>
        <div className={Snippet31css.hourglassGlass}></div>
      </div>
    </div>        </div>
        <div className={Snippet31css.codewraper}>
            <div className={Snippet31css.html}>
            <div className={Snippet31css.codeeditor}>
      <div className={Snippet31css.header}>
        <span className={Snippet31css.title}>HTML</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet31css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet31css.editorcontent}>
        <code className={Snippet31css.code}>
           
        <pre>

  &lt;div class="hourglassBackground"&gt;
    &lt;div class="hourglassContainer"&gt;
      &lt;div class="hourglassCurves"&gt;&lt;/div&gt;
      &lt;div class="hourglassCapTop"&gt;&lt;/div&gt;
      &lt;div class="hourglassGlassTop"&gt;&lt;/div&gt;
      &lt;div class="hourglassSand"&gt;&lt;/div&gt;
      &lt;div class="hourglassSandStream"&gt;&lt;/div&gt;
      &lt;div class="hourglassCapBottom"&gt;&lt;/div&gt;
      &lt;div class="hourglassGlass"&gt;&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;

</pre>
      
        </code>
      </div>
    </div>
            </div>
            <div className={Snippet31css.css}>
            <div className={Snippet31css.codeeditor}>
      <div className={Snippet31css.header}>
        <span className={Snippet31css.title}>CSS</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={Snippet31css.icon}><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className={Snippet31css.editorcontent}>
        <code className={Snippet31css.code}>
           
        <pre>

  .hourglassBackground {'{'}
    position: relative;
    background-color: rgb(71, 60, 60);
    height: 130px;
    width: 130px;
    border-radius: 50%;
    margin: 30px auto;
  {'}'}

  .hourglassContainer {'{'}
    position: absolute;
    top: 30px;
    left: 40px;
    width: 50px;
    height: 70px;
    -webkit-animation: hourglassRotate 2s ease-in 0s infinite;
    animation: hourglassRotate 2s ease-in 0s infinite;
    transform-style: preserve-3d;
    perspective: 1000px;
  {'}'}

  .hourglassContainer div,
  .hourglassContainer div:before,
  .hourglassContainer div:after {'{'}
    transform-style: preserve-3d;
  {'}'}

  @-webkit-keyframes hourglassRotate {'{'}
    0% {'{'}
      transform: rotateX(0deg);
    {'}'}

    50% {'{'}
      transform: rotateX(180deg);
    {'}'}

    100% {'{'}
      transform: rotateX(180deg);
    {'}'}
  {'}'}

  @keyframes hourglassRotate {'{'}
    0% {'{'}
      transform: rotateX(0deg);
    {'}'}

    50% {'{'}
      transform: rotateX(180deg);
    {'}'}

    100% {'{'}
      transform: rotateX(180deg);
    {'}'}
  {'}'}

  .hourglassCapTop {'{'}
    top: 0;
  {'}'}

  .hourglassCapTop:before {'{'}
    top: -25px;
  {'}'}

  .hourglassCapTop:after {'{'}
    top: -20px;
  {'}'}

  .hourglassCapBottom {'{'}
    bottom: 0;
  {'}'}

  .hourglassCapBottom:before {'{'}
    bottom: -25px;
  {'}'}

  .hourglassCapBottom:after {'{'}
    bottom: -20px;
  {'}'}

  .hourglassGlassTop {'{'}
    transform: rotateX(90deg);
    position: absolute;
    top: -16px;
    left: 3px;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    background-color: #999999;
  {'}'}

  .hourglassGlass {'{'}
    perspective: 100px;
    position: absolute;
    top: 32px;
    left: 20px;
    width: 10px;
    height: 6px;
    background-color: #999999;
    opacity: 0.5;
  {'}'}

  .hourglassGlass:before,
  .hourglassGlass:after {'{'}
    content: '';
    display: block;
    position: absolute;
    background-color: #999999;
    left: -17px;
    width: 44px;
    height: 28px;
  {'}'}

  .hourglassGlass:before {'{'}
    top: -27px;
    border-radius: 0 0 25px 25px;
  {'}'}

  .hourglassGlass:after {'{'}
    bottom: -27px;
    border-radius: 25px 25px 0 0;
  {'}'}

  .hourglassCurves:before,
  .hourglassCurves:after {'{'}
    content: '';
    display: block;
    position: absolute;
    top: 32px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #333;
    animation: hideCurves 2s ease-in 0s infinite;
  {'}'}

  .hourglassCurves:before {'{'}
    left: 15px;
  {'}'}

  .hourglassCurves:after {'{'}
    left: 29px;
  {'}'}

  @-webkit-keyframes hideCurves {'{'}
    0% {'{'}
      opacity: 1;
    {'}'}

    25% {'{'}
      opacity: 0;
    {'}'}

    30% {'{'}
      opacity: 0;
    {'}'}

    40% {'{'}
      opacity: 1;
    {'}'}

    100% {'{'}
      opacity: 1;
    {'}'}
  {'}'}

  @keyframes hideCurves {'{'}
    0% {'{'}
      opacity: 1;
    {'}'}

    25% {'{'}
      opacity: 0;
    {'}'}

    30% {'{'}
      opacity: 0;
    {'}'}

    40% {'{'}
      opacity: 1;
    {'}'}

    100% {'{'}
      opacity: 1;
    {'}'}
  {'}'}

  .hourglassSandStream:before {'{'}
    content: '';
    display: block;
    position: absolute;
    left: 24px;
    width: 3px;
    background-color: white;
    -webkit-animation: sandStream1 2s ease-in 0s infinite;
    animation: sandStream1 2s ease-in 0s infinite;
  {'}'}

  .hourglassSandStream:after {'{'}
    content: '';
    display: block;
    position: absolute;
    top: 36px;
    left: 19px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #fff;
    animation: sandStream2 2s ease-in 0s infinite;
  {'}'}

  @-webkit-keyframes sandStream1 {'{'}
    0% {'{'}
      height: 0;
      top: 35px;
    {'}'}

    50% {'{'}
      height: 0;
      top: 45px;
    {'}'}

    60% {'{'}
      height: 35px;
      top: 8px;
    {'}'}

    85% {'{'}
      height: 35px;
      top: 8px;
    {'}'}

    100% {'{'}
      height: 0;
      top: 8px;
    {'}'}
  {'}'}

  @keyframes sandStream1 {'{'}
    0% {'{'}
      height: 0;
      top: 35px;
    {'}'}

    50% {'{'}
      height: 0;
      top: 45px;
    {'}'}

    60% {'{'}
      height: 35px;
      top: 8px;
    {'}'}

    85% {'{'}
      height: 35px;
      top: 8px;
    {'}'}

    100% {'{'}
      height: 0;
      top: 8px;
    {'}'}
  {'}'}

  @-webkit-keyframes sandStream2 {'{'}
    0% {'{'}
      opacity: 0;
    {'}'}

    50% {'{'}
      opacity: 0;
    {'}'}

    51% {'{'}
      opacity: 1;
    {'}'}

    90% {'{'}
      opacity: 1;
    {'}'}

    91% {'{'}
      opacity: 0;
    {'}'}

    100% {'{'}
      opacity: 0;
    {'}'}
  {'}'}

  @keyframes sandStream2 {'{'}
    0% {'{'}
      opacity: 0;
    {'}'}

    50% {'{'}
      opacity: 0;
    {'}'}

    51% {'{'}
      opacity: 1;
    {'}'}

    90% {'{'}
      opacity: 1;
    {'}'}

    91% {'{'}
      opacity: 0;
    {'}'}

    100% {'{'}
      opacity: 0;
    {'}'}
  {'}'}

  .hourglassSand:before,
  .hourglassSand:after {'{'}
    content: '';
    display: block;
    position: absolute;
    left: 6px;
    background-color: white;
    perspective: 500px;
  {'}'}

  .hourglassSand:before {'{'}
    top: 8px;
    width: 39px;
    border-radius: 3px 3px 30px 30px;
    animation: sandFillup 2s ease-in 0s infinite;
  {'}'}

  .hourglassSand:after {'{'}
    border-radius: 30px 30px 3px 3px;
    animation: sandDeplete 2s ease-in 0s infinite;
  {'}'}

  @-webkit-keyframes sandFillup {'{'}
    0% {'{'}
      opacity: 0;
      height: 0;
    {'}'}

    60% {'{'}
      opacity: 1;
      height: 0;
    {'}'}

    100% {'{'}
      opacity: 1;
      height: 17px;
    {'}'}
  {'}'}

  @keyframes sandFillup {'{'}
    0% {'{'}
      opacity: 0;
      height: 0;
    {'}'}

    60% {'{'}
      opacity: 1;
      height: 0;
    {'}'}

    100% {'{'}
      opacity: 1;
      height: 17px;
    {'}'}
  {'}'}

  @-webkit-keyframes sandDeplete {'{'}
    0% {'{'}
      opacity: 0;
      top: 45px;
      height: 17px;
      width: 38px;
      left: 6px;
    {'}'}

    1% {'{'}
      opacity: 1;
      top: 45px;
      height: 17px;
      width: 38px;
      left: 6px;
    {'}'}

    24% {'{'}
      opacity: 1;
      top: 45px;
      height: 17px;
      width: 38px;
      left: 6px;
    {'}'}

    25% {'{'}
      opacity: 1;
      top: 41px;
      height: 17px;
      width: 38px;
      left: 6px;
    {'}'}

    50% {'{'}
      opacity: 1;
      top: 41px;
      height: 17px;
      width: 38px;
      left: 6px;
    {'}'}

    90% {'{'}
      opacity: 1;
      top: 41px;
      height: 0;
      width: 10px;
      left: 20px;
    {'}'}
  {'}'}

  @keyframes sandDeplete {'{'}
    0% {'{'}
      opacity: 0;
      top: 45px;
      height: 17px;
      width: 38px;
      left: 6px;
    {'}'}

    1% {'{'}
      opacity: 1;
      top: 45px;
      height: 17px;
      width: 38px;
      left: 6px;
    {'}'}

    24% {'{'}
      opacity: 1;
      top: 45px;
      height: 17px;
      width: 38px;
      left: 6px;
    {'}'}

    25% {'{'}
      opacity: 1;
      top: 41px;
      height: 17px;
      width: 38px;
      left: 6px;
    {'}'}

    50% {'{'}
      opacity: 1;
      top: 41px;
      height: 17px;
      width: 38px;
      left: 6px;
    {'}'}

    90% {'{'}
      opacity: 1;
      top: 41px;
      height: 0;
      width: 10px;
      left: 20px;
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



export default Snippet31; 
