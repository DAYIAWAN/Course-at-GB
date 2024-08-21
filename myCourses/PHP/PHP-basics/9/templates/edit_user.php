<form action="update_user.php" method="POST">
    <input type="hidden" name="id" value="<?= $user['id'] ?>">
    <input type="text" name="name" value="<?= htmlspecialchars($user['name']) ?>">
    <input type="email" name="email" value="<?= htmlspecialchars($user['email']) ?>">
    <button type="submit">Сохранить</button>
</form>
