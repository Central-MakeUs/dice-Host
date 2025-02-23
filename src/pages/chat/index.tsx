import { IMAGES } from '@assets/index';
import { useMessageHostList } from '@hooks/useChat';

import React from 'react';

import { dummy } from './dummy';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function ChatPage() {
  const { data } = useMessageHostList();
  const router = useRouter();

  console.log(data);
  return (
    <div>
      <header className="flex h-12 w-full flex-row px-5">
        <Image
          onClick={() => router.back()}
          className="cursor-pointer"
          src={IMAGES.ArrowBackBlack}
          alt="back"
        />
      </header>
      <main className="px-5">
        <h1 className="flex flex-row gap-2 pb-6 pt-8 font-H1 text-H1 leading-H1">
          <p>게스트와의 쪽지함</p>
          <Image src={IMAGES.ChatBlack} alt="chat" />
        </h1>
        <section>{dummy ? <p>{dummy[0].lastChat}</p> : <p>진행중인 채팅이 없습니다</p>}</section>
        {/* <section>{data ? data : <p>진행중인 채팅이 없습니다</p>}</section> */}
      </main>
    </div>
  );
}
