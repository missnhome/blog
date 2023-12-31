# Writeup 1: Happy New Year 2024

This is my writeup for a special event - Happy New Year 2024!

---

## Introduction

Blah blah blah...

---

## New Year's Eve Effect

```html
<script>
    window.onload = function () {
        checkMagicString("");
    };

    function checkMagicString(value) {
        const magicString = "ASIS{🎈🍻💃🌃🎆🎇🍾🎉🎊🍷🍸🍹🍺🏙️🍆🗻🥃🥂🕺🌉🕛🥳👯}";

        if (value === magicString) {
            showNewYearEffect();
        } else {
            hideNewYearEffect();
        }
    }

    function showNewYearEffect() {
        const newYearEffect = document.createElement('div');
        newYearEffect.innerHTML = '🎉🎊 Happy New Year 2024! 🎊🎉';
        newYearEffect.style.position = 'fixed';
        newYearEffect.style.top = '50%';
        newYearEffect.style.left = '50%';
        newYearEffect.style.transform = 'translate(-50%, -50%)';
        newYearEffect.style.fontSize = '24px';
        newYearEffect.style.color = '#fff';
        newYearEffect.style.backgroundColor = '#333';
        newYearEffect.style.padding = '20px';
        newYearEffect.style.borderRadius = '10px';
        newYearEffect.style.zIndex = '9999';

        document.body.appendChild(newYearEffect);

        setTimeout(function () {
            hideNewYearEffect(newYearEffect);
        }, 5000); // Hide the effect after 5 seconds
    }

    function hideNewYearEffect(element) {
        element.style.display = 'none';
    }
</script>
