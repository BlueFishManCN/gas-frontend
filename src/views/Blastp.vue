<template>
    <div class="blastp">
        <el-row type="flex" justify="center">
            <el-button type="primary" round @click="test">test</el-button>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'blastp',

        data() {
            return {}
        },

        methods: {
            test() {
                this.axios.post('/base/test', {}, {}).then(function (response) {
                    console.log(response);
                }).catch(function (error) {
                    console.log(error);
                });
            }
        }
    }
</script>
