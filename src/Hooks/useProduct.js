import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProductAction} from "../store/action/product.action";

export const useProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);

  useEffect(() => {
    dispatch(getProductAction());
  }, [dispatch]);
  return products;
};
