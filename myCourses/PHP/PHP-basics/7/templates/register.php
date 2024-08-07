<?php include 'header.php'; ?>
<form action="user.php" method="post">
    <input type="text" name="name" required placeholder="Name">
    <input type="email" name="email" required placeholder="Email">
    <input type="password" name="password" required placeholder="Password">
    <input type="submit" value="Register">
</form>
<?php include 'footer.php'; ?>
