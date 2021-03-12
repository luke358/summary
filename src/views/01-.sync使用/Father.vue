<template>
	<div>
        <h2>父组件</h2>
        <div>father: {{count}}</div>
        <!-- <Children :count="count" @update:count="updateCount" /> -->
        <Children :count.sync="count" />
    </div>
</template>

<script>
import Children from './Children'
export default {
	props: {},
	data() {
		return {
            count: 0
        };
	},
	methods: {
        updateCount(val){
            // console.log(val)
            this.count = val
        }
    },
	components: {Children},
};
</script>
