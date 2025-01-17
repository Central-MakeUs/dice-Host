import Close from '@assets/member/close.svg';
import CommonButtonComponent from '@components/common/commonButton';
import UserInputComponent from '@components/member/userInput';
import { member } from '@lib/member/member';

import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Image from 'next/image';
import { useRouter } from 'next/router';

interface FormData {
  id: string;
  passwd: string;
}

export default function LoginPage() {
  const router = useRouter();
  const { control, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (formData: FormData) => {
    console.log(formData);
  };
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center gap-8 px-5">
      <Image
        onClick={() => router.back()}
        className="absolute left-0 top-0 m-3 cursor-pointer"
        src={Close}
        width={12}
        height={12}
        alt="close"
      />
      <p className="w-full font-H1 text-H1 leading-H1">로그인</p>
      <div className="flex w-full flex-col gap-3">
        <UserInputComponent member={member.id} control={control} />
        <UserInputComponent member={member.password} control={control} />
      </div>
      <div className="flex w-full flex-col items-center gap-3">
        <CommonButtonComponent onClick={handleSubmit(onSubmit)}>로그인</CommonButtonComponent>
        <div className="flex flex-row gap-4 font-BTN1 text-BTN1 leading-BTN1 text-medium_gray">
          <p className="cursor-pointer font-BTN1 text-BTN1 leading-BTN1">아이디 찾기</p>
          <p>|</p>
          <p className="cursor-pointer font-BTN1 text-BTN1 leading-BTN1">비밀번호 찾기</p>
        </div>
      </div>
    </div>
  );
}
