<!DOCTYPE html>
<html>
<head>
    <title>Logs</title>
</head>
<body>
    <table>
        <thead>
            <tr>
                <th>Time</th>
                <th>Duration</th>
                <th>IP</th>
                <th>URL</th>
                <th>Method</th>
                <th>Input</th>
            </tr>
        </thead>
        <tbody>
            @foreach($logs as $log)
                <tr>
                    <td>{{ $log->time }}</td>
                    <td>{{ $log->duration }}</td>
                    <td>{{ $log->ip }}</td>
                    <td>{{ $log->url }}</td>
                    <td>{{ $log->method }}</td>
                    <td>{{ $log->input }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>
