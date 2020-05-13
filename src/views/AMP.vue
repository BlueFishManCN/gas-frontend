<template>
    <div id="AMP">
        <el-row :gutter="24" type="flex" justify="center">
            <el-col :span="4">
                <h3>Search Filter</h3>
                <el-button :type="type" round :loading="searchLoading" @click="filter">Do Search</el-button>
                <el-divider></el-divider>
                <h4>AMP ID or Family ID</h4>
                <el-input v-model="id" :maxlength="16" show-word-limit></el-input>
                <el-divider></el-divider>
                <h4>Sequence</h4>
                <el-input type="textarea" v-model="sequence" :maxlength="255" show-word-limit :rows="3"
                          resize="none"></el-input>
                <el-divider></el-divider>
                <h4>Sequence Length</h4>
                {{length[0]}}-{{length[1]}}
                <el-slider
                        v-model="length"
                        :min="1"
                        :max="100"
                        :step="1"
                        range>
                </el-slider>
                <el-divider></el-divider>
                <h4>pI Range</h4>
                {{pI[0]}}-{{pI[1]}}
                <el-slider
                        v-model="pI"
                        :min="0"
                        :max="15"
                        :step="0.1"
                        range>
                </el-slider>
                <el-divider></el-divider>
                <h4>Charge Range</h4>
                {{charge[0]}}-{{charge[1]}}
                <el-slider
                        v-model="charge"
                        :min="-50"
                        :max="50"
                        :step="1"
                        range>
                </el-slider>
                <el-divider></el-divider>
                <el-button :type="type" round :loading="searchLoading" @click="filter">Do Search</el-button>
            </el-col>
            <el-col :span="18">
                <el-pagination
                        style="margin-bottom: 18px"
                        background
                        :page-size.sync="pageSize"
                        :total="count"
                        :current-page.sync="currentPage"
                        layout="total, sizes, prev, next"
                        :page-sizes="[10, 20, 30]"
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange">
                </el-pagination>
                <el-table
                        v-loading="tableLoading"
                        element-loading-spinner="el-icon-loading"
                        :data="tableData"
                        stripe
                        border
                        highlight-current-row
                        style="width: 100%">
                    <el-table-column
                            prop="AMP_ID"
                            label="AMP ID">
                    </el-table-column>
                    <el-table-column
                            prop="Sequence"
                            label="Sequence">
                    </el-table-column>
                    <el-table-column
                            prop="pI"
                            label="pI">
                    </el-table-column>
                    <el-table-column
                            prop="charge"
                            label="charge">
                    </el-table-column>
                    <el-table-column
                            prop="Family_ID"
                            label="Family ID">
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>

    </div>
</template>


<script>
    export default {
        name: 'AMP',

        data() {
            return {
                count: 0,
                pageSize: 10,
                currentPage: 1,
                tableData: [],
                tableLoading: false,

                type: 'primary',
                searchLoading: false,
                id: '',
                sequence: '',
                length: [1, 255],
                pI: [0, 15],
                charge: [-50, 50]
            }
        },

        created() {
            this.tableLoading = true;
            this.search();
        },

        methods: {
            handleSizeChange() {
                this.tableLoading = true;
                this.search();
            },

            handleCurrentChange() {
                this.tableLoading = true;
                this.search();
            },

            filter() {
                this.type = 'danger';
                this.searchLoading = true;
                this.tableLoading = true;
                this.search();
            },


            search() {
                let self = this;
                this.axios.get('/amp/index', {
                    params: {
                        pageSize: this.pageSize,
                        currentPage: this.currentPage,
                        id: this.id,
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
