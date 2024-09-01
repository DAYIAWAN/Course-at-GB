document.addEventListener('DOMContentLoaded', () => {
    fetch('data/classes.json')
        .then(response => response.json())
        .then(data => displayClasses(data));

    function displayClasses(classes) {
        const classesContainer = document.getElementById('classes');
        classesContainer.innerHTML = '';

        classes.forEach((classItem, index) => {
            const classCard = document.createElement('div');
            classCard.classList.add('card', 'mb-3');
            classCard.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${classItem.name}</h5>
                    <p class="card-text">Время: ${classItem.time}</p>
                    <p class="card-text">Максимум участников: ${classItem.maxParticipants}</p>
                    <p class="card-text">Записано участников: <span id="current-${index}">${classItem.currentParticipants}</span></p>
                    <button class="btn btn-primary" id="enroll-${index}">Записаться</button>
                    <button class="btn btn-danger" id="cancel-${index}">Отменить запись</button>
                </div>
            `;
            classesContainer.appendChild(classCard);

            updateButtons(classItem, index);
        });
    }

    function updateButtons(classItem, index) {
        const enrollButton = document.getElementById(`enroll-${index}`);
        const cancelButton = document.getElementById(`cancel-${index}`);
        const currentParticipantsElem = document.getElementById(`current-${index}`);
        
        enrollButton.disabled = classItem.currentParticipants >= classItem.maxParticipants;
        cancelButton.disabled = classItem.currentParticipants <= 0;

        enrollButton.addEventListener('click', () => {
            if (classItem.currentParticipants < classItem.maxParticipants) {
                classItem.currentParticipants++;
                currentParticipantsElem.textContent = classItem.currentParticipants;
                updateButtons(classItem, index);
            }
        });

        cancelButton.addEventListener('click', () => {
            if (classItem.currentParticipants > 0) {
                classItem.currentParticipants--;
                currentParticipantsElem.textContent = classItem.currentParticipants;
                updateButtons(classItem, index);
            }
        });
    }
});
