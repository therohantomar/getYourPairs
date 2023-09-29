import { data } from "../utility/constants";
import { useDispatch, useSelector } from "react-redux";
import { dataLoad } from "../utility/dataSlice";
import Card from "./Card";
import Filters from "./Filters";
const Home = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector((store) => store.data.filteredProducts);
  dispatch(dataLoad(data));

  return (
    <div className="flex overflow-y-scroll scrollbar-none justify-around h-[96vh] items-center gap-10 ">
      <Filters />
      <div className="overflow-y-scroll w-full py-10 flex flex-wrap  gap-4 scrollbar-none h-full">
        {filteredProducts.map((product) => {
          return (
           <Card key={product.id} {...product} />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
