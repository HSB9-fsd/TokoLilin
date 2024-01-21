import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import useAuth from "./useAuth";
import useToken from "./useToken";
import {getAddressByUserIdAction} from "../store/action/address.action";

function useAddress() {
  const dispatch = useDispatch();
  const user = useAuth();
  const token = useToken();
  const address = useSelector((state) => state.address.data);
  const userId = user.id;

  useEffect(() => {
    dispatch(getAddressByUserIdAction({token, userId}));
  }, [dispatch, token, userId]);

  return address;
}

export default useAddress;
