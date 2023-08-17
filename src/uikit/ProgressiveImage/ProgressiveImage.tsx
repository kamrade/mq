import React, { useState, useEffect, useRef } from 'react';
import s from './ProgressiveImage.module.scss';
import classNames from 'classnames/bind';
import { isNil } from 'lodash';
import { ProgressiveImageProps, ProgressiveImageState } from './ProgressiveImage.props.ts';

const sx = classNames.bind(s);

export const ProgressiveImage: React.FC<ProgressiveImageProps> = (props) => {

  const {alt, description} = props;
  const loadingImage = useRef<HTMLImageElement | null>(null);

  const [state, setState] = useState<ProgressiveImageState>({
    currentImage: props.preview,
    loading: true
  });

  const progressiveImageClassNames = sx({
    ProgressiveImageContainer: true,
    Interactive: isNil(props.interactive) ? false : props.interactive,
    Loading: state.loading
  });

  useEffect(() => {

    const image: HTMLImageElement = new Image();

    image.onload = () => setState({
      currentImage: loadingImage.current?.src || '',
      loading: false
    });

    image.src = props.image;
    loadingImage.current = image;

    return () => {
      image.onload = null;
    };

  }, [props.image]);

  const style = (loading: boolean) => {
    return {
      filter: `${loading ? 'blur(40px)' : ''}`,
      transform: `${loading ? 'scale(0.95)' : ''}`
    }
  };

  const { currentImage, loading } = state;

  return (
    <div className={progressiveImageClassNames}>

      <img
        src={currentImage}
        className={s.progressiveImage}
        alt={alt}
        style={style(loading)}
      />

      {description &&
        <div className={s.description}>
          {description}
        </div>
      }

      { loading &&
        <div className={s.loaderBlock}>
          <div className={s.loaderContent}>
            Loading...
          </div>
        </div>
      }

    </div>
  );

}
