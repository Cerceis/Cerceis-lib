export const CopyToClipboard = (textToCopy: string): void =>{
    navigator.clipboard.writeText(textToCopy);
}