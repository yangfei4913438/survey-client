// 问卷编辑器组件类型对象
export const editorComponentTypes = {
  header: 'editor_header',
  title: 'editor_title',
  paragraph: 'editor_paragraph',
  input: 'editor_input',
  textarea: 'editor_textarea',
  radio: 'editor_radio',
  checkbox: 'editor_checkbox',
};

// 可以被提交数据的字段类型
export const formDataTypes = [
  editorComponentTypes.input,
  editorComponentTypes.textarea,
  editorComponentTypes.radio,
  editorComponentTypes.checkbox,
];
