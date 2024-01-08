import { useState } from 'react';
import {
  setApi,
  setHeaders,
  setInfo,
  setQuery,
  setVariables,
} from '../../store/slice/requestSlice';
import { useAppDispatch, useAppSelector } from '../../store/types';
import { Localization } from '../../context/LocalContext';
import { CustomSectionProps } from '../../types/interface';

const CustomSection: React.FC<CustomSectionProps> = ({
  title,
  attentionTranslation,
  initialActionValue,
}) => {
  const { api } = useAppSelector((state) => state.request);
  const dispatch = useAppDispatch();
  const { translations, language } = Localization();
  const [value, setValue] = useState(initialActionValue);
  const [showMessage, setShowMessage] = useState(false);
  const [inputVisible, setInputVisible] = useState(false);
  const [isBodyOpen, setIsBodyOpen] = useState(false);

  const handleSubmit = () => {
    switch (title) {
      case 'headers':
        dispatch(setHeaders(value));
        break;
      case 'variables':
        dispatch(setVariables(value));
        dispatch(setHeaders(' '));
        break;
      case 'api':
        if (value !== api) {
          dispatch(setQuery(`query { }`));
        }
        dispatch(setApi(value));
        dispatch(setHeaders(' '));
        break;
      default:
        break;
    }
    dispatch(setInfo(language));
    setShowMessage(false);
  };

  const handleLabelClick = () => {
    setInputVisible((prevState) => !prevState);
    setIsBodyOpen(!isBodyOpen);
  };

  return (
    <div className={`${title}`}>
      <div className={`${title}__wrapper`}>
        <div
          className={`${title}__label${isBodyOpen ? ' open' : ''}`}
          onClick={handleLabelClick}
        >
          {translations[title]}
        </div>
        {inputVisible && (
          <div className={`${title}__content`}>
            <input
              className={`${title}__input`}
              name={`${title}`}
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setShowMessage(true);
              }}
            />
            <div className="button" onClick={handleSubmit}>
              {translations.submit}
            </div>
          </div>
        )}
      </div>
      {showMessage && (
        <div className="attention-message">
          {translations[attentionTranslation]}
        </div>
      )}
    </div>
  );
};

export default CustomSection;
