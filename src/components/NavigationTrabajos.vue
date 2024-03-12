<script setup lang="ts">
import {
  HoverCardArrow,
  HoverCardContent,
  HoverCardPortal,
  HoverCardRoot,
  HoverCardTrigger,
} from "radix-vue";
import { ref } from "vue";

const hoverState = ref(false);
</script>

<template>
    <HoverCardRoot v-model:open="hoverState">
        <HoverCardTrigger
            href="/albums/marcas"
            class="inline-block cursor-pointer focus-visible:border-green-400 outline-none focus-visible:border-b-4 py-2.5"
        >
            Trabajos a pedido
        </HoverCardTrigger>
        <HoverCardPortal>
            <HoverCardContent
                class="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-64 bg-white p-6 data-[state=open]:transition-all z-50"
                :side-offset="5"
            >
                <div class="flex flex-col gap-3">
                    <a href="/albums/marcas"> Marcas </a>
                </div>
            </HoverCardContent>
        </HoverCardPortal>
    </HoverCardRoot>
</template>
