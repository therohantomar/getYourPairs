import { data } from "../utility/constants";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import Filters from "./Filters";
import { dataLoad } from "../utility/dataSlice";
import { useDeferredValue } from "react";
import { Suspense } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const dispatch = useDispatch();
  const {user, isAuthenticated}=useAuth0()
  const filteredProducts = useSelector(
    (store) => store.data.Products.filteredProducts
  );
  const dFilteredProducts = useDeferredValue(filteredProducts);

  if (dFilteredProducts.length === 0) {
    dispatch(dataLoad(data));
  }

  return (
    <>
    {isAuthenticated && <h1 className="font-ubuntu">{user.given_name}</h1>}
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
    </>
  );
};

export default Home;
