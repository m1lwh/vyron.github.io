(() => {
  "use strict";

  const VY = window.VY;

  const MESSAGES = {
    ru: {
      _code: "ru",
      meta: {
        home: { title: "vyron - кинематографичная одежда", desc: "vyron - одежда по мотивам фильмов и сериалов. Плотные ткани, стойкие принты, лимитированные дропы. Скидка в честь открытия -20%." },
        catalog: { title: "Каталог - vyron", desc: "Все модели vyron: футболки и свитшоты с кинематографичными принтами. Фильтры, размеры и честные цены со скидкой открытия." },
        product: { title: "vyron - {name}", desc: "{name} от vyron. Подробные фото, характеристики и цены по размерам. Доставка и оплата согласовываются с менеджером лично." },
        cart: { title: "Корзина - vyron", desc: "" },
        favorites: { title: "Избранное - vyron", desc: "" },
        checkout: { title: "Оформление заказа - vyron", desc: "" },
        about: { title: "О бренде - vyron", desc: "vyron - независимый лейбл одежды по мотивам кино и сериалов. Лимитированные дропы, качественные бланки, живой сервис." },
        faq: { title: "FAQ - vyron", desc: "" },
        shipping: { title: "Доставка, оплата и возврат - vyron", desc: "" },
        contacts: { title: "Контакты - vyron", desc: "" }
      },
      topbar: {
        offer: "Скидка в честь открытия -20% на всё",
        offerShort: "Opening Offer -20%"
      },
      nav: {
        catalog: "Каталог",
        collections: "Коллекции",
        about: "О бренде",
        faq: "FAQ",
        shopAll: "Все товары"
      },
      a11y: {
        search: "Поиск",
        wishlist: "Избранное",
        cart: "Корзина",
        menu: "Открыть меню",
        close: "Закрыть",
        lang: "Язык",
        currency: "Валюта",
        homeLink: "vyron - на главную",
        prevImage: "Предыдущее фото",
        nextImage: "Следующее фото"
      },
      hero: {
        eyebrow: "FW 26 · Opening Offer",
        titleA: "Кино, которое",
        titleB: "можно носить",
        sub: "Одежда по мотивам фильмов и сериалов: плотные ткани, стойкие принты и лимитированные тиражи. Для тех, кто живёт кинематографично.",
        cta1: "Смотреть каталог",
        cta2: "Коллекции",
        stat1: "дизайнов в дропе",
        stat2: "коллекции сезона",
        stat3: "скидка на запуск",
        panelCardTitle: "Дроп FW 26",
        panelCardText: "Герои, Сериалы и Культура - три линии уже в каталоге. Цены уже со скидкой открытия.",
        scroll: "Скролл"
      },
      marquee: "vyron - FW 26 - Heroes - Screen - Culture - Opening Offer -20% - Limited drops - Made to last",
      sec: {
        featEyebrow: "Избранное",
        featTitle: "Лучшее дропа",
        featSub: "Модели, которые чаще всего забирают в корзину и возвращаются за ними снова.",
        latestEyebrow: "Just dropped",
        latestTitle: "Новые поступления",
        latestSub: "Свежие дизайны сезона: плотный футер, стойкая печать, характер в каждой детали.",
        colEyebrow: "Коллекции",
        colTitle: "Три линии сезона",
        storyEyebrow: "Философия",
        storyText: "Мы делаем одежду о сценах, которые пересматриваем годами. Каждый дизайн - это кадр: портрет героя, символ, титр. Плотность ткани, стойкость печати и посадка выверены до деталей. Остальное чувствуется, когда вещь на тебе.",
        showEyebrow: "В центре внимания",
        showCta: "Смотреть товар",
        offerEyebrow: "Opening Offer",
        offerTitle: "Скидка в честь открытия",
        offerText: "-20% на весь каталог. Без промокодов и условий: зачёркнутая цена показывает выгоду, а итоговая - то, что вы платите.",
        offerCta: "Выбрать вещь",
        socialTitle: "Наши соцсети",
        socialText: "Заказы и вопросы - в мессенджерах. Закулисье бренда - на YouTube и TikTok."
      },
      why: {
        title: "Почему vyron",
        i1t: "Плотные бланки",
        i1d: "Тяжёлый хлопок, усиленные швы и заготовки премиум-класса, которые держат форму годами.",
        i2t: "Стойкие принты",
        i2d: "DTF-печать и пигментное окрашивание: графика сохраняет контраст после десятков стирок.",
        i3t: "Лимитированные дропы",
        i3d: "Небольшие тиражи каждого дизайна. Когда размер заканчивается - он заканчивается.",
        i4t: "Живой сервис",
        i4d: "Заказ подтверждает человек, а не бот: менеджер на связи в Telegram и WhatsApp."
      },
      col: {
        openLink: "Открыть линию",
        heroes: {
          tag: "Heroes",
          title: "Герои",
          desc: "Комикс-вселенные и супергерои: громкие образы и контрастная графика для тех, кто вырос на этих историях."
        },
        screen: {
          tag: "Screen",
          title: "Сериалы",
          desc: "Культовые экранные истории: сдержанные отсылки, которые считывают только свои."
        },
        culture: {
          tag: "Culture",
          title: "Культура",          desc: "Музыка, символы и настроение улиц в чистом виде. Универсальные вещи, собирающие образ целиком."
        }
      },
      cat: {
        all: "Все",
        tshirts: "Футболки",
        sweatshirts: "Свитшоты"
      },
      card: {
        add: "В корзину",
        qv: "Быстрый просмотр",
        from: "от {p}",
        wishAdd: "Добавить в избранное",
        wishRemove: "Удалить из избранного",
        added: "is-added"
      },
      qv: {
        title: "Быстрый просмотр",
        selectSize: "Выберите размер",
        note: "Цена зависит от размера",
        add: "Добавить в корзину"
      },
      prod: {
        selectFirst: "Сначала выберите размер",
        details: "Детали модели",
        features: "Характеристики",
        care: "Уход",
        story: "История дизайна",
        sizingNote: "Цена зависит от размера. Указанная стоимость - финальная, скидка открытия -20% уже учтена.",
        related: "С этим товаром смотрят",
        materialLabel: "Материал",
        fitLabel: "Посадка",
        tee: "Футболка",
        sweatshirt: "Свитшот",
        zoomHint: "Нажмите, чтобы приблизить",
        galleryCounter: "{i} / {n}",
        backToCatalog: "Назад в каталог"
      },
      list: {
        pageEyebrow: "Каталог FW 26",
        pageTitle: "Всё, что нужно.<br>И ничего лишнего",
        searchPh: "Поиск по каталогу…",
        filters: "Фильтры",
        closeFilters: "Закрыть фильтры",
        category: "Категория",
        price: "Цена",
        size: "Размер",
        from: "От",
        to: "До",
        sortPopular: "Популярные",
        priceAsc: "Сначала дешевле",
        priceDesc: "Сначала дороже",
        reset: "Сбросить фильтры",
        emptyTitle: "Ничего не найдено",
        emptyText: "По выбранным условиям товаров нет. Смягчите фильтры или сбросьте их полностью.",
        loadMore: "Показать ещё {n}",
        openFilters: "Фильтры",
        found: "Найдено: {n}",
        nameAsc: "Название: А-Я"
      },
      cart: {
        miniTitle: "Корзина",
        pageEyebrow: "Шаг к покупке",
        pageTitle: "Ваша корзина",
        pageSub: "Проверьте состав заказа, размеры и количество - и переходите к оформлению.",
        emptyTitle: "В корзине пока пусто",
        emptyText: "Самое время выбрать что-нибудь из дропа FW 26.",
        browse: "Перейти в каталог",
        items: ["товар", "товара", "товаров"],
        subtotal: "Итого",
        checkout: "Оформить заказ",
        viewCart: "Смотреть корзину",
        remove: "Удалить товар",
        increase: "Увеличить количество",
        decrease: "Уменьшить количество",
        sizePrefix: "Размер",
        clear: "Очистить корзину",
        removedToast: "Товар удалён из корзины",
        clearedToast: "Корзина очищена"
      },
      contact: {
        eyebrow: "Шаг последний",
        title: "Готовы оформить заказ?",
        sub: "Чтобы приобрести выбранные вещи, свяжитесь с нами удобным способом. Мы подтвердим наличие, поможем с размером и завершим покупку лично.",
        summaryHead: "Ваш заказ",
        total: "Итого к оплате",
        tgBtn: "Написать в Telegram",
        waBtn: "Написать в WhatsApp",
        tgNote: "Ответим и подтвердим заказ",
        waNote: "Быстрая связь голосом или текстом",
        socialsHead: "Наши соцсети",
        goVerb: "Перейти",
        youtube: "YouTube",
        tiktok: "TikTok",
        clear: "Очистить корзину",
        continue: "Продолжить покупки",
        msgHello: "Здравствуйте! Хочу оформить заказ на vyron:",
        msgItem: "- {name}, размер {size} x{qty} - {price}",
        msgTotal: "Итого: {total}",
        msgSign: "Пишу с сайта vyron"
      },
      wish: {
        pageTitle: "Избранное",
        pageSub: "Нажимайте на сердце у понравившихся вещей - они соберутся тут.",
        emptyTitle: "Здесь пока ничего нет",
        emptyText: "Нажимайте на сердце у понравившихся вещей - они соберутся тут.",
        browse: "В каталог"
      },
      search: {
        ph: "Deadpool, Dexter, Spider…",
        popular: "Популярные запросы",
        popularList: ["Deadpool", "Dexter", "The Mentalist", "Spider-Man"],
        nothing: "Ничего не нашлось. Попробуйте другой запрос.",
        viewProduct: "Открыть товар"
      },
      footer: {
        tagline: "Кинематографичная одежда лимитированными дропами. Сделана для тех, кто узнаёт свои истории с первого взгляда.",
        shop: "Магазин",
        info: "Информация",
        follow: "Мы в соцсетях",
        rights: "© {y} vyron. Все права защищены.",
        privacy: "Политика конфиденциальности",
        terms: "Условия продажи",
        docsNav: "Правовые документы",
        shipLink: "Доставка и оплата",
        returnsLink: "Возврат",
        contactsLink: "Контакты"
      },
      legal: {
        privacyTitle: "Политика конфиденциальности",
        privacyBody: [
          "Мы уважаем вашу приватность и собираем только те данные, которые вы сами указываете при обращении к нам в мессенджере: имя, контакт и детали заказа.",
          "Сайт не использует аккаунты и не хранит личные данные на серверах: корзина и избранное живут локально в вашем браузере. Данными из заказа мы пользуемся исключительно для его обработки.",
          "Запросить удаление переписки или уточнить, как мы работаем с данными, можно в любой момент через Telegram или WhatsApp."
        ],
        termsTitle: "Условия продажи",
        termsBody: [
          "Все цены на сайте указаны со скидкой в честь открытия (-20%). Оплата происходит после того, как менеджер подтвердит наличие товара и согласует с вами детали.",
          "Способ оплаты и доставки обсуждается лично в мессенджере - так мы можем предложить самый удобный вариант под ваш город.",
          "Обмен и возврат возможны в течение 14 дней при сохранении бирок и товарного вида. Свяжитесь с нами любым способом - решим вопрос."
        ]
      },
      about: {
        daysReturn: "дней на возврат",
        heroEyebrow: "О бренде",
        heroTitle: "Одежда для людей,<br>которые любят кино",
        s1h: "Как появился vyron",
        s1p: "vyron начался с простого наблюдения: самые сильные образы рождаются на экране, а самые верные им люди ходят в скучной одежде. Мы решили соединить эти миры и делать вещи, где любимые истории становятся частью повседневного гардероба - без дешёвого фанатского мерча и компромиссов по качеству.",
        s2h: "Материя прежде всего",
        s2p: "Каждая модель начинается с заготовки. Тяжёлый хлопок рингспан, футер средней плотности, усиленные швы и двойная игла - мы выбираем бланки, которые переживут и десятки стирок, и годы носки. Принт - это финальный аккорд, а не замена качества.",
        s3h: "Дизайн как кадр",
        s3p: "Наши принты строятся как постеры к фильмам: композиция, контраст, деталь, которую замечаешь со второго взгляда. Портреты героев, символы, типографика - каждый дизайн рассказывает историю и оставляет место вашему собственному прочтению.",
        s4h: "Три линии сезона",
        s4p1: "Heroes - комикс-вселенные: громкие образы и смелая графика.",
        s4p2: "Screen - культовые сериалы: сдержанные отсылки для своих.",
        s4p3: "Culture - музыка и символы: база, которая собирает образ.",
        s5h: "Как мы продаём",
        s5p: "Без посредников и автоматических воронок. Вы выбираете вещь и размер, оформляете заказ, а менеджер подтверждает его лично в Telegram или WhatsApp. Оплата и доставка обсуждаются напрямую - это медленнее автоматики, зато честнее и надёжнее.",
        cta1: "Смотреть каталог",
        cta2: "Связаться с нами"
      },
      faqPage: {
        pageTitle: "Частые вопросы",
        pageSub: "Собрали всё, о чём спрашивают чаще всего. Не нашли ответ - напишите нам в мессенджер."
      },
      faq: [
        ["Как оформить заказ?", "Выберите вещь, размер и добавьте её в корзину. Затем нажмите «Оформить заказ» - откроется экран с вашим заказом и кнопками Telegram и WhatsApp. Напишите нам, и менеджер подтвердит наличие и детали."],
        ["Это официальный мерч?", "Нет. vyron - независимый бренд, вдохновлённый кино и сериалами. Мы создаем собственные дизайны по мотивам любимых вселенных и печатаем их на качественных заготовках."],
        ["Почему цены различаются для размеров?", "Крупные размеры требуют больше материала, поэтому стоят чуть дороже. Цена каждого размера указана на странице товара - зачёркнутая цена показывает стоимость до скидки открытия."],
        ["Как оплатить заказ?", "После подтверждения заказа менеджер предложит удобный способ оплаты в переписке. Мы не просим предоплату до подтверждения наличия."],
        ["Сколько идёт доставка?", "Сроки зависят от вашего города и согласовываются лично при подтверждении заказа. Менеджер предложит оптимальный вариант под вашу локацию."],
        ["Можно вернуть или обменять?", "Да, в течение 14 дней при сохранении бирок и товарного вида. Напишите нам в мессенджер - оформим возврат или обмен."],
        ["Как выбрать размер?", "На странице товара доступны все существующие размеры с ценами. Если сомневаетесь между двумя - напишите менеджеру, поможем определиться."],
        ["Как ухаживать за принтом?", "Для каждой вещи есть блок «Уход» с инструкцией из спецификации производителя: температура стирки, сушка, глажка. Следуйте ей - принт проживёт долго."]
      ],
      ship: {
        heroSub: "Прозрачные условия без мелкого шрифта: заказ подтверждает человек, детали обсуждаем лично.",
        heroEyebrow: "Информация",
        heroTitle: "Доставка, оплата<br>и возврат",
        orderH: "Как проходит заказ",
        orderSteps: [
          "Выбираете вещь и размер, добавляете в корзину.",
          "На экране оформления видите итог и жмёте кнопку мессенджера.",
          "Менеджер подтверждает наличие и уточняет детали.",
          "Согласовываем оплату и доставку - и отправляем ваш заказ."
        ],
        payH: "Оплата",
        payP: "Оплата происходит после подтверждения заказа менеджером. Способ выбираем вместе в переписке - переводом или при получении, как вам удобнее.",
        delivH: "Доставка",
        delivP: "Мы отправляем заказы по всему миру, но точные условия и сроки фиксируются индивидуально: они зависят от региона. Менеджер рассчитает варианты при подтверждении заказа.",
        retH: "Возврат и обмен",
        retP: "14 дней на решение с момента получения. Главное - сохранить бирки и первоначальный вид вещи. Свяжитесь с нами любым способом, оформим быстро.",
        careH: "Уход за вещами",
        careP: "У каждой модели на странице есть инструкция по уходу от производителя: режим стирки, сушка, глажка. Соблюдайте её, и принт с тканью проживут долго."
      },
      cont: {
        heroEyebrow: "Связь",
        hoursHead: "Время работы",
        heading: "Связаться с нами",
        text: "Заказы, вопросы по размерам и любые другие темы - пишите в любом мессенджере, отвечаем максимально быстро.",
        tgNote: "Заказы и быстрые вопросы",
        waNote: "Голосом или текстом",
        igNote: "Ссылка скоро появится",
        ytNote: "Закулисье бренда",
        ttNote: "Короткие видео",
        hours: "Обычно отвечаем в течение дня"
      },
      toasts: {
        toCart: "Добавлено в корзину",
        toWish: "Добавлено в избранное",
        rmWish: "Удалено из избранного",
        needSize: "Выберите размер",
        error: "Что-то пошло не так"
      },
      loader: {
        caption: "FW 26 · Opening Offer"
      }
    },

    en: {
      _code: "en",
      meta: {
        home: { title: "vyron - cinematic clothing", desc: "vyron - clothing inspired by movies and TV series. Heavyweight fabrics, durable prints, limited drops. Opening Offer -20% sitewide." },
        catalog: { title: "Catalog - vyron", desc: "Every vyron piece: movie-inspired tees and sweatshirts. Filters, real sizes and honest prices with the opening discount applied." },
        product: { title: "vyron - {name}", desc: "{name} by vyron. Detailed photos, specs and per-size pricing. Shipping and payment arranged personally with our manager." },
        cart: { title: "Cart - vyron", desc: "" },
        favorites: { title: "Wishlist - vyron", desc: "" },
        checkout: { title: "Checkout - vyron", desc: "" },
        about: { title: "About - vyron", desc: "vyron is an independent label making clothing inspired by film and television. Limited drops, premium blanks, personal service." },
        faq: { title: "FAQ - vyron", desc: "" },
        shipping: { title: "Shipping, payment and returns - vyron", desc: "" },
        contacts: { title: "Contacts - vyron", desc: "" }
      },
      topbar: {
        offer: "Opening Offer -20% sitewide",
        offerShort: "Opening Offer -20%"
      },
      nav: {
        catalog: "Catalog",
        collections: "Collections",
        about: "About",
        faq: "FAQ",
        shopAll: "Shop all"
      },
      a11y: {
        search: "Search",
        wishlist: "Wishlist",
        cart: "Cart",
        menu: "Open menu",
        close: "Close",
        lang: "Language",
        currency: "Currency",
        homeLink: "vyron - back to home",
        prevImage: "Previous photo",
        nextImage: "Next photo"
      },
      hero: {
        eyebrow: "FW 26 · Opening Offer",
        titleA: "Movies you can",
        titleB: "actually wear",
        sub: "Clothing inspired by film and television: heavyweight fabrics, durable prints and limited runs. For people who live cinematically.",
        cta1: "Shop the drop",
        cta2: "Collections",
        stat1: "designs in the drop",
        stat2: "season collections",
        stat3: "off launch discount",
        panelCardTitle: "FW 26 Drop",
        panelCardText: "Heroes, Screen and Culture - three lines already in the catalog. Prices already include the opening discount.",
        scroll: "Scroll"
      },
      marquee: "vyron - FW 26 - Heroes - Screen - Culture - Opening Offer -20% - Limited drops - Made to last",
      sec: {
        featEyebrow: "Featured",
        featTitle: "Best of the drop",
        featSub: "The pieces people keep coming back for.",
        latestEyebrow: "Just dropped",
        latestTitle: "New arrivals",
        latestSub: "Fresh designs of the season: heavy fleece, lasting prints, character in every detail.",
        colEyebrow: "Collections",
        colTitle: "Three lines of the season",
        storyEyebrow: "Philosophy",
        storyText: "We make clothing about the scenes we rewatch for years. Every design is a frame: a character's portrait, a symbol, a title card. Fabric weight, print durability and fit are measured to the detail. The rest you feel once it is on you.",
        showEyebrow: "In focus",
        showCta: "View product",
        offerEyebrow: "Opening Offer",
        offerTitle: "Celebrating our opening",
        offerText: "-20% across the whole catalog. No promo codes, no conditions: the struck-through price shows what you save, the final one shows what you pay.",
        offerCta: "Pick your piece",
        socialTitle: "Our socials",
        socialText: "Orders and questions live in messengers. Behind the scenes - on YouTube and TikTok."
      },
      why: {
        title: "Why vyron",
        i1t: "Heavyweight blanks",
        i1d: "Dense cotton, reinforced seams and premium blanks that hold their shape for years.",
        i2t: "Lasting prints",
        i2d: "DTF printing and pigment dyeing: graphics stay sharp through dozens of washes.",
        i3t: "Limited drops",
        i3d: "Small runs of every design. Once a size is gone - it is gone.",
        i4t: "Personal service",
        i4d: "A human confirms your order, not a bot: our manager is on Telegram and WhatsApp."
      },
      col: {
        openLink: "Open the line",
        heroes: {
          tag: "Heroes",
          title: "Heroes",
          desc: "Comic universes and superhumans: loud imagery and bold graphics for those who grew up on these stories."
        },
        screen: {
          tag: "Screen",
          title: "Screen",
          desc: "Cult television stories: restrained references that only insiders read."
        },
        culture: {
          tag: "Culture",
          title: "Culture",
          desc: "Music, symbols and street mood in their purest form. Universal pieces that finish any look."
        }
      },
      cat: {
        all: "All",
        tshirts: "T-shirts",
        sweatshirts: "Sweatshirts"
      },
      card: {
        add: "Add to cart",
        qv: "Quick view",
        from: "from {p}",
        wishAdd: "Add to wishlist",
        wishRemove: "Remove from wishlist",
        added: "is-added"
      },
      qv: {
        title: "Quick view",
        selectSize: "Select a size",
        note: "Price depends on size",
        add: "Add to cart"
      },
      prod: {
        selectFirst: "Please select a size first",
        details: "Product details",
        features: "Features",
        care: "Care",
        story: "The story",
        sizingNote: "Price depends on size. Listed prices are final - the -20% opening discount is already included.",
        related: "You may also like",
        materialLabel: "Material",
        fitLabel: "Fit",
        tee: "T-shirt",
        sweatshirt: "Sweatshirt",
        zoomHint: "Click to zoom",
        galleryCounter: "{i} / {n}",
        backToCatalog: "Back to catalog"
      },
      list: {
        pageEyebrow: "FW 26 catalog",
        pageTitle: "Everything you need.<br>Nothing extra",
        searchPh: "Search the catalog…",
        filters: "Filters",
        closeFilters: "Close filters",
        category: "Category",
        price: "Price",
        size: "Size",
        from: "From",
        to: "To",
        sortPopular: "Popular",
        priceAsc: "Price: low to high",
        priceDesc: "Price: high to low",
        reset: "Reset filters",
        emptyTitle: "Nothing found",
        emptyText: "No products match your conditions. Try softening the filters or resetting them completely.",
        loadMore: "Load {n} more",
        openFilters: "Filters",
        found: "Found: {n}",
        nameAsc: "Name: A-Z"
      },
      cart: {
        miniTitle: "Cart",
        pageEyebrow: "One step away",
        pageTitle: "Your cart",
        pageSub: "Check the items, sizes and quantities - then head to checkout.",
        emptyTitle: "Your cart is empty",
        emptyText: "Time to pick something from the FW 26 drop.",
        browse: "Browse the catalog",
        items: ["item", "items"],
        subtotal: "Subtotal",
        checkout: "Checkout",
        viewCart: "View cart",
        remove: "Remove item",
        increase: "Increase quantity",
        decrease: "Decrease quantity",
        sizePrefix: "Size",
        clear: "Clear cart",
        removedToast: "Removed from cart",
        clearedToast: "Cart cleared"
      },
      contact: {
        eyebrow: "Final step",
        title: "Ready to place your order?",
        sub: "To purchase the selected pieces, reach out to us whichever way you like. We will confirm availability, help with sizes and complete the purchase personally.",
        summaryHead: "Your order",
        total: "Total",
        tgBtn: "Message on Telegram",
        waBtn: "Message on WhatsApp",
        tgNote: "We will reply and confirm your order",
        waNote: "Fast contact, voice or text",
        socialsHead: "Our socials",
        goVerb: "Visit",
        youtube: "YouTube",
        tiktok: "TikTok",
        clear: "Clear cart",
        continue: "Keep shopping",
        msgHello: "Hello! I would like to place an order on vyron:",
        msgItem: "- {name}, size {size} x{qty} - {price}",
        msgTotal: "Total: {total}",
        msgSign: "Sent from the vyron website"
      },
      wish: {
        pageTitle: "Wishlist",
        pageSub: "Tap the heart on pieces you love - they will gather here.",
        emptyTitle: "Nothing here yet",
        emptyText: "Tap the heart on pieces you love - they will gather here.",
        browse: "Go to catalog"
      },
      search: {
        ph: "Deadpool, Dexter, Spider…",
        popular: "Popular searches",
        popularList: ["Deadpool", "Dexter", "The Mentalist", "Spider-Man"],
        nothing: "Nothing found. Try another query.",
        viewProduct: "Open product"
      },
      footer: {
        tagline: "Cinematic clothing released in limited drops. Made for those who recognize their stories at first glance.",
        shop: "Shop",
        info: "Info",
        follow: "Follow us",
        rights: "© {y} vyron. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Sale",
        docsNav: "Legal documents",
        shipLink: "Shipping & payment",
        returnsLink: "Returns",
        contactsLink: "Contacts"
      },
      legal: {
        privacyTitle: "Privacy Policy",
        privacyBody: [
          "We respect your privacy and only collect the details you share with us in messenger yourself: name, contact and order information.",
          "The site uses no accounts and stores no personal data on servers: your cart and wishlist live locally in your browser. Order details are used strictly to process your purchase.",
          "Ask us to delete a conversation or clarify how we handle data anytime via Telegram or WhatsApp."
        ],
        termsTitle: "Terms of Sale",
        termsBody: [
          "All prices on the site include the opening discount (-20%). Payment happens after our manager confirms availability and agrees on details with you.",
          "Payment and delivery methods are discussed personally in messenger - this lets us suggest the most convenient option for your city.",
          "Exchange and return are possible within 14 days with tags intact and the item unworn. Message us any way you prefer - we will sort it out."
        ]
      },
      about: {
        daysReturn: "days for returns",
        heroEyebrow: "About the brand",
        heroTitle: "Clothing for people<br>who love cinema",
        s1h: "How vyron started",
        s1p: "vyron began with a simple observation: the strongest looks are born on screen, while the people who love them most walk around in boring clothes. We decided to bridge these worlds and make pieces where favorite stories become part of an everyday wardrobe - without cheap fan merch or compromises on quality.",
        s2h: "Fabric comes first",
        s2p: "Every model starts with the blank. Heavy ring-spun cotton, mid-weight fleece, reinforced seams and double-needle stitching - we pick blanks built to survive dozens of washes and years of wear. The print is the finishing chord, never a substitute for quality.",
        s3h: "Design as a frame",
        s3p: "Our prints are composed like film posters: composition, contrast, a detail you notice on the second look. Character portraits, symbols, typography - each design tells a story and leaves room for your own reading of it.",
        s4h: "Three lines of the season",
        s4p1: "Heroes - comic universes: loud imagery and bold graphics.",
        s4p2: "Screen - cult series: restrained references for those who know.",
        s4p3: "Culture - music and symbols: basics that pull a look together.",
        s5h: "How we sell",
        s5p: "No middlemen, no automated funnels. You pick a piece and a size, place the order, and a manager confirms it personally on Telegram or WhatsApp. Payment and delivery are discussed directly - slower than automation, but far more honest and reliable.",
        cta1: "Shop the catalog",
        cta2: "Contact us"
      },
      faqPage: {
        pageTitle: "Frequently asked questions",
        pageSub: "We gathered everything people ask about most. No answer here - message us on any platform."
      },
      faq: [
        ["How do I place an order?", "Pick a piece and a size, add it to the cart, then hit \"Checkout\". A screen opens with your order summary and Telegram / WhatsApp buttons. Write to us and the manager will confirm availability and details."],
        ["Is this official merch?", "No. vyron is an independent brand inspired by cinema and television. We create original designs based on beloved universes and print them on quality blanks."],
        ["Why do prices differ between sizes?", "Larger sizes require more fabric, so they cost slightly more. Each size's price is listed on the product page - the struck-through figure shows the pre-discount cost."],
        ["How do I pay?", "After the order is confirmed, the manager will suggest a convenient payment method in chat. We never ask for prepayment before stock is confirmed."],
        ["How long does delivery take?", "Timing depends on your city and is agreed personally during confirmation. The manager will calculate the best option for your location."],
        ["Can I return or exchange an item?", "Yes, within 14 days with tags intact and the item unworn. Write to us in messenger and we will arrange it."],
        ["How do I choose a size?", "All existing sizes with prices are listed on each product page. Torn between two? Message the manager - we will help you decide."],
        ["How do I care for the print?", "Each product page includes a care block taken from the manufacturer's spec: wash temperature, drying, ironing. Follow it and the print will last."]
      ],
      ship: {
        heroSub: "Clear terms with no fine print: a human confirms your order and we discuss the details personally.",
        heroEyebrow: "Information",
        heroTitle: "Shipping, payment<br>and returns",
        orderH: "How ordering works",
        orderSteps: [
          "Choose a piece and size, add it to the cart.",
          "On checkout you see the total and tap a messenger button.",
          "The manager confirms availability and clarifies details.",
          "We agree on payment and delivery - and your order ships."
        ],
        payH: "Payment",
        payP: "Payment happens after the order is confirmed by our manager. We pick the method together in chat - transfer or cash on delivery, whatever suits you.",
        delivH: "Delivery",
        delivP: "We ship worldwide, but exact terms and timing are fixed individually since they depend on your region. The manager will calculate options when confirming your order.",
        retH: "Returns & exchange",
        retP: "14 days to decide from the moment you receive the item. Just keep the tags on and the piece unworn. Reach out any way you like - we will process it quickly.",
        careH: "Garment care",
        careP: "Every model page carries the manufacturer's care instructions: wash mode, drying, ironing. Follow them and both print and fabric will last."
      },
      cont: {
        heroEyebrow: "Contact",
        hoursHead: "Working hours",
        heading: "Get in touch",
        text: "Orders, sizing questions and everything else - message us on any platform, we answer as fast as we can.",
        tgNote: "Orders and quick questions",
        waNote: "Voice or text",
        igNote: "Link coming soon",
        ytNote: "Behind the brand",
        ttNote: "Short videos",
        hours: "We usually reply within a day"
      },
      toasts: {
        toCart: "Added to cart",
        toWish: "Added to wishlist",
        rmWish: "Removed from wishlist",
        needSize: "Please select a size",
        error: "Something went wrong"
      },
      loader: {
        caption: "FW 26 · Opening Offer"
      }
    },

    az: {
      _code: "az",
      meta: {
        home: { title: "vyron - kinematik geyimlər", desc: "vyron - filmlər ve seriallardan ilhamlanan geyimlər. Qalın parçalar, davamlı çaplar, məhdud drop-lar. Açılış endirimi -20%." },
        catalog: { title: "Kataloq - vyron", desc: "Bütün vyron modelləri: film ruhlu futbolkalar və sviterlər. Filtrlər, ölçülər və açılış endirimi ilə dürüst qiymətlər." },
        product: { title: "vyron - {name}", desc: "{name} - vyron. Ətraflı fotolar, xüsusiyyətlər və ölçüyə görə qiymətlər. Çatdırılma və ödəniş menecerlə şəxsən razılaşdırılır." },
        cart: { title: "Səbət - vyron", desc: "" },
        favorites: { title: "Sevimlilər - vyron", desc: "" },
        checkout: { title: "Sifariş - vyron", desc: "" },
        about: { title: "Brend haqqında - vyron", desc: "vyron - kino ve seriallardan ilhamlanan müstəqil brend. Məhdud drop-lar, keyfiyyətli blanklar, şəxsi xidmət." },
        faq: { title: "FAQ - vyron", desc: "" },
        shipping: { title: "Çatdırılma, ödəniş və qaytarılma - vyron", desc: "" },
        contacts: { title: "Əlaqə - vyron", desc: "" }
      },
      topbar: {
        offer: "Açılış münasibətilə hər şeyə -20% endirim",
        offerShort: "Opening Offer -20%"
      },
      nav: {
        catalog: "Kataloq",
        collections: "Kolleksiyalar",
        about: "Brend haqqında",
        faq: "FAQ",
        shopAll: "Bütün məhsullar"
      },
      a11y: {
        search: "Axtarış",
        wishlist: "Sevimlilər",
        cart: "Səbət",
        menu: "Menyunu aç",
        close: "Bağla",
        lang: "Dil",
        currency: "Valyuta",
        homeLink: "vyron - əsas səhifə",
        prevImage: "Əvvəlki foto",
        nextImage: "Növbəti foto"
      },
      hero: {
        eyebrow: "FW 26 · Opening Offer",
        titleA: "Geyinə biləcəyin",
        titleB: "kinolar",
        sub: "Film ve seriallardan ilhamlanan geyimlər: qalın parçalar, davamlı çaplar, məhdud tirajlar. Kinematik yaşayanlar üçün.",
        cta1: "Kataloqa bax",
        cta2: "Kolleksiyalar",
        stat1: "drop-da dizayn",
        stat2: "mövsüm kolleksiyası",
        stat3: "açılış endirimi",
        panelCardTitle: "FW 26 Drop",
        panelCardText: "Heroes, Screen ve Culture - üç xətt artıq kataloqda. Qiymətlərdə açılış endirimi nəzərə alınib.",
        scroll: "Sürüşdür"
      },
      marquee: "vyron - FW 26 - Heroes - Screen - Culture - Opening Offer -20% - Məhdud drop-lar - Made to last",
      sec: {
        featEyebrow: "Seçilmiş",
        featTitle: "Drop-un ən yaxşısı",
        featSub: "Ən çox səbətə atılan modellər.",
        latestEyebrow: "Yeni düşdü",
        latestTitle: "Yeni gələnlər",
        latestSub: "Mövsümün təzə dizaynları: qalın futer, davamlı çap, hər detalda xarakter.",
        colEyebrow: "Kolleksiyalar",
        colTitle: "Mövsümün üç xətti",
        storyEyebrow: "Fəlsəfə",
        storyText: "İllərlə yenidən baxdığımız kadrlar haqqında geyimlər hazırlayırıq. Hər dizayn bir kadrdir: personaj portreti, simvol, titr. Parçanın sıxlığı, çabın davamlılığı və oturması detallarına qədər ölçülüb. Qalanını geyindikdə hiss edirsən.",
        showEyebrow: "Fokusda",
        showCta: "Məhsula bax",
        offerEyebrow: "Opening Offer",
        offerTitle: "Açılışa həsr olunmuş endirim",
        offerText: "Bütün kataloqda -20%. Promokod yoxdur, şərt yoxdur: üstüxətli qiymət qazancınızı, yekun qiymət isə ödədiyinizi göstərir.",
        offerCta: "Öz şeyini seç",
        socialTitle: "Sosial şəbəkələrimiz",
        socialText: "Sifariş və suallar mesencerlərdə. Brendin arxa planı YouTube ve TikTok-da."
      },
      why: {
        title: "Niyə vyron",
        i1t: "Qalın blanklar",
        i1d: "Sıx pambıq, möhkəmləndirilmiş tikişlər ve illərlə formasını saxlayan premium blanklar.",
        i2t: "Davamlı çaplar",
        i2d: "DTF çap və piqment boyama: qrafika onlarla yuyulmadan sonra da kontrastını saxlayır.",
        i3t: "Məhdud drop-lar",
        i3d: "Hər dizayn az tirajla. Ölçü bitibs - deməli bitib.",
        i4t: "Şəxsi xidmət",
        i4d: "Sifarişi bot deyil, insan təsdiqləyir: menecerimiz Telegram ve WhatsApp-da."
      },
      col: {
        openLink: "Linijanı aç",
        heroes: {
          tag: "Heroes",
          title: "Qəhrəmanlar",
          desc: "Komiika aləmləri ve superqəhrəmanlar: bu hekayələrlə böyüyənlər üçün səsli obrazlar və cəsur qrafika."
        },
        screen: {
          tag: "Screen",
          title: "Ekran",
          desc: "Kult serial hekayələri: yalnız özü anlayanlara hesablanan zərif istinadlar."
        },
        culture: {
          tag: "Culture",
          title: "Mədəniyyət",
          desc: "Musiqi, simvollar və küçə əhval-ruhiyyəsi saf şəkildə. Görünüşü tamamlayan universal şeylər."
        }
      },
      cat: {
        all: "Hamısı",
        tshirts: "Futbolkalar",
        sweatshirts: "Sviterlər"
      },
      card: {
        add: "Səbətə at",
        qv: "Sürətli baxış",
        from: "{p}-dan",
        wishAdd: "Sevimlilərə əlavə et",
        wishRemove: "Sevimlilərdən sil",
        added: "is-added"
      },
      qv: {
        title: "Sürətli baxış",
        selectSize: "Ölçü seçin",
        note: "Qiymət ölçüdən asılıdır",
        add: "Səbətə at"
      },
      prod: {
        selectFirst: "Əvvəlcə ölçü seçin",
        details: "Modelin detalları",
        features: "Xüsusiyyətlər",
        care: "Baxım",
        story: "Dizaynın hekayəti",
        sizingNote: "Qiymət ölçüdən asılıdır. Göstərilən qiymət yekundur - -20% açılış endirimi artıq hesablanıb.",
        related: "Bunu da bəyənə bilərsiniz",
        materialLabel: "Material",
        fitLabel: "Oturma",
        tee: "Futbolka",
        sweatshirt: "Sviter",
        zoomHint: "Yaxınlaşdırmaq üçün klikləyin",
        galleryCounter: "{i} / {n}",
        backToCatalog: "Kataloqa qayıt"
      },
      list: {
        pageEyebrow: "FW 26 kataloqu",
        pageTitle: "Nə lazımdırsa.<br>Heç nə artıq",
        searchPh: "Kataloqda axtar…",
        filters: "Filtrlər",
        closeFilters: "Filtrləri bağla",
        category: "Kateqoriya",
        price: "Qiymət",
        size: "Ölçü",
        from: "Dan",
        to: "Dək",
        sortPopular: "Populyar",
        priceAsc: "Əvvəlcə ucuz",
        priceDesc: "Əvvəlcə bahalı",
        reset: "Filtrləri sıfırla",
        emptyTitle: "Heç nə tapılmadı",
        emptyText: "Seçilmiş şərtlərə uyğun məhsul yoxdur. Filtrləri yumşaldın və ya tam sıfırlayın.",
        loadMore: "Daha {n} göstər",
        openFilters: "Filtrlər",
        found: "Tapıldı: {n}",
        nameAsc: "Ad: A-Z"
      },
      cart: {
        miniTitle: "Səbət",
        pageEyebrow: "Alışa bir addım",
        pageTitle: "Səbətiniz",
        pageSub: "Məhsulları, ölçüləri ve sayı yoxlayın - sonra sifarişə keçin.",
        emptyTitle: "Səbətiniz boşdur",
        emptyText: "FW 26 dropundan bir şey seçməyin vaxtıdır.",
        browse: "Kataloqa keç",
        items: ["məhsul", "məhsul"],
        subtotal: "Cəmi",
        checkout: "Sifarişi rəsmiləşdir",
        viewCart: "Səbətə bax",
        remove: "Məhsulu sil",
        increase: "Sayı artır",
        decrease: "Sayı azalt",
        sizePrefix: "Ölçü",
        clear: "Səbəti təmizlə",
        removedToast: "Məhsul səbətdən silindi",
        clearedToast: "Səbət təmizləndi"
      },
      contact: {
        eyebrow: "Son addım",
        title: "Sifarişə hazırsınız?",
        sub: "Seçdiyiniz şeyləri almaq üçün bizimlə rahat yolla əlaqə saxlayın. Mövcudluğu təsdiqləyək, ölçüdə kömək edək ve sifarişi şəxsən tamamlayaq.",
        summaryHead: "Sifarişiniz",
        total: "Ümumi",
        tgBtn: "Telegramda yaz",
        waBtn: "WhatsApp-da yaz",
        tgNote: "Cavab verəcəyik ve sifarişi təsdiqləyəcəyik",
        waNote: "Sürətli əlaqə - səs və ya yazı",
        socialsHead: "Sosial şəbəkələrimiz",
        goVerb: "Keçid",
        youtube: "YouTube",
        tiktok: "TikTok",
        clear: "Səbəti təmizlə",
        continue: "Alış-verişə davam",
        msgHello: "Salam! vyron-dan sifariş etmək istəyirəm:",
        msgItem: "- {name}, ölçü {size} x{qty} - {price}",
        msgTotal: "Cəmi: {total}",
        msgSign: "vyron saytından yazıram"
      },
      wish: {
        pageTitle: "Sevimlilər",
        pageSub: "Bəyəndiyiniz şeylərin ürəyinə klikləyin - hamısı burada toplanacaq.",
        emptyTitle: "Burada hələ heç nə yoxdur",
        emptyText: "Bəyəndiyiniz şeylərin ürəyinə klikləyin - hamısı burada toplanacaq.",
        browse: "Kataloqa keç"
      },
      search: {
        ph: "Deadpool, Dexter, Spider…",
        popular: "Populyar sorğular",
        popularList: ["Deadpool", "Dexter", "The Mentalist", "Spider-Man"],
        nothing: "Heç nə tapılmadı. Başqa sorğu sınayın.",
        viewProduct: "Məhsulu aç"
      },
      footer: {
        tagline: "Kinematik geyimlər məhdud drop-larla. Öz hekayətini ilk baxışdan tanıyanlar üçün.",
        shop: "Mağaza",
        info: "Məlumat",
        follow: "Bizi izləyin",
        rights: "© {y} vyron. Bütün hüquqlar qorunur.",
        privacy: "Məxfilik siyasəti",
        terms: "Satış şərtləri",
        docsNav: "Hüquqi sənədlər",
        shipLink: "Çatdırılma və ödəniş",
        returnsLink: "Qaytarılma",
        contactsLink: "Əlaqə"
      },
      legal: {
        privacyTitle: "Məxfilik siyasəti",
        privacyBody: [
          "Məxfiliyinizə hörmət edirik və yalnız sizin mesencerdə özünüzdən bildirdiyiniz məlumatları toplayırıq: ad, əlaqə ve sifariş detalı.",
          "Saytda hesab yoxdur ve serverlərdə şəxsi məlumat saxlanmır: səbət ve sevimlilər brauzerinizdə yaşayır. Sifariş məlumatları yalnız onu işlətmək üçün istifadə olunur.",
          "Söhbətin silinməsini və ya məlumatların necə işləndiyini soruşmaq istənilən vaxt Telegram ve WhatsApp vasitəsilə mümkündür."
        ],
        termsTitle: "Satış şərtləri",
        termsBody: [
          "Saytdakı bütün qiymətlər açılış endirimini (-20%) daxildir. Ödəniş menecer mövcudluğu təsdiqləyəndən ve detalları razılaşdırandan sonra baş tutur.",
          "Ödəniş ve çatdırılma üsulu mesencerdə şəxsən müzakirə olunur - beləcə şəhərinizə ən uyğun variantı təklif edə bilərik.",
          "Etiketlər toxunulmaz və şey geyilməmiş halda 14 gün ərzində dəyişdirmə ve qaytarılma mümkündür. Bizə yazın - həll edərik."
        ]
      },
      about: {
        daysReturn: "gün qaytarılma üçün",
        heroEyebrow: "Brend haqqında",
        heroTitle: "Kino sevmək adamları<br>üçün geyimlər",
        s1h: "vyron necə yarandı",
        s1p: "vyron sadə müşahidədən doğuldu: ən güclü obrazlar ekranda doğulur, amma onları ən çox sevən adamlar darıxdırıcı geyimlərdə gəzir. Bu iki dünyanı birləşdirməyə qərar verdik - sevimli hekayətləri gündəlik gardırobun bir hissəsinə çevirən şeylər düzəltməklə. Ucuz fanat merçi yox, keyfiyyətdən kompromiss yox.",
        s2h: "Əvvəl parça",
        s2p: "Hər model blankdan başlayır. Ağır ring-spun pambıq, orta sıxlıqlı futer, möhkəmləndirilmiş tikişlər ve cüt iynə - onlarla yuyulmaya ve illərin geyinməsinə tab gətirəcək blankları seçirik. Çap son akkorddur, keyfiyyətin əvəzedicisi heç vaxt.",
        s3h: "Dizayn kadr kimidir",
        s3p: "Çaplarımız film posterləri kimi qurulub: kompozisiya, kontrast, ikinci baxışda görülən detal. Personaj portretləri, simvollar, tipografiya - hər dizayn hekayət danışır ve ona öz oxunuşunuz üçün yer buraxır.",
        s4h: "Mövsümün üç xətti",
        s4p1: "Heroes - komiks aləmləri: səsli obrazlar, cəsur qrafika.",
        s4p2: "Screen - kult seriallar: yalnız özü anlayanlara hesablanan istinadlar.",
        s4p3: "Culture - musiqi ve simvollar: görünüşü yığan baza.",
        s5h: "Necə satırıq",
        s5p: "Vasitəçisiz, avtomatik funnel-siz. Siz şeyi ve ölçünü seçir, sifarişi yerləşdirirsiniz, menecer isə onu Telegram ve ya WhatsApp-da şəxsən təsdiqləyir. Ödəniş ve çatdırılma birbaşa müzakirə olunur - avtomatikadan yavaşdır, amma daha dürüst ve etibarlıdır.",
        cta1: "Kataloqa bax",
        cta2: "Bizimlə əlaqə saxlayın"
      },
      faqPage: {
        pageTitle: "Tez-tez verilən suallar",
        pageSub: "Ən çox soruşulanları bir yerə yığdıq. Cavab tapmadınız - istənilən platformada yazın."
      },
      faq: [
        ["Sifarişi necə yerləşdirirəm?", "Bir şey ve ölçü seçin, səbətə atın, sonra \"Sifarişi rəsmiləşdir\" düyməsinə basın. Sifarişinizin xülasəsi ve Telegram / WhatsApp düymələri açılacaq. Yazın - menecer mövcudluğu ve detalları təsdiqləyəcək."],
        ["Bu rəsmi merçdir?", "Xeyr. vyron kino ve seriallardan ilhamlanan müstəqil brenddir. Sevimli aləmlər əsasında öz orijinal dizaynlarımızı yaradır ve keyfiyyətli blanklarda çap edirik."],
        ["Qiymət ölçülər arasında niyə dəyişir?", "Böyük ölçülər daha çox material tələb edir, ona görə bir az bahalıdır. Hər ölçünün qiyməti məhsul səhifəsində göstərilir - üstüxətli rəqəm endirimə qədərki qiyməti göstərir."],
        ["Ödənişi necə edirəm?", "Sifariş təsdiqləndikdən sonra menecer söhbətdə rahat ödəniş üsulu təklif edəcək. Mövcudluq təsdiqlənmədən ön ödəniş istəmirik."],
        ["Çatdırılma neçə vaxt çəkir?", "Müddət şəhərinizdən asılıdır ve təsdiq zamanı şəxsən razılaşdırılır. Menecer lokasiyanıza görə ən yaxşı variantı hesablayacaq."],
        ["Qaytarmaq ve ya dəyişmək olar?", "Bəli, 14 gün ərzində - etiketlər yerində ve şey geyilməmiş olanda. Mesencerdə yazın, tez rəsmiləşdirərik."],
        ["Ölçünü necə seçim?", "Hər məhsul səhifəsində mövcud bütün ölçülər qiymətləri ilə göstərilir. İkisi arasında qalırsınızsa menecere yazın - seçməkdə kömək edərik."],
        ["Çaba necə baxım edim?", "Hər məhsul səhifəsində istehsalçının spesifikasiyasından götürülmüş baxım bloku var: yuma temperaturu, qurutma, ütüləmə. Ona əməl edin - çap uzun yaşayacaq."]
      ],
      ship: {
        heroSub: "Şəffaf şərtlər: sifarişi insan təsdiqləyir, detalşları şəxsən müzakirə edirik.",
        heroEyebrow: "Məlumat",
        heroTitle: "Çatdırılma, ödəniş<br>ve qaytarılma",
        orderH: "Sifariş necə gedir",
        orderSteps: [
          "Bir şey ve ölçü seçin, səbətə atın.",
          "Rəsmiləşdirmə ekranında cəmi görün ve mesencer düyməsinə basın.",
          "Menecer mövcudluğu təsdiqləyir ve detalları dəqiqləşdirir.",
          "Ödəniş ve çatdırılmanı razılaşdırırıq - ve sifariş yola düşür."
        ],
        payH: "Ödəniş",
        payP: "Ödəniş sifariş menecer tərəfindən təsdiqləndikdən sonra baş tutur. Üsulu söhbətdə birlikdə seçirik - köçürmə və ya qəbul zamanı, sizə necə uyğundursa.",
        delivH: "Çatdırılma",
        delivP: "Bütün dünyaya göndəririk, amma dəqiq şərtlər ve müddət regiondan asılı olduğundan fərdi şəkildə müəyyənləşir. Menecer təsdiq zamanı variantları hesablayacaq.",
        retH: "Qaytarılma ve dəyişdirmə",
        retP: "Qəbuldan sonra qərar vermək üçün 14 gün. Şərt - etiketlərin saxlanması ve şeyin ilkin görünüşü. İstənilən yolla yazın, tez rəsmiləşdirərik.",
        careH: "Baxım",
        careP: "Hər model səhifəsində istehsalçıdan baxım təlimatı var: yuma rejimi, qurutma, ütüləmə. Ona əməl edin - çap da parça da uzun yaşayacaq."
      },
      cont: {
        heroEyebrow: "Əlaqə",
        hoursHead: "İş saatları",
        heading: "Bizimlə əlaqə",
        text: "Sifarişlər, ölçü sualları ve digər hər şey - istənilən platformada yazın, maksimum sürətlə cavablayırıq.",
        tgNote: "Sifarişlər ve sürətli suallar",
        waNote: "Səs və ya yazı",
        igNote: "Link tezliklə",
        ytNote: "Brendin arxa planı",
        ttNote: "Qısa videolar",
        hours: "Adətən gün ərzində cavablayırıq"
      },
      toasts: {
        toCart: "Səbətə atıldı",
        toWish: "Sevimlilərə əlavə olundu",
        rmWish: "Sevimlilərdən silindi",
        needSize: "Ölçü seçin",
        error: "Nəsə xəta oldu"
      },
      loader: {
        caption: "FW 26 · Opening Offer"
      }
    }
  };

  let current = (() => {
    try {
      const saved = localStorage.getItem("vyron_lang");
      if (saved && MESSAGES[saved]) return saved;
    } catch {}
    const browser = (navigator.language || "ru").slice(0, 2);
    return MESSAGES[browser] ? browser : VYRON_CONFIG.defaults.language;
  })();

  const resolve = (path) => {
    const parts = path.split(".");
    let node = MESSAGES[current];
    for (const part of parts) {
      if (node == null) break;
      node = node[part];
    }
    if (node == null && current !== "ru") {
      node = MESSAGES.ru;
      for (const part of parts) {
        if (node == null) break;
        node = node[part];
      }
    }
    return node;
  };

  const interpolate = (str, vars) => {
    if (!vars) return str;
    return str.replace(/\{(\w+)\}/g, (_, key) => (vars[key] != null ? vars[key] : `{${key}}`));
  };

  const t = (path, vars) => {
    const value = resolve(path);
    if (typeof value === "string") return interpolate(value, vars);
    return value;
  };

  const applyStatic = () => {
    document.documentElement.setAttribute("lang", current);
    $$all("[data-i18n]").forEach((el) => {
      const value = resolve(el.getAttribute("data-i18n"));
      if (typeof value === "string") el.innerHTML = value;
    });
    $$all("[data-i18n-placeholder]").forEach((el) => {
      const value = resolve(el.getAttribute("data-i18n-placeholder"));
      if (typeof value === "string") el.placeholder = value;
    });
    $$all("[data-i18n-aria]").forEach((el) => {
      const value = resolve(el.getAttribute("data-i18n-aria"));
      if (typeof value === "string") el.setAttribute("aria-label", value);
    });
    const page = document.body.dataset.page || "home";
    const meta = resolve(`meta.${page}`);
    if (meta && typeof meta === "object") {
      if (meta.title) document.title = interpolate(meta.title, {});
      const desc = document.querySelector('meta[name="description"]');
      if (desc && meta.desc) desc.setAttribute("content", meta.desc);
    }
  };

  function $$all(sel) {
    return Array.from(document.querySelectorAll(sel));
  }

  const setLang = (lang) => {
    if (!MESSAGES[lang] || lang === current) return;
    current = lang;
    try {
      localStorage.setItem("vyron_lang", lang);
    } catch {}
    applyStatic();
    VY.emit("lang:changed", lang);
  };

  const pluralForm = (count) => {
    if (!current || current === "ru") return count % 10 === 1 && count % 100 !== 11 ? 0 : count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20) ? 1 : 2;
    return count === 1 ? 0 : 1;
  };

  const pluralize = (count, path) => {
    const forms = resolve(path);
    if (Array.isArray(forms)) return `${count} ${forms[Math.min(pluralForm(count), forms.length - 1)]}`;
    return `${count}`;
  };

  Object.assign(VY, {
    i18n: {
      get lang() {
        return current;
      },
      langs: Object.keys(MESSAGES),
      t,
      setLang,
      applyStatic,
      pluralize,
      messages: () => MESSAGES[current]
    }
  });
})();
