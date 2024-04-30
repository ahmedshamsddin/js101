function ia_hijriCentury(hijriYear) {
    return hijriYear >= 1 ? Math.ceil(hijriYear / 100) : "ERROR";
}

console.log(ia_hijriCentury(101));

// Test case 1: ia_hijriCentury(101);
// Expected output: 2

// Test case 2: ia_hijriCentury(222);
// Expected output: 3

// Test case 3: ia_hijriCentury(-321);
// Expected output: ERROR

// Test case 4: ia_hijriCentury(1445);
// Expected output: 15