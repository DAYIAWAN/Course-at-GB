document.addEventListener("DOMContentLoaded", function () {
    const openPopupButton = document.getElementById("open-popup-button");
    const popup = document.getElementById("popup");
    const closePopupButton = document.getElementById("close-popup-button");
    const contactForm = document.getElementById("contact-form");

    openPopupButton.addEventListener("click", function () {
        popup.style.display = "block";
    });

    closePopupButton.addEventListener("click", function () {
        popup.style.display = "none";
    });

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Отправка данных формы на сервер
        const formData = new FormData(contactForm);
        fetch("process_form.php", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    alert("Сообщение успешно отправлено и добавлено в amoCRM.");
                    popup.style.display = "none";
                } else {
                    alert("Произошла ошибка при отправке сообщения.");
                }
            })
            .catch((error) => {
                console.error("Ошибка:", error);
                alert("Произошла ошибка при отправке сообщения.");
            });
    });
});