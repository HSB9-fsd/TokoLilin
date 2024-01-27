import {useDispatch, useSelector} from "react-redux";
import useToken from "./useToken";
import {useEffect} from "react";
import {getUserByTokenAction} from "../store/action/user.action";

function useAuth() {
  const dispatch = useDispatch();
  const token = useToken();
  const users = useSelector((state) => state.users.data);

  useEffect(() => {
    dispatch(getUserByTokenAction(token));
  }, [dispatch, token]);

  return users;
}

export default useAuth;
