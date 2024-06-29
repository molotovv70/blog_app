import { OutputData } from '@editorjs/editorjs/types/data-formats';

type TransformPostData = {
    title: string,
    content: OutputData
}

const useTransformPostData = (postData: OutputData) => {
    const title = postData.blocks.splice(0, 1)[0].data.text
    return { title: title, content: postData }
}

export default useTransformPostData;