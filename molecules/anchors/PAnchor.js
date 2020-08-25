import PAnchor from '@/components/atoms/anchors/PAnchor.vue';
import { text } from '@storybook/addon-knobs';


export default {
    title: 'atoms/anchor',
    component: PAnchor,
    parameters: {
        info: {
            summary: '',
            components: { PAnchor },
        },
    },
};

export const DefaultCase = () => ({
    components: { PAnchor },
    props: {
        href: {
            default: text('href', 'www.naver.com'),
        },
        target: {
            default: text('target', '_blank'),
        },
    },
    template: '<p-anchor v-bind="$props">This is anchor to {{href}}.</p-anchor>',
});
