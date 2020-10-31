/**
 * Create a input element for user to upload image, then get thumbnail url and file object.
 * @returns Promise<ThumbnailAndFile>
 */
export default function (): Promise<ThumbnailAndFile> {
    const theInput = createInput()
    theInput.click()
    theInput.remove()

    return new Promise(function (resolve, reject) {
        theInput.addEventListener('change', function () {
            const file = (this.files as FileList)[0]

            if (!isTypeFit(file))
                reject('Sorry, but we only accept .png, .jepg, and .jpg.')

            if (!isSizeFit(file))
                reject('Sorry, but the size is over 10 MB.')

            const thumbnailUrl = URL.createObjectURL(file)
            resolve({ thumbnailUrl, file })
        })
    })
}

function createInput() {
    const theInput = document.createElement('input')
    Object.entries(attributes).forEach((e) => {
        theInput.setAttribute(e[0], e[1])
    })
    return theInput
}
function isTypeFit(file: File): boolean {
    const acceptType = 'image/png, image/jpeg, image/jpg'
    return acceptType.search(file.type) !== -1
}
function isSizeFit(file: File): boolean {
    return file.size < 10485760
}
const attributes = {
    type: 'file',
    accept: "image/png, image/jpeg, image/jpg"
}

interface ThumbnailAndFile {
    thumbnailUrl: string;
    file: File | undefined;
}
