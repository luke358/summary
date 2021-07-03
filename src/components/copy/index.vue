<template>
	<div>
        <input type="text" v-model="value">
        <button v-copy="value">复制</button>
    </div>
</template>

<script>
export default {
	props: {},
	data() {
		return {
            value: ""
        };
	},
};
</script>

<style scoped lang="scss">
</style>
