import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { editorToolbarConfig } from '../../utility/editorHelper'

const CommonEditor = ({ editorState, onChange, height = 200, placeholder }) => {
  return (
    <div className="border rounded">
      <Editor
        editorState={editorState}
        onEditorStateChange={onChange}
        toolbar={editorToolbarConfig}
        toolbarClassName="border-bottom"
        editorClassName="px-2"
        placeholder={placeholder}
        editorStyle={{ minHeight: height }}
      />
    </div>
  )
}

export default CommonEditor
