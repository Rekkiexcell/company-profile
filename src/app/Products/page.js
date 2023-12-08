import { DetailProducts } from "./DetailProduct";
export default function Products() {
  return (
    <>
      <h1 className="text-center text-5xl">Product Colection</h1>
      <div className="grid p-5 gap-5 grid-cols-4">
      {DetailProducts.map((item, index) => {
        return (
          <>
          <div className="card w-30 gap-5 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={item.image}
                  className="w-full h-auto object-contain mb-4"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.price}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </>
        );
    })}
    </div>
    <div className="flex grid-cols-3 gap-4">    
      <div><div>
      <div className="card p-10 rounded-box">
        <div className="carousel-item w-full">
          <img
            src="https://t-2.tstatic.net/lampung/foto/bank/images/harga-hp-vivo-y11-mulai-rp-1-jutaan-murah-dan-terjangkau1.jpg"
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
      </div>
      <p className="p-10">Saya sangat puas dengan pembelian HP Vivo V21 saya! Desainnya yang elegan dan tipis membuatnya sangat nyaman digenggam.<br/> Layar AMOLED-nya memberikan kualitas gambar yang luar biasa, dan warna-warna yang tajam membuat pengalaman menonton dan bermain game jadi lebih menyenangkan.</p>
    </div></div>
    <div><div>
      <div className="card p-10 rounded-box">
        <div className="carousel-item w-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcjZjmCBMagtSSGq_DuS4Vp4c_i9UNE5HzlF-rAihnjyz4VUeRBCaKW0z-duBSkOqcUBg&usqp=CAU"
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
      </div>
      <p className="p-10">Performa prosesor yang tangguh juga membuat multitasking jadi lebih lancar, dan saya tidak pernah mengalami lag saat menggunakan aplikasi atau bermain game berat.<br/> Kamera depan 44MP-nya memberikan hasil selfie yang jernih dan natural, sementara kamera belakang triple-lens memberikan foto-foto yang sangat bagus, terutama dalam kondisi cahaya rendah.</p>
    </div></div>
    <div><div>
      <div className="card p-10 rounded-box">
        <div className="carousel-item w-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_6ySyWsy_zqEKgK205YqohQTQXPTtS4WhMll8dMBRR0P2tIkP6snZ8eBXN4iwihUfWs&usqp=CAU"
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
      </div>
      <p className="p-10">Baterai tahan lama membuat saya tidak perlu khawatir kehabisan daya dalam sehari penuh penggunaan. <br/> Fitur pengisian cepat juga sangat membantu saat saya butuh daya ekstra dengan cepat. Sistem operasi Funtouch OS yang digunakan juga cukup intuitif dan mudah digunakan.</p>
    </div></div></div>
    </>
  );
}
