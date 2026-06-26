import { getPlantUmlUrl } from '../utils/plantUML';

interface PreviewProps {
  code: string;
}

const Preview = ({ code }: PreviewProps) => {
  return (
    <img 
      src={getPlantUmlUrl(code)} 
      style={{ maxWidth: '100%', border: '1px solid #ccc', borderRadius: '4px' }}
    />
  );
};

export default Preview;
