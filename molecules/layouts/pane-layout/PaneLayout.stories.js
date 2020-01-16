import { withKnobs } from '@storybook/addon-knobs/vue';
import { autoProps } from '@sb/storybook-util';
import PPaneLayout from './PaneLayout.vue';


export default {
    title: 'molecules/layouts/PaneLayout',
    component: PPaneLayout,
    decorators: [withKnobs],
};


export const defaultCase = () => ({
    components: { PPaneLayout },
    props: {
        ...autoProps(PPaneLayout),
    },
    template: `<PPaneLayout v-bind="$props" :style="{height: '100px', 
                                                      width: '200px'}"/>`,
});