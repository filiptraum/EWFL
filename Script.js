const vocabularyBlock = document.querySelector(".vocabulary");

// 07.09.2020
let engWords07092020 = "To_communicate communication telecommunication to_transmit transmission transmitter to_receive receiver transceiver to_carry carrier to_convert conversion converter to_amplify amplification amplifier circuit circuitry to_disturb disturbance rout router to_use user to_repeat repeater to_attenuate attenuation to_distinguish distinguished distinguishable indistinguishable to_divide division subdivision frequent frequently frequency perfect perfection imperfect imperfection to_allocate allocated allocation key keying";
let ukrWords07092020 = "Спілкуватися спілкування телекомунікації передавати спосіб_передавання передавач отримати приймач приймач-передавач нести перевізник конвертувати перетворення перетворювач для_посилення посилення підсилювач ланцюга схема турбувати порушення розгром маршрутизатор використовувати користувач повторювати ретранслятор послабити загасання розрізняти відмінні відрізнити нерозрізнений розділити поділ підрозділ часті часто частота ідеально досконалість недосконалий недосконалість виділити/локалізувати виділений/локалізований розподіл/локалізація ключ маніпуляції";
let date07092020 = "07.09.2020";

// 02.11.2020

let date02112020_ex25 = "02.11.2020 (ex.25,p.44)";
let engWords02112020_ex25 = "abbreviated_number_dialling Advanced_Intelligent_Network analogue-based_fixed-line_telephone billing Code_Division_Multiple_Access connectivity credentials Ethernet_line fixed-line_analogue-to-digital modem fuel_cell Global_System_for_Mobile Communication hardware Internet_access Internet_capability link local_area_network Local_Number_Portability malfunction Next_Generation_Intelligent_Network node permanent_power_source public_switched_telephone_network relay satellite-based_cellular_phone Service_Control_Points software switching_hub termination to_be_hacked toll-free_calling transmission_tower virtual_private_networks Voice_Over_Internet_Protocol voice-only_analogue_telephone network wide_area_network wiring";
let ukrWords02112020_ex25 = "скорочений_номер Розширена_інтелектуальна_мережа аналоговий_телефон_фіксованого_зв'язку виставлення_рахунків Множинний_доступ_з_кодовим_поділом підключення повноваження Лінія_інтернет аналого-цифровий_стаціонарний_телефон модем паливний_елемент Глобальна_система_для_мобільних_пристроїв Спілкування апаратне_забезпечення Доступ_в_інтернет можливості_Інтернету посилання локальна_мережа Переносимість_місцевих_номерів несправність Інтелектуальна_мережа_наступного_покоління вузол постійне_джерело_живлення комутована_телефонна_мережа_загального_користування міняти супутниковий_стільниковий_телефон Точки_управління_послугами програмне_забезпечення комутаційний_концентратор припинення бути_взламаним безкоштовний_дзвінок передавальна_вежа віртуальні_приватні_мережі Протокол_передачі_голосу_через_Інтернет голосовий_аналоговий_телефон мережі широкосмугова_мережа електропроводка";

let date02112020_ex26 = "02.11.2020 (ex.26,p.64)";
let engWords02112020_ex26 = "backpressure_(resistance) bindery chill_roller copyright_laws digital_printing electronic_publishing engraving film_negative flexography folded_printed_paper_(press_signatures) gravure image_area non-image_area ink_smudging ink-receptive_coating letterpress metal_plate non-network_electronic publication Offset_lithography page_layout pre-press preprint_repository press_run print_piece printing_press proofread publication raised_printing reflowable_content reprographics rolls_of_paper rubber_blanket screen sheetfed_press stitcher style_sheet text_mark-up thermography to_be_converted_to_film to_be_transferred_to_printing_plates upload web_press";
let ukrWords02112020_ex26 = "протитиск_(опір) палітурка охолоджувальний_каток закони_про_авторське_право цифровий_друк електронне_видавництво гравірування фільм_негативний флексографія складений_друкований_папір_(підписи_преси) глибока_глибина область_зображення область_без_зображення розмазування_чорнилом покриття,_що_сприймає_чорнило високий_друк металева_пластина немережевий_електронний публікація Офсетна_літографія макет_сторінки попередня_преса сховище_препринтів натисніть_біг відбиток друкарський_станок коректура публікація підвищений_друк вміст,_що_підлягає_переплавці репрографія рулони_паперу гумова_ковдра екран листовий_прес швець таблиця_стилів розмітка_тексту термографія для_перетворення_у_плівку переносити_на_друкарські_форми завантажити веб-преса";

function vocabulary(engWords, ukrWords, date) {
  let theNewDate = document.createElement("div");
  theNewDate.classList.add("date");
  theNewDate.id = `date${date}`;
  theNewDate.innerText = date;
  vocabularyBlock.appendChild(theNewDate);

  let numLength = engWords.split(" ");

  for (let i = 0; i < numLength.length; i++) {
    let theNewString = document.createElement("div");
    theNewString.classList.add("string");
    vocabularyBlock.append(theNewString);

    let theNewLeftCol = document.createElement("div");
    theNewLeftCol.classList.add("left");
    let theNewEngArr = engWords.split(" ");
    theNewLeftCol.innerText = theNewEngArr[i].replace(/_/g, " ");
    theNewString.append(theNewLeftCol);
    
    let theNewRightCol = document.createElement("div");
    theNewRightCol.classList.add("right");
    let theNewUkrArr = ukrWords.split(" ");
    theNewRightCol.innerText = theNewUkrArr[i].replace(/_/g, " ");
    theNewString.append(theNewRightCol);
  }  
}

// vocabulary(engWords07092020, ukrWords07092020, date07092020);
vocabulary(engWords02112020_ex25, ukrWords02112020_ex25, date02112020_ex25);
vocabulary(engWords02112020_ex26, ukrWords02112020_ex26, date02112020_ex26);