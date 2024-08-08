<?php include 'header.php'; ?>
<?php
session_start();
?>
<?php if (isset($_SESSION['user'])): ?>
    <p>Hello, <?php echo htmlspecialchars($_SESSION['user']->name); ?>!</p>
    <a href="logout.php">Logout</a>
<?php else: ?>
    <form action="login.php" method="post">
        <input type="text" name="username" required placeholder="Username">
        <input type="password" name="password" required placeholder="Password">
        <input type="checkbox" name="remember_me"> Remember me
        <input type="submit" value="Login">
    </form>
<?php endif; ?>
<?php include 'footer.php'; ?>
