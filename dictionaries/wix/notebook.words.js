const WORDS = [
  { rus: "", heb: "", trxn: "", emo: "" },

  { rus: "море", heb: ".", trxn: "ям", emo: "" },
  { rus: "мертвое (соленое) море", heb: "", trxn: "ям га'мелах", emo: "" },

  //еда
  { rus: "еда", heb: "", trxn: "Охель", emo: "" },

  { rus: "вино", heb: ".", trxn: "яйн", emo: "" },
  { rus: "вода", heb: ".", trxn: "маим", emo: "" },
  { rus: "молоко", heb: "", trxn: "халяв", emo: "" },
  { rus: "молочный", heb: "", trxn: "халяви", emo: "" },
  { rus: "сахар", heb: "", trxn: "сукар", emo: "" },
  { rus: "конфета", heb: "", trxn: "сукария", emo: "" },
  { rus: "конфеты", heb: "", trxn: "сукарийот", emo: "" },
  { rus: "хлеб", heb: "", trxn: "лехем", emo: "" },
  { rus: "булочка", heb: "", trxn: "лехмания", emo: "" },
  { rus: "булочки", heb: "", trxn: "лехманийот", emo: "" },

  { rus: "рыба", heb: ".", trxn: "даг", emo: "" },
  { rus: "флаг?", heb: ".", trxn: "дегель", emo: "" },
  { rus: "мороженое", heb: ".", trxn: "глида", emo: "" },
  { rus: "лимон", heb: ".", trxn: "лимон", emo: "" },
  { rus: "мандарин", heb: ".", trxn: "мандарина", emo: "" },

  { rus: "плетеная булка", heb: "", trxn: "хала", emo: "" },

  { rus: "гора", heb: ".", trxn: "хар", emo: "" },

  { rus: "", heb: "", trxn: "", emo: "" },

  { rus: "подарок", heb: ".", trxn: "матана", emo: "" },
  { rus: "дом, файл, куплет", heb: "", trxn: "байт", emo: "" },
  { rus: "из своего дома", heb: "", trxn: "ме га-байт", emo: "" },
  { rus: "телевизор, телевидение", heb: "", trxn: "телевизия", emo: "" },
  { rus: "математика", heb: "", trxn: "математика", emo: "" },
  { rus: "театр", heb: "", trxn: "театрон", emo: "" },
  { rus: "кинотеатр", heb: "", trxn: "синематрон", emo: "" },
  {
    rus: "кинотеатр (дом голос-движение)",
    heb: "",
    trxn: "бейт-коль-ноа",
    emo: ""
  },
  { rus: "концерт", heb: "", trxn: "концерт", emo: "" },
  { rus: "ресторан", heb: "", trxn: "мисада", emo: "" },
  { rus: "отель/гостиница", heb: "", trxn: "мальон", emo: "" },
  { rus: "университет", heb: "", trxn: "университа", emo: "" },
  { rus: "спорт", heb: "", trxn: "спорт", emo: "" },
  { rus: "диета", heb: "", trxn: "диета", emo: "" },
  { rus: "автобус", heb: "", trxn: "отобус", emo: "" },
  { rus: "", heb: "", trxn: "", emo: "" },

  { rus: "покупка", heb: "", trxn: "кния", emo: "" },
  { rus: "покупки", heb: "", trxn: "книйот", emo: "" },
  { rus: "напитки", heb: "", trxn: "штия", emo: "" },
  { rus: "кафетерия", heb: "", trxn: "кафетерия", emo: "" },
  { rus: "кафе", heb: "", trxn: "бейт-кафе", emo: "" },

  { rus: "чай", heb: "", trxn: "те", emo: "" },
  { rus: "кофе", heb: "", trxn: "кафе", emo: "" },

  { rus: "черный", heb: "", trxn: "шахор", emo: "" },
  { rus: "зеленый", heb: "", trxn: "ярок", emo: "" },

  { rus: "кока-кола", heb: "", trxn: "кока-кола", emo: "" },
  { rus: "сок", heb: "", trxn: "миц", emo: "" },
  { rus: "чили", heb: "", trxn: "чили", emo: "" },
  { rus: "", heb: "", trxn: "", emo: "" },

  { rus: "джинсы", heb: "", trxn: "джинс", emo: "" },
  { rus: "жакет", heb: "", trxn: "жакет", emo: "" },

  { rus: "самолет", heb: "", trxn: "матос", emo: "" },

  { rus: "такси/счетчик", heb: "", trxn: "монит", emo: "" },
  { rus: "институт", heb: "", trxn: "махон", emo: "" },
  { rus: "компьютер/думать", heb: "", trxn: "махшев", emo: "" },

  { rus: "урок", heb: "", trxn: "шиур", emo: "" },

  { rus: "жизнь", heb: "", trxn: "хаим", emo: "" },

  { rus: "новый", heb: "", trxn: "хадаш", emo: "" },

  //погода
  { rus: "снег", heb: ".", trxn: "шелег", emo: "" },
  { rus: "дождь", heb: ".", trxn: "гешем", emo: "" },
  { rus: "солнце", heb: ".", trxn: "шемеш", emo: "" },

  { rus: "сегодня идет дождь", heb: ".", trxn: "гайом йоред гешем", emo: "" },

  //когда
  { rus: "когда", heb: "", trxn: "матай", emo: "" },
  { rus: "день", heb: "", trxn: "йом", emo: "" },
  { rus: "сегодня, этот день", heb: "", trxn: "га-йом", emo: "" },
  { rus: "?а что", heb: "", trxn: "ума", emo: "" },
  { rus: "?сейчас", heb: "", trxn: "ахшав", emo: "" },
  { rus: "утром", heb: "", trxn: "ба-бокер", emo: "" },
  { rus: "днем", heb: "", trxn: "ба-цахарайм", emo: "" },
  { rus: "вечером", heb: "", trxn: "ба-эрев", emo: "" },
  { rus: "ночью", heb: "", trxn: "ба-лайла", emo: "" },

  // числа
  { rus: "1 один", heb: "", trxn: "ахат", emo: "" },
  { rus: "2 два", heb: "", trxn: "штайн", emo: "" },
  { rus: "3 три", heb: "", trxn: "шалош", emo: "" },
  { rus: "4 четыре", heb: "", trxn: "арба", emo: "" },

  //месяцы
  { rus: "месяц", heb: "", trxn: "ходаш", emo: "" },
  { rus: "месяцы", heb: "", trxn: "ходашим", emo: "" },

  { rus: "сентябрь", heb: "", trxn: "септембер", emo: "" },
  { rus: "октябрь", heb: "", trxn: "октобер", emo: "" },
  { rus: "ноябрь", heb: "", trxn: "новембер", emo: "" },

  { rus: "декабрь", heb: "", trxn: "десембер", emo: "" },
  { rus: "январь", heb: "", trxn: "януар", emo: "" },
  { rus: "февраль", heb: "", trxn: "фебруар", emo: "" },

  { rus: "март", heb: "", trxn: "март", emo: "" },
  { rus: "апрель", heb: "", trxn: "априль", emo: "" },
  { rus: "май", heb: "", trxn: "май", emo: "" },

  { rus: "июнь", heb: ".", trxn: "юни", emo: "" },
  { rus: "июль", heb: ".", trxn: "юли", emo: "" },
  { rus: "август", heb: "", trxn: "огуст", emo: "" },

  { rus: "времена года", heb: ".", trxn: "?она шель шана", emo: "" },

  { rus: "лето", heb: "", trxn: "кайц", emo: "" },
  { rus: "весна", heb: "", trxn: "авив", emo: "" },
  { rus: "зима", heb: "", trxn: "хорев", emo: "" },
  { rus: "осень", heb: "", trxn: "став", emo: "" },

  //дни недели
  { rus: "", heb: "", trxn: "", emo: "" },

  //праздники
  { rus: "праздник", heb: ".", trxn: "хаг", emo: "" },

  {
    rus: "Рош Ашана, голова года (праздник)",
    heb: "",
    trxn: "рош ашана",
    emo: ""
  },

  { rus: "ханука (праздник)", heb: ".", trxn: "ханука", emo: "" },

  // мж
  { rus: "пол/род", heb: "", trxn: "мин", emo: "" },
  { rus: "м.р.", heb: "", trxn: "захар", emo: "" },
  { rus: "ж.р.", heb: "", trxn: "некева", emo: "" },

  { rus: "мальчик", heb: ".", trxn: "йелед", emo: "" },
  { rus: "девочка", heb: ".", trxn: "йяльда", emo: "" },

  { rus: "ученик", heb: "", trxn: "тальмид", emo: "" },
  { rus: "ученица", heb: "", trxn: "тальмида", emo: "" },

  { rus: "мужчина, человек", heb: ".", trxn: "иш", emo: "" },
  { rus: "женщина, жена", heb: ".", trxn: "иша", emo: "" },

  { rus: "учитель", heb: ".", trxn: "морэ", emo: "" },
  { rus: "учительница", heb: ".", trxn: "мора", emo: "" },

  { rus: "папа", heb: ".", trxn: "аба", emo: "" },
  { rus: "мама", heb: ".", trxn: "има", emo: "" },

  { rus: "дедушка", heb: "", trxn: "саба", emo: "" },
  { rus: "бабушка", heb: "", trxn: "савта", emo: "" },

  { rus: "веселый", heb: "", trxn: "самеах", emo: "" },
  { rus: "веселая", heb: "", trxn: "смеха", emo: "" },
  { rus: "веселые м.", heb: "", trxn: "смехим", emo: "" },
  { rus: "веселые ж.", heb: "", trxn: "смехот", emo: "" },

  { rus: "", heb: "", trxn: "", emo: "" },

  //местоимения?
  { rus: "я", heb: ".", trxn: "ани", emo: "" },
  { rus: "ты ж.", heb: ".", trxn: "ат", emo: "" },
  { rus: "ты м.", heb: ".", trxn: "ата", emo: "" },
  { rus: "мы", heb: "", trxn: "анахну", emo: "" },
  { rus: "она", heb: ".", trxn: "ги", emo: "" },
  { rus: "он", heb: ".", trxn: "гу", emo: "" },
  { rus: "вы м.", heb: "", trxn: "атем", emo: "" },
  { rus: "вы ж.", heb: "", trxn: "атен", emo: "" },
  { rus: "они м.", heb: "", trxn: "гем", emo: "" },
  { rus: "они ж.", heb: "", trxn: "ген", emo: "" },
  //
  { rus: "кто", heb: ".", trxn: "ми", emo: "" },
  { rus: "что", heb: ".", trxn: "ма", emo: "" },

  { rus: "кто ты? ж.", heb: ".", trxn: "ми ат?", emo: "" },
  { rus: "кто ты? м.", heb: ".", trxn: "ми ата?", emo: "" },

  { rus: "да", heb: "", trxn: "кэн", emo: "" },
  { rus: "нет/не", heb: ".", trxn: "льо", emo: "" },
  { rus: "тоже/также", heb: "", trxn: "гам", emo: "" },
  { rus: "где", heb: "", trxn: "эйфо", emo: "" },
  { rus: "здесь/тут", heb: "", trxn: "по", emo: "" },
  { rus: "там", heb: ".", trxn: "шам", emo: "" },
  { rus: "куда", heb: "", trxn: "леан", emo: "" },

  { rus: "какой", heb: "", trxn: "эйзе", emo: "" },
  { rus: "какая", heb: "", trxn: "эйзо", emo: "" },
  { rus: "какие", heb: "", trxn: "эйлю", emo: "" },
  { rus: "почему", heb: "", trxn: "лама", emo: "" },
  { rus: "потому что.", heb: "", trxn: "каха", emo: "" },
  { rus: "таким образом", heb: "", trxn: "ках", emo: "" },

  { rus: "только", heb: "", trxn: "рак", emo: "" },

  { rus: "это м.", heb: "", trxn: "зе", emo: "" },
  { rus: "это ж.", heb: "", trxn: "зот", emo: "" },
  { rus: "это мн.", heb: "", trxn: "эле", emo: "" },
  { rus: "из _", heb: "", trxn: "мэ_ / ми_", emo: "" },
  { rus: "по/на/в _", heb: "", trxn: "бе_", emo: "" },
  { rus: "на (куда)", heb: "", trxn: "ле_", emo: "" },
  { rus: "of _", heb: "", trxn: "шель", emo: "" },
  { rus: "или", heb: ".", trxn: "о", emo: "" },
  { rus: "_ и _", heb: "", trxn: "ве", emo: "" },
  { rus: "но", heb: "", trxn: "аваль", emo: "" },

  { rus: "с / with", heb: "", trxn: "им", emo: "" },
  { rus: "без", heb: "", trxn: "бли", emo: "" },

  { rus: "есть is", heb: ".", trxn: "еш", emo: "" },
  { rus: "нету no", heb: ".", trxn: "эйн", emo: "" },

  { rus: "ничего (вещь+не)", heb: "", trxn: "шум давар", emo: "" },

  { rus: "немного", heb: ".", trxn: "кцат", emo: "" },
  { rus: "много", heb: "", trxn: "арбе", emo: "" },

  //страны-города
  { rus: "израиль", heb: ".", trxn: "исраэль", emo: "" },
  { rus: "г. нетания", heb: ".", trxn: "нетания", emo: "" },
  { rus: "англия", heb: ".", trxn: "англия", emo: "" },
  { rus: "германия", heb: ".", trxn: "германия", emo: "" },
  { rus: "вена", heb: ".", trxn: "вина", emo: "" },
  { rus: "дания", heb: "", trxn: "дэния", emo: "" },
  { rus: "киев", heb: "", trxn: "киев", emo: "" },
  { rus: "украина", heb: ".", trxn: "украина", emo: "" },
  { rus: "италия", heb: "", trxn: "италиа", emo: "" },
  { rus: "америка", heb: "", trxn: "америка", emo: "" },
  { rus: "австрия", heb: "", trxn: "австрия", emo: "" },
  { rus: "харьков", heb: "", trxn: "харков", emo: "" },

  //языки
  { rus: "язык", heb: "", trxn: "сафа", emo: "" },
  { rus: "языки", heb: "", trxn: "сафот", emo: "" },

  { rus: "английский", heb: ".", trxn: "англит", emo: "" },
  { rus: "немецкий", heb: ".", trxn: "гэрманит", emo: "" },

  { rus: "я учу английский", heb: "", trxn: "ани льомед англит", emo: "" },

  { rus: "откуда", heb: ".", trxn: "меайн", emo: "" },

  { rus: "откуда ты м.", heb: ".", trxn: "меайн ата", emo: "" },
  { rus: "откуда ты ж.", heb: ".", trxn: "меайн ат", emo: "" },
  { rus: "я из ___", heb: ".", trxn: "ани ми__", emo: "" },

  //время суток
  { rus: "вечер", heb: "", trxn: "эрев", emo: "" },
  { rus: "ночь", heb: "", trxn: "лайла", emo: "" },
  { rus: "утро", heb: "", trxn: "бокер", emo: "" },

  //как дела и все такое
  { rus: "утро доброе", heb: "", trxn: "бокер тов", emo: "" },
  { rus: "день добрый", heb: "", trxn: "цахарайм товим", emo: "" },
  { rus: "вечер добрый", heb: "", trxn: "эрев тов", emo: "" },
  { rus: "доброй ночи", heb: "", trxn: "лайла тов", emo: "" },
  { rus: "ночь м.", heb: ".", trxn: "лайла", emo: "" },

  { rus: "приятного дня", heb: "", trxn: "йом наим", emo: "" },

  { rus: "добро пожаловать", heb: "", trxn: "брухим абаим", emo: "" },

  { rus: "как дела? что слышно?", heb: "", trxn: "маниш ма?", emo: "" },
  { rus: "как/что дела?", heb: ".", trxn: "ма иньяним", emo: "" },
  { rus: "что нового?", heb: "", trxn: "ма хадаш?", emo: "" },

  {
    rus: "как дела? как мир твой? м.",
    heb: "",
    trxn: "машим ха? ма гашалом шельха?",
    emo: ""
  },
  {
    rus: "как дела? как мир твой? ж.",
    heb: "",
    trxn: "ма шлом эх? ма гашалом шелях?",
    emo: ""
  },

  { rus: "что идет? как дела?", heb: ".", trxn: "ма голех", emo: "" },

  { rus: "так себе", heb: "", trxn: "каха-каха", emo: "" },
  { rus: "плохо", heb: "", trxn: "ра", emo: "" },
  { rus: "на лице", heb: "", trxn: "аля паним", emo: "" },

  { rus: "хорошо", heb: "", trxn: "тов", emo: "" },
  { rus: "спасибо", heb: ".", trxn: "тода", emo: "" },
  { rus: "спасибо большое", heb: "", trxn: "тода раба", emo: "" },

  { rus: "пожалуйста", heb: "", trxn: "бева каша", emo: "" },
  { rus: "извините", heb: "", trxn: "слиха", emo: "" },
  { rus: "?", heb: ".", trxn: "негедар", emo: "" },

  { rus: "всё", heb: "", trxn: "гаколь", emo: "" },
  { rus: "в порядке", heb: "", trxn: "бе-седер", emo: "" },
  { rus: "в порядке полном", heb: "", trxn: "беседер гамур", emo: "" },
  { rus: "прекрасно", heb: "", trxn: "мецуян", emo: "" },
  { rus: "прекрасно, красиво", heb: "", trxn: "йоффи", emo: "" },
  { rus: "красивая", heb: "", trxn: "яффа", emo: "" },
  { rus: "максимально круто", heb: "", trxn: "сабаба", emo: "" },

  { rus: "мое имя %имя%", heb: "", trxn: "шми(=шем+шели) %имя%", emo: "" },
  {
    rus: "как тебя зовут(что имя)?м.",
    heb: "",
    trxn: "ма шим ха? ма гашем шельха",
    emo: ""
  },
  {
    rus: "как тебя зовут(что имя)?ж.",
    heb: "",
    trxn: "ма шмех? ма гашем шелях",
    emo: ""
  },
  {
    rus: "приятно очень (познакомиться)",
    heb: "",
    trxn: "наим меод",
    emo: ""
  },
  { rus: "очень", heb: ".", trxn: "меод", emo: "" },

  { rus: "привет", heb: ".", trxn: "гай", emo: "" },
  { rus: "мир тебе", heb: ".", trxn: "шалом", emo: "" },
  { rus: "ну все/тогда, давай, пока", heb: "", trxn: "аз йяла бай", emo: "" },
  { rus: "до свидания", heb: "", trxn: "лехит раот", emo: "" },

  { rus: "айяйяй", heb: "", trxn: "ой вей", emo: "" },

  //глаголы
  //1
  { rus: "живу/живешь/живет м.", heb: "", trxn: "гар", emo: "" },
  { rus: "пою", heb: "", trxn: "шар", emo: "" },
  { rus: "отдыхаю", heb: "", trxn: "нах", emo: "" },
  { rus: "прихожу", heb: "", trxn: "ба", emo: "" },
  //2
  { rus: "хочу", heb: "", trxn: "роце", emo: "" },
  { rus: "делаю", heb: "", trxn: "осе", emo: "" },
  { rus: "пью", heb: "", trxn: "шоте", emo: "" },
  { rus: "покупаю", heb: "", trxn: "коне", emo: "" },
  { rus: "стОю, поднимаюсь, репатриируюсь", heb: "", trxn: "оле", emo: "" },
  //3
  { rus: "учусь обучаюсь изучаю м.", heb: "", trxn: "льомед", emo: "" },
  { rus: "иду", heb: "", trxn: "голех", emo: "" },
  { rus: "ем", heb: "", trxn: "охЕль", emo: "" },
  { rus: "работаю", heb: "", trxn: "овед", emo: "" },
  { rus: "люблю", heb: "", trxn: "охев", emo: "" },
  { rus: "пишу", heb: "", trxn: "котев", emo: "" },
  { rus: "читаю", heb: "", trxn: "коре", emo: "" },
  { rus: "слышу", heb: "", trxn: "шомеа", emo: "" },
  //4
  { rus: "спускаюсь/выхожу из транспорта", heb: ".", trxn: "йоред", emo: "" },
  //5
  { rus: "еду", heb: "", trxn: "носэа", emo: "" },
  //6
  { rus: "разговариваю", heb: "", trxn: "медабер", emo: "" },

  { rus: "шир", heb: "", trxn: "стих, песня", emo: "" },
  { rus: "разговор", heb: ".", trxn: "дибур", emo: "" },

  { rus: "ты поешь песню?", heb: "", trxn: "ат шара шир", emo: "" },

  { rus: "", heb: "", trxn: "", emo: "" },
  { rus: "", heb: "", trxn: "", emo: "" },
  { rus: "", heb: "", trxn: "", emo: "" },

  { rus: "викс", heb: ".", trxn: "викс", emo: "" }
];

WORDS.name = "WIX notebook - in progress";

export default WORDS;
