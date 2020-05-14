<template>
    <div class="Home">
        <el-row type="flex" justify="center">
            <el-image style="width: 25%" :src="url" lazy></el-image>
        </el-row>
        <el-row type="flex" justify="center">
            <h1>Welecome to Global AMP Survey database (GAS).</h1>
        </el-row>
        <el-row type="flex" justify="center">
            <el-col type="flex" justify="middle">
                <el-card shadow="always">
                    <div slot="header">
                        About GAS
                    </div>
                    <div>
                        <p>Blah, blah, blah...</p>
                    </div>
                </el-card>
            </el-col>
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
