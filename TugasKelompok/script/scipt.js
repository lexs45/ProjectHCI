let docTitle = document.title;
window.addEventListener("blur", () =>{
    document.title ="Sampai Berjumpa Kembali!";
})
window.addEventListener("focus", () =>{
    document.title = docTitle;
})