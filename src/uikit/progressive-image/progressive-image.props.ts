export interface ProgressiveImageProps {
  preview: string;
  image: string;
  alt: string;

  interactive?: boolean;
  description?: string;
  link?: string;
}

export interface ProgressiveImageState {
  currentImage: string;
  loading: boolean;
}
