import Header from "./components/Header";
import Footer from "./components/Footer";
import banner from "./assets/images/image-web-3-desktop.jpg";
import bannerMobile from "./assets/images/image-web-3-mobile.jpg"
import retro from "./assets/images/image-retro-pcs.jpg"
import laptop from "./assets/images/image-top-laptops.jpg"
import game from "./assets/images/image-gaming-growth.jpg"

function App() {



const top02RightHead = "text-[1.25rem] text-OffWhite font-semibold hover:text-SoftOrange cursor-pointer pt-4"
const top02RightDetail = "text-GrayishBlue border-b-[1px] border-DarkGrayishBlue pb-8 pt-4"

const bottomNumber = "text-[1.6rem] text-SoftRed font-bold "
const bottomHead = "text-[1.2rem] text-VeryDarkBlue font-bold hover:text-SoftRed cursor-pointer"
const bottomDetail = "text-DarkGrayishBlue max-w-[14rem]"

  return (
    <>
      <Header />
      <div className="top-contain flex flex-row gap-8 sm:flex-col sm:mx-8 md:flex-col md:mx-8">
        <div className="top-contain-01 ml-24 w-[70%] sm:ml-0 sm:w-full md:ml-0 md:w-full">
          <picture>
            <source 
            media="(max-width: 375px)"
            srcSet={bannerMobile}
            />
            <img
             className=" object-cover object-center"
             src={banner}
             alt="baner"
            />
          </picture>

          <div className="top-01-low flex flex-row gap-16 mt-8 sm:flex-col sm:gap-8 md:flex-col md:gap-8">
          <h1 className="text-[3.5rem] text-VeryDarkBlue   font-extrabold leading-none">The Bright Future of Web 3.0?</h1>
          <div className="flex flex-col justify-between items-start">
          <p className="text-DarkGrayishBlue">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="text-OffWhite bg-VeryDarkBlue font-bold tracking-widest py-[.5rem] px-[1.5rem] cursor-pointer sm:mt-8 sm:bg-SoftRed sm:text-black md:mt-8 ">READ MORE</button>
          </div>
          </div>
        </div>
        <div className="top-contain-02 w-[30%] bg-VeryDarkBlue mr-24 px-8 py-8 sm:w-full sm:mr-0 md:w-full md:mr-0">
          <h2 className="text-[2.5rem] text-SoftOrange font-bold ">New</h2>
          <h3 className={top02RightHead}>Hydrogen VS Electric Cars</h3>
          <p className={top02RightDetail}
>Will hydrogen-fueled cars ever catch up to EVs?</p>
          <h3 className={top02RightHead}>The Downsides of AI Artistry</h3>
          <p className={top02RightDetail}>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
          <h3 className={top02RightHead}>Is VC Funding Drying Up?</h3>
          <p className={`${top02RightDetail} border-none`}>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
      <div className="bottom-contain flex flex-row justify-between items-center mx-24 my-16 sm:flex-col sm:mx-0 sm:gap-8 md:flex-col md:mx-0 md:gap-8">
        <div className="bottom-contain-01 flex flex-row gap-4">
          <img className="w-[6rem] object-cover object-center" src={retro} alt="retro" />
          <div className="flex flex-col justify-between items-start">
            <h3 className={bottomNumber}>01</h3>
            <h4 className={bottomHead}>Reviving Retro PCs</h4>
            <p className={bottomDetail}>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div className="bottom-contain-02 flex flex-row gap-4">
          <img className="w-[6rem] object-cover object-center" src={laptop} alt="laptop" />
          <div className="flex flex-col justify-between items-start">
            <h3 className={bottomNumber}>02</h3>
            <h4 className={bottomHead}>Top 10 Laptops of 2022</h4>
            <p className={bottomDetail}>Our best picks for various needs and budgets.</p>
          </div>
        </div>
        <div className="bottom-contain-03 flex flex-row gap-4">
          <img className="w-[6rem] object-cover object-center" src={game} alt="game" />
          <div className="flex flex-col justify-between items-start">
            <h3 className={bottomNumber}>03</h3>
            <h4 className={bottomHead}>The Growth of Gaming</h4>
            <p className={bottomDetail}>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
