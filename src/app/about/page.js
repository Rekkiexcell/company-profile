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
        <div className="hero-content text-center">
          <div className="max-w-md z-2">
            <h1 className="mb-5 text-5xl font-bold">Tentang vivo</h1>
            <p className="mb-5">
              vivo adalah perusahaan teknologi yang membuat produk hebat
              berdasarkan nilai yang didorong oleh desain, dengan perangkat
              pintar dan layanan cerdas sebagai intinya.
            </p>
            <h1>Misi</h1>
            <p>
              Menjadi perusahaan teknologi yang membuat produk hebat berdasarkan
              nilai yang didorong oleh desain, dengan perangkat pintar dan
              layanan cerdas.
            </p>
            <h1>Visi</h1>
            <p>
              Berkembang menjadi perusahaan teknologi yang membuat produk hebat
            </p>
            <h1>Nilai-nilai ini</h1>
            <p>
              Benfen, nilai yang didorong oleh desain, orientasi pada pengguna,
              pembelajaran tanpa henti, dan semangat tim
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
