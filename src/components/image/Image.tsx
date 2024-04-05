import {
  LazyLoadImage,
  LazyLoadImageProps
} from 'react-lazy-load-image-component'

export const Image = ({ ...rest }: LazyLoadImageProps) => (
  <div>
    <LazyLoadImage {...rest} />
  </div>
)
