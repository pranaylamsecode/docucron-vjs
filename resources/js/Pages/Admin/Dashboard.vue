<script setup>
import { Head } from "@inertiajs/vue3";
import { computed, ref, onMounted } from "vue";
import { useMainStore } from "@/Stores/main";
import {
    mdiAccountMultiple,
    mdiCartOutline,
    mdiChartTimelineVariant,
    mdiFinance,
    mdiMonitorCellphone,
    mdiReload,
    mdiGithub,
    mdiChartPie,
} from "@mdi/js";
import * as chartConfig from "@/Components/Charts/chart.config.js";
import LineChart from "@/Components/Charts/LineChart.vue";
import SectionMain from "@/Components/SectionMain.vue";
import CardBoxWidget from "@/Components/CardBoxWidget.vue";
import CardBox from "@/Components/CardBox.vue";
import TableSampleClients from "@/Components/TableSampleClients.vue";
import NotificationBar from "@/Components/NotificationBar.vue";
import BaseButton from "@/Components/BaseButton.vue";
import CardBoxTransaction from "@/Components/CardBoxTransaction.vue";
import CardBoxClient from "@/Components/CardBoxClient.vue";
import LayoutAuthenticated from "@/Layouts/Admin/LayoutAuthenticated.vue";
import SectionTitleLineWithButton from "@/Components/SectionTitleLineWithButton.vue";
import SectionBannerStarOnGitHub from "@/Components/SectionBannerStarOnGitHub.vue";
const chartData = ref(null);
const fillChartData = () => {
    chartData.value = chartConfig.sampleChartData();
};
onMounted(() => {
    fillChartData();
});
const mainStore = useMainStore();

/* Fetch sample data */
mainStore.fetchSampleClients();
mainStore.fetchSampleHistory();

const clientBarItems = computed(() => mainStore.clients.slice(0, 4));
const transactionBarItems = computed(() => mainStore.history);
</script>

<template>
    <LayoutAuthenticated>
        <Head title="Dashboard" />
        <SectionMain>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div class="flex flex-col justify-between">
                    <CardBoxTransaction
                        v-for="(transaction, index) in transactionBarItems"
                        :key="index"
                        :amount="transaction.amount"
                        :date="transaction.date"
                        :business="transaction.business"
                        :type="transaction.type"
                        :name="transaction.name"
                        :account="transaction.account"
                    />
                </div>
                <div class="flex flex-col justify-between">
                    <CardBoxClient
                        v-for="client in clientBarItems"
                        :key="client.id"
                        :name="client.name"
                        :login="client.login"
                        :date="client.created"
                        :progress="client.progress"
                    />
                </div>
            </div>

            <SectionBannerStarOnGitHub />
        </SectionMain>
    </LayoutAuthenticated>
</template>
