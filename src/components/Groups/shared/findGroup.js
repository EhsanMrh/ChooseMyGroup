//Test data
// const ta = [
//   "احسان ابراهیمی",
//   "محمدحسن خوشنویس",
//   "کیارش یوسف آبادی",
//   "طاها شیعه نواز",
//   "عادل قاسم پور",
//   "سجاد شادروز"
// ];
// const stu = [
//   "انسیه فلاح",
//   "سهیل اسماعیلی",
//   "امیرمحمد آقارحیمی",
//   "هاتف آقاصفری",
//   "امیرمهدی الماسی",
//   "علی انصاری",
//   "اتنا باقری",
//   "هیوا بهرامی",
//   "امیرحسین بیاتی",
//   "مهدی ترکی",
//   "یاسمن توسلییان",
//   "رضا جعفری",
//   "اشکان حاجی بنده",
//   "مهیار حداد",
//   "مهسا حسامی فر",
//   "علی حسن زاده",
//   "محمد مهدی خلج",
//   "پوریا زارع",
//   "شبنم زارع",
//   "محمدرضا سلطانی",
//   "سپهر سوهان گیر",
//   "سوگل شیشه چی ها",
//   "فاطمه سروندی",
//   "حسین لامعی",
//   "احسان اله مخلص",
//   "امیرحسین موسوی نسب",
//   "مریم نظری",
//   "شقایق نقی زاده",
//   "محمد نوروزی"
// ];

function chooseMyGroup(tas, students) {
  const groups = [];
  const taNumber = tas.length;
  const stuNumber = students.length;
  let randomStudent, randomGroup, randomTa;

  // Import TAs
  for (let i = 0; i < taNumber; i++) {
    //Select a random TA
    randomTa = parseInt(Math.random() * tas.length);

    //Add TA to group object
    groups.push({
      ta: tas[randomTa],
      students: []
    });

    //Remove TA from ta's list
    tas = tas.filter(ta => ta !== tas[randomTa]);
  }

  // Import students
  for (let i = 0; i < stuNumber; i++) {
    //Select a random student
    randomStudent = parseInt(Math.random() * students.length);
    //Select group
    randomGroup = i % taNumber;

    //Add student to group object
    groups[randomGroup].students.push(students[randomStudent]);

    //Remove student from student's list
    students = students.filter(student => student !== students[randomStudent]);
  }

  return groups;
}

export default chooseMyGroup;
