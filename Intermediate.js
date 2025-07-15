// array method:map,fillter,reduce /object/obj of array/json/async,await/fetch/try,catch

//******************************************************************************map vs fillter vs reduce

// توضیح: متدهایی برای کار با آرایه‌ها

// map: تغییر مقدار هر آیتم
// filter: فیلتر کردن بر اساس شرط
// reduce: تبدیل آرایه به یک مقدار (جمع، ضرب، بیشترین، کمترین...)

const num = [50, 10, 20, 30];
// map
const sum = num.map((nu) => nu * 2);
console.log(sum);
// fillter
const greaterThan10 = num.filter((n) => n > 10);
console.log(greaterThan10);
// reduce تمرین 1: پیدا کردن max عدد با reduce
const sums = num.reduce((a, b) => a + b);
console.log(sums); //110

const maxNum = num.reduce((max, current) => {
  return current > max ? current : max;
}, num[0]);
console.log(maxNum);
// تمرین 1: پیدا کردن کوچک‌ترین عدد با reduce
const min = [10, 2, 8, 100];
const minNum = min.reduce((min, current) => {
  return current < min ? current : min;
});
console.log(minNum);
// تمرین 2: جمع کل اعداد آرایه با reduce
const numbers = [1, 2, 3, 4, 5];

const total = numbers.reduce((sum, current) => sum + current, 0);

console.log(total); // خروجی: 15

// چالش:
// یک آرایه از اعداد داری، با استفاده از reduce مجموع اعداد فرد داخل آرایه را پیدا کن
// const numbers = [3, 8, 7, 12, 5, 10];

const Number = [3, 8, 7, 12, 5, 10];
const sumOdd = Number.reduce((count, current) => {
  return current % 2 !== 0 ? count + current : count;
}, 0);
console.log(sumOdd); // خروجی: 15

////////////////////////////////////////////Object

// تمرین ساده:
// یک شی بساز با اطلاعات خودت (نام، سن، کشور)
// مقدار age رو در کنسول چاپ کن

const person = {
  name: "sara",
  age: 25,
  email: "sara@example.com",
};
console.log(person.age); // خروجی: 25

////////////////////////////////////Array of Objects
// توی پروژه‌های واقعی خیلی کاربرد داره (مثل لیست کاربران، محصولات و...)
const users = [
  { name: "amir", age: 25, email: "amir@example.com" },
  { name: "Sara", age: 17, email: "sara@example.com" },
  { name: "sina", age: 30, email: "sina@example.com" },
];
//  تمرین ۱: پیدا کردن همه افراد بالای ۱۸ سال
const age18 = users.filter((user) => user.age > 18);
console.log(age18);
// تمرین ۲: فقط اسم‌ها رو جدا کن
const names = users.map((user) => user.name);
console.log(names); // ["Ali", "Sara", "Reza"]
// تمرین ۳: پیدا کردن فردی به نام Sara
const findSara = users.find((user) => user.name === "Sara");
console.log(findSara); // { name: "Sara", age: 17 }

// TEST
// فقط کسانی که سن بالای 20 دارند رو فیلتر کن
// فقط ایمیل‌هاشون رو جدا کن (فرض کن ایمیل هم تو آبجکت هست)

const age20 = users.filter((user) => user.age > 20);
console.log(age20);

const email = users.map((user) => user.email);
console.log(email);

//////////////////////////////////////////////JSON

// 1. تبدیل آبجکت جاوااسکریپت به JSON
const obj = { name: "Ali", age: 25 };
const json = JSON.stringify(obj);
console.log(json); // '{"name":"Ali","age":25}'
// 2. تبدیل JSON به آبجکت
const jsonStr = '{"name":"Sara","age":30}';
const objs = JSON.parse(jsonStr);
console.log(objs); // Sara
