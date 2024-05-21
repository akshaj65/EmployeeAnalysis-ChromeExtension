export const getSelectedText = () => {
    let selectedText = '';

    if (window.getSelection) {
        selectedText = window.getSelection().toString();
    } else if (document.selection && document.selection.type !== 'Control') {
        selectedText = document.selection.createRange().text;
    }
    return selectedText;
}

export const handleSlide = (direction) => {
    const panel = document.getElementById('panel');
    if (!panel) return;
    if (direction === 'left') {
        handleMinize('left')
        panel.classList.remove('moveRight');
    } else {
        handleMinize('right')
        panel.classList.add('moveRight');

    }
}
export const handleMinize = (direction) => {
    const leftArrow = document.getElementById('left_arrow');
    const rightArrow = document.getElementById('right_arrow');
    const closeMinimize = document.getElementById('closeMinimize');

    // Add 'hideButtons' class to leftArrow if direction is 'left', otherwise remove it
    if (leftArrow) {
        if (direction === 'left') {
            leftArrow.classList.add('hideButtons');
        } else {
            leftArrow.classList.remove('hideButtons');
        }
    }

    // Add or remove 'hideButtons' class from rightArrow based on direction
    if (rightArrow) {
        if (direction === 'left') {
            rightArrow.classList.remove('hideButtons');
        } else {
            rightArrow.classList.add('hideButtons');
        }
    }

    // Add or remove 'hideButtons' class from closeMinimize based on direction
    if (closeMinimize) {
        if (direction === 'left') {
            closeMinimize.classList.remove('hideButtons');
        } else {
            closeMinimize.classList.add('hideButtons');
        }
    }
};