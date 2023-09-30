import { data } from "../utility/constants";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import Filters from "./Filters";
import { dataLoad } from "../utility/dataSlice";
import { useDeferredValue } from "react";
import { Suspense } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(
    (store) => store.data.Products.filteredProducts
  );
  const dFilteredProducts = useDeferredValue(filteredProducts);

  if (dFilteredProducts.length === 0) {
    dispatch(dataLoad(data));
  }

  return (
    
    <div className="flex overflow-y-scroll scrollbar-none justify-around h-[96vh] items-center gap-10 ">
      <Filters />
      <Suspense fallback={()=><h1>loading...</h1>}>
        <div className="overflow-y-scroll w-full py-10 flex flex-wrap  gap-4 scrollbar-none h-full">
          {dFilteredProducts.map((product) => {
            return <Card key={product.id} {...product} />;
          })}
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
