document.getElementById("info-toggler").addEventListener('click', () => {
    document.getElementById("info").classList.toggle('hide')
    document.getElementById("info-s").classList.toggle('d-none')
    document.getElementById("info-h").classList.toggle('d-none')
})

document.getElementById("left-menu-toggler").addEventListener('click', () => {
    document.getElementById("leftMenu").classList.toggle('hide')
    document.getElementById("opn1").classList.toggle('d-none')
    document.getElementById("cls1").classList.toggle('d-none')
    const condition = document.getElementById("opn2").classList.contains('d-none');
    if (condition == true) {
        document.getElementById("opn2").classList.remove('d-none')
        document.getElementById("cls2").classList.add('d-none')
        document.getElementById("rigtMenu").classList.add('hide')
    }
})

document.getElementById("right-menu-toggler").addEventListener('click', () => {
    document.getElementById("rigtMenu").classList.toggle('hide')
    document.getElementById("opn2").classList.toggle('d-none')
    document.getElementById("cls2").classList.toggle('d-none')
    const condition = document.getElementById("opn1").classList.contains('d-none');
    if (condition == true) {
        document.getElementById("opn1").classList.remove('d-none')
        document.getElementById("cls1").classList.add('d-none')
        document.getElementById("leftMenu").classList.add('hide')
    }
})