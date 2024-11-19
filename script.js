const buttonClicker = document.getElementById('button')

const arr = ['yle', 'muteli', 'yba', 'fuchaki', 'richaki', 'richardi', 'orchitali']

buttonClicker.addEventListener("click", () => {
    const random = Math.floor(Math.random() * arr.length)
    document.getElementById('remember').textContent = arr[random];
})