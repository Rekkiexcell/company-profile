// RandomUser.js
import Image from "next/image";

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://randomuser.me/api/?results=8&seed=abc"
    );

    const data = await response.json();

    return data.results; // Assuming you want only one random user
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
const Teams = async () => {
  const userData = await fetchData();
  console.log(userData);
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {userData?.map((items, index) => {
            return (
              <div key={index} className=" p-4 shadow-md rounded-md">
                <div className="card w-30 bg-base-100 shadow-xl">
                  <figure>
                  <img
                  src={items.picture.large}
                  className="w-full h-auto object-contain mb-4"
                />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title"> Name: {items.name.first} {items.name.last}{" "}</h2>
                    <p>Gender :{items.gender}</p>
                    <p>Phone: {items.phone}</p>
                    <div className="card-actions justify-end">
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Teams;
