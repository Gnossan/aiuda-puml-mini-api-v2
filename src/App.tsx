import { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import { pumlExamples } from './utils/pumlExamples';
import { generatePlantUML } from './utils/aiGenerate';

function App() {
  const [code, setCode] = useState<string>(pumlExamples.sequence);
  const [prompt, setPrompt] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    const result = await generatePlantUML(prompt);
    setCode(result);
    setIsGenerating(false);
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
