import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';

const createEditor = (holder: string) => {
    return new EditorJS({
        holder: holder,
        tools: {
            header: {
                class: Header,
                inlineToolbar: ['link']

            },
            list: {
                class: List,
                inlineToolbar: true
            },
        }
    });
};

export default createEditor
