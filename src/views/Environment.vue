<template>
    <div class="Environment_Card">
        <el-row :gutter="12" type="flex" justify="end">
            <el-col :span="5" type="flex" justify="middle">
                <el-select v-model="environment"
                           placeholder="Select Environment"
                           :disabled="selectLoading"
                           clearable
                           filterable
                           @change="selectSearch">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
        </el-row>

        <el-row type="flex" justify="left">
            <el-col :span="5" :offset="1" type="flex" justify="middle">
                <h2>Environment Card</h2>
            </el-col>
            <el-col :span="6" type="flex" justify="middle">
                <h3 v-if="!isNull">
                    <el-tag type="success" effect="dark">
                        {{Environment_AMP[0].Environment}}
                    </el-tag>
                </h3>
                <h3 v-else-if="tabLoading" effect="dark">
                    <el-tag type="danger">
                        Searching
                    </el-tag>
                </h3>
                <h3 v-else>
                    <el-tag type="warning" effect="dark">
                        No Data. Just select it:)
                    </el-tag>
                </h3>
            </el-col>
        </el-row>

        <el-row type="flex" justify="center">
            <el-col type="flex" justify="middle">
                <el-card :shadow="shadow">
                    <el-row type="flex" justify="center">
                        <el-col type="flex" justify="middle">
                            <el-tabs v-loading="tabLoading" element-loading-spinner="el-icon-loading"
                                     v-model="activeName" tab-position="left">
                                <el-tab-pane label="Basic" name="environment_amp">
                                    <el-table
                                            :data="Environment_AMP"
                                            stripe
                                            border>
                                        <el-table-column
                                                prop="AMP_Count"
                                                label="Sequences"
                                                header-align="center"
                                                align="center">
                                            <template slot-scope="scope">
                                                <router-link
                                                        :to="{path:'/amp',query:{Environment:scope.row.Environment}}">
                                                    <el-tag type="info">
                                                        <i class="el-icon-connection"></i>{{scope.row.AMP_Count}}
                                                    </el-tag>
                                                </router-link>
                                            </template>
                                        </el-table-column>
                                        <el-table-column
                                                prop="Length_Avg"
                                                label="Avg Length"
                                                header-align="center"
                                                align="center">
                                        </el-table-column>
                                    </el-table>
                                    <el-divider></el-divider>
                                    <el-row type="flex" justify="center">
                                        <h4>Families</h4>
                                    </el-row>
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
                                            :data="Environment_Family"
                                            stripe
                                            border
                                            highlight-current-row>
                                        <el-table-column
                                                prop="Family_ID"
                                                label="Family ID"
                                                header-align="center"
                                                align="center">
                                            <template slot-scope="scope">
                                                <router-link
                                                        :to="{path:'/family',query:{Family_ID:scope.row.Family_ID}}">
                                                    <el-tag type="info">
                                                        <i class="el-icon-connection"></i>{{scope.row.Family_ID}}
                                                    </el-tag>
                                                </router-link>
                                            </template>
                                        </el-table-column>
                                        <el-table-column
                                                prop="AMP_Count"
                                                label="Sequences"
                                                header-align="center"
                                                align="center">
                                        </el-table-column>
                                        <el-table-column
                                                prop="Length_Avg"
                                                label="Avg Length"
                                                header-align="center"
                                                align="center">
                                        </el-table-column>
                                        <el-table-column
                                                label="Clustering level"
                                                header-align="center"
                                                align="center">
                                            3
                                        </el-table-column>
                                    </el-table>
                                </el-tab-pane>
                            </el-tabs>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<style>
    .el-tabs__item {
        font-size: 17px;
    }
</style>

<script>
    export default {
        name: 'Environment_Card',

        data() {
            return {
                environment: '',
                options: [{
                    value: 'Freshwater',
                    label: 'Freshwater'
                }, {
                    value: 'Gut',
                    label: 'Gut'
                }, {
                    value: 'Marine',
                    label: 'Marine'
                }, {
                    value: 'Milk',
                    label: 'Milk'
                }, {
                    value: 'Oral_Cavity',
                    label: 'Oral Cavity'
                }, {
                    value: 'Respiratory_Tract',
                    label: 'Respiratory Tract'
                }, {
                    value: 'Skin',
                    label: 'Skin'
                }, {
                    value: 'Soil',
                    label: 'Soil'
                }, {
                    value: 'Surface',
                    label: 'Surface'
                }, {
                    value: 'Vagina',
                    label: 'Vagina'
                }, {
                    value: 'Wastewater',
                    label: 'Wastewater'
                }],
                selectLoading: false,

                isNull: true,
                tabLoading: false,
                activeName: 'environment_amp',
                Environment_AMP: [],

                count: 0,
                pageSize: 10,
                currentPage: 1,
                Environment_Family: [],
                tableLoading: false,
            }
        },

        computed: {
            shadow: function () {
                if (this.isNull) {
                    return 'never';
                } else {
                    return 'always';
                }
            }
        },

        mounted() {
            if (Object.keys(this.$route.query).length !== 0) {
                if (this.$route.query.Environment) {
                    this.environment = this.$route.query.Environment;
                }
                this.isNull = true;
                this.tabLoading = true;
                this.search();
            }
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

            selectSearch() {
                if (this.environment !== "") {
                    this.selectLoading = true;
                    this.isNull = true;
                    this.tabLoading = true;
                    this.search();
                } else {
                    this.Environment_AMP = [];
                    this.count = 0;
                    this.Environment_Family = [];
                    this.isNull = true;
                }
            },

            search() {
                let self = this;
                this.axios.get('/environment/index', {
                    params: {
                        pageSize: this.pageSize,
                        currentPage: this.currentPage,
                        environment: this.environment,
                    }
                }).then(function (response) {
                    if (response.status === 200) {
                        self.Environment_AMP = response.data['Environment_AMP'];
                        self.count = response.data['Count'];
                        self.Environment_Family = response.data['Environment_Family'];
                        self.isNull = false;
                    } else if (response.status === 204) {
                        self.Environment_AMP = [];
                        self.count = 0;
                        self.Environment_Family = [];
                        self.isNull = true;
                    }
                    self.selectLoading = false;
                    self.tabLoading = false;
                    self.tableLoading = false;
                }).catch(function (error) {
                    console.log(error);
                });
            },
        }
    }
</script>
