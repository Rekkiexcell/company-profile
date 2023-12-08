export default function About() {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(imagehero.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="p-10 absolute-left-10">
          <div className=" absolute-10 ">
            <h1 className="text-left text-8xl font-bold">Tentang vivo</h1>
            <div className="mb-7 text-4xl">
            <p className="mb-5">
              vivo adalah perusahaan teknologi yang membuat produk hebat
              berdasarkan nilai yang didorong oleh desain, dengan perangkat
              pintar dan layanan cerdas sebagai intinya.
            </p>
            <br/>
            <h1 className="text-8xl">Misi</h1>
            <p>
              Menjadi perusahaan teknologi yang membuat produk hebat berdasarkan
              nilai yang didorong oleh desain, dengan perangkat pintar dan
              layanan cerdas.
            </p>
            <br/>
            <h1 className="text-8xl">Visi</h1>
            <p>
              Berkembang menjadi perusahaan teknologi yang membuat produk hebat
            </p>
            <br/>
            <h1 className="text-8xl">Nilai-nilai ini</h1>
            <p>
              Benfen, nilai yang didorong oleh desain, orientasi pada pengguna,
              pembelajaran tanpa henti, dan semangat tim
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
