const topLeftBorderValue = document.getElementsByClassName('btn-top-left')[0].getElementsByTagName('input')[0];
const topRightBorderValue = document.getElementsByClassName('btn-top-right')[0].getElementsByTagName('input')[0];
const bottomLeftBorderValue = document.getElementsByClassName('btn-bottom-left')[0].getElementsByTagName('input')[0];
const bottomRightBorderValue = document.getElementsByClassName('btn-bottom-right')[0].getElementsByTagName('input')[0];
const copyButton = document.getElementsByClassName('btn-copy')[0];
const clipboard = document.getElementsByClassName('clipboard')[0].getElementsByTagName('textarea')[0];
const card = document.getElementsByClassName('card')[0];

function setClipboardValues() {
    clipboard.value =
        'border-top-left-radius: ' +
        card.style.borderTopLeftRadius +
        ';\n' +
        'border-top-right-radius: ' +
        card.style.borderTopRightRadius +
        ';\n' +
        'border-bottom-left-radius: ' +
        card.style.borderBottomLeftRadius +
        ';\n' +
        'border-bottom-right-radius: ' +
        card.style.borderBottomRightRadius +
        ';\n';
}

this.addEventListener('load', () => {
    card.style.borderTopLeftRadius = 0;
    card.style.borderTopRightRadius = 0;
    card.style.borderBottomLeftRadius = 0;
    card.style.borderBottomRightRadius = 0;
});

topLeftBorderValue.addEventListener('keyup', () => {
    card.style.borderTopLeftRadius = topLeftBorderValue.value;
    setClipboardValues();
});

topRightBorderValue.addEventListener('keyup', () => {
    card.style.borderTopRightRadius = topRightBorderValue.value;
    setClipboardValues();
});

bottomLeftBorderValue.addEventListener('keyup', () => {
    card.style.borderBottomLeftRadius = bottomLeftBorderValue.value;
    setClipboardValues();
});

bottomRightBorderValue.addEventListener('keyup', () => {
    card.style.borderBottomRightRadius = bottomRightBorderValue.value;
    setClipboardValues();
});

copyButton.addEventListener('click', () => {
    clipboard.select();
    clipboard.setSelectionRange(0, 99999);

    document.execCommand('copy');

    if (this.getSelection()) {
        this.getSelection().removeAllRanges();
    } else if (document.getSelection()) {
        document.getSelection().empty();
    }
});
