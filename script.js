const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}

boxes.forEach(box => mouseHandler(box))

function mouseHandler(box) {
    box.addEventListener('mouseover', (e) => {
        box.classList.add('boxColor')

    });
    box.addEventListener('mouseout', (e) => {
        setTimeout(function () {
            box.classList.remove('boxColor');
        }, 500);
    });
    // box.addEventListener('mouseout', (e) => {
    //     box.classList.remove('boxColor')
    // });
}

// https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect