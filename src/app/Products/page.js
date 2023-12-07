import { DetailProducts } from "./DetailProduct";
export default function Products() {
  return (
    <>
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
    </>
  );
}
