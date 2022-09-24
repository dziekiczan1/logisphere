import { useSelector } from "react-redux";

const MyOffers = () => {
  const myLoads = useSelector((state) => console.log(state.user.myloads));
  return <div>MyOffersz</div>;
};

export default MyOffers;
