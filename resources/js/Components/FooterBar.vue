<script setup>
import { computed } from "vue";
import { containerMaxW } from "@/config.js";
import BaseLevel from "@/Components/BaseLevel.vue";
import JustboilLogo from "@/Components/JustboilLogo.vue";

const year = computed(() => new Date().getFullYear());
</script>

<template>
    <footer class="py-2 px-6">
        <BaseLevel :class="containerMaxW">
            <div class="md:py-2">
                <a href=""> </a>
            </div>
        </BaseLevel>
    </footer>
</template>
