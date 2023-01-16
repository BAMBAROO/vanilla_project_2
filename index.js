const textarea = document.querySelector('textarea');
const fileNameInput = document.querySelector('.file-name input');
const selectMenu = document.querySelector('.save-as select');
const saveBtn = document.querySelector('.save-btn');
const p = document.querySelector('.p')

selectMenu.addEventListener("change", () => {
    const selectedOption = selectMenu.options[selectMenu.selectedIndex].text;
    p.innerHTML = selectedOption.split(" ")[0]
    console.log(selectedOption.split(" ")[0]);
});

saveBtn.addEventListener("click",() => {
    const blob = new Blob([textarea.value], {type:selectMenu.value});
    const fileUrl = URL.createObjectURL(blob);
    console.log(fileUrl);
    const link = document.createElement("a");
    link.download = fileNameInput.value;
    link.href = fileUrl;
    link.click();
});