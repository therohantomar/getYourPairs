import { data } from "../utility/constants";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import Filters from "./Filters";
import { dataLoad } from "../utility/dataSlice";
import { useDeferredValue, useEffect } from "react";
import { Suspense } from "react";
import useScrollToTop from "../utility/hooks/useScrollToTop";


const Home = () => {
  const dispatch = useDispatch();
  useScrollToTop()
  
  const filteredProducts = useSelector(
    (store) => store.data.Products.filteredProducts
  );
  const dFilteredProducts = useDeferredValue(filteredProducts);

  useEffect(()=>{
    let timeoutId
    if(dFilteredProducts.length===0){
       timeoutId=setTimeout(()=>dispatch(dataLoad(data)),0);
    }
    return ()=>{
      clearTimeout(timeoutId)
    }
  }
  ,[])
  
  

  return (
    <>
    <div className="flex overflow-y-scroll scrollbar-none justify-around h-[96vh] items-center gap-10 ">
      <Filters />
      {filteredProducts.length===0?<h1 className="w-full">No Product found......</h1>:<Suspense fallback={()=><h1>loading...</h1>}>
        <div data-testid="card_Parent" className="overflow-y-scroll w-full py-10 flex flex-wrap  gap-4 scrollbar-none h-full">
          {dFilteredProducts.map((product) => {
            return <Card key={product.id} {...product} />;
          })}
        </div>
      </Suspense>}
    </div>
    </>
  );
};

export default Home;
