import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const usersData = (): any => {
  const usersData = useSelector((state: RootState) => state.user.usersData);
  return usersData;
};

const UserSelector = { usersData };

export default UserSelector;
