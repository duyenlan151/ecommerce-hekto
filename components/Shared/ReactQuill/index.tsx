import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
// const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
// import { Quill } from 'react-quill';
import ImageResize from 'quill-image-resize-module-react';
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

export interface ReactQuillProps {}

var toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'], // toggled buttons
  ['blockquote', 'code-block', 'image'],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
  [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
  [{ direction: 'rtl' }], // text direction

  [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }, { align: [] }],
  ['clean'], // remove formatting button
];
const modules = {
  toolbar: toolbarOptions,
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
];

export default function ReactQuillCommon(props: ReactQuillProps) {
  const [value, setValue] = useState('');
  return (
    <div>
      {/* <ReactQuill modules={modules} theme="snow" value={value} onChange={setValue} /> */}
      <label
        htmlFor="editor"
        className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
      >
        Short Description
      </label>
      <QuillNoSSRWrapper
        modules={modules}
        formats={formats}
        theme="snow"
        onChange={(content) => {
          // var htmlToRtf = require('html-to-rtf');
          console.log('CONTETN: ', content);
        }}
      />
      {/* <div id="editor" className="min-h-[300px]"></div> */}
    </div>
  );
}
