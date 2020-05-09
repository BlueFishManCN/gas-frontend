<template>
    <div class="home">
        <el-row type="flex" justify="center">
            <el-image style="width: 25%" :src="url" lazy></el-image>
        </el-row>
        <el-row type="flex" justify="center">
            <h1>Welecome to Global AMP Survey database (GAS)</h1>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'Home',

        data() {
            return {
                url: require('../assets/logo.png'),
            }
        },
    }
</script>
