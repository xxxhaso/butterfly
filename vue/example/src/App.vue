<template>
  <div id="app">
    <butterfly-vue
      :canvasData="mockData"
      @onCreateEdge="logCreateEdge"
      @onChangeEdges="logChangeEdges"
      @onDeleteEdge="logDeleteEdge"
      @onLoaded="finishLoaded"
    />
    <el-button @click="add">add</el-button>
  </div>
</template>

<script>
import ButterflyVue from 'butterfly-vue';
import 'butterfly-vue/dist/index.css';
// import ButterflyVue from '../../butterfly-vue';
// import ButterflyVue from '../../dist/index';
// import '../../dist/index.css';
import mockData from "./mockData";

export default {
  name: 'App',
  components: {
    ButterflyVue
  },
  data(){
    return{
      mockData,
      canvansRef:{},
      e: {},
    }
  },
  methods:{
    add() {
      this.e.redraw();
    },
    logCreateEdge(e) {
      console.log('---------CreateEdge---------');
      console.log(e);
      console.log(mockData);
      console.log(this.canvansRef.getDataMap());
      console.log('----------------');
    },
    logDeleteEdge(e) {
      console.log('---------DeleteEdge---------');
      console.log(e);
      console.log(mockData);
      console.log(this.canvansRef.getDataMap());
      console.log('----------------');
    },
    logChangeEdges(e) {
      console.log('---------ChangeEdges---------');
      console.log(e);
      console.log(mockData);
      console.log(this.canvansRef.getDataMap());
      console.log('----------------');
    },
    finishLoaded(e) {
      this.e = e;
      this.canvansRef = e.canvas;
      console.log("finish");
    },
  }
}
</script>