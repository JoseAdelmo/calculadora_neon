const mostrar_resultado = document.querySelector('.result')
const mostrar_caracteres_digitados = document.querySelector('.typed-nums')
const nums = document.querySelectorAll('button[data-char="num"]')
const chars = document.querySelectorAll('button[data-char="char"]')
const equal_btn = document.querySelector('.equal-char')

nums.forEach(num => {
    num.addEventListener('click', () => {
        mostrar_caracteres_digitados.innerText += num.innerText
    })
})
chars.forEach(char => {
    char.addEventListener('click', () => {
        mostrar_caracteres_digitados.innerText += char.innerText

        if (mostrar_caracteres_digitados.innerText[0] == char.innerText) {
            mostrar_caracteres_digitados.innerText = ''
        }
    })
})

equal_btn.addEventListener('click', () => {
    mostrar_resultado.innerText = eval(mostrar_caracteres_digitados.innerText)
})