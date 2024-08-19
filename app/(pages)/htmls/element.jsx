import React from 'react';

const HtmlElementsTable = () => {
  const htmlElements = [
    // Document Metadata
    { element: '<head>', description: 'Container for metadata.' },
    { element: '<title>', description: 'Document title.' },
    { element: '<base>', description: 'Base URL for relative URLs.' },
    { element: '<link>', description: 'External resource link.' },
    { element: '<meta>', description: 'Metadata about the document.' },
    { element: '<style>', description: 'Internal CSS styles.' },
    { element: '<script>', description: 'JavaScript code.' },
    
    // Sectioning
    { element: '<body>', description: "Document's body." },
    { element: '<article>', description: 'Independent piece of content.' },
    { element: '<section>', description: 'Thematic grouping of content.' },
    { element: '<nav>', description: 'Navigation links.' },
    { element: '<aside>', description: 'Sidebar or content indirectly related.' },
    { element: '<header>', description: 'Introductory content or navigational links.' },
    { element: '<footer>', description: 'Footer for a section or page.' },
    { element: '<main>', description: 'Main content of the document.' },

    // Grouping Content
    { element: '<div>', description: 'Generic container.' },
    { element: '<p>', description: 'Paragraph.' },
    { element: '<hr>', description: 'Thematic break (horizontal rule).' },
    { element: '<pre>', description: 'Preformatted text.' },
    { element: '<blockquote>', description: 'Block of quoted text.' },
    { element: '<ol>', description: 'Ordered list.' },
    { element: '<ul>', description: 'Unordered list.' },
    { element: '<li>', description: 'List item.' },
    { element: '<dl>', description: 'Description list.' },
    { element: '<dt>', description: 'Term/name in a description list.' },
    { element: '<dd>', description: 'Description/value of a term.' },
    { element: '<figure>', description: 'Self-contained content (e.g., images, diagrams).' },
    { element: '<figcaption>', description: 'Caption for a figure.' },
    { element: '<address>', description: 'Contact information.' },
    { element: '<h1>', description: 'Heading 1.' },
    { element: '<h2>', description: 'Heading 2.' },
    { element: '<h3>', description: 'Heading 3.' },
    { element: '<h4>', description: 'Heading 4.' },
    { element: '<h5>', description: 'Heading 5.' },
    { element: '<h6>', description: 'Heading 6.' },

    // Text Content
    { element: '<span>', description: 'Generic inline container.' },
    { element: '<a>', description: 'Hyperlink.' },
    { element: '<em>', description: 'Emphasized text (usually italic).' },
    { element: '<strong>', description: 'Important text (usually bold).' },
    { element: '<small>', description: 'Small print.' },
    { element: '<s>', description: 'Strikethrough text.' },
    { element: '<cite>', description: 'Citation/reference to a source.' },
    { element: '<q>', description: 'Inline quotation.' },
    { element: '<dfn>', description: 'Definition of a term.' },
    { element: '<abbr>', description: 'Abbreviation or acronym.' },
    { element: '<time>', description: 'Date/time.' },
    { element: '<code>', description: 'Inline code snippet.' },
    { element: '<var>', description: 'Variable.' },
    { element: '<samp>', description: 'Sample output.' },
    { element: '<kbd>', description: 'User input.' },
    { element: '<sub>', description: 'Subscript.' },
    { element: '<sup>', description: 'Superscript.' },
    { element: '<i>', description: 'Italic text.' },
    { element: '<b>', description: 'Bold text.' },
    { element: '<u>', description: 'Underlined text.' },
    { element: '<mark>', description: 'Marked/highlighted text.' },
    { element: '<bdi>', description: 'Isolates a part of text for bidirectional text formatting.' },
    { element: '<bdo>', description: 'Overrides the current text direction.' },
    { element: '<br>', description: 'Line break.' },
    { element: '<wbr>', description: 'Word break opportunity.' },

    // Edits
    { element: '<ins>', description: 'Inserted text.' },
    { element: '<del>', description: 'Deleted text.' },

    // Embedded Content
    { element: '<img>', description: 'Image.' },
    { element: '<iframe>', description: 'Inline frame (a nested browsing context).' },
    { element: '<embed>', description: 'Embedded external content.' },
    { element: '<object>', description: 'Container for external resources.' },
    { element: '<param>', description: 'Parameters for <object>.' },
    { element: '<video>', description: 'Video content.' },
    { element: '<audio>', description: 'Audio content.' },
    { element: '<source>', description: 'Media resource for <video> or <audio>.' },
    { element: '<track>', description: 'Text tracks for media elements like <video> and <audio>.' },
    { element: '<map>', description: 'Image map.' },
    { element: '<area>', description: 'Area inside an image map.' },
    { element: '<svg>', description: 'Scalable Vector Graphics.' },
    { element: '<math>', description: 'Mathematical expressions.' },

    // Scripting
    { element: '<script>', description: 'Embedded or external script.' },
    { element: '<noscript>', description: 'Fallback content for non-scripted environments.' },
    { element: '<canvas>', description: 'Canvas for 2D drawing.' },

    // Table Content
    { element: '<table>', description: 'Table container.' },
    { element: '<caption>', description: 'Table caption.' },
    { element: '<colgroup>', description: 'Group of columns.' },
    { element: '<col>', description: 'Column within a <colgroup>.' },
    { element: '<tbody>', description: 'Group of table rows.' },
    { element: '<thead>', description: 'Table header group.' },
    { element: '<tfoot>', description: 'Table footer group.' },
    { element: '<tr>', description: 'Table row.' },
    { element: '<td>', description: 'Table cell (data).' },
    { element: '<th>', description: 'Table header cell.' },

    // Forms
    { element: '<form>', description: 'Form container.' },
    { element: '<label>', description: 'Label for an input element.' },
    { element: '<input>', description: 'Input control.' },
    { element: '<button>', description: 'Clickable button.' },
    { element: '<select>', description: 'Drop-down list.' },
    { element: '<datalist>', description: 'List of predefined options for input control.' },
    { element: '<optgroup>', description: 'Group of options within a <select>.' },
    { element: '<option>', description: 'Option in a drop-down list.' },
    { element: '<textarea>', description: 'Multi-line text input.' },
    { element: '<output>', description: 'Result of a calculation.' },
    { element: '<progress>', description: 'Progress indicator.' },
    { element: '<meter>', description: 'Measurement.' },
    { element: '<fieldset>', description: 'Group of related elements in a form.' },
    { element: '<legend>', description: 'Caption for <fieldset>.' },

    // Interactive Elements
    { element: '<details>', description: 'Disclosure widget for additional content.' },
    { element: '<summary>', description: 'Summary for <details>.' },
    { element: '<dialog>', description: 'Dialog box or window.' },

    // Web Components
    { element: '<slot>', description: 'Placeholder inside a web component.' },
    { element: '<template>', description: 'Template for reusable content fragments.' },

    // Deprecated Elements
    { element: '<acronym>', description: 'Deprecated in HTML5; use <abbr> instead.' },
    { element: '<applet>', description: 'Deprecated in HTML5; use <object> instead.' },
    { element: '<basefont>', description: 'Deprecated in HTML5; use CSS instead.' },
    { element: '<big>', description: 'Deprecated in HTML5; use CSS instead.' },
    { element: '<blink>', description: 'Non-standard element, avoid using it.' },
    { element: '<center>', description: 'Deprecated in HTML5; use CSS instead.' },
    { element: '<font>', description: 'Deprecated in HTML5; use CSS instead.' },
    { element: '<frame>', description: 'Deprecated in HTML5; use <iframe> instead.' },
    { element: '<frameset>', description: 'Deprecated in HTML5.' },
    { element: '<marquee>', description: 'Non-standard element, avoid using it.' },
    { element: '<noframes>', description: 'Deprecated in HTML5.' },
    { element: '<tt>', description: 'Deprecated in HTML5; use CSS instead.' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>HTML Elements and Descriptions</h1>
      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Element</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {htmlElements.map((item, index) => (
            <tr key={index}>
              <td>{item.element}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HtmlElementsTable;
