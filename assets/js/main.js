

//switch_case=======================================

//Lev2_5---------------------------------

let inputBund = document.getElementById('bundeslandInfo')
let outputBund = document.getElementById('bundeslandInfoErgebnis')

const check = () => {

    let bundesland = inputBund.value

    switch (bundesland) {
        case 'Baden Württemberg':
            outputBund.innerHTML = 'Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt'
            break;
        case 'Bayern':
            outputBund.innerHTML = 'Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt'
            break;
        case 'Berlin':
            outputBund.innerHTML = 'Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt'
            break;
        case 'Brandenburg':
            outputBund.innerHTML = 'Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt'
            break;

        case 'Bremen':
            outputBund.innerHTML = 'Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt'
            break;

        case 'Hamburg':
            outputBund.innerHTML = 'Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt'
            break;

        case 'Hessen':
            outputBund.innerHTML = 'Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt'
            break;
        case 'Mecklenburg Vorpommern':
            outputBund.innerHTML = 'Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt'
            break;

        case 'Niedersachsen':
            outputBund.innerHTML = 'Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt'
            break;
        case 'Nordrhein Westfalen':
            outputBund.innerHTML = 'Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt'
            break;
        case 'Rheinland Pfalz':
            outputBund.innerHTML = 'Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt'
            break;
        case 'Saarland':
            outputBund.innerHTML = 'Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt'
            break;
        case 'Sachsen':
            outputBund.innerHTML = 'Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt'
            break;

        case 'Sachsen Anhalt':
            outputBund.innerHTML = 'Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt'
            break;
        case 'Schleswig Holstein':
            outputBund.innerHTML = 'Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt'
            break;
        case 'Thüringen':
            outputBund.innerHTML = 'Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt'
            break;

        default:
            outputBund.innerHTML = 'Ein solches Bundesland gibt es in Deutschland nicht.'
    }
    // inputBund.value = ''

}

//Lev2_7----------------------------------

let mylist = document.getElementById('mylist')
let masse = document.getElementById('masse')

const showtxt = () => {
    switch (mylist.value) {
        case '0':
            masse.innerHTML = `<b>Brief und Postkarte</b> <br> L: 10 - 23,5 cm B: 7 - 12,5 cm H: bis 1 cm`
            break;

        case '1':
            masse.innerHTML = `<b>DHL Paket 2 kg</b> <br> bis 60 x 30 x 15 cm`
            break;

        case '2':
            masse.innerHTML = `<b>DHL Paket 5 kg</b> <br> bis 120 x 60 x 60 cm`
            break;
        case '3':
            masse.innerHTML = ` <b>DHL Paket 10 kg</b> <br> bis 120 x 60 x 60 cm "`
            break;

        default:
            masse.innerHTML = `  <b>Extra große Größe</b>`

    }
}

// Semi Horoskop======================================================================

let monat = document.getElementById('monat')
let img = document.getElementById('img')
let headline = document.getElementById('headline')
let description = document.getElementById('description')

let div = document.getElementById('show-horoskop')

const show = () => {
    div.style.boxShadow = '1px 2px 3px 2px #333'
    switch (monat.value) {

        case 'Mar':
            img.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_aries.png" alt="aries">`
            headline.innerHTML = 'Your Horoskop is ARIES'
            description.innerText = 'Today your patience might be tested when one or more of your projects gets put on hold by someone… '

            break;


        case 'Apr':
            img.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_taurus.png" alt="taurus">`
            headline.innerHTML = 'Your Horoskop is TAURUS'
            description.innerText = 'Your intense energy makes you a great candidate for a leadership position right now, so if you are…'
            break;

        case 'May':
            img.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_gemini.png" alt="gemini">`
            headline.innerHTML = 'Your Horoskop is GEMINI'
            description.innerText = `If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…
                `
            break;

        case 'Jun':
            img.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_cancer.png" alt="cancer">`
            headline.innerHTML = 'Your Horoskop is CANCER'
            description.innerText = `Too many different elements in your life are overlapping with each other right now—and it's your…`
            break;

        case 'Jul':
            img.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_leo.png" alt="leo">`
            headline.innerHTML = 'Your Horoskop is LEO'
            description.innerText = `The issues you'll be dealing with today are very complicated ones—you will have to navigate your…`
            break;


        case 'Aug':
            img.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_virgo.png" alt="virgo">`
            headline.innerHTML = 'Your Horoskop is VIRGO'
            description.innerText = `You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…`
            break;

        case 'Sep':
            img.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_libra.png" alt="virgo">`
            headline.innerHTML = 'Your Horoskop is LIBRA'
            description.innerText = `Pick a cultural event that's coming up and get some tickets for it today.`
            break;
        case 'Oct':
            img.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_scorpio.png" alt="virgo">`
            headline.innerHTML = 'Your Horoskop is SCORPIO'
            description.innerText = `Someone will challenge a belief that you've held for a very long time today—and they will say an…`
            break;
        case 'Nov':
            img.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_sagittarius.png" alt="virgo">`
            headline.innerHTML = 'Your Horoskop is SAGITTARIUS'
            description.innerText = `Someone in your life needs to step up and take on more responsibility—and you need to tell them to....
            `
            break;
        case 'Dec':
            img.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_capricorn.png" alt="virgo">`
            headline.innerHTML = 'Your Horoskop is CAPRICORN'
            description.innerText = `Breaking the rules is not always a bad thing—especially if the rules limit your creativity.`
            break;
        case 'Jan':
            img.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_aquarius.png" alt="virgo">`
            headline.innerHTML = 'Your Horoskop is AQUARIUS'
            description.innerText = `Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…
                `
            break;
        case 'Feb':
            img.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_pisces.png" alt="virgo">`
            headline.innerHTML = 'Your Horoskop is PISCES'
            description.innerText = `Communication is very important today—written, spoken, and even nonverbal body language will all…`

            break;

        default:
            headline.innerHTML = 'Please give a mont'
            img.innerHTML = ''
            description.innerText = ''

    }
}


// Message Transfer==========================================

