import { useQuery } from '@tanstack/react-query';
import { SpaceIdResponse } from '@type/popUp/popUpResponse';
import { PopUpFormData } from '@type/popUpSetting';
import { formatNumber } from '@utils/formatNumber';
import { formatTimeTo12Hour } from '@utils/formatTime';

import { fetchSpaceId } from 'src/api/popUp';

const initialData: SpaceIdResponse = {
  id: 0, // 실제 초기값으로 설정
  name: '',
  description: '',
  imageUrls: [],
  category: '',
  openingTime: '',
  closingTime: '',
  size: 0,
  capacity: 0,
  tags: [],
  pricePerDay: '0',
  discountRate: 0,
  details: '',
  latitude: 0,
  longitude: 0,
  city: '',
  district: '',
  address: '',
  detailAddress: '',
  websiteUrl: '',
  contactNumber: '',
  facilityInfo: '',
  notice: '',
  likeCount: 0, // 필요한 경우 초기값 설정
  isActivated: false,
};

export const usePopUpId = (id: string) => {
  return useQuery<SpaceIdResponse, Error, PopUpFormData>({
    queryKey: ['popUp', id],
    queryFn: () => fetchSpaceId(id),
    initialData: initialData,
    staleTime: 1000 * 60 * 5,
    refetchOnMount: 'always',
    select: (data) => ({
      name: data.name,
      description: data.description,
      imageList: data.imageUrls,
      category: data.category,
      openingTime: formatTimeTo12Hour(data.openingTime),
      closingTime: formatTimeTo12Hour(data.closingTime),
      size: data.size,
      capacity: data.capacity,
      tags: data.tags,
      pricePerDay: formatNumber(Number(data.pricePerDay)),
      discountRate: String(data.discountRate),
      details: data.details,
      // 좌표 변환 필요
      latitude: data.latitude,
      longitude: data.longitude,
      city: '',
      district: '',
      address: '',
      detailAddress: data.detailAddress,
      websiteUrl: data.websiteUrl,
      contactNumber: data.contactNumber,
      facilityInfo: data.facilityInfo,
      notice: data.notice,
      isActivated: data.isActivated,
    }),
  });
};
