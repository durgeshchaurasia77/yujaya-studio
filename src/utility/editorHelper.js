// src/utility/editorHelper.js

export const editorToolbarConfig = {
  options: [
    'inline',
    'blockType',
    'fontSize',
    'fontFamily',
    'list',
    'textAlign',
    'colorPicker',
    'link',
    'image',
    'remove',
    'history'
  ],
  inline: {
    options: ['bold', 'italic', 'underline', 'strikethrough']
  },
  blockType: {
    options: ['Normal', 'H1', 'H2', 'Blockquote']
  },
  list: {
    options: ['unordered', 'ordered']
  },
  textAlign: {
    options: ['left', 'center', 'right', 'justify']
  },
  fontSize: {
    options: [8, 10, 12, 14, 16, 18, 24, 30]
  },
  fontFamily: {
    options: ['Sans Serif', 'Arial', 'Georgia', 'Tahoma', 'Impact']
  },
  image: {
    uploadEnabled: false,
    previewImage: true,
    alt: { present: true, mandatory: false }
  }
}
