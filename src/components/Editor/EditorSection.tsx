import React, { useEffect, useMemo, useState } from 'react';
import { fetchQuery, setHeaders } from '../../store/slice/requestSlice';
import {
  initialQuery,
  sectionDataRu,
  sectionDataEn,
} from '../../constants/editor';
import { Localization } from '../../context/LocalContext';
import { useAppDispatch, useAppSelector } from '../../store/types';
import { setQuery, setInfo } from '../../store/slice/requestSlice';
import { countLines } from '../../utils/countLines';
import { EditorSectionProps } from '../../types/interface';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import { formatCode } from '../../utils/formatCode';
import CodeMirror from '@uiw/react-codemirror';

const EditorSection: React.FC<EditorSectionProps> = ({ title }) => {
  const dispatch = useAppDispatch();
  const { language } = Localization();
  const { api, variables, response, headers, query } = useAppSelector(
    (state) => state.request
  );
  const [value, setValue] = useState(query);
  const [numLines, setNumLines] = useState<number>(0);

  const handleFormatCode = () => {
    try {
      const formattedCode = formatCode(value);
      setValue(formattedCode);
    } catch (error) {
      console.error('Ошибка форматирования кода:', error);
    }
  };

  const handleSubmit = () => {
    dispatch(setQuery(value));
    dispatch(setInfo(language));
    dispatch(setHeaders(' '));
  };

  const sectionData = useMemo(() => {
    if (language === 'ru') {
      return sectionDataRu;
    }
    return sectionDataEn;
  }, [language]);

  useEffect(() => {
    setNumLines(countLines(initialQuery, ''));
    if (response) {
      const lines = countLines(response, '');
      setNumLines(lines);
    }
  }, [response]);

  useEffect(() => {
    dispatch(
      fetchQuery({ api, variables, requestHeaders: headers as Headers, query })
    );
  }, [api, dispatch, headers, query, variables]);

  useEffect(() => {
    setValue(query);
  }, [query]);

  useEffect(() => {
    const formatInitialQuery = () => {
      try {
        const formattedCode = formatCode(initialQuery);
        dispatch(setQuery(formattedCode));
      } catch (error) {
        console.error('Ошибка форматирования кода:', error);
      }
    };
    formatInitialQuery();
  }, [dispatch]);

  return (
    <>
      <div className="editor__header">
        <div className="editor__title">{title}</div>
        {sectionData.query.label === title && (
          <div className="editor__buttons">
            <div
              className="editor__format button"
              onClick={handleFormatCode}
              title="Форматировать код"
            ></div>
            <div
              className="editor__play button"
              onClick={handleSubmit}
              title="Отправить запрос"
            ></div>
          </div>
        )}
      </div>
      <div className="editor__content">
        <div className="editor__numbers">
          {sectionData.query.label !== title &&
            [...Array(numLines).keys()].map((num) => (
              <p key={num + 1}>{num + 1}</p>
            ))}
        </div>
        <div className="editor__text">
          {sectionData.query.label === title ? (
            <div className="editor__query">
              <CodeMirror
                onChange={(value) => {
                  setValue(value);
                }}
                extensions={[javascript({ jsx: true })]}
                theme={oneDark}
                value={value}
              />
            </div>
          ) : (
            <pre className="editor__response">{response}</pre>
          )}
        </div>
      </div>
    </>
  );
};

export default EditorSection;
