import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { RootState } from '@/store/reducer';

const THUMNAIL_COUNT = 30;

const StyledDiv = styled.div`
  display: flex;
  width: 90%;
`;

const StyledImg = styled.img`
  width: 3.3%;
  height: 50px;
`;

interface Props {
  videoBuffer: ArrayBuffer;
  duration: number;
}

interface ImageData {
  key: number;
  src: string;
}

const $video = document.createElement('video');
const canvas = document.createElement('canvas');

const getImageAt = (secs: number, videoElement: HTMLVideoElement) => {
  return new Promise(resolve => {
    const video = videoElement;

    video.onseeked = () => {
      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      resolve({ key: secs, src: canvas.toDataURL() });
    };
  });
};

const getImages = async (
  videoElement: HTMLVideoElement,
  path: string,
  duration: number
) => {
  const video = videoElement;

  const gap = duration / THUMNAIL_COUNT;

  video.src = path;

  const thumbnail = await new Promise<any[]>(resolve => {
    video.onloadedmetadata = async () => {
      const images = [];

      for (let secs = 0; secs <= duration; Math.min((secs += gap), duration)) {
        video.currentTime = secs;
        const image = await getImageAt(secs, video);
        images.push(image);
      }

      resolve(images);
    };
  });

  return thumbnail;
};

const Thumbnail: React.FC<Props> = ({ videoBuffer, duration }) => {
  const [images, setImages] = useState([]);

  const getData = async (): Promise<void> => {
    const videoSrc = URL.createObjectURL(
      new Blob([videoBuffer], { type: 'video/mp4' })
    );

    const data = await getImages($video, videoSrc, duration);

    setImages(data);
  };

  useEffect(() => {
    if (videoBuffer) getData();
  }, [videoBuffer]);

  return (
    <StyledDiv>
      {images.map(({ key, src }: ImageData) => {
        return <StyledImg key={key} src={src} alt="" />;
      })}
    </StyledDiv>
  );
};

export default connect((state: RootState) => ({
  videoBuffer: state.originalVideo.video,
  duration: state.originalVideo.file.length,
}))(Thumbnail);
