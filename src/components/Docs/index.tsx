import classNames from 'classnames';
import { buildClientSchema } from 'graphql';
import { memo, useEffect, useRef } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import useGetDocsFromApi from '../../hooks/useGetDocsFromApi';
import useSchema from '../../hooks/useSchema';
import { FieldSchema } from './components';
import { Localization } from '../../context/LocalContext';

const Docs = memo(() => {
  const {
    query: { data },
  } = useGetDocsFromApi();
  const { rootSchema, setSchema, setRootSchema } = useSchema();

  const ref = useRef(null);
  const { open, setOpen } = useClickOutside(ref);
  const { translations } = Localization();

  useEffect(() => {
    setRootSchema(null);

    if (data) {
      const response = buildClientSchema(data);

      setSchema(response);
    }
  }, [data]);

  return (
    <aside ref={ref} className={classNames({ openAside: open })}>
      <div className="docs-container">
        <FieldSchema schema={rootSchema} setRootSchema={setRootSchema} />
      </div>
      <button
        className="docs-button"
        onClick={() => setOpen(!open)}
        disabled={!rootSchema}
      >
        {translations.docsLink}
      </button>
    </aside>
  );
});

export default Docs;
