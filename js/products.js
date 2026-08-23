(() => {
  "use strict";

  const VY = window.VY;

  const SOURCE = Array.isArray(VY.CATALOG_DATA) ? VY.CATALOG_DATA : [];

  const CURATED = {
    deadpoul: {
      collection: "heroes",
      featured: true,
      name: { ru: "Deadpool", en: "Deadpool", az: "Deadpool" },
      tagline: {
        ru: "Пигментно окрашенная футболка тяжёлого класса на бланке Comfort Colors 1717.",
        en: "A heavyweight garment-dyed tee built on the Comfort Colors 1717 blank.",
        az: "Comfort Colors 1717 blankında ağır sinifli piqment boyalı futbolka."
      },
      story: {
        ru: "Есть образы, которые не нуждаются в представлении. Эта футболка построена как кадр из фильма о наёмнике с чувством юмора опасного уровня: плотная, пигментно окрашенная ткань выглядит так, будто вещь прожила с вами пару сезонов - и именно за это её любят. Relaxed-крой без боковых швов держит трубчатую форму годами, а двойная игла на швах рассчитана на долгую жизнь.",
        en: "Some characters need no introduction. This tee is framed like a shot from a movie about a mercenary whose sense of humor is a safety hazard: dense, garment-dyed fabric looks like the piece already spent a couple of seasons in your closet - which is exactly why people love it. The relaxed cut holds its tubular shape for years, and double-needle stitching is built for the long run.",
        az: "Bəzi obrazlara təqdimat lazım deyil. Bu futbolka mərcan yumorlu bir muzdlu haqqında filmdən kadr kimi qurulub: sıx, piqment boyalı parça elə görünür ki, şey onsuz da bir neçə mövsüm şkafınızda olub - və insanlar onu məhz buna görə sevir. Yan tikişsiz relaxed kroi illərlə boru formasını saxlayır, cüt iynə tikişlər uzun ömür üçündür."
      },
      material: {
        ru: "100% кольцевого прядения хлопок США, предварительно прошедший усадку",
        en: "100% pre-shrunk US ring-spun cotton",
        az: "100% ABŞ ring-spun pambıq, əvvəlcədən çökmə keçirib"
      },
      fit: {
        ru: "Свободный (relaxed fit)",
        en: "Relaxed fit",
        az: "Boş oturma (relaxed)"
      },
      features: [
        { ru: "Плотная ткань 6.1 oz/yd² (206.8 г/м²)", en: "Heavyweight fabric 6.1 oz/yd² (206.8 g/m²)", az: "Ağır parça 6.1 oz/yd² (206.8 q/m²)" },
        { ru: "Свободный крой", en: "Relaxed fit", az: "Boş kroy" },
        { ru: "Предварительно усаженный хлопок кольцевого прядения", en: "Pre-shrunk ring-spun cotton", az: "Əvvəlcədən çökmüş ring-spun pambıq" },
        { ru: "Вшивной ярлык", en: "Sewn-in label", az: "Tikilmiş etiket" }
      ],
      care: null
    },

    dexter2: {
      collection: "screen",
      featured: true,
      name: { ru: "Dexter", en: "Dexter", az: "Dexter" },
      tagline: {
        ru: "Свитшот с тёмной кинематографичной энергией: портрет спереди, красный акцент на спине.",
        en: "A sweatshirt with dark, cinematic energy: a portrait up front, a red accent on the back.",
        az: "Qaranlıq kinematik enerjili sviter: öndə portret, arxada qırmızı vurğu."
      },
      story: {
        ru: "Тёмная, кинематографичная энергия - мягкая для каждого дня, плотная, чтобы держать форму. Чёрное полотно круглого ворота несёт контрастный монохромный портрет, над которым выведено слово \"DEVIL\", а на спине - портрет с красными акцентами, будто стоп-кадр из триллера. Это вещь для поздних поездок в ночи, подпольных концертов и осенних вечеров, когда хочется наслоить настроение. Она незаметно становится той самой базовой вещью ротации, которая двигает стиль в более тёмную, кинематографичную территорию.",
        en: "Dark, cinematic energy - soft enough for every day, sturdy enough to hold its shape. A black crewneck canvas carries a bold monochrome portrait with the word \"DEVIL\" scrawled above, while the back shows a red-accented portrait that feels like a still from a thriller. Made for late-night drives, basement shows and autumn evenings when you want to layer some mood. It quietly settles into your rotation as the piece that pushes your style into darker, more cinematic territory.",
        az: "Qaranlıq, kinematik enerji - hər gün üçün yumşaq, formasını saxlayacaq qədər sıx. Qara crewneck kətanı üstündə \"DEVIL\" sözü yazılmış cəsarətli monoportret daşıyır, arxada isə trillerdən kadra bənzəyən qırmızı vurğulu portret var. Gecə sürüşləri, zirzəmi konsertləri ve əhval-ruhiyyə üstünə geyinmək istədiyin payız axşamları üçündür. Sakitcə rotasiyanın əsas şeyinə çevrilir və stilini daha qaranlıq, kinematik əraziyə aparır."
      },
      material: {
        ru: "Смесь 50/50 хлопок-полиэстер, оптимизированная для печати",
        en: "50/50 cotton-poly blend optimized for printing",
        az: "Çap üçün optimallaşdırılmış 50/50 pambıq-poliester qarışığı"
      },
      fit: {
        ru: "Расслабленная, комфортная",
        en: "Relaxed and comfortable",
        az: "Rahat ve rahat oturan"
      },
      features: [
        { ru: "Смесь 50/50 хлопок-полиэстер: гладкая, прочная ткань для чёткой печати", en: "50/50 cotton-poly blend: smooth, strong fabric optimized for printing", az: "50/50 pambıq-poliester: çap üçün ideal hamar, güclü parça" },
        { ru: "Средне-тяжёлый вес (9 oz/yd²) для тепла и структуры", en: "Medium-heavy weight (9 oz/yd²) for warmth and structure", az: "Orta-ağır çəki (9 oz/yd²) istilik ve struktur üçün" },
        { ru: "Рифлёный ворот, манжеты и пояс сохраняют форму", en: "Ribbed collar, cuffs and waistband retain shape", az: "Rebrov yaxa, manjet ve bel formasını saxlayır" },
        { ru: "Прочные оверлочные швы и трубчатое вязание без боковых швов", en: "Durable overlocked seams and tubular knit (no side seams)", az: "Davamlı overlok tikişlər ve yan tikişsiz boru toxuma" },
        { ru: "Вшивной ярлык и неброский логотип \"C\" на рукаве", en: "Sewn-in label and subtle \"C\" sleeve logo", az: "Tikilmiş etiket ve qolun üzərində zərif \"C\" loqosu" }
      ],
      care: [
        { ru: "Машинная стирка: холодная вода (макс. 30°C / 90°F)", en: "Machine wash: cold (max 30°C / 90°F)", az: "Maşın yuması: soyuq su (maks. 30°C / 90°F)" },
        { ru: "Не отбеливать", en: "Do not bleach", az: "Ağartmayın" },
        { ru: "Не сушить в машине", en: "Do not tumble dry", az: "Maşında qurutmayın" },
        { ru: "Гладить, отпаривать или сушить: низкая температура", en: "Iron, steam or dry: low heat", az: "Ütü, buxar və ya qurutma: aşağı temperatur" },
        { ru: "Не отдавать в химчистку", en: "Do not dryclean", az: "Kimyəvi təmizləmə etməyin" }
      ]
    },

    mentalist: {
      collection: "screen",
      featured: false,
      name: { ru: "The Mentalist", en: "The Mentalist", az: "The Mentalist" },
      tagline: {
        ru: "Футболка с винтажным культовым настроением: нуарный портрет и капающий смайл на спине.",
        en: "A tee with gritty, vintage-cult vibes: a noir portrait and a dripping smile on the back.",
        az: "Vintraq-kult əhval-ruhiyyəli futbolka: öndə nuar portret, arxada damlayan təbəssüm."
      },
      story: {
        ru: "Грубоватый винтаж и атмосфера культа - прямо в повседневном гардеробе. Спереди яркий круглый цветовой акцент обрамляет кинематографичный нуар-портрет, а на спине - жутковатая эмблема-улыбка с потёками краски в насыщенном красном. Тяжёлая ткань с пигментным окрашиванием висит как любимая прожитая вещь: мягкость начинается уже с первой стирки благодаря послепроизводственному окрашиванию и хлопку кольцевого прядения. Носите на ночных сеансах, городских прогулках - или когда хочется, чтобы вещь ощущалась скорее историей, чем просто футболкой.",
        en: "Gritty vintage and cult-movie atmosphere - straight into your everyday wardrobe. Up front a bright circular pop of color frames a cinematic noir portrait, while the back carries a haunting paint-drip smile emblem in vivid red. The heavyweight garment-dyed fabric hangs like a lived-in favorite: soft from wash one thanks to post-construction dyeing and ring-spun cotton. Wear it to late-night screenings and city walks - or whenever you want a piece that feels more like a story than just another shirt.",
        az: "Bir az kobud vintraq ve kult film atmosferi - birbaşa gündəlik gardıroba. Öndə parlaq dairəvi rəng vurğu kinematik nuar portreti çərçivələyir, arxada isə canlı qırmızı rəngdə boyu damlayan təbəssüm emblemi var. Ağır piqment boyalı parça sevilmiş köhnə şey kimi asılır: istehsal sonrası boyama ve ring-spun pambıq sayəsində yumşaqdan birinci yuyuluşdan başlayır. Gecə seanslarında ve şəhər gəzintilərində geyinin - ya da şey sadəcə futbolka deyil, hekayət kimi hiss edəndə."
      },
      material: {
        ru: "100% хлопок кольцевого прядения США с мягкостью пигментного окрашивания",
        en: "100% US ring-spun cotton with garment-dyed softness",
        az: "Piqment boyamanın yumşaqlığı ilə 100% ABŞ ring-spun pambığı"
      },
      fit: {
        ru: "Свободный, тяжёлый класс",
        en: "Heavyweight relaxed",
        az: "Ağır sinif, boş oturma"
      },
      features: [
        { ru: "100% хлопок кольцевого прядения США с мягкостью пигментного окрашивания", en: "100% US ring-spun cotton with garment-dyed softness", az: "Piqment boyama yumşaqlığı ilə 100% ABŞ ring-spun pambığı" },
        { ru: "Плотная ткань 6.1 oz и свободный крой для прочного комфорта", en: "Heavyweight 6.1 oz fabric and relaxed fit for durable comfort", az: "Ağır 6.1 oz parça ve davamlı rahatlıq üçün boş kroy" },
        { ru: "Двойная игла и трубчатая конструкция без боковых швов", en: "Double-needle stitching and tubular construction (no side seams)", az: "Cüt iynə tikiş ve yan tikişsiz boru konstruksiya" },
        { ru: "Предварительная усадка и вшивной ярлык", en: "Pre-shrunk treatment and sewn-in label", az: "Əvvəlcədən çökdürmə ve tikilmiş etiket" }
      ],
      care: [
        { ru: "Машинная стирка: холодная вода (макс. 30°C / 90°F)", en: "Machine wash: cold (max 30°C / 90°F)", az: "Maşın yuması: soyuq su (maks. 30°C / 90°F)" },
        { ru: "Не отбеливать", en: "Do not bleach", az: "Ağartmayın" },
        { ru: "Сушка в машине: низкая температура", en: "Tumble dry: low heat", az: "Maşında qurutma: aşağı temperatura" },
        { ru: "Гладить, отпаривать или сушить: низкая температура", en: "Iron, steam or dry: low heat", az: "Ütü, buxar və ya qurutma: aşağı temperatur" },
        { ru: "Не отдавать в химчистку", en: "Do not dryclean", az: "Kimyəvi təmizləmə etməyin" }
      ]
    },

    mentalist3: {
      collection: "screen",
      featured: true,
      name: { ru: "The Mentalist: J", en: "The Mentalist: J", az: "The Mentalist: J" },
      tagline: {
        ru: "Свитшот свободного кроя: ретро-портрет спереди и крупная типографика \"J\" на спине.",
        en: "A relaxed-fit sweatshirt: a retro poster portrait up front, a tall \"J\" on the back.",
        az: "Boş kroylu sviter: öndə retro poster portreti, arxada iri \"J\" hərfi."
      },
      story: {
        ru: "Свободный крой и задумчивое, кинематографичное настроение: мягкий хлопок кольцевого прядения средней плотности легко драпируется, сохраняя структуру. Спереди - контрастный портрет в духе винтажного постера с дистрессированными красными акцентами, на спине - высокая типографическая буква \"J\", с которой иллюстрированная фигура словно выходит из принта. Рифлёные манжеты и низ, вшивная лента ворота и полулунная накладка добавляют долговечности, а сертифицированные OEKO-TEX красители делают вещь ответственно законченной. Для сдержанных образов под сюжет: длинные вечера, встречи без повода, тихие дни под пластинку и крепкий кофе.",
        en: "Relaxed fit and a moody, cinematic state of mind: soft mid-weight ring-spun cotton drapes easily while holding structure. The front shows a high-contrast, vintage-poster portrait layered with distressed red accents; the back anchors the design with a tall typographic \"J\", letting the illustrated figure step out of the print. Ribbed cuffs and hem, neck tape and a half-moon patch add durability, while OEKO-TEX certified dyes make the piece responsibly finished. For understated, story-driven looks: long nights out, casual meetups, quiet afternoons with a record player and strong coffee.",
        az: "Boş kroy ve düşüncəli, kinematik əhval-ruhiyyə: yumşaq orta sıxlıqlı ring-spun pambıq asan drapiya olarkən strukturu saxlayır. Öndə distress qırmızı vurğularla zəngin vintraq-poster portreti, arxada isə dizayni dayandıran iri tipografik \"J\" var - illüstrasiya figuru çabdan çölə addımlayır. Rebrov manjetler, yaka lentı ve yarimay naxışı davamlılıq əlavə edir, OEKO-TEX sertifikatlı boyalar isə şeyi cavabdeh şəkildə tamamlayır. Sadə, hekayətli görünümlər üçün: uzun gecələr, səbəbsiz görüşlər, plastinkalar ve güclü kofe ilə sakit günortalar."
      },
      material: {
        ru: "80% хлопка кольцевого прядения / 20% полиэстер, средне-тяжёлый футер (9.5 oz)",
        en: "80% ring-spun cotton / 20% polyester, medium-heavy fleece (9.5 oz)",
        az: "80% ring-spun pambıq / 20% poliester, orta-ağır futer (9.5 oz)"
      },
      fit: {
        ru: "Свободная взрослая посадка",
        en: "Relaxed adult fit",
        az: "Yetkinlər üçün boş oturma"
      },
      features: [
        { ru: "80% хлопок кольцевого прядения / 20% полиэстер, средне-тяжёлая ткань (9.5 oz): мягкая, но структурная", en: "80% ring-spun cotton / 20% polyester, medium-heavy fabric (9.5 oz): soft yet structured hand", az: "80% ring-spun pambıq / 20% poliester, orta-ağır parça (9.5 oz): yumşaq, amma strukturlu" },
        { ru: "Рифлёные ворот, манжеты и нижний край: растяжение и восстановление формы", en: "1x1 ribbed collar, cuffs and bottom hem for stretch and recovery", az: "1x1 rebrov yaxa, manjet ve alt kənar: uzanma ve formanın bərpası" },
        { ru: "Твиловая лента ворота и полулунная накладка на спине для стабильности", en: "Twill neck tape and half-moon back neck patch for stability", az: "Sabitlik üçün twill yaka lentı ve arxa yarimay yamağı" },
        { ru: "Вшивной твиловый ярлык", en: "Sewn-in twill label", az: "Tikilmiş twill etiketi" },
        { ru: "Красители с сертификатом OEKO-TEX STANDARD 100", en: "OEKO-TEX STANDARD 100 certified low-impact dyes", az: "OEKO-TEX STANDARD 100 sertifikatlı az təsirli boyalar" }
      ],
      care: [
        { ru: "Машинная стирка: холодная вода (макс. 30°C / 90°F)", en: "Machine wash: cold (max 30°C / 90°F)", az: "Maşın yuması: soyuq su (maks. 30°C / 90°F)" },
        { ru: "Отбеливатель только без хлора - при необходимости", en: "Non-chlorine bleach only, as needed", az: "Yalnız xlorsuz ağardıcı - lazım olanda" },
        { ru: "Сушка в машине: низкая температура", en: "Tumble dry: low heat", az: "Maşında qurutma: aşağı temperatura" },
        { ru: "Не отдавать в химчистку", en: "Do not dryclean", az: "Kimyəvi təmizləmə etməyin" }
      ]
    },

    music: {
      collection: "culture",
      featured: true,
      name: { ru: "Music", en: "Music", az: "Musiqi" },
      tagline: {
        ru: "Лёгкая кремовая футболка: крупный принт MUSIC, наушники и довольный кот на спине.",
        en: "A lightweight cream tee: a bold MUSIC print, headphones and a contented cat on the back.",
        az: "Yüngül krem futbolka: iri MUSIC çapı, qulaqlıqlar ve arxada razı pişik."
      },
      story: {
        ru: "Мягкая лёгкая футболка для тех, кому нравится тихая компания музыки. Тёплое кремовое полотно несёт крупную многоярусную надпись \"MUSIC\" за детальной иллюстрацией наушников - графику, что читается одновременно как винтажный постер и обложка плейлиста. На спине расположился довольный кот в расслабленной позе - доля тепла и характера. Надевайте, пока копаетесь в пластинках, собираете ночной плейлист или сворачиваетесь клубком с котом и полноразмерными наушниками. Классический крой и дышащая ткань держат комфорт через длинные студийные сессии, кофейни и медленные воскресенья.",
        en: "A soft, lightweight tee for people who enjoy music's quiet company. A warm cream canvas carries a bold stacked \"MUSIC\" print behind a detailed headphone illustration - the kind of graphic that reads as both vintage poster and playlist cover. On the back, a sweet, contented cat sits in a relaxed pose, adding a wink of warmth. Wear it crate-digging through records, mixing a late-night playlist, or curled up with a cat and a pair of over-ear cans. The classic fit and breathable fabric stay comfortable through long studio sessions, coffee runs and slow Sundays.",
        az: "Musiqinin sakit yoldaşlığını sevənlər üçün yumşaq, yüngül futbolka. İsti krem kətan detallı qulaqlıq illüstrasiyası arxasında iri sütunlu \"MUSIC\" çapı daşıyır - həm vintraq poster, həm pleylist üz qabığı kimi oxunan qrafika. Arxada rahat pozada razı bir pişik oturub - istiqliq ve xarakter qatarı. Plastinkalarda qazarkən, gecə pleylisti yığarkən və ya pişiklə qulaqlıqlarla dolanaraq geyinin. Klassik kroy ve nəfəs alan parça uzun studiya sessiyaları, kofe turu ve yavaş bazar günləri boyunca rahatdır."
      },
      material: {
        ru: "60% гребенного хлопка кольцевого прядения / 40% полиэстер",
        en: "60% combed ring-spun cotton / 40% polyester",
        az: "60% daraq ring-spun pambıq / 40% poliester"
      },
      fit: {
        ru: "Классический",
        en: "Classic fit",
        az: "Klassik kroy"
      },
      features: [
        { ru: "60% гребенного хлопка / 40% полиэстер: мягкая, гладкая на ощупь", en: "60% combed ring-spun cotton / 40% polyester for a soft, smooth hand", az: "60% daraq ring-spun pambıq / 40% poliester: yumşaq, hamar toxunuş" },
        { ru: "Лёгкая ткань (4.3 oz/yd²) - дышит и легко слоями", en: "Lightweight fabric (4.3 oz/yd²) - breathable and easy to layer", az: "Yüngül parça (4.3 oz/yd²) - nəfəs alır, asan qatlanır" },
        { ru: "Рифлёный ворот 1x1: тянется при носке и возвращается в форму", en: "1x1 ribbed collar that stretches on wear and returns to shape", az: "1x1 rebrov yaxa: geyindikcə uzanır ve formasına qayıdır" },
        { ru: "Плечевые ленты из основной ткани: чистые линии, меньше растяжения", en: "Self-fabric shoulder tape for clean lines and reduced stretching", az: "Əsas parçadan çiyin lentı: təmiz xətlər, az uzanma" },
        { ru: "Отрывной ярлык с внутренним DTF-принтом на горловине", en: "Tear-away label with DTF inner neck print", az: "Köpək etiket və yaxada daxili DTF çap" }
      ],
      care: [
        { ru: "Машинная стирка: холодная вода (макс. 30°C / 90°F)", en: "Machine wash: cold (max 30°C / 90°F)", az: "Maşın yuması: soyuq su (maks. 30°C / 90°F)" },
        { ru: "Не отбеливать", en: "Do not bleach", az: "Ağartmayın" },
        { ru: "Сушка в машине: низкая температура", en: "Tumble dry: low heat", az: "Maşında qurutma: aşağı temperatura" },
        { ru: "Гладить, отпаривать или сушить: низкая температура", en: "Iron, steam or dry: low heat", az: "Ütü, buxar və ya qurutma: aşağı temperatur" },
        { ru: "Не отдавать в химчистку", en: "Do not dryclean", az: "Kimyəvi təmizləmə etməyin" }
      ]
    },

    spider: {
      collection: "heroes",
      featured: false,
      name: { ru: "Spider", en: "Spider", az: "Spider" },
      tagline: {
        ru: "Городская лёгкость: глянцевая эмблема паука на груди и высокий знак на верхней части спины.",
        en: "Urban ease: a slim glossy spider emblem on the chest, a tall mark across the upper back.",
        az: "Şəhər yüngüllüyü: döşdə parlament örümcek emblemi, kürəyin üst hissəsində iri işarə."
      },
      story: {
        ru: "Городской характер с приглушённым настроением: тонкая глянцевая эмблема паука на груди и высокий стилизованный знак на верхней части спины. Дышащий полиэстер держит вас сухим в жаркие дни и под городскими огнями. Фанатство здесь звучит тонко, но однозначно: под курткой на ночной прогулке, слоями на комикс-вечерах или соло - как чистое графическое заявление. Дизайн читается как отсылка к скрытности и скорости - спокойная уверенность тех, кто проходит сквозь толпу, не требуя внимания.",
        en: "Urban character with a muted mood: a slim, glossy spider emblem on the chest and a tall stylized mark down the upper back. Breathable polyester keeps you dry on warm days and under city lights. Fandom here stays subtle yet unmistakable: tucked under a jacket on late-night walks, layered for comic nights, or worn solo as a clean graphic statement. The design reads as a nod to stealth and speed - the quiet confidence of people who move through crowds without asking for attention.",
        az: "Səssiz modda şəhər xarakteri: döşdə nazik, parlaq örümcek emblemi ve kürəyin üst hissəsində stilize edilmiş iri işarə. Nəfəs alan poliester isti günlərdə ve şəhər işıqları altında sizi quru saxlayır. Fanatlıq burada incə, amma dəqiqliklə səslənir: gecə gəzintisində jaketin altında, komiks gecələrində üst-üstə və ya tək - təmiz qrafik bəyanat kimi. Dizayn gizlilik ve sürətə göstərici kimi oxunur - diqqət istəmədən izdihamdan keçənlərin sakit özgüveni."
      },
      material: {
        ru: "100% полиэстер: прочный, формостойкий, быстро сохнущий",
        en: "100% polyester: strong, shape-retaining, quick-drying",
        az: "100% poliester: davamlı, formalı, tez quruyan"
      },
      fit: {
        ru: "Обычная посадка, боковые швы",
        en: "Regular fit with side seams",
        az: "Adi oturma, yan tikişlər"
      },
      features: [
        { ru: "100% полиэстер: прочный, держит форму, быстро сохнет", en: "100% polyester: strong, shape-retaining, quick-drying", az: "100% poliester: davamlı, formalı, tez quruyan" },
        { ru: "Сверхлёгкая ткань (129 г/м²) - дыхание и комфорт весь день", en: "Extra light fabric (129 g/m²) for breathable, all-day comfort", az: "Əlavə yüngül parça (129 q/m²) - bütün gün nəfəs alan rahatlıq" },
        { ru: "DTF-печать: чёткая и долговечная графика", en: "Direct-to-Film (DTF) print for crisp, durable graphics", az: "DTF çap: dəqiq ve davamlı qrafika" },
        { ru: "Усиленная конструкция: ворот из основной ткани и двойная игла на краях", en: "Reinforced construction: self-fabric collar and double-needle hems", az: "Möhkəmləndirilmiş konstruksiya: əsas parçadan yaxa ve cüt iynə kənarlar" },
        { ru: "Обычная посадка с боковыми швами и отрывным ярлыком", en: "Regular fit with side seams and tear-away label", az: "Yan tikişli adi oturma ve köpək etiketi" }
      ],
      care: [
        { ru: "Машинная стирка: холодная вода (макс. 30°C / 90°F)", en: "Machine wash: cold (max 30°C / 90°F)", az: "Maşın yuması: soyuq su (maks. 30°C / 90°F)" },
        { ru: "Не отбеливать", en: "Do not bleach", az: "Ağartmayın" },
        { ru: "Не сушить в машине", en: "Do not tumble dry", az: "Maşında qurutmayın" },
        { ru: "Не гладить", en: "Do not iron", az: "Ütülemeyin" },
        { ru: "Не отдавать в химчистку", en: "Do not dryclean", az: "Kimyəvi təmizləmə etməyin" }
      ]
    },

    spiderandvenom: {
      collection: "heroes",
      featured: true,
      name: { ru: "Spider & Venom", en: "Spider & Venom", az: "Spider & Venom" },
      tagline: {
        ru: "Двойная энергия героя и его тёмного отражения в одном лёгком силуэте.",
        en: "The twin energy of a hero and their dark reflection in one lightweight silhouette.",
        az: "Bir qəhrəmanın ve onun qaranlıq əks-sədasının ikili enerjisi bir yüngül siluetdə."
      },
      story: {
        ru: "Две стороны одной легенды - в одной вещи. Как и родственный дизайн линейки, эта лёгкая футболка несёт тонкую глянцевую эмблему на груди и высокий стилизованный знак на верхней части спины, но имя говорит само за себя: здесь герой и его тёмное отражение делят один силуэт. Дышащий полиэстер, городские ночи, слои под куртку - фанатство остаётся тонким знаком для своих. Для коллекционеров и полуночников, чей поп-культурный стиль звучит негромко, но продуманно.",
        en: "Two sides of one legend - in one piece. Like its sibling design, this lightweight tee carries a slim glossy emblem on the chest and a tall stylized mark across the upper back, but the name speaks for itself: here the hero and the dark reflection share one silhouette. Breathable polyester, city nights, layers under a jacket - fandom stays a quiet signal for those who know. Built for collectors and midnight people whose pop-culture style whispers rather than shouts.",
        az: "Bir əfsanənin iki tərəfi - bir şeydə. Qohum dizayn kimi bu yüngül futbolka döşdə nazik parlak emblemi ve kürəyin üstündə stilize işarəni daşıyır, amma ad özü danışır: burada qəhrəman ve onun qaranlıq əks-sədası bir silueti bölüşür. Nəfəs alan poliester, şəhər gecələri, jaket altı qatlar - fanatlıq bilənlər üçün sakit siqnal olaraq qalır. Kolleksionerlər ve gecə adamları üçün: pop-kültür stili fısıldayır, qışqırmır."
      },
      material: {
        ru: "100% полиэстер: прочный, формостойкий, быстро сохнущий",
        en: "100% polyester: strong, shape-retaining, quick-drying",
        az: "100% poliester: davamlı, formalı, tez quruyan"
      },
      fit: {
        ru: "Обычная посадка, боковые швы",
        en: "Regular fit with side seams",
        az: "Adi oturma, yan tikişlər"
      },
      features: [
        { ru: "100% полиэстер: прочный, держит форму, быстро сохнет", en: "100% polyester: strong, shape-retaining, quick-drying", az: "100% poliester: davamlı, formalı, tez quruyan" },
        { ru: "Сверхлёгкая ткань (129 г/м²) - дыхание и комфорт весь день", en: "Extra light fabric (129 g/m²) for breathable, all-day comfort", az: "Əlavə yüngül parça (129 q/m²) - bütün gün nəfəs alan rahatlıq" },
        { ru: "DTF-печать: чёткая и долговечная графика", en: "Direct-to-Film (DTF) print for crisp, durable graphics", az: "DTF çap: dəqiq ve davamlı qrafika" },
        { ru: "Усиленная конструкция: ворот из основной ткани и двойная игла на краях", en: "Reinforced construction: self-fabric collar and double-needle hems", az: "Möhkəmləndirilmiş konstruksiya: əsas parçadan yaxa ve cüt iynə kənarlar" },
        { ru: "Обычная посадка с боковыми швами и отрывным ярлыком", en: "Regular fit with side seams and tear-away label", az: "Yan tikişli adi oturma ve köpək etiketi" }
      ],
      care: [
        { ru: "Машинная стирка: холодная вода (макс. 30°C / 90°F)", en: "Machine wash: cold (max 30°C / 90°F)", az: "Maşın yuması: soyuq su (maks. 30°C / 90°F)" },
        { ru: "Не отбеливать", en: "Do not bleach", az: "Ağartmayın" },
        { ru: "Не сушить в машине", en: "Do not tumble dry", az: "Maşında qurutmayın" },
        { ru: "Не гладить", en: "Do not iron", az: "Ütülemeyin" },
        { ru: "Не отдавать в химчистку", en: "Do not dryclean", az: "Kimyəvi təmizləmə etməyin" }
      ]
    },

    spidermantomxoland: {
      collection: "heroes",
      featured: false,
      name: { ru: "Человек-паук", en: "Spider-Man", az: "Hörümçək-adam" },
      tagline: {
        ru: "Тяжёлая пигментно окрашенная футболка: кинематографичный портрет и ретро-типографика.",
        en: "A heavyweight garment-dyed tee: a cinematic portrait with bold retro lettering.",
        az: "Ağır piqment boyalı futbolka: kinematik portret ve retro tipografiya."
      },
      story: {
        ru: "Тяжёлая пигментно окрашенная футболка - для фанатов, которые живут ночами комиксов и повседневными приключениями. Мягкость \"разношенной\" вещи приходит от окрашивания после производства: каждая стирка раскрывает цвет глубже и добавляет текстуру жизни. Спереди - кинематографичный портрет с жирной ретро-типографикой, на спине - эффектная красная эмблема паука: прямые кивки характеру и дерзости героя. Свободный крой и прочные двойные швы двигаются вместе с вами по улицам, кино-марафонам и встречам с такими же фанатами - и со временем вещь становится только лучше.",
        en: "A heavyweight garment-dyed tee built for fans who live for comic-book nights and everyday adventures. Its soft, broken-in feel comes from dyeing after construction: every wash brings out deeper color and more lived-in texture. Up front - a cinematic portrait with bold retro lettering; on the back - a striking red spider emblem, clear nods to the hero's grit and swagger. The relaxed cut and sturdy double-needle seams move with you through city streets, movie marathons and meetups with fellow fans - and the piece only gets better with time.",
        az: "Komiks gecələrinə ve gündəlik macəralara yaşayan fanatlar üçün ağır piqment boyalı futbolka. Onun \"köhnəmiş\" yumşaqlığı istehsaldan sonra boyamadan gəlir: hər yuyuluş rəngi dərinləşdirir ve daha yaşantılı toxunuş əlavə edir. Öndə qalın retro hərflərlə kinematik portret, arxada effektli qırmızı örümcek emblemi - qəhrəmanın dözümü ve özgüveninə açıq işarələr. Boş kroy ve davamlı cüt iynə tikişlər sizinlə şəhər küçələrində, film maratonlarında ve həmfikirlər görüşlərində hərəkət edir - ve zamanla şey daha da yaxşılaşır."
      },
      material: {
        ru: "100% хлопок кольцевого прядения США, предварительно усаженный",
        en: "100% pre-shrunk US ring-spun cotton",
        az: "100% əvvəlcədən çökmüş ABŞ ring-spun pambığı"
      },
      fit: {
        ru: "Свободный, тяжёлый класс",
        en: "Heavyweight relaxed",
        az: "Ağır sinif, boş oturma"
      },
      features: [
        { ru: "100% хлопок кольцевого прядения США: комфорт на годы", en: "100% US ring-spun cotton for long-lasting comfort", az: "100% ABŞ ring-spun pambığı: illər boyu rahatlıq" },
        { ru: "Пигментное окрашивание: мягкий цвет и фактура прожитой вещи", en: "Garment-dyed fabric for soft color and lived-in texture", az: "Piqment boyama: yumşaq rəng ve yaşantılı toxunuş" },
        { ru: "Плотная ткань 6.1 oz, свободный крой, предварительная усадка", en: "Heavyweight 6.1 oz fabric, relaxed fit, pre-shrunk construction", az: "Ağır 6.1 oz parça, boş kroy, əvvəlcədən çökdürülmüş konstruksiya" },
        { ru: "Двойная игла и трубчатое вязание без боковых швов", en: "Double-needle stitching and tubular knit (no side seams)", az: "Cüt iynə tikiş ve yan tikişsiz boru toxuma" },
        { ru: "Вшивной ярлык", en: "Sewn-in label", az: "Tikilmiş etiket" }
      ],
      care: [
        { ru: "Машинная стирка: холодная вода (макс. 30°C / 90°F)", en: "Machine wash: cold (max 30°C / 90°F)", az: "Maşın yuması: soyuq su (maks. 30°C / 90°F)" },
        { ru: "Не отбеливать", en: "Do not bleach", az: "Ağartmayın" },
        { ru: "Сушка в машине: низкая температура", en: "Tumble dry: low heat", az: "Maşında qurutma: aşağı temperatura" },
        { ru: "Гладить, отпаривать или сушить: низкая температура", en: "Iron, steam or dry: low heat", az: "Ütü, buxar və ya qurutma: aşağı temperatur" },
        { ru: "Не отдавать в химчистку", en: "Do not dryclean", az: "Kimyəvi təmizləmə etməyin" }
      ]
    }
  };

  const PRODUCTS = SOURCE.map((entry) => {
    const cur = CURATED[entry.slug] || {};
    const sizes = (entry.sizesUSD || []).map((item) => ({
      code: item.code,
      price: item.usd
    }));
    return {
      id: entry.slug,
      slug: entry.slug,
      type: entry.type || "tee",
      collection: cur.collection || "culture",
      featured: Boolean(cur.featured),
      images: (entry.images || []).slice(),
      sizes,
      name: cur.name || { ru: entry.slug, en: entry.slug, az: entry.slug },
      tagline: cur.tagline || null,
      story: cur.story || null,
      material: cur.material || null,
      fit: cur.fit || null,
      features: cur.features || [],
      care: cur.care || []
    };
  });

  const loc = (field, value) => (value && typeof value === "object" ? value[VY.i18n.lang] || value.ru : "");

  const productName = (product) => loc(product.id, product.name);

  const getById = (id) => PRODUCTS.find((p) => p.id === id);

  const searchProducts = (query) => {
    const q = VY.norm(query);
    if (!q) return [];
    return PRODUCTS.filter((product) => {
      const haystack = VY.norm(
        [productName(product), product.name.ru, product.name.en, product.type === "sweatshirt" ? "свитшот sweatshirt" : "футболка t-shirt"].join(" ")
      );
      return q.split(/\s+/).every((token) => haystack.includes(token));
    });
  };

  Object.assign(VY, {
    PRODUCTS,
    productsApi: {
      getById,
      searchProducts,
      loc,
      productName
    }
  });
})();
