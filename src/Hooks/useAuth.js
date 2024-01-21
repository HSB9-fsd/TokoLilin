import {useDispatch, useSelector} from "react-redux";
import useToken from "./useToken";
import {useEffect} from "react";
import {getUserByIdAction} from "../store/action/user.action";

const userId = "dd913ceb-8949-41ee-ad4f-2015e9a7f45d";

function useAuth() {
  const dispatch = useDispatch();
  const token = useToken();
  const users = useSelector((state) => state.users.data);

  useEffect(() => {
    dispatch(getUserByIdAction({userId, token}));
  }, [dispatch, token]);

  return users;
}

export default useAuth;
