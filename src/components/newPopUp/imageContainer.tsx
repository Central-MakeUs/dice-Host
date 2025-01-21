import Delete from '@assets/newPopUp/image-delete.svg';
import HeaderBack from '@assets/popUp/headerBack.svg';

import React from 'react';

import Image from 'next/image';

export default function ImageContainerComponent({
  index,
  url,
  onDelete,
}: {
  index: number;
  url: string;
  onDelete: () => void;
}) {
  return (
    <div className="relative flex size-20 flex-shrink-0 items-center justify-center rounded-xl border border-light_gray">
      <Image
        onClick={onDelete}
        className="absolute -right-[6px] -top-[6px] z-10 cursor-pointer"
        src={Delete}
        alt="delete"
      />
      <Image className="rounded-xl" src={url} alt="header-back" layout="fill" objectFit="cover" />
      {index === 0 && (
        <div className="absolute bottom-0 z-10 w-full rounded-b-xl bg-[#00000080] py-[3px] text-center font-CAP2 text-CAP2 leading-CAP2 text-white">
          대표 이미지
        </div>
      )}
    </div>
  );
}
