import { CSSProperties, useEffect, useRef } from 'react';
import JSONEditor from 'jsoneditor';
import 'jsoneditor/dist/jsoneditor.css';

type Props = {
  className?: string;
  style?: CSSProperties;
  json?: Record<string, unknown>;
};

export const JsonEditor = ({ className, json }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const jsonEditorRef = useRef<JSONEditor | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      jsonEditorRef.current = new JSONEditor(
        containerRef.current,
        {
          modes: ['code', 'tree'],
        },
        json,
      );
    }

    return () => {
      jsonEditorRef.current?.destroy();
    };
  }, [json]);

  return <div id="jsoneditor" className={className} ref={containerRef} />;
};
