import { useKeypress } from '@hooks/useKeyPress';
import update from 'immutability-helper';
import { ImageModel } from 'models';
import { useCallback, useState } from 'react';
import { Modal } from '../Modal';
import SwiperGallary from '../Swiper/SwiperGallary';
import { Card } from './ImageCart';

export interface Item {
  id: number;
  text: string;
}

export interface ContainerState {
  images: ImageModel[];
  onChange: (value: any) => void;
  deleteImage: (index: number) => void;
}

export const Container = ({ images, onChange, deleteImage }: ContainerState) => {
  {
    const [showModal, setShowModal] = useState(false);
    const [activeImage, setAtiveImage] = useState(0);

    useKeypress('Escape', () => {
      setShowModal(false);
    });

    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
      onChange((prevCards: ImageModel[]) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex] as ImageModel],
          ],
        })
      );
    }, []);

    const handleClickImage = (index: number) => {
      setAtiveImage(index);
      setShowModal(true);
    };

    const renderCard = useCallback(
      (image: ImageModel, index: number) => {
        return (
          <Card
            key={image._id}
            index={index}
            id={image._id}
            image={image}
            moveCard={moveCard}
            deleteCard={deleteImage}
            handleClickImage={handleClickImage}
          />
        );
      },
      [images]
    );

    return (
      <>
        {images.map((image, i) => renderCard(image, i))}{' '}
        <Modal isShow={showModal} onChange={() => setShowModal(false)}>
          <SwiperGallary images={images} initialSlide={activeImage} />
        </Modal>
      </>
    );
  }
};
