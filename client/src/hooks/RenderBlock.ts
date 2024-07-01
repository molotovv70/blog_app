export const renderBlock = (block: any) => {
    switch (block.type) {
        case 'paragraph':
            return `<p>${block.data.text}</p>`
        case 'header':
            return `<h1>${block.data.text}</h1>`
        default:
            return ''
    }
}
