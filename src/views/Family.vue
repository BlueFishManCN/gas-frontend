<template>
    <div id="Family">
        <el-row :gutter="12" type="flex" justify="end">
            <el-col :span="8" type="flex" justify="middle">
                <el-input v-model="familyId" :maxlength="16" show-word-limit placeholder="Family ID"></el-input>
            </el-col>
            <el-col :span="4" type="flex" justify="middle">
                <el-button :type="type" :loading="searchLoading" icon="el-icon-search" @click="search">
                    Search
                </el-button>
            </el-col>
        </el-row>
        <el-row style="margin-top: 18px" type="flex" justify="center">
            <el-col :span="22">
                <el-card shadow="always">

                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'Family',

        data() {
            return {
                familyId: '',
                type: 'primary',
                searchLoading: false,
            }
        },

        methods: {
            search() {
                let self = this;
                this.axios.get('/amp/index', {
                    params: {
                        pageSize: this.pageSize,
                        currentPage: this.currentPage,
                        ampId: this.ampId,
                        familyId: this.familyId,
                        sequence: this.sequence,
                        minLength: this.length[0],
                        maxLength: this.length[1],
                        minpI: this.pI[0],
                        maxpI: this.pI[1],
                        minCharge: this.charge[0],
                        maxCharge: this.charge[1]
                    }
                }).then(function (response) {
                    self.count = response.data['count'];
                    self.tableData = response.data['AMP'];
                    self.type = 'primary';
                    self.searchLoading = false;
                    self.tableLoading = false;
                }).catch(function (error) {
                    console.log(error);
                });
            }
        }
    }
</script>
