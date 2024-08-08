<?php include 'header.php'; ?>
<form action="user.php" method="post">
    <input type="hidden" name="id" value="<?php echo htmlspecialchars($user->id ?? ''); ?>">
    <input type="text" name="name" value="<?php echo htmlspecialchars($user->name ?? ''); ?>" required>
    <input type="email" name="email" value="<?php echo htmlspecialchars($user->email ?? ''); ?>" required>
    <input type="submit" value="<?php echo isset($user->id) ? 'Update' : 'Create'; ?>">
</form>
<?php include 'footer.php'; ?>
