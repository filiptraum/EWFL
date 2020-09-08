const vocabularyBlock = document.querySelector(".vocabulary");

// 07.09.2020
let engWords07092020 = "To_communicate communication elecommunication to_transmit transmission transmitter to_receive receiver transceiver to_carry carrier to_convert conversion converter to_amplify amplification amplifier circuit circuitry to_disturb disturbance rout router to_use user to_repeat repeater to_attenuate attenuation to_distinguish distinguished distinguishable indistinguishable to_divide division subdivision frequent frequently frequency perfect perfection imperfect imperfection to_allocate allocated allocation key keying";
let ukrWords07092020 = "Спілкуватися спілкування електрокомунікації передавати спосіб_передавання передавач отримати приймач приймач-передавач нести перевізник конвертувати перетворення перетворювач для_посилення посилення підсилювач ланцюга схема турбувати порушення розгром маршрутизатор використовувати користувач повторювати ретранслятор послабити загасання розрізняти відмінні відрізнити нерозрізнений розділити поділ підрозділ часті часто частота ідеально досконалість недосконалий недосконалість виділити/локалізувати виділений/локалізований розподіл/локалізація ключ маніпуляції";
let date07092020 = "07.09.2020";

function vocabulary(vocabulary, engWords, ukrWords, date) {
  let theNewDate = document.createElement("div");
  theNewDate.classList.add("date");
  theNewDate.id = `date${date}`;
  theNewDate.innerText = date;
  vocabulary.appendChild(theNewDate);

  let numLength = engWords.split(" ");

  for (let i = 0; i < numLength.length; i++) {
    let theNewString = document.createElement("div");
    theNewString.classList.add("string");
    vocabulary.append(theNewString);

    let theNewLeftCol = document.createElement("div");
    theNewLeftCol.classList.add("left");
    let theNewEngArr = engWords.split(" ");
    theNewLeftCol.innerText = theNewEngArr[i];
    theNewString.append(theNewLeftCol);
    
    let theNewRightCol = document.createElement("div");
    theNewRightCol.classList.add("right");
    let theNewUkrArr = ukrWords.split(" ");
    theNewRightCol.innerText = theNewUkrArr[i];
    theNewString.append(theNewRightCol);
  }  
}
vocabulary(vocabularyBlock, engWords07092020, ukrWords07092020, date07092020);