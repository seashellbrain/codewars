<?php
function expanded_form(int $n): string {
    $digits = str_split((string)$n);
    $length = count($digits);
    $result = [];

    foreach ($digits as $index => $digit) {
        if ($digit != '0') {
            $result[] = $digit . str_repeat('0', $length - $index - 1);
        }
    }

    return implode(' + ', $result);
}
