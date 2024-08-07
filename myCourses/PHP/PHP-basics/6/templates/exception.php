<!DOCTYPE html>
<html>
<head>
    <title>Error</title>
</head>
<body>
    <h1>An error occurred</h1>
    <p><?php echo htmlspecialchars($e->getMessage()); ?></p>
</body>
</html>