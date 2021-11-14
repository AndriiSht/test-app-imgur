import { ImgurData } from "./types";
import { useQuery } from "react-query";
import { apiURL, queryNames } from "const";
import dummyData from "const/fallbackData.json";

const fetchImgurData = () => {
  return fetch(`${apiURL.baseURL}${apiURL.getMemes}`, {
    referrer: "", // to make imgur api work - it is blocking localhost
  })
    .then((resp) => resp.json())
    .then((data) => data?.data || dummyData.data)
    .catch(() => dummyData.data);
};

export const useFetchImgurData = () => {
  return useQuery<ImgurData["data"]>(queryNames.imgurFeed, fetchImgurData, {
    refetchOnWindowFocus: false,
  });
};
