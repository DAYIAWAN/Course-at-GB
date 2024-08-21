<?php include 'header.php'; ?>

<table>
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Actions</th>
    </tr>
    <?php foreach ($users as $user): ?>
        <tr>
            <td><?php echo htmlspecialchars($user->id); ?></td>
            <td><?php echo htmlspecialchars($user->name); ?></td>
            <td><?php echo htmlspecialchars($user->email); ?></td>
            <td>
                <?php if ($currentUser->role === 'admin'): ?>
                    <a href="user.php?id=<?php echo htmlspecialchars($user->id); ?>">Edit</a>
                    <a href="javascript:void(0);" class="delete-user" data-id="<?php echo htmlspecialchars($user->id); ?>">Delete</a>
                <?php endif; ?>
            </td>
        </tr>
    <?php endforeach; ?>
</table>

<?php include 'footer.php'; ?>

<script>
    document.querySelectorAll('.delete-user').forEach(function(element) {
        element.addEventListener('click', function() {
            if (confirm('Are you sure you want to delete this user?')) {
                var userId = this.getAttribute('data-id');
                var xhr = new XMLHttpRequest();
                xhr.open('POST', 'user.php?action=delete', true);
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                        // Успешное удаление пользователя
                        location.reload();
                    }
                };
                xhr.send('id=' + userId);
            }
        });
    });
</script>
