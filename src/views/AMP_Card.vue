<template>
    <div class="AMP_Card">
        <el-row :gutter="12" type="flex" justify="end">
            <el-col :span="8" type="flex" justify="middle">
                <el-input v-model="ampId" :maxlength="16" show-word-limit placeholder="AMP ID" clearable></el-input>
            </el-col>
            <el-col :span="3" type="flex" justify="middle">
                <el-button size="medium" :type="type" :loading="buttonLoading" icon="el-icon-search"
                           @click="clickSearch">
                    Search
                </el-button>
            </el-col>
        </el-row>
        <el-row style="margin-top: 18px" type="flex" justify="center">
            <el-col>
                <el-card :shadow="shadow">
                    <el-row type="flex" justify="center">
                        <el-col :span="22" type="flex" justify="middle">
                            <el-tabs v-loading="tabLoading" v-model="activeName">
                                <el-tab-pane label="Basic" name="family">
                                    <el-form ref="AMP_Family" :model="AMP_Family" label-suffix=":"
                                             size="mini">
                                        <el-form-item label="AMP_ID">
                                            <el-tag type="primary">
                                                {{AMP_Family.AMP_ID}}
                                            </el-tag>
                                        </el-form-item>
                                        <el-form-item label="Sequence">
                                            {{AMP_Family.Sequence}}
                                        </el-form-item>
                                        <el-form-item label="Length">
                                            {{AMP_Family.Length}}
                                        </el-form-item>
                                        <el-form-item label="Family ID">
                                            <router-link :to="{path:'/family',query:{Family_ID:AMP_Family.Family_ID}}">
                                                <el-tag type="info">
                                                    <el-link icon="el-icon-link" type="info" :underline="false">
                                                        {{AMP_Family.Family_ID}}
                                                    </el-link>
                                                </el-tag>
                                            </router-link>
                                        </el-form-item>
                                    </el-form>
                                </el-tab-pane>
                                <el-tab-pane label="Features" name="features">
                                    <el-row type="flex" justify="center">
                                        <el-col :span="8" type="flex" justify="middle">
                                            <el-form ref="AMP_Feature" :model="AMP_Feature" label-suffix=":"
                                                     size="mini">
                                                <el-form-item label="tinyAA">
                                                    {{AMP_Feature.tinyAA}}
                                                </el-form-item>
                                                <el-form-item label="smallAA">
                                                    {{AMP_Feature.smallAA}}
                                                </el-form-item>
                                                <el-form-item label="aliphaticAA">
                                                    {{AMP_Feature.aliphaticAA}}
                                                </el-form-item>
                                                <el-form-item label="aromaticAA">
                                                    {{AMP_Feature.aromaticAA}}
                                                </el-form-item>
                                                <el-form-item label="nonpolarAA">
                                                    {{AMP_Feature.nonpolarAA}}
                                                </el-form-item>
                                                <el-form-item label="polarAA">
                                                    {{AMP_Feature.polarAA}}
                                                </el-form-item>
                                                <el-form-item label="chargedAA">
                                                    {{AMP_Feature.chargedAA}}
                                                </el-form-item>
                                                <el-form-item label="basicAA">
                                                    {{AMP_Feature.basicAA}}
                                                </el-form-item>
                                                <el-form-item label="acidicAA">
                                                    {{AMP_Feature.acidicAA}}
                                                </el-form-item>
                                                <el-form-item label="charge">
                                                    {{AMP_Feature.charge}}
                                                </el-form-item>
                                                <el-form-item label="pI">
                                                    {{AMP_Feature.pI}}
                                                </el-form-item>
                                            </el-form>
                                        </el-col>
                                        <el-col :span="8" type="flex" justify="middle">
                                            <el-form ref="AMP_Feature" :model="AMP_Feature" label-suffix=":"
                                                     size="mini">
                                                <el-form-item label="aindex">
                                                    {{AMP_Feature.aindex}}
                                                </el-form-item>
                                                <el-form-item label="instaindex">
                                                    {{AMP_Feature.instaindex}}
                                                </el-form-item>
                                                <el-form-item label="boman">
                                                    {{AMP_Feature.boman}}
                                                </el-form-item>
                                                <el-form-item label="hydrophobicity">
                                                    {{AMP_Feature.hydrophobicity}}
                                                </el-form-item>
                                                <el-form-item label="hmoment">
                                                    {{AMP_Feature.hmoment}}
                                                </el-form-item>
                                                <el-form-item label="SA.Group1.residue0">
                                                    {{AMP_Feature['SA.Group1.residue0']}}
                                                </el-form-item>
                                                <el-form-item label="SA.Group2.residue0">
                                                    {{AMP_Feature['SA.Group2.residue0']}}
                                                </el-form-item>
                                                <el-form-item label="SA.Group3.residue0">
                                                    {{AMP_Feature['SA.Group3.residue0']}}
                                                </el-form-item>
                                                <el-form-item label="HB.Group1.residue0">
                                                    {{AMP_Feature['HB.Group1.residue0']}}
                                                </el-form-item>
                                                <el-form-item label="HB.Group2.residue0">
                                                    {{AMP_Feature['HB.Group2.residue0']}}
                                                </el-form-item>
                                                <el-form-item label="HB.Group3.residue0">
                                                    {{AMP_Feature['HB.Group3.residue0']}}
                                                </el-form-item>
                                            </el-form>
                                        </el-col>
                                        <el-col :span="8" type="flex" justify="middle">
                                            <el-form ref="AMP_Feature" :model="AMP_Feature" label-suffix=":"
                                                     size="mini">
                                                <el-form-item label="AGG">
                                                    {{AMP_Feature.AGG}}
                                                </el-form-item>
                                                <el-form-item label="AMYLO">
                                                    {{AMP_Feature.AMYLO}}
                                                </el-form-item>
                                                <el-form-item label="TURN">
                                                    {{AMP_Feature.TURN}}
                                                </el-form-item>
                                                <el-form-item label="HELIX">
                                                    {{AMP_Feature.HELIX}}
                                                </el-form-item>
                                                <el-form-item label="HELAGG">
                                                    {{AMP_Feature.HELAGG}}
                                                </el-form-item>
                                                <el-form-item label="BETA">
                                                    {{AMP_Feature.BETA}}
                                                </el-form-item>
                                                <el-form-item label="Level_I">
                                                    {{AMP_Feature.Level_I}}
                                                </el-form-item>
                                                <el-form-item label="Level_II">
                                                    {{AMP_Feature.Level_II}}
                                                </el-form-item>
                                                <el-form-item label="Level_III">
                                                    {{AMP_Feature.Level_III}}
                                                </el-form-item>
                                            </el-form>
                                        </el-col>
                                    </el-row>
                                </el-tab-pane>
                                <el-tab-pane label="Metagenomes" name="metagenome">
                                    <el-tag style="margin-right: 18px; margin-bottom: 18px"
                                            v-for="item in AMP_Metagenome" :key="item.id"
                                            type="info">
                                        <el-link icon="el-icon-link"
                                                 :href="'https://www.ncbi.nlm.nih.gov/sra/?term='+item.metagenomes"
                                                 type="info" target="_blank" :underline="false">
                                            {{item.metagenomes}}
                                        </el-link>
                                    </el-tag>
                                </el-tab-pane>
                                <el-tab-pane label="Prediction" name="prediction">
                                    <el-form ref="AMP_Prediction" :model="AMP_Prediction"
                                             label-suffix=":"
                                             size="mini">
                                        <el-form-item label="AMP Class">
                                            {{AMP_Prediction.AMP_Class}}
                                        </el-form-item>
                                        <el-form-item label="AMP Probability">
                                            {{AMP_Prediction.AMP_Probability}}
                                        </el-form-item>
                                        <el-form-item label="Hemolysis Class">
                                            {{AMP_Prediction.Hemolysis_Class}}
                                        </el-form-item>
                                        <el-form-item label="Hemolysis Probability">
                                            {{AMP_Prediction.Hemolysis_Probability}}
                                        </el-form-item>
                                    </el-form>
                                </el-tab-pane>
                                <el-tab-pane label="Country" name="country">
                                    <el-row type="flex" justify="center">
                                        <div id="country" style="width: 800px;height:400px;"></div>
                                    </el-row>
                                </el-tab-pane>
                                <el-tab-pane label="Environment" name="environment">
                                    <el-row type="flex" justify="center">
                                        <div id="environment" style="width: 800px;height:400px;"></div>
                                    </el-row>
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
        name: 'AMP_Card',

        data() {
            return {
                ampId: '',
                type: 'primary',
                buttonLoading: false,

                isNull: true,
                tabLoading: false,
                activeName: 'family',
                AMP_Family: {},
                AMP_Feature: {},
                AMP_Country: {},
                AMP_Environment: {},
                AMP_Metagenome: {},
                AMP_Prediction: {}
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
                this.ampId = this.$route.query.AMP_ID;
                this.tabLoading = true;
                this.search();
            } else {
                this.$notify.info({
                    title: 'No Data',
                    message: 'Just search it.'
                });
            }
        },

        methods: {
            clickSearch() {
                if (this.ampId !== "") {
                    this.type = "danger"
                    this.buttonLoading = true;
                    this.search();
                } else {
                    this.AMP_Family = {};
                    this.AMP_Feature = {};
                    this.AMP_Metagenome = {};
                    this.AMP_Prediction = {};
                    this.AMP_Country = {};
                    this.AMP_Environment = {};
                    this.isNull = true;
                    this.drawCountryChart();
                    this.drawEnvironmentChart();
                    this.$notify.info({
                        title: 'No Data'
                    });
                }
            },

            search() {
                let self = this;
                this.tabLoading = true;
                this.axios.get('/amp_card/index', {
                    params: {
                        ampId: this.ampId,
                    }
                }).then(function (response) {
                    if (response.status === 200) {
                        self.AMP_Family = response.data['AMP_Family'][0];
                        self.AMP_Feature = response.data['AMP_Feature'][0];
                        self.AMP_Metagenome = response.data['AMP_Metagenome'];
                        self.AMP_Prediction = response.data['AMP_Prediction'][0];
                        self.AMP_Country = response.data['AMP_Country'][0];
                        self.AMP_Environment = response.data['AMP_Environment'][0];
                        self.isNull = false;
                        self.drawCountryChart();
                        self.drawEnvironmentChart();
                    } else if (response.status === 204) {
                        self.AMP_Family = {};
                        self.AMP_Feature = {};
                        self.AMP_Metagenome = {};
                        self.AMP_Prediction = {};
                        self.AMP_Country = {};
                        self.AMP_Environment = {};
                        self.isNull = true;
                        self.drawCountryChart();
                        self.drawEnvironmentChart();
                        self.$notify.info({
                            title: 'No Data'
                        });
                    }
                    self.type = 'primary';
                    self.buttonLoading = false;
                    self.tabLoading = false;
                }).catch(function (error) {
                    console.log(error);
                });
            },

            drawCountryChart() {
                // 基于准备好的dom，初始化echarts实例
                var myChart = this.$echarts.init(document.getElementById('country'));

                // 指定图表的配置项和数据
                var data = [];
                data.push(this.AMP_Country['Asia']);
                data.push(this.AMP_Country['Europe']);
                data.push(this.AMP_Country['Africa']);
                data.push(this.AMP_Country['South_America']);
                data.push(this.AMP_Country['North_America']);
                data.push(this.AMP_Country['Oceania']);
                data.push(this.AMP_Country['Pacific_Ocean']);
                data.push(this.AMP_Country['New_Zaeland']);
                data.push(this.AMP_Country['na']);

                var option = {
                    xAxis: {
                        type: 'value',
                        splitLine: {
                            show: false
                        }
                    },
                    yAxis: {
                        type: 'category',
                        data: ['Asia', 'Europe', 'Africa', 'SouthAmerica', 'NorthAmerica', 'Oceania', 'PacificOcean', 'NewZaeland', 'na'],
                        axisLabel: {
                            rotate: 45,
                            margin: 3
                        },
                        splitLine: {
                            show: false
                        }
                    },
                    series: [{
                        type: 'bar',
                        data: data,
                        color: '#000000',
                        label: {
                            show: true,
                            position: 'right'
                        },
                    }],
                };

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            },

            drawEnvironmentChart() {
                // 基于准备好的dom，初始化echarts实例
                var myChart = this.$echarts.init(document.getElementById('environment'));

                // 指定图表的配置项和数据
                var data = [];
                data.push(this.AMP_Environment['Freshwater']);
                data.push(this.AMP_Environment['Gut']);
                data.push(this.AMP_Environment['Marine']);
                data.push(this.AMP_Environment['Milk']);
                data.push(this.AMP_Environment['Oral_Cavity']);
                data.push(this.AMP_Environment['Respiratory_Tract']);
                data.push(this.AMP_Environment['Skin']);
                data.push(this.AMP_Environment['Soil']);
                data.push(this.AMP_Environment['Surface']);
                data.push(this.AMP_Environment['Vagina']);
                data.push(this.AMP_Environment['Wastewater']);

                var option = {
                    xAxis: {
                        type: 'value',
                        splitLine: {
                            show: false
                        }
                    },
                    yAxis: {
                        type: 'category',
                        data: ['Freshwater', 'Gut', 'Marine', 'Milk', 'OralCavity', 'RespiratoryTract', 'Skin', 'Soil', 'Surface', 'Vagina', 'Wastewater'],
                        axisLabel: {
                            rotate: 45,
                            margin: 3
                        },
                        splitLine: {
                            show: false
                        }
                    },
                    series: [{
                        type: 'bar',
                        data: data,
                        color: '#000000',
                        label: {
                            show: true,
                            position: 'right'
                        },
                    }],
                };

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }
        }
    }
</script>
