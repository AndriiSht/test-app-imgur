export interface Tag {
  accent: string;
  background_hash: string;
  background_is_animated: false;
  description: string;
  description_annotations: {};
  display_name: string;
  followers: number;
  following: boolean;
  is_promoted: boolean;
  is_whitelisted: boolean;
  logo_destination_url: string | null;
  logo_hash: string | null;
  name: string;
  thumbnail_hash: string | null;
  thumbnail_is_animated: boolean;
  total_items: number;
}

export interface Image {
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
  tags: Array<Tag>;
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

export interface AdConfig {
  safeFlags: string[];
  highRiskFlags: [];
  unsafeFlags: [];
  wallUnsafeFlags: [];
  showsAds: boolean;
}

export interface ImgurData {
  data: Array<{
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
    tags: Array<Tag>;
    type: string;
    ad_type: number;
    ad_url: string;
    in_most_viral: boolean;
    include_album_ads: boolean;
    images: Array<Image>;
    ad_config: AdConfig;
  }>;
}
