import { Star } from "lucide-react";
import Heading from "./Heading";
import { Button } from "./ui/button";

const dummyData = [
  {
    image: "/images/na1.png",
    title: "T-SHIRT WITH TAPE DETAILS",
    price: 120,
    discountPrice: 100,
    discountPercent: 20,
    rating: 4.5,
  },
  {
    image: "/images/na2.png",
    title: "CASUAL SHIRT",
    price: 80,
    discountPrice: null,
    discountPercent: null,
    rating: 4.0,
  },
  {
    image: "/images/na3.png",
    title: "ELEGANT COAT",
    price: 150,
    discountPrice: 130,
    discountPercent: 15,
    rating: 4.7,
  },
  {
    image: "/images/na4.png",
    title: "SPORTY HOODIE",
    price: 90,
    discountPrice: null,
    discountPercent: null,
    rating: 4.3,
  },
];

const GridProducts = ({ title , products }: { title: string , products : Array<any> }) => {
  return (
    <section className="body-font">
      <div className="max-w-[1240px] px-5 py-5 mx-auto">
        <Heading title={title} />
        <div className="flex flex-wrap -m-4">
          {products.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </div>

        <div className="flex justify-center my-10">
          <Button className="p-[28px_54px] text-black bg-transparent border-2 border-grey rounded-full hover:text-white hover:bg-black">
            View all
          </Button>
        </div>
        <div className="border-2 border-grey -mb-10"></div>
      </div>
    </section>
  );
};

export default GridProducts;

function Card({ product }: { product:any }) {
  return (
    <div className="p-4 md:w-1/4 w-1/2">
      <div className="h-full border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="md:h-[298px] h-[200px] w-full object-fill rounded-2xl"
          src={product.image}
          alt={product.title}
        />
        <div className="my-4">
          <h3 className="title-font text-[20px] font-satoshBold text-gray-900 mb-3">
            {product.title}
          </h3>
          {/* Star Rating */}
          <div className="flex gap-2 my-3">
            {Array.from({ length: 5 }, (_, index) => (
              <Star
                key={index}
                stroke="none"
                fill={index < Math.round(product.rating) ? "yellow" : "gray"}
                size="19px"
              />
            ))}
            <div className="text-[14px] font-satoshi">
              <span>{product.rating}/</span>
              <span className="text-black opacity-60">5</span>
            </div>
          </div>
          {/* Price */}
          <div className="flex gap-3 items-center">
            <p className="font-satoshBold text-[24px]">${product.price}</p>
            {product.discountPrice && (
              <>
                <del className="text-[24px] text-carddelcolor font-satoshBold">
                  ${product.discountPrice}
                </del>
                <span className="p-[4px_12px] rounded-full bg-carddisbg text-carddisfg">
                  -{product.discountPercent}%
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
