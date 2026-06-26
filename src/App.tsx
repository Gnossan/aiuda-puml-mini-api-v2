import { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import { pumlExamples } from './utils/pumlExamples';

function App() {
  const [code, setCode] = useState<string>(pumlExamples.sequence);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Aiuda - PlantUML Renderer</h1>
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
