// pages/html-attributes.js

import React from 'react';

const HtmlAttributesTable = () => {
  const htmlAttributes = [
    { attribute: 'accept', description: 'Specifies the types of files that the server accepts.' },
    { attribute: 'accept-charset', description: 'Specifies the character encodings that are to be used.' },
    { attribute: 'accesskey', description: 'Specifies a shortcut key to activate/focus an element.' },
    { attribute: 'action', description: 'Specifies where to send the form data when a form is submitted.' },
    { attribute: 'align', description: 'Specifies the alignment of an element.' },
    { attribute: 'alt', description: 'Specifies an alternate text for an image if the image cannot be displayed.' },
    { attribute: 'autocomplete', description: 'Specifies whether a form should have autocomplete enabled or not.' },
    { attribute: 'autofocus', description: 'Specifies that the input field should automatically get focus when the page loads.' },
    { attribute: 'autoplay', description: 'Specifies that the audio/video should start playing as soon as it is ready.' },
    { attribute: 'background', description: 'Specifies the background image for an element.' },
    { attribute: 'border', description: 'Specifies the width of the border of an element.' },
    { attribute: 'charset', description: 'Specifies the character encoding for a script.' },
    { attribute: 'checked', description: 'Specifies that an option in a radio button or checkbox is selected.' },
    { attribute: 'cite', description: 'Specifies a URL to a document that provides a citation for the content.' },
    { attribute: 'class', description: 'Specifies one or more class names for an element.' },
    { attribute: 'color', description: 'Specifies the color of text.' },
    { attribute: 'cols', description: 'Specifies the number of columns in a <textarea>.' },
    { attribute: 'colspan', description: 'Specifies the number of columns a cell should span.' },
    { attribute: 'content', description: 'Specifies the content of a <meta> tag.' },
    { attribute: 'contenteditable', description: 'Specifies whether the content of an element is editable.' },
    { attribute: 'controls', description: 'Specifies that audio/video controls should be displayed.' },
    { attribute: 'coords', description: 'Specifies the coordinates of an area in an image map.' },
    { attribute: 'data-* attributes', description: 'Used to store custom data private to the page or application.' },
    { attribute: 'datetime', description: 'Specifies the date and time.' },
    { attribute: 'default', description: 'Specifies the default option in a list of choices.' },
    { attribute: 'defer', description: 'Specifies that the script should be executed when the page has finished parsing.' },
    { attribute: 'dir', description: 'Specifies the text direction for the content in an element.' },
    { attribute: 'dirname', description: 'Submits the text direction of an input field.' },
    { attribute: 'disabled', description: 'Specifies that an element is disabled.' },
    { attribute: 'download', description: 'Specifies that the target will be downloaded when a user clicks on the hyperlink.' },
    { attribute: 'draggable', description: 'Specifies whether an element is draggable or not.' },
    { attribute: 'enctype', description: 'Specifies how the form-data should be encoded when submitting it to the server.' },
    { attribute: 'for', description: 'Specifies which form element a label is bound to.' },
    { attribute: 'form', description: 'Specifies the form the element belongs to.' },
    { attribute: 'formaction', description: 'Specifies the URL for form submission.' },
    { attribute: 'headers', description: 'Specifies the headers for a table cell.' },
    { attribute: 'height', description: 'Specifies the height of an element.' },
    { attribute: 'hidden', description: 'Specifies that an element is not yet, or is no longer, relevant.' },
    { attribute: 'high', description: 'Specifies the range that is considered to be a high value.' },
    { attribute: 'href', description: 'Specifies the URL of a link.' },
    { attribute: 'hreflang', description: 'Specifies the language of the linked document.' },
    { attribute: 'http-equiv', description: 'Provides an HTTP header for the information/value of the content attribute.' },
    { attribute: 'id', description: 'Specifies a unique id for an element.' },
    { attribute: 'ismap', description: 'Specifies an image as a server-side image map.' },
    { attribute: 'kind', description: 'Specifies the kind of text track.' },
    { attribute: 'label', description: 'Specifies a label for an option in a drop-down list.' },
    { attribute: 'lang', description: 'Specifies the language of the element\'s content.' },
    { attribute: 'list', description: 'Specifies the id of a <datalist> element.' },
    { attribute: 'loop', description: 'Specifies that the media should start over again when it reaches the end.' },
    { attribute: 'low', description: 'Specifies the range that is considered to be a low value.' },
    { attribute: 'max', description: 'Specifies the maximum value.' },
    { attribute: 'maxlength', description: 'Specifies the maximum number of characters allowed in an input field.' },
    { attribute: 'media', description: 'Specifies what media/device the linked document is optimized for.' },
    { attribute: 'method', description: 'Specifies the HTTP method to be used when submitting the form.' },
    { attribute: 'min', description: 'Specifies the minimum value.' },
    { attribute: 'multiple', description: 'Specifies that multiple options can be selected at once.' },
    { attribute: 'muted', description: 'Specifies that the audio output should be muted.' },
    { attribute: 'name', description: 'Specifies the name of an element.' },
    { attribute: 'novalidate', description: 'Specifies that the form should not be validated when submitted.' },
    { attribute: 'open', description: 'Specifies that the details should be visible to the user.' },
    { attribute: 'optimum', description: 'Specifies the optimal value of something.' },
    { attribute: 'pattern', description: 'Specifies a regular expression to check the input value against.' },
    { attribute: 'placeholder', description: 'Specifies a short hint that describes the expected value of an input field.' },
    { attribute: 'poster', description: 'Specifies an image to be shown while the video is downloading, or until the user hits the play button.' },
    { attribute: 'preload', description: 'Specifies if and how the author thinks the media file should be loaded when the page loads.' },
    { attribute: 'readonly', description: 'Specifies that the input field is read-only.' },
    { attribute: 'rel', description: 'Specifies the relationship between the current document and the linked document.' },
    { attribute: 'required', description: 'Specifies that the input field must be filled out before submitting the form.' },
    { attribute: 'reversed', description: 'Specifies that the list order should be reversed.' },
    { attribute: 'rows', description: 'Specifies the number of visible text lines in a <textarea>.' },
    { attribute: 'rowspan', description: 'Specifies the number of rows a cell should span.' },
    { attribute: 'sandbox', description: 'Specifies an extra set of restrictions for the content in an iframe.' },
    { attribute: 'scope', description: 'Specifies whether a header cell is a header for a row, column, or group of rows or columns.' },
    { attribute: 'selected', description: 'Specifies that an option should be pre-selected when the page loads.' },
    { attribute: 'shape', description: 'Specifies the shape of a clickable area in an image map.' },
    { attribute: 'size', description: 'Specifies the size of an input field.' },
    { attribute: 'sizes', description: 'Specifies the sizes of the icons.' },
    { attribute: 'span', description: 'Specifies the number of columns a cell should span.' },
    { attribute: 'spellcheck', description: 'Specifies whether the element is to have its spelling and grammar checked or not.' },
    { attribute: 'src', description: 'Specifies the URL of the image, script, iframe, or media file.' },
    { attribute: 'srcdoc', description: 'Specifies the HTML content of an iframe.' },
    { attribute: 'srclang', description: 'Specifies the language of the track text.' },
    { attribute: 'srcset', description: 'Specifies a list of possible image sources for an image.' },
    { attribute: 'start', description: 'Specifies the start value of an ordered list.' },
    { attribute: 'step', description: 'Specifies the legal number intervals for an input field.' },
    { attribute: 'style', description: 'Specifies inline CSS styles for an element.' },
    { attribute: 'tabindex', description: 'Specifies the tab order of an element.' },
    { attribute: 'target', description: 'Specifies where to open the linked document.' },
    { attribute: 'title', description: 'Specifies extra information about an element.' },
    { attribute: 'translate', description: 'Specifies whether the content of an element should be translated or not.' },
    { attribute: 'type', description: 'Specifies the type of the element.' },
    { attribute: 'usemap', description: 'Specifies an image map to be used with an image.' },
    { attribute: 'value', description: 'Specifies the value of an input element.' },
    { attribute: 'width', description: 'Specifies the width of an element.' },
    { attribute: 'wrap', description: 'Specifies how the text in a textarea should be wrapped.' },
  ];

  return (
    <div>
      <h1>HTML Attributes List</h1>
      <table>
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {htmlAttributes.map((attr, index) => (
            <tr key={index}>
              <td>{attr.attribute}</td>
              <td>{attr.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <style jsx>{`
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 8px;
        }
        th {
          background-color: #f4f4f4;
        }
        tr:nth-child(even) {
          background-color: #f9f9f9;
        }
        tr:hover {
          background-color: #f1f1f1;
        }
      `}</style>
    </div>
  );
};

export default HtmlAttributesTable;
