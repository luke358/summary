<template>
	<div>
		子组件
		<div>child: {{ count }}</div>
		<button @click="increase">+</button>
	</div>
</template>

<script>
export default {
	props: ['count'],
	methods: {
		increase() {
			this.$emit("update:count", this.count + 1)
		},
	},
};
</script>