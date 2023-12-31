import React from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

const resources = {
  kz: {
    translation: {
      price: "fiyat",
      about_us: "Біз туралы",
      products: "Тауарлар",
      contacts: "Байланыс",
      why_us: "Неліктен бізден сатып алуды ұсынамыз?",
      how_we_work: "Біз қалай жұмыс істейміз?",
      how_we_work_desc:
        "Сатып алу банк картасымен, фирма арқылы, Каспий пай, Каспий ред, Каспий бөліп төлеу, Каспий голд аударымымен қашықтан төлеу арқылы жүзеге асырылады. Біз қала бойынша негізінен Яндекс курьерімен жұмыс істейміз. Бұл клиентке курьердің қайда бара жатқанын көруге мүмкіндік береді жəне тауардың келуін көп күтпейді. Қалалар арасындағы жеткізу казпочта арқылы жүзеге асырылады. Егер шұғыл жеткізу қажет болса, автобус, пойыз немесе индрайвер арқылы жібере аламыз.",
      why_your_store: "Неліктен біздің интернет-дүкенде сатып алу тиімді?",
      why_your_store_desc:
        "Біз негізінен склаттармен жұмыс істейміз сондықтан біз дүкендерге қарағанда арзан баға ұсына аламыз жəне жылдамрақ жеткіземіз. Мегафондарды бізден оптом сатып алатын дүкендер үшін бізде оларға арнайы баға ұсыныстары бар.",
      belive_us: "Неліктен бізден сатып алу қауіпсіз жəне бізге сенуге болады?",
      belive_us_desc:
        'Бізден дауыс зорайтқышты сатып алу тиімдірек өйткені біз өндірушілермен тікелей жəне делдалсыз жұмыс істейміз. Біздің мақсатымыз клиенттерге сапалы тауар беру жəне өндірушілермен бірлесіп тауарды жетілдіру жəне өндірушіге клиенттердің шағымдарын жеткізу. Мысалы, біз осы нарыққа кірген кезде мегафондар көбінесе батареясыз сатылатын. Əр апта сайын бір рет қолданылатын 8 дана "С" типтегі батареяларды сатып алу клиенттерге қымбатқа түсті. Ақ батареясы бар Мегафон модельдері сирек келетін. Бірақ бұл цинковый батареялары розеткада жиі бұзылып, еріп кететін. Біз зауыттан литий-ионды аккумуляторы бар Мегафонға тапсырыс бере бастадық. Бұл қайта зарядталатын батарея тұтынушылардың жұмысын айтарлықтай жеңілдетті. Толық күн жүк көлігінде дауыс зорайтқышпен жұмыс істейтін клиенттер үшін жолда батареяны зарядтауға мүмкіндік болмағаны үшін біз өндірушімен бірге Мегафон комплектіне 6 метрлік прикуриватель кабелін қостық. Мəселе шешілді. Сондықтан да клиенттерімізлен жəне бізден оптом мегафон алатын магазиндерден тауар жайлы ұсыныс жəне шағымдарын бізге айтуларын сұраймыз',
      name_surname: "Аты-жөні",
      phone_number: "Телефон нөмірі",
      message: "Хабар",
      send_message: "хабарлама жіберу",
      buy_now: "Қазір сатып ал",
    },
  },
  ru: {
    translation: {
      price: "цена",
      about_us: "О нас",
      products: "Товары",
      contacts: "Контакты",
      why_us: "Почему рекомендуем у нас купить?",
      how_we_work: "Как мы работаем?",
      how_we_work_desc:
        "Покупка осуществляется банковской картой, через фирму, через каспий пай, каспий ред, каспий рассрочка, удаленная оплата через каспий приложения ил с переводом на каспий голд. Мы по городу работаем основном с яндекс курьером. Это позволить клиенту видеть клиенту видеть где едит курьер и не ждать когда приедет товар. Доставка между город осуществляется казпочтой. Если есть срочность мы можем отправить через автобус, поезд или через индрайвер.",
      why_your_store:
        "Почему делать покупки выгодно именно в нашем интернет магазине?",
      why_your_store_desc:
        "Мы основном работаем со складами поетому можем предложить цены меньше чем у магазинов и у нас есть время и переумишества доставить быстрее и вовремя. А для магазинов каторые покупает у нас мегафоны оптом у нас есть всегда выгодная цена для них.",
      belive_us: "Почему покупать у нас безопасно и нам можно верить?",
      belive_us_desc:
        'Покупка громкоговорителя у нас выгоднее потому что мы работаем с производителями на прямую и без посредников. Наша цель предоставит клиентам качественный товар и работая совместно с производителями усовершенствовать товар и предоставить жалоб клиентов к производителю. Например, когда мы вошли в этот рынок мегафоны часто продавались без аккумулятора. Покупать одноразовые 8 штук батареек типа "С" каждую неделю клиентам дорого обходились. Редко приходили модели мегафона с белым аккумулятором. Но эти цинковые аккумуляторы часто ломались и сгорели в розетке. Мы начали заказать с завода мегафон с литий-ионным аккумулятором. Этот аккумуляторная батарейка значительно облегчил работу клиентов. Но для клиентов которые полный день работает громкоговорителем в грузовом автомобиле, не было возможности зарядить аккумулятор в дороге. Мы совместно с производителем добавили в комплект мегафона 6 метровый кабель для прикуривателя. Проблема было устранено. Точна так же просим наших дорогих клиентов и оптовиков написать нам о предложениях и проблемах товара.',
      name_surname: "Имя и Фамилия",
      phone_number: "Номер телефона",
      message: "Сообщение",
      send_message: "Отправить сообщение",
      buy_now: "Купить сейчас",
    },
  },
};
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: "ru", // if you're using a language detector, do not define the lng option
    resources: resources,
  });

export default i18n;
