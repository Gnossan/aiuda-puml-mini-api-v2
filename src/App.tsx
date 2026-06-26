import { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import { pumlExamples } from './utils/pumlExamples';
import { generatePlantUML, explainPlantUML } from './utils/aiGenerate';
import { getPlantUmlUrl } from './utils/plantUML';

function App() {
  const [code, setCode] = useState<string>(pumlExamples.sequence);
  const [prompt, setPrompt] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [explanation, setExplanation] = useState<string>('');
  const [isExplaining, setIsExplaining] = useState<boolean>(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    const result = await generatePlantUML(prompt);
    setCode(result);
    setIsGenerating(false);
  };

  const handleExplain = async () => {
    setIsExplaining(true);
    const result = await explainPlantUML(code);
    setExplanation(result);
    setIsExplaining(false);
  };

  const handleExportSvg = async () => {
    const url = getPlantUmlUrl(code, 'svg');
    const response = await fetch(url);
    const blob = await response.blob();
    const downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'diagram.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(downloadUrl);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Aiuda - PlantUML Renderer</h1>
      
      <div style={{ backgroundColor: '#f0f0f0', padding: '15px', borderRadius: '8px', marginBottom: '16px' }}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your diagram..."
          style={{ width: '100%', padding: '8px', marginBottom: '8px', boxSizing: 'border-box' }}
        />
        <button onClick={handleGenerate} disabled={isGenerating}>
          {isGenerating ? 'Generating...' : 'Generate Diagram'}
        </button>
      </div>

      <div style={{ backgroundColor: '#e8f4f8', padding: '15px', borderRadius: '8px', marginBottom: '16px' }}>
        <button onClick={handleExplain} disabled={isExplaining}>
          {isExplaining ? 'Explaining...' : 'Explain Current Diagram'}
        </button>
        {explanation && (
          <div style={{ marginTop: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}>
            {explanation}
          </div>
        )}
      </div>

      <div style={{ backgroundColor: '#e8f8e8', padding: '15px', borderRadius: '8px', marginBottom: '16px' }}>
        <button onClick={handleExportSvg}>
          Export as SVG
        </button>
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        <Editor code={code} onChange={setCode} />
        <Preview code={code} />
      </div>
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <button onClick={() => setCode(pumlExamples.sequence)}>Sequence</button>
        <button onClick={() => setCode(pumlExamples.class)}>Class</button>
        <button onClick={() => setCode(pumlExamples.usecase)}>Use Case</button>
      </div>
    </div>
  );
}

export default App;
