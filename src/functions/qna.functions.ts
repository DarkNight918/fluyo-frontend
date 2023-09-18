import fetcher from "../helpers/fetcher";

export const getQNA = async (index: number) => {
  const info = await fetcher.GET(`/get_qna?index=${index}`);

  return info;
};
