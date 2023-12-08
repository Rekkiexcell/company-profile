import Image from "next/image";
import Products from "./Products/page";

export default function Home() {
  return (
    <main className="p-5">
      <div className="w-full">  
      <div className="hero min-h-screen" style={{backgroundImage: 'url(imagehero.png)'}}>
        <div className=""></div>
        <div className=" absolute left-10">
          <div className="max-w-md">
            <h1 className="mb-5 text-left text-5xl font-bold">V29 5G</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
        </div>
      </div>
      </div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src="https://community-static-asia.vivo.com/bQdX2twopuIeyjUk/ID-VIVO/signin/20231122/96f3179c012a430c8f7818a3d0105b7e_w1200_h462.jpg" className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://community-static-asia.vivo.com/bQdX2twopuIeyjUk/ID-VIVO/signin/20231122/aece635320754dc3b8f9f9503620fb90_w1200_h462.jpg"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://community-static-asia.vivo.com/bQdX2twopuIeyjUk/ID-VIVO/signin/20231122/47bccfb31dde453b8c834a271d6647f6_w1200_h462.jpg"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
      <div>
      <div className="hero max-full-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
        <img src="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1701671435149/1fc9ecc044c2e47ebf83d70a23a11a71.jpg" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">UEFA EURO 2024</h1>
          <br/>
          <p className="py-6">Bersama penggemar sepak bola di dunia vivo rayakan UEFA EURO 2024 </p>
          <p>Jakarta, 16 November 2023</p>
        </div>
      </div>
    </div>
      </div>
      <div> 
        <Products />
      </div>
        <div className="flex gap-3 items-center">
        <div className="w-59 carousel  rounded-box">
        <div className="carousel-item w-full">
          <img src="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1701053203177/a10b1ce92707952ff69f8308365d3134.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
        </div> 
      </div>
      <div className="w-50 carousel  rounded-box">
        <div className="carousel-item w-full">
          <img src="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1699250967267/f150d067b7ac9efe0d7db2e246e7cc8d.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
        </div> 
      </div>  <div className="w-50 carousel  rounded-box">
        <div className="carousel-item w-full">
          <img src="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1698379166721/7960627e39a97c8f56a30b005ef1426f.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
        </div> 
      </div>  
      </div>
    </main>
  );
}
