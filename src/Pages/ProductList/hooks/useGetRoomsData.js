import { useSelector } from "react-redux";

export default function useGetRoomsData() {
  const data = useSelector(({ productList }) => productList);

  return data;
}

export function useGetItemData(item) {
  const data = useSelector(({ productList }) => ({
    [item]: productList[item],
  }));

  return data;
}
