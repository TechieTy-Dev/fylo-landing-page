import { logo, file, group, avatar, arrow, email,phone, quotes } from './images';
import FooterLogo from './FooterLogo';
import './App.css';

function App() {
  return (
    <div className="App bg-white">
      {/* HEADER */}
      <header className="grid grid-cols-2 lg:pt-12  p-4 items-center">
        {/* LOGO */}
        <img className="w-[45%] ml-2 lg:w-[22.5%] lg:ml-32" src={logo} alt="logo"/>
        {/* NAV-LINKS */}
        <ul className="flex gap-8 lg:justify-end lg:mr-32 lg:gap-12">
          <li className="hover:text-text hover:cursor-pointer">Features</li>
          <li className="hover:text-text hover:cursor-pointer">Team</li>
          <li className="hover:text-text hover:cursor-pointer">Sign In</li>
        </ul>
      </header>
      {/* MAIN */}
      <main className="grid grid-cols-1 w-[100%] mx-auto">
        {/* HERO/SIGNUP SECTION */}
        <section className="w-[80%] lg:mt-12 mx-auto lg:grid lg:grid-cols-2 align-middle items-center justify-center" >
          <div className="order-2 lg:ml-8">
        <img src={file} alt="illustration-1" className="mt-24 lg:mt-12 mb-4 "/>
        </div>
        <div className='order-1 lg:mt-16 lg:text-left'>
          {/* Hero Heading */}
        <h1 className="text-heading text-3xl my-8 lg:w-[100%] lg:tracking-wide lg:text-4xl">  All your files in one secure location, accessible anywhere.</h1>
        {/* Hero Description */}
        <p className="tracking-wide leading-6 mb-12 lg:w-[90%] lg:mb-2">  Fylo stores your most important files in one secure location. 
  Access them wherever you need, share and collaborate with friends, 
  family, and co-workers.
</p>
{/* HERO FORM */}
<form className="flex flex-col lg:flex-row lg:items-center">
<input className="border-gray border-2 rounded-sm p-2 lg:w-[60%] lg:h-12" placeholder='Enter your email...' type="email" required/>
<button className="bg-brightblue rounded-sm shadow-lg text-white font-bold p-2 my-6 lg:h-12 lg:ml-2 lg:w-40 hover:opacity-80">Get Started </button>
</form>
</div>
</section>
{/* DESCRIPTIVE SECTION */}
{/* BG Container */}
<div className="bg-area w-[100%] h-auto mt-24 lg:mt-36 lg:pb-16">
<section className='w-100 lg:grid lg:grid-cols-2'>
  <div className='order-2'>
    {/* Illustration Img */}
  <img src={group} alt="illustration-2" className="mt-24 mb-16" />
  </div>
  <div className="w-[80%] lg:w-[70%] mx-auto lg:order-1 lg:text-left">
  <h2 className="font-bold text-xl mt-24 lg:text-3xl"> Stay productive, wherever you are</h2>
  <p className=" text-left lg:mt-6 my-8 text-text tracking-wide">  Never let location be an issue when accessing your files. Fylo has you 
  covered for all of your file storage needs.
</p>
<p className=" text-left lg:mt-2 lg:mb-4 text-text  tracking-wide">
  Securely share files and folders with friends, family and colleagues for 
  live collaboration. No email attachments required!</p>
  {/* Green Text Link */}
  <div className="w-[50%] mx-auto my-4 hover:opacity-70 hover:cursor-pointer lg:mx-0 lg:w-[40%]">
    <p className=" text-cyan flex items-center lg:text-left">
  See how Fylo works <img src={arrow} alt="arrow" className="ml-1" /></p>
  <hr className="border-cyan w-[80%] border-2 border-t-0 mt-1" />
  </div>
  {/* QUOTES CARD */}
<section className="mt-12 mb-24 w-[100%] mx-auto">
  <div className="bg-white shadow-lg rounded-sm p-5 lg:w-[75%]">
{/* Quotes */}
    <img src={quotes} alt='quotes' className="my-2 w-4 h-4" />
    {/* Card Description */}
   <p className="text-left  leading-7"> Fylo has improved our team productivity by an order of magnitude. Since 
  making the switch our team has become a well-oiled collaboration machine.</p>
  <div className="flex align-middle items-center mt-4">
    {/* Avatar */}
  <img src={avatar} alt="Kyle Avatar" className="rounded-full w-8 h-8" />
  <div className="flex flex-col  ml-4">
  <h3 className="font-bold text-left"> Kyle Burton</h3>
 
  <p className="text-xs">Founder & CEO, Huddle</p>
  </div>
  </div>
  </div>
</section>
  </div>
  
</section>

</div>

      </main>
      {/* EARLY ACCESS SECTION */}
<section className="bg-text w-[100%] lg:grid lg:justify-center lg:items-center lg:grid-cols-2 lg:py-12 ">
  <div className="lg:flex lg:flex-col lg:text-left ">
  <h2 className="font-bold tracking-wide text-grayblue text-xl pt-12 lg:text-2xl lg:ml-24"> Get early access today</h2>
  <p className="text-grayblue w-[75%] mx-auto tracking-wide leading-7 mt-6 mb-8"> It only takes a minute to sign up and our free starter tier is extremely generous. 
  If you have any questions, our support team would be happy to help you.</p>
  </div>
  {/* Early Access Form */}
  <form className="flex flex-col w-[70%] mx-auto pb-24 lg:pb-0">
    <input placeholder="email@example.com" className='p-2  lg:mb-4 mb-2 shadow-md' type="email" required/>
    <button className="bg-brightblue shadow-lg text-grayblue p-2 lg:w-[40%] hover:opacity-70">Get Started For Free</button>
  </form>
</section>
{/* FOOTER */}
      <footer className="grid grid-cols-1 bg-heading w-100 text-grayblue w-[100%] text-left p-12 lg:grid-cols-4 lg:pt-24 lg:pb-20">
        <div>
          {/* FOOTER LOGO */}
       <FooterLogo fill="white"/>
        <div className='mt-12 mb-3 flex items-center'>
          <img className="mr-6 w-6 h-6" src={phone} alt="phone"/>
          <p className='tracking-wide'>  Phone: +1-543-123-4567</p>
        </div>
        <div  className='mb-12 mt-3 flex items-center'>
          <img className=" w-6 h-5 mr-6" src={email} alt="email"/>
          <p className='tracking-wide'> example@fylo.com</p>
        </div>
        </div>
        <ul className="my-4 gap-4 flex flex-col lg:justify-center lg:mt-12 lg:ml-8">
          <li className="hover:text-text hover:cursor-pointer">About Us</li>
          <li className="hover:text-text hover:cursor-pointer">Jobs</li>
          <li className="hover:text-text hover:cursor-pointer">Press</li>
          <li className="hover:text-text hover:cursor-pointer">Blog</li>
        </ul>
        <ul  className="my-6 gap-4 flex flex-col lg:justify-center">
        <li className="hover:text-text hover:cursor-pointer">Contact Us</li>
        <li className="hover:text-text hover:cursor-pointer">Terms</li>
        <li className="hover:text-text hover:cursor-pointer">Privacy</li>
        </ul>
        <ul className="flex gap-6 justify-center my-12  lg:items-center lg:mr-20">
          {/* FACEBOOK */}
          <li className="border-grayblue border-2 rounded-full text-white p-2 w-10 h-10 hover:border-brightblue hover:cursor-pointer flex items-center align-middle justify-center"><svg className="fill-white hover:fill-brightblue hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M12,27V15H8v-4h4V8.852C12,4.785,13.981,3,17.361,3c1.619,0,2.475,0.12,2.88,0.175V7h-2.305C16.501,7,16,7.757,16,9.291V11 h4.205l-0.571,4H16v12H12z"/></svg></li>
          {/* TWIITER */}
          <li className="border-grayblue border-2 rounded-full text-white p-2 w-10 h-10 hover:border-brightblue hover:cursor-pointer flex items-center align-middle justify-center"><svg className="fill-white hover:fill-brightblue hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"/></svg></li>
          {/* INSTAGRAM */}
          <li className="border-grayblue border-2 rounded-full text-white p-2 w-10 h-10 hover:border-brightblue hover:cursor-pointer flex items-center align-middle justify-center"><svg className="hover:fill-brightblue hover:cursor-pointer fill-white h-8 w-8" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"/></svg></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
