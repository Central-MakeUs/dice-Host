import { GetAxiosInstance } from '@axios/axios.method';

export const fetchMessageHostList = async () => {
  const { data } = GetAxiosInstance('/message/host-list');
  return data;
};
