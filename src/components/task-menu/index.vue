<template>
	<div class="wrap">
		<div class="content-wrap">
			<div class="task">{{task}}</div>
			<div class="content">
				<div class="title">
					标题:
					<slot name="title" v-bind="slotData" />
				</div>
				<div>内容: <span>xxxxx</span></div>
				<div>时间: <span>2018-01-01</span></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "TaskMenu",
  props:{
    task:{
      type:String,
      required:true
    }
  },
	data() {
		return {
			slotData: { msg: "我是子组件数据" },
		};
	},
};
</script>

<style scoped lang="scss">
.wrap {
  box-sizing: border-box;
  background-color: red;
  width: 300px;
  text-align: center;
  overflow: hidden;
  margin-top: 20px;
  .content-wrap{
    margin: 6px;
    border: 1px solid yellow;
  }
}
</style>
