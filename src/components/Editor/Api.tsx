import { useAppSelector } from '../../store/types';
import CustomSection from './CustomSection';

const Api = () => {
  const { api } = useAppSelector((state) => state.request);

  return (
    <CustomSection
      title="api"
      attentionTranslation="attentionApi"
      initialActionValue={api}
    />
  );
};

export default Api;
