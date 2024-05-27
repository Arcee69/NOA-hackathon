export async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      await navigator.clipboard.writeText(text);
      alert("copied")
    } else {
      return document.execCommand('copy', true, text);
    }
  }