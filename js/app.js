var Person = /** @class */ (function () {
    function Person(voornaam, achternaam, leeftijd, getrouwd) {
        this.voornaam = voornaam;
        this.achternaam = achternaam;
        this.leeftijd = leeftijd;
        this.getrouwd = getrouwd;
    }
    return Person;
}());
var Ahmed = new Person('Ahmed', 'Yako', 12, false);
var Jantje = new Person('Jantje', 'Yako', 20, true);
alert(Jantje.voornaam + ' ' + Jantje.achternaam + ' ' + Jantje.leeftijd + ' ' + Jantje.getrouwd);
