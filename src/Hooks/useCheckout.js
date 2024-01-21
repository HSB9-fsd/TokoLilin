import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getShippingAction} from "../store/action/shipping.action";
import useAuth from "./useAuth";
import useToken from "./useToken";

function useChekout() {
  const user = useAuth();
  const token = useToken();
  const dispatch = useDispatch();
  const shippings = useSelector((state) => state.shippings.checkout);

  useEffect(() => {
    dispatch(getShippingAction({id: user.id, token}));
  }, [dispatch, user, token]);

  return shippings;
}

export default useChekout;
