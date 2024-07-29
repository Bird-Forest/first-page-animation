"use server";

import { Post } from "../models/post";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort("field -date").lean();
    const data = JSON.parse(JSON.stringify(posts));
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getPostById = async (req, res) => {
  const { id } = req;

  try {
    const post = await Post.findById(id).lean();
    const data = JSON.parse(JSON.stringify(post));
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const createNewPost = async (item) => {
  try {
    const newPost = await Post.create(item);
    // const data = JSON.parse(JSON.stringify(newPost));
    return {
      message: "Успішно додано",
    };
  } catch (e) {
    console.log(e);
    return {
      message: "Відбулася помилка",
    };
  }
};
export const updatePost = async (item, id) => {
  try {
    const post = await Post.findByIdAndUpdate({ _id: id }, item, {
      new: true,
    }).lean();
    // const data = JSON.parse(JSON.stringify(post));
    return {
      message: "Успішно оновленно",
    };
  } catch (e) {
    console.log(e);
    return {
      message: "Відбулася помилка",
    };
  }
};

export const deletePost = async (id) => {
  try {
    const post = await Post.findOneAndDelete({ _id: id });
    // const data = JSON.parse(JSON.stringify(post));
    return {
      message: "Успішно видалено",
    };
  } catch (e) {
    console.log(e);
    return {
      message: "Сталась помилка",
    };
  }
};

export const getPostSortBy19 = async (req, res) => {
  try {
    const posts = await Post.find().sort("field date").lean();
    const data = JSON.parse(JSON.stringify(posts));
    return data;
  } catch (e) {
    console.log(e);
  }
};
export const getPostSortBy91 = async (req, res) => {
  try {
    const posts = await Post.find().sort("field -date").lean();
    const data = JSON.parse(JSON.stringify(posts));
    return data;
  } catch (e) {
    console.log(e);
  }
};
export const getPostSortByAZ = async (req, res) => {
  try {
    const posts = await Post.find().sort("field title").lean();
    const data = JSON.parse(JSON.stringify(posts));
    return data;
  } catch (e) {
    console.log(e);
  }
};
export const getPostSortByZA = async (req, res) => {
  try {
    const posts = await Post.find().sort("field -title").lean();
    const data = JSON.parse(JSON.stringify(posts));
    return data;
  } catch (e) {
    console.log(e);
  }
};
// export const createPosts = async () => {
//   try {
//     const docs = await Post.insertMany([
//       {
//         date: new Date(),
//         title:
//           "Останні тенденції розробки програмного забезпечення, які варто побачити у 2024 році",
//         url: "https://cdn.pixabay.com/photo/2015/09/04/23/28/wordpress-923188_1280.jpg",
//         text1:
//           "За останні кілька років сфера розробки програмного забезпечення зазнала революційних інновацій та трансформаційних змін. У міру того, як світовий ринок розробки програмного забезпечення наближається до оціночної оцінки в 507,2 мільярда доларів, трансформаційний вплив нових тенденцій стає все більш очевидним. Розуміння та адаптація останніх тенденцій розробки програмного забезпечення є стратегічною необхідністю для компаній, які прагнуть підтримувати конкурентоспроможність та актуальність. ",
//         text2:
//           "Навіщо витрачати свій час на вивчення цих тенденцій? Переваги багатогранні. Бути в курсі останніх досягнень дозволяє вашому бізнесу використовувати найсучасніші технології, що призводить до підвищення операційної ефективності, покращення якості обслуговування клієнтів і явної ринкової переваги. Незалежно від того, чи є ви технічним директором, менеджером проектів або підприємцем, розуміння цих тенденцій має важливе значення для максимізації потенціалу ваших програмних проектів і залишатися в авангарді технологічного прогресу.",
//       },
//       {
//         date: new Date(),
//         title: "Чи замінить штучний інтелект людину: навички майбутнього",
//         url: "https://cdn.pixabay.com/photo/2019/03/18/06/46/cyber-4062449_1280.jpg",
//         text1:
//           "Цілком імовірно, що в 2030 році більшість із нас буде працювати за професією, якої зараз ще не існує. І йдеться не про фантастичні речі на кшталт керування літальними апаратами чи створення машини часу. Світ професій стрімко розвивається з розвитком технологій, а це означає, що ми повинні підготуватися до непередбачуваних змін, які чекають нас найближчим часом.",
//         text2:
//           "Ніхто не може точно сказати, які навички знадобляться нам у майбутньому, а які – ні. Однак науковці з  Вітвотресрандського університету (Йоганесбург, Південна Африка) провели дослідження, у результаті якого виокремили 5 навичок, які допоможуть побудувати в майбутньому успішну кар’єру, незалежно від того, яких змін зазнають професії. Розглянемо ці навички детальніше. Щоб побудувати успішну кар’єру в майбутньому, потрібно розвинути декілька важливих навичок. А саме: когнітивну гнучкість, цифрову грамотність і обчислювальне мислення, формування суджень і прийняття рішень, емоційний та соціальний інтелект, креативність та інноваційне мислення",
//       },
//       {
//         date: new Date(),
//         title: "Розвиток ІТ в Україні: поточна ситуація та перспективи",
//         url: "https://cdn.pixabay.com/photo/2023/08/24/17/41/ai-generated-8211245_640.jpg",
//         text1:
//           "Сектор інформаційних технологій (IT) впродовж кількох десятиліть продовжує привертати суспільну увагу, перетворившись на окремий економічний та соціокультурний феномен в Україні. Генераторами хайпу навколо айті традиційно були не лише відносно висока середня зарплата в твердій валюті та низький поріг входу для активних молодих людей, а й шалені щорічні темпи зростання виручки, суттєва експортна орієнтація. А відтак - висока платоспроможність IT як сегменту, зокрема в очах банкірів та ріелторів. ",
//         text2:
//           "Таким чином, за номінальним зростанням окремих індикаторів IT-сектору, в тому числі офіційної кількості ФОП чи гривневої виручки, можуть бути приховані достатньо невтішні тенденції руйнівного впливу воєнно-політичних та макроекономічних факторів на галузь, котра традиційно вважалася драйвером майбутнього успіху української економіки.Насправді наш “айті-бульдозер” загальмував і пробуксовує. Це варто визнати на рівні економічної політики, ретельніше розібравшись у симптомах, системних причинах і прогнозних наслідках, щоб напрацювати шляхи виходу з пастки стагнації.",
//       },
//       {
//         date: new Date(),
//         title:
//           "IT-допомога: винаходи для армії, кібербезпека і підсилення військових",
//         url: "https://cdn.pixabay.com/photo/2022/03/28/04/27/ukrainian-national-colors-7096527_640.jpg",
//         text1:
//           "IT-індустрія — одна з найстабільніших в Україні під час війни. Вона регулярно та своєчасно сплачує податки, залучає валюту в державну казну, а спеціалістів забезпечує постійною роботою. Сьогодні IT-компанії не лише підтримують економіку, а й долучаються до наближення перемоги України. Вони збирають шалені кошти на підтримку захисників і захисниць, закликають до цього партнерів, прихищають у своїх офісах людей, які постраждали від повномасштабної війни, і самі стають до лав ЗСУ. У цьому матеріалі розповідаємо про п’ять українських IT-компаній, які беруть активну участь у волонтерському русі — SoftServe, Eleks, Kolo, MacPaw та Grammarly. Команда кожної з них потужно посилює позиції України і на фронті, і в тилу. ",
//         text2:
//           "Українські ІТ-компанії давно залучені в життя суспільства. Ще із 2014 року багато з них засновували фонди, які допомагали і війську, і цивільним людям, наприклад тим, хто має проблеми зі здоров’ям. Повномасштабне вторгнення посилило волонтерський рух айтівців. Зараз їхні благодійні ініціативи забезпечують фронт ліками, засобами індивідуального захисту і транспортом. IT-волонтери стоять на сторожі кібербезпеки, розробляючи програмне забезпечення, зокрема для військової техніки. Вони стабільно донатять чималі суми, щоб врешті вибити окупантів з українських земель. А їхні інформаційні кампанії, націлені на іноземців, допомагають застерегти світову спільноту від співпраці з країною-терористкою та її союзниками.",
//       },
//       {
//         date: new Date(),
//         title: "Світчери та їх перспективи у IT компаніях",
//         url: "https://cdn.pixabay.com/photo/2017/10/17/10/02/dream-job-2860022_640.jpg",
//         text1:
//           "Останнім часом в IT стало популярним поняття СВІТЧЕР. Тільки не всі розуміють, хто це. А ті, хто розуміють, упевнені: майбутнє діджитал-сфери саме за ними. Світчер (англ. Switcher) – це людина, яка має досвід і знання в одній сфері, але вирішує змінити професію на нову. ",
//         text2:
//           "Очевидно, що це не швидкий процес і до нього потрібно підійти виважено та з розумінням. Якщо ви дійсно вирішили прийти в IT з іншої професії, радимо робити це правильно.Першочергова порада – це повноцінно заглибитись в професію, що цікавить, перед тим, як розпочати навчання. Для багатьох світчерів характерний поспіх і, відповідно, необачні вчинки. А випадки, коли людина обирає професію, орієнтуючись лише на зарплатню не є рідкістю. Не поспішайте! Складіть список напрямків, які вважаєте цікавими. Вивчіть орієнтовний roadmap для кожного з них. Переконайтеся, що це вам насправді цікаво і що саме цьому ви готові присвятити значну частину свого часу. Особливо на етапі навчання та перших кроків у професії. І тільки після цього ухвалюйте остаточне рішення.",
//       },
//       {
//         date: new Date(),
//         title: "Яка користь та переваги IТ для ваших дітей?",
//         url: "https://cdn.pixabay.com/photo/2015/01/08/18/24/children-593313_1280.jpg",
//         text1:
//           "Сучасні діти проводять багато часу за комп’ютерами, планшетами та смартфонами. Цей час можна використовувати з користю. В дитинстві навчатись легко, діти опановують велику кількість інформації “на льоту”. Тому це найкраща пора для вивчення ІТ-наук.Програмування, робототехніка та інші ІТ-науки вчать мислити та логічно міркувати. Для досягнення результатів діти вчаться бути наполегливими, терплячими та дисциплінованими. Крім того, потрібно вміти аналізувати свої дії, шукати помилки, бути уважним, планувати свою роботу.",
//         text2:
//           "ІТ-сфера створює можливості для самореалізації дитини, розвиває уяву та творчий потенціал. Комп’ютерна графіка, дизайн, анімація, програмування, відеоблогінг - це все створення чогось нового, власного та неповторного. Діти можуть бачити результати своїх старань, отримувати визнання та мотивацію розвиватись далі. ІТ-сфера стрімко розвивається. З’являються нові напрямки, інформаційні технології проникають у кожен закуток сучасного світу. Інтернет активно використовують для розвитку бізнесу та індустрії розваг, створюються нові технології. Попит на ІТ-фахівців постійно зростає. Навіть якщо дитина вирішить в майбутньому не працювати в ІТ, отримані знання, навички та логічне мислення  стануть у пригоді в інших сферах.",
//       },
//     ]);
//     // console.log("POSTS", docs);
//   } catch (e) {
//     console.log("ERROR POSTS", e);
//   }
// };
