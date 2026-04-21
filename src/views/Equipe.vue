<template>
  <div class="px-4 md:px-64">
    <section class="card mb-8 flex flex-col gap-4">
      <span class="text-4xl font-bold mb-4">Notre équipe</span>
      <div
        v-for="(member, index) in teamMembers"
        :key="member.name"
        :class="[
          'card md:flex-row! items-center p-0! bg-primary-100',
          index % 2 === 0 ? 'md:flex-row!' : 'md:flex-row-reverse!',
        ]"
      >
        <div class="w-64 md:pb-8 pt-8 flex flex-col gap-2 items-center justify-center">
          <img :src="member.img" class="w-24 h-24 rounded-full object-cover" />
          <div class="flex flex-col items-center">
            <span class="font-bold text-xl">{{ member.name }}</span>
            <span class="text-gray-700">{{ member.profession }}</span>
          </div>
        </div>
        <div class="w-full h-full p-8 text-xl">
          {{ member.description }}
        </div>
      </div>
    </section>

    <OpenClasses />
  </div>
</template>

<script>
import OpenClasses from '@/components/common/OpenClasses.vue';

export default {
  components: {
    OpenClasses
  },
  data() {
    return {
      teamMembers: [
        {
          name: 'Marie',
          profession: 'Directrice',
          img: '/imgs/logo-EDH.jpg',
          description:
            'Notre directrice blablabla... bcezkj dezjk dzn klzen lez nez jez jxzlkzxan xzan xaznjxklzaxn zjkla ce vezj bcss cbhds bhcj bzhqbchs jk cbsqhjk bcsjk bshjkcbd shochui dzebhd azbhlazbh labhc jks blcbh sdbfezuip bp dbahlbslwcbuezi',
        },
        {
          name: 'Marie',
          profession: 'Directrice',
          img: '/imgs/logo-EDH.jpg',
          description:
            'Notre directrice blablabla... bcezkj dezjk dzn klzen lez nez jez jxzlkzxan xzan xaznjxklzaxn zjkla ce vezj bcss cbhds bhcj bzhqbchs jk cbsqhjk bcsjk bshjkcbd shochui dzebhd azbhlazbh labhc jks blcbh sdbfezuip bp dbahlbslwcbuezi',
        },
        {
          name: 'Marie',
          profession: 'Directrice',
          img: '/imgs/logo-EDH.jpg',
          description:
            'Notre directrice blablabla... bcezkj dezjk dzn klzen lez nez jez jxzlkzxan xzan xaznjxklzaxn zjkla ce vezj bcss cbhds bhcj bzhqbchs jk cbsqhjk bcsjk bshjkcbd shochui dzebhd azbhlazbh labhc jks blcbh sdbfezuip bp dbahlbslwcbuezi',
        },
      ],
    }
  },
}
</script>
