 function checkMagicString(value) {
            const magicString = "ASIS{🎈🍻💃🌃🎆🎇🍾🎉🎊🍷🍸🍹🍺🏙️🍆🗻🥃🥂🕺🌉🕛🥳👯}";

            if (value === magicString) {
                showNewYearEffect();
            } else {
                hideNewYearEffect();
            }
        }

        function showNewYearEffect() {
            const newYearEffect = document.getElementById("newYearEffect");
            newYearEffect.style.display = "block";
            setTimeout(() => {
                hideNewYearEffect();
            }, 5000); // Hide the effect after 5 seconds
        }

        function hideNewYearEffect() {
            const newYearEffect = document.getElementById("newYearEffect");
            newYearEffect.style.display = "none";
        }
