<template>
    <div>
        <comment :id="this.$route.params.id"></comment>
    </div>
</template>

<script>
import comment from "@/components/common/comment"
export default {
    components:{
        comment
    }
}
</script>

<style scoped>

</style>