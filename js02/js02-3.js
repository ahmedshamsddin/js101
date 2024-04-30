function ia_sumOfPositive(array) {
    return array.reduce((sum, current) => current > 0 ? sum + current : sum, 0);
}

// (for, while, do-while) التأكد من عدم استخدام أي نوع من الحلقات المتكررة 

// Test case 1: ia_sumOfPositive([-1, -2, -3, -4, -5]);
// Expected output: 0

// Test case 2: ia_sumOfPositive([1, -4, 12, 0, -3, 29, -150]);
// Expected output: 42

// Test case 3: ia_sumOfPositive([1, 2, 3, 4, 5]);
// Expected output: 15