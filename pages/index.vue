<script setup lang="ts">
const actualModal=ref(1)
const changeModal=(modalNumber:number)=>{
    actualModal.value=modalNumber
}
</script>
<template>
    <div>
        <ModalsOne @change="changeModal" v-if="actualModal===1"></ModalsOne>
        <ModalsTwo @change="changeModal" v-if="actualModal===2"></ModalsTwo>
        <ModalsThree @change="changeModal" v-if="actualModal===3"></ModalsThree>
    </div>
</template>