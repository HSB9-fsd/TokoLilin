import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCartByUserIdAction} from "../store/action/cart.action";
import useAuth from "./useAuth";
import useToken from "./useToken";

export const useCart = () => {
  const dispatch = useDispatch();
  const user = useAuth();
  const token = useToken();
  const id = user.id;
  const carts = useSelector((state) => state.carts.data);

  useEffect(() => {
    dispatch(getCartByUserIdAction({id, token}));
  }, [dispatch, id, token]);

  return carts;
};
