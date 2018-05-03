var NumberOfWords = 38

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = 	"Ability-umiejętność"
words[2] =	"Able be able to do something - być w stanie coś zrobić"
words[3] =	"About o - około"
words[4] =	"Above - powyżej, nad"
words[5] =	"Abroad - za granicą"
words[6] =	"Absence - nieobecność"
words[7] =	"Absent - nieobecny"
words[8] =	"Accept - akceptować"
words[9] =	"Accident - wypadek"
words[10] =	 "According - według"
words[11] =	 "Account - konto; raport"
words[12] =	 "Accuse - oskarżać"
words[13] =	 "Ache - ból"
words[14] =	 "Acid - kwas"
words[15] =	 "Across - w poprzek"
words[16] =	 "Act - akt; grać; działać, postępować"
words[17] =	 "Action - działanie, akcja"
words[18] =	 "Active - aktywny"
words[19] =	 "Activity - działalność"
words[20] =	 "Actor - aktor"
words[21] =	 "Actress - aktorka"
words[22] =	 "Actual - faktyczny, rzeczywisty"
words[23] =	 "Actually - faktycznie, w rzeczywistości"
words[24] =	 "Add - dodawać"
words[25] =	 "Addition - dodatek; dodawanie"
words[26] =	 "Address - adres"
words[27] =	 "Admire - podziwiać"
words[28] =	 "Admit - wpuszczać, dopuszczać"
words[29] =	 "Adult - dorosły"
words[30] =	 "Advance - postęp; posuwać się naprzód"
words[31] =	 "Advantage - przewaga"
words[32] =	 "Adventure - przygoda"
words[33] =	 "Advertise - reklamować, ogłaszać"
words[34] =	 "Advertisement - reklama"
words[35] =	 "Advice - rada, porada"
words[36] =	 "Advise - doradzać"
words[37] =	 "Affair - sprawa"
words[38] =	 "Affect - oddziaływać, wpływać na coś"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.fiszki.value = words[rnd]
}
$(fiszki).autoResize();
