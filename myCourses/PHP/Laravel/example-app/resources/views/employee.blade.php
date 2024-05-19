<form name="employee-form" id="employee-form" method="post" action="{{ url('employee') }}">
    @csrf
    <label for="first_name">Имя работника:</label><br>
    <input type="text" id="first_name" name="first_name" required><br>
    <label for="last_name">Фамилия работника:</label><br>
    <input type="text" id="last_name" name="last_name" required><br>
    <label for="position">Занимаемая должность:</label><br>
    <input type="text" id="position" name="position" required><br>
    <label for="address">Адрес проживания:</label><br>
    <input type="text" id="address" name="address" required><br>
    <label for="additional_info">Дополнительная информация (JSON):</label><br>
    <textarea id="additional_info" name="additional_info" required></textarea><br>
    <input type="submit" value="Отправить">
</form>
