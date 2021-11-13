import { useQuery } from "react-query";

const fetchImgurData = () => {
  return fetch("https://api.imgur.com/3/gallery/hot/viral/0.json", {
    referrer: "",
  }).then((resp) => resp.json());
};

export interface ImgurData {
  data: {
    id: string;
    title: string;
    description: null | string | number;
    datetime: number;
    cover: string;
    cover_width: number;
    cover_height: number;
    account_url: string;
    account_id: number;
    privacy: string;
    layout: string;
    views: number;
    link: string;
    ups: number;
    downs: number;
    points: number;
    score: number;
    is_album: boolean;
    vote: null | string | number;
    favorite: boolean;
    nsfw: boolean;
    section: string;
    comment_count: number;
    favorite_count: number;
    topic: null | string | number;
    topic_id: null | string | number;
    images_count: number;
    in_gallery: boolean;
    is_ad: boolean;
    tags: [];
    type: string;
    ad_type: number;
    ad_url: string;
    in_most_viral: boolean;
    include_album_ads: boolean;
    images: [
      {
        id: string;
        title: null | string | number;
        description: null | string | number;
        datetime: number;
        type: string;
        animated: boolean;
        width: number;
        height: number;
        size: number;
        views: number;
        bandwidth: number;
        vote: null | string | number;
        favorite: boolean;
        nsfw: null | string | number;
        section: null | string | number;
        account_url: null | string | number;
        account_id: null | string | number;
        is_ad: boolean;
        in_most_viral: boolean;
        has_sound: boolean;
        tags: string[];
        ad_type: number;
        ad_url: string;
        edited: string;
        in_gallery: boolean;
        link: string;
        comment_count: null | string | number;
        favorite_count: null | string | number;
        ups: null | string | number;
        downs: null | string | number;
        points: null | string | number;
        score: null | string | number;
      }
    ];
    ad_config: {
      safeFlags: ["album", "in_gallery", "sixth_mod_safe", "gallery"];
      highRiskFlags: [];
      unsafeFlags: [];
      wallUnsafeFlags: [];
      showsAds: boolean;
    };
  }[];
}

export const useFetchImgurData = () => {
  return useQuery<ImgurData>("imgur-feed", fetchImgurData, {
    refetchOnWindowFocus: false,
  });
};
