<template>
  <div>
    <NavigationShowcase/>
    <RouterView class="py-8"></RouterView>
    <NavigationFooter/>
  </div>
</template>

<script>

import NavigationShowcase from '@/components/navigation/NavigationShowcase.vue';
import NavigationFooter from '@/components/navigation/NavigationFooter.vue';

export default{
  components:{
    NavigationShowcase,
    NavigationFooter
  }
}
</script>