import useChekout from "../../../../Hooks/useCheckout";
import Empty from "../../../Pages/Empty";

function HistoryProfile() {
  const checkout = useChekout();

  return (
    <>
      <div>
        {checkout <= 0 ? (
          <Empty place="Shpping Items" />
        ) : (
          checkout?.map((item) => (
            <li key={item.id} className="flex gap-2 items-center mb-4">
              <img
                // src={item.img}
                src="https://fakeimg.pl/100x100"
                alt={item.product_id.title}
                className="w-32"
              />
              <div className="flex flex-col gap-1">
                <span className="font-bold">{item.product_id.title}</span>
                <span className="text-sm">7 Items</span>
                <span className="text-sm">IDR. {item.product_id.price}</span>
              </div>
            </li>
          ))
        )}
      </div>
    </>
  );
}

export default HistoryProfile;
