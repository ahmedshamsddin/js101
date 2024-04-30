function ia_hijriCentury(hijriYear) {
    hijriYear >= 1 ? console.log(Math.ceil(hijriYear / 100)) : console.log("ERROR");
}

ia_hijriCentury(101);