import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
  const [editorText, setEditorText] = useState('');

  const defaultText = `
# Heading 1
## Heading 2
[GitHub Link](https://github.com/)
\`inline code\`
\`\`\`
code block
\`\`\`
- List item 1
- List item 2
> Blockquote
![Image](https://via.placeholder.com/150)
**Bold text**
  `;

  useEffect(() => {
    setEditorText(defaultText);
  }, []);

  const handleEditorChange = (e) => {
    setEditorText(e.target.value);
  };

  const renderMarkdown = () => {
    return { __html: marked(editorText) };
  };

  return (
    <div className="App">
      <div className="container">
        <div className="editor-container">
          <textarea
            id="editor"
            value={editorText}
            onChange={handleEditorChange}
            placeholder="Enter Markdown"
            rows="10"
            cols="50"
          ></textarea>
        </div>

        <div className="preview-container">
          <div
            id="preview"
            dangerouslySetInnerHTML={renderMarkdown()}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
