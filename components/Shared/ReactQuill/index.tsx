import dynamic from 'next/dynamic';
import { useController } from 'react-hook-form';
import 'react-quill/dist/quill.snow.css';
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

export interface ReactQuillProps {
  name: string;
  label?: string;
  control?: any;
  onChange?: () => void;
  onBlur?: () => void;
  placeholder?: string;
  value?: string;
  className?: string;
  [name: string]: any;
}

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

export default function ReactQuillCommon({
  name,
  label,
  control,
  onChange: externalOnChange,
  onBlur: externalOnBlur,
  placeholder = 'Please enter',
  value: externaValue,
  className,
  ...rest
}: ReactQuillProps) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });
  return (
    <div>
      <label
        htmlFor="editor"
        className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
      >
        Short Description
      </label>
      {/* @ts-ignore */}
      <QuillNoSSRWrapper
        modules={modules}
        formats={formats}
        defaultValue={value}
        theme="snow"
        onChange={onChange}
      />

      {error?.message && (
        <span className="text-red-500 text-xs font-bold tracking-wide">{error?.message}</span>
      )}
    </div>
  );
}
