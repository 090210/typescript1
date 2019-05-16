class Person {
    public voornaam: string;
    public achternaam: string;
    public leeftijd: number;
    public getrouwd: boolean;

    constructor(voornaam: string, achternaam: string, leeftijd: number, getrouwd: boolean){
        this.voornaam = voornaam;
        this.achternaam = achternaam;
        this.leeftijd = leeftijd;
        this.getrouwd = getrouwd;
    }

}

var Ahmed = new Person('Ahmed', 'Yako', 12, false);
var Jantje = new Person('Jantje', 'Yako', 20, true);

alert(Jantje.voornaam + ' ' + Jantje.achternaam + ' ' + Jantje.leeftijd + ' ' + Jantje.getrouwd);
