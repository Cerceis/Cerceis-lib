export const copyToClipBoard = (textToCopy: string): void =>{
    navigator.clipboard.writeText(textToCopy);
}