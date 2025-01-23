import { PopUpConfig, PopUpFormData } from '@type/popUpSetting';

import React from 'react';
import { Control, Controller } from 'react-hook-form';

interface PopUpInputComponentProps {
  popUpConfig: PopUpConfig;
  control: Control<PopUpFormData>;
}

export default function PopUpInputComponent({
  popUpConfig,
  control,
}: PopUpInputComponentProps): React.ReactElement<PopUpInputComponentProps> {
  const handlePhoneNumberInputChange =
    (onChange: Function) => (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = e.target.value.replace(/[^0-9]/g, ''); // 숫자만 남기기

      // 000-0000-0000 형식으로 변환
      if (value.length <= 3) {
        value = value;
      } else if (value.length <= 7) {
        value = value.slice(0, 3) + '-' + value.slice(3);
      } else {
        value = value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7, 11);
      }
      onChange(value);
    };

  return (
    <Controller
      name={popUpConfig.name}
      control={control}
      render={({ field: { onChange, value = '' } }) => (
        <input
          id="input"
          className="h-[44px] w-full rounded-lg border p-4 font-CAP1 text-CAP1 leading-CAP1"
          onChange={
            popUpConfig.name === 'phoneNumber' ? handlePhoneNumberInputChange(onChange) : onChange
          }
          value={value}
          placeholder={popUpConfig.placeholder}
        />
      )}
    />
  );
}
