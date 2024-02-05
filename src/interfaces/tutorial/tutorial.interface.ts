export interface ITutorialResponse {
  carousel: Carousel;
}

export interface Carousel {
  id:          number;
  createdAt:   Date;
  updatedAt:   Date;
  publishedAt: Date;
  content:     Content[];
}

export interface Content {
  id:          number;
  title:       string;
  description: string;
  icon:        Icon;
}

export interface Icon {
  id:                number;
  name:              string;
  alternativeText:   null;
  caption:           null;
  width:             number;
  height:            number;
  formats:           Formats;
  hash:              string;
  ext:               string;
  mime:              string;
  size:              number;
  url:               string;
  previewUrl:        null;
  provider:          string;
  provider_metadata: null;
  folderPath:        string;
  createdAt:         Date;
  updatedAt:         Date;
}

export interface Formats {
  large:     Large;
  small:     Large;
  medium:    Large;
  thumbnail: Large;
}

export interface Large {
  ext:    string;
  url:    string;
  hash:   string;
  mime:   string;
  name:   string;
  path:   null;
  size:   number;
  width:  number;
  height: number;
}

export interface ISliderContentMapper {
  id:           number;
  title:        string;
  description:  string;
  icon:         string
}
