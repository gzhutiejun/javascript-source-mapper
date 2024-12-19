import { useState } from 'react';
import './App.css';

import { InputText } from 'primereact/inputtext';
import { Button } from "primereact/button";
import { readFileSync } from 'fs';
import { SourceMapConsumer } from 'source-map';
const App: React.FC = () => {
  const [filePath, setFilePath] = useState("");
  const handleSearch = () => {
    const rawSourceMap = readFileSync(filePath, "utf8");

    SourceMapConsumer.with(rawSourceMap, null, (consumer) => {
      const originalPosition = consumer.originalPositionFor({
        line: 21254,
        column: 99082,
      });
      console.log("original position = ", originalPosition);
    });
  }
  return (
    <>
      <div className="w-full">
        <div className="field">
          <label className="font-bold block mb-2">
            Enter JS Path
          </label>
          <InputText
            id="script-path"
            value={filePath}
            onChange={(e) => setFilePath(e.target.value)}
            className="w-full"
            placeholder="Path"
          />
        </div>
        <Button
          label="Search"
          icon="pi pi-arrow-right"
          iconPos="right"
          severity="info"
          disabled={!filePath}
          className="w-auto align-self-end"
          onClick={handleSearch}
        />
      </div>
    </>
  )
}

export default App
