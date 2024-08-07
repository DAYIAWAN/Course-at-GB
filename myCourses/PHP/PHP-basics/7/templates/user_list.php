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
                <a href="user.php?id=<?php echo htmlspecialchars($user->id); ?>">Edit</a>
                <a href="user.php?action=delete&id=<?php echo htmlspecialchars($user->id); ?>">Delete</a>
            </td>
        </tr>
    <?php endforeach; ?>
</table>
<?php include 'footer.php'; ?>
