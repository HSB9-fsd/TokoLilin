import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProductAction} from "../../../../store/action/product.action";

function HistoryProfile() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);

  useEffect(() => {
    dispatch(getProductAction());
  }, [dispatch]);

  return (
    <>
      <div>
        {products.slice(0, 3).map((item) => (
          <li key={item.id} className="flex gap-2 items-center mb-4">
            <img src={item.img} alt={item.name} className="w-32" />
            <div className="flex flex-col gap-1">
              <span className="font-bold">{item.name}</span>
              <span className="text-sm">7 Items</span>
              <span className="text-sm">IDR. {item.price.toFixed(3)}</span>
              <span className="text-sm">{item.desc}</span>
            </div>
          </li>
        ))}
      </div>
    </>
  );
}

export default HistoryProfile;
