<template>
  <div class="groups">
    <Group v-for="myGroup in allGroups" :key="myGroup.ta" :myGroup="myGroup" />
  </div>
</template>

<script>
import Group from "./Group";
import chooseMyGroup from "./shared/findGroup";

const ta = [
  "احسان ابراهیمی",
  "محمدحسن خوشنویس",
  "کیارش یوسف آبادی",
  "طاها شیعه نواز",
  "عادل قاسم پور",
  "سجاد شادروز"
];
const stu = [
  "انسیه فلاح",
  "سهیل اسماعیلی",
  "امیرمحمد آقارحیمی",
  "هاتف آقاصفری",
  "امیرمهدی الماسی",
  "علی انصاری",
  "اتنا باقری",
  "هیوا بهرامی",
  "امیرحسین بیاتی",
  "مهدی ترکی",
  "یاسمن توسلییان",
  "رضا جعفری",
  "اشکان حاجی بنده",
  "مهیار حداد",
  "مهسا حسامی فر",
  "علی حسن زاده",
  "محمد مهدی خلج",
  "پوریا زارع",
  "شبنم زارع",
  "محمدرضا سلطانی",
  "سپهر سوهان گیر",
  "سوگل شیشه چی ها",
  "فاطمه سروندی",
  "حسین لامعی",
  "احسان اله مخلص",
  "امیرحسین موسوی نسب",
  "مریم نظری",
  "شقایق نقی زاده",
  "محمد نوروزی"
];

export default {
  name: "Groups",
  components: {
    Group
  },
  computed: {
    allGroups() {
      return chooseMyGroup(ta, stu);
    }
  }
};
</script>

<style lang="scss">
.groups {
  background-image: linear-gradient(
    to right top,
    #4dd12d,
    #00dd81,
    #00e5bd,
    #47eae6,
    #96ebf9
  );
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
  overflow: auto;
  padding: $padding-medium;
  width: 100%;
}
</style>