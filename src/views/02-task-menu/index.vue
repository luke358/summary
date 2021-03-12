<template>
	<div>
		<task-menu task="任务一">
      <template slot="title" slot-scope="abc">
			  <span > {{ abc.msg }} </span>
      </template>
		</task-menu>

		<task-menu task="任务二">
      <template slot="title">
        <span >{{title1}}</span>
      </template>
    </task-menu>
	</div>
</template>

<script>
import TaskMenu from "@/components/task-menu";
export default {
	props: {},
	data() {
		return {
			title1: "你好",
			title2: "测试",
		};
	},
	computed: {},
	created() {},
	mounted() {},
	watch: {},
	methods: {},
	components: {
		TaskMenu,
	},
};
</script>

<style scoped lang="scss">
</style>
