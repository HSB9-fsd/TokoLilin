import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCartAction} from "../store/action/cart.action";

export const useCart = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.carts.data);

  useEffect(() => {
    dispatch(getCartAction());
  }, [dispatch]);

  return carts;
};
