interface EditorProps {
  code: string;
  onChange: (code: string) => void;
}

const Editor = ({ code, onChange }: EditorProps) => {
  return (
    <textarea
      value={code}
      onChange={(e) => onChange(e.target.value)}
      style={{ width: '100%', height: '300px', fontFamily: 'monospace', padding: '10px' }}
    />
  );
};

export default Editor;
