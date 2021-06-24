<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, onUnmounted } from 'vue';
import HelloWorld from '../components/HelloWorld.vue'; // @ is an alias to /src

import elem from '../elem';

export default defineComponent({
	name: 'Home',
	components: {
		HelloWorld,
	},

	setup() {
		let OnConnect = (data: unknown) => {
			console.log(data);
		};
		elem.io.on('message', OnConnect);

		onUnmounted(() => {
			elem.io.off('message', OnConnect);
		});
	},
});
</script>
