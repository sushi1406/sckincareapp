document.addEventListener('DOMContentLoaded', () => {
    const tips = [
        "Wash your face twice a day.",
        "Use a moisturizer that suits your skin type.",
        "Don't forget to apply sunscreen daily.",
        "Stay hydrated by drinking plenty of water.",
        "Eat a balanced diet rich in fruits and vegetables."
    ];

    const tipsList = document.getElementById('tips-list');

    tips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => {
            tipsList.removeChild(li);
        };

        li.appendChild(deleteButton);
        tipsList.appendChild(li);
    });

    document.getElementById('new-tip').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTip();
        }
    });
});

function addTip() {
    const tipInput = document.getElementById('new-tip');
    const tipText = tipInput.value.trim();

    if (tipText !== "") {
        const tipsList = document.getElementById('tips-list');

        const li = document.createElement('li');
        li.textContent = tipText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => {
            tipsList.removeChild(li);
        };

        li.appendChild(deleteButton);
        tipsList.appendChild(li);

        tipInput.value = '';
        tipInput.focus();
    }
}
