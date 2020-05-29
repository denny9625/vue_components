<template>
  <div class="home">
    <ProcessBar></ProcessBar>
    <MessageLoop>
      <template v-slot>
        <!-- <div>adasdasd</div> -->
      </template>
    </MessageLoop>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ProcessBar from "@/components/processBar/index.vue";
import MessageLoop from "@/components/messageLoop/index.vue";

interface PriceList {
  name: string;
  l_index: number;
}

@Component({
  components: {
    ProcessBar,
    MessageLoop,
  },
})
export default class Home extends Vue {
  list: PriceList[] = [
    { name: "test1", l_index: 0 },
    { name: "test2", l_index: 1 },
    { name: "test3", l_index: 2 },
    { name: "test4", l_index: 3 },
  ];
}
</script>
