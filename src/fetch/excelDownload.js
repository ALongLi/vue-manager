export function excelDownload(data, filename) {
  const blob = new Blob([data], { type: "application/octet-stream" });
  if (typeof window.navigator.msSaveBlob !== "undefined") {
    // hack old IE
    window.navigator.msSaveBlob(blob, filename);
  } else {
    const eleLink = document.createElement("a");
    const blobURL = window.URL.createObjectURL(blob);
    eleLink.style.display = "none";
    eleLink.href = blobURL;
    eleLink.setAttribute("download", filename);

    // hack HTML5 download attribute
    if (typeof eleLink.download === "undefined") {
      eleLink.setAttribute("target", "_blank");
    }
    document.body.appendChild(eleLink);
    eleLink.click();
    document.body.removeChild(eleLink);
    window.URL.revokeObjectURL(blobURL);
  }
}
