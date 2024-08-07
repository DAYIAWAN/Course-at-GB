function power($val, $pow) {
    if ($pow == 0) {
        return 1;
    }
    return $val * power($val, $pow - 1);
}
