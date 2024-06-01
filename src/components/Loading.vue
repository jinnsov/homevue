<template>
        <pre class="agreed">{{isPosting ? 'Загрузка...' : '' }}</pre>
</template>

<script setup>
defineProps(['isPosting',])
</script>

<style>

</style>