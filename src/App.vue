<template>
    <div id="app">
        <el-row style="margin-top: 18px;margin-bottom: 36px">
            <el-col :span="7" :offset="2" type="flex" justify="middle">
                <el-row type="flex" justify="center">
                    <el-image style="height: 64px;width: 64px" :src="url" lazy></el-image>
                    <h3>Global AMP Survey database (GAS)</h3>
                </el-row>
            </el-col>
            <el-col :span="9" type="flex" justify="middle">
                <el-menu mode="horizontal" :default-active="activeIndex" :router="true">
                    <el-menu-item index="home">HOME</el-menu-item>
                    <el-submenu index="browse">
                        <template slot="title">Browse</template>
                        <el-menu-item index="amps">AMPs</el-menu-item>
                        <el-menu-item index="families">Families</el-menu-item>
                        <el-menu-item index="environment">Environment</el-menu-item>
                    </el-submenu>
                    <el-submenu index="tools">
                        <template slot="title">Tools</template>
                        <el-menu-item index="blastp">Blastp</el-menu-item>
                        <el-menu-item index="hmm">HMM</el-menu-item>
                        <el-menu-item index="macrel">Macrel</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="downloads">Downloads</el-menu-item>
                    <el-menu-item index="contact">Contact</el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'app',

        data() {
            return {
                activeIndex: 'home',
                url: require('./assets/logo.png'),
            };
        },
    }
</script>
