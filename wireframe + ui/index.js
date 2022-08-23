function get(elementId) {
    return document.getElementById(elementId);
}

let open = get("menu-button")
let exit = get("exit-button")
let nav = get("nav")

open.addEventListener('click', () => {
    nav.classList.add('open-nav');
})
exit.addEventListener('click', () => {
    nav.classList.remove('open-nav');
})