const items = document.querySelectorAll('.item');
console.log(items);

items.forEach(item => {
    item.addEventListener('mouseover', () => {
        removeFocus();
        item.classList.add('photo');
    })

    removeFocus = () => {
        items.forEach(item => {
            item.classList.remove('photo');
        })
    }
})