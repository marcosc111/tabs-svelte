import { writable } from 'svelte/store';

export const topicosData = writable({
    topicos: [
        {
        topicoTitle: "Primeiro exemplo",
        tabs: [
            { tabId: "Tab 1", tabContent: "Esse é o conteúdo da tab 1" },
            { tabId: "Tab 2", tabContent: "Esse é o conteúdo da tab número 2" },
            { tabId: "Tab 3", tabContent: "Terceiro conteúdo" },
            { tabId: "Tab 4", tabContent: "Quarta página" },
        ],
        },
        {
        topicoTitle: "Outro exemplo",
        tabs: [
            { tabId: "t1", tabContent: "this is the content related to tab 1" },
            { tabId: "t2", tabContent: "this is the content related to tab 2" },
            { tabId: "t3", tabContent: "this is the content related to tab 3" },
            { tabId: "t4", tabContent: "this is the content related to tab 4" },
        ],
        },
    ],
    currentSelectedTopico: 0
});

export const currentSelectedTopico = writable(0);