import type { Identifier, XYCoord } from 'dnd-core';
import { ImageModel } from 'models';
import type { FC } from 'react';
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { AiFillCloseCircle } from 'react-icons/ai';
import Image from 'next/image';

export const ItemTypes = {
  CARD: 'card',
};
export interface CardProps {
  id: any;
  image: ImageModel;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
  deleteCard: (index: number) => void;
  handleClickImage: (index: number) => void;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

export const Card = ({ id, index, image, moveCard, deleteCard, handleClickImage }: CardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ handlerId }, drop] = useDrop<DragItem, void, { handlerId: Identifier | null }>({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { id, index };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <div ref={ref} style={{ opacity }} data-handler-id={handlerId}>
      <div className="cursor-pointer min-w-[96px] min-h-[96px] max-w-[96px] relative">
        <span
          onClick={() => deleteCard(index)}
          className="curosr-pointer absolute -top-[8px] -right-[8px] z-50"
        >
          <AiFillCloseCircle />
        </span>
        <Image
          onClick={() => handleClickImage(index)}
          className="min-h-[96px] min-w-[96px] border border-primary border-dashed"
          src={image?.path}
          fill
          loading="lazy"
          sizes="(max-width: 96px) 100vw, (max-width: 96px)"
          alt={image?.name}
        />
      </div>
    </div>
  );
};
