import { OutputData } from '@editorjs/editorjs/types/data-formats';
import {useUserStore} from "@/stores/user.js";

type TransformPostData = {
    title: string,
    content: OutputData,
    user_id: any
}

const useTransformPostData = (postData: OutputData): TransformPostData => {
    const title = postData.blocks.splice(0, 1)[0].data.text
    return { title: title, content: postData }
}

export default useTransformPostData;