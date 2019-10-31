import PVerticalLayout from './VerticalLayout.vue';
import { action } from '@storybook/addon-actions';
import { autoProps } from '@/setup/storybook-util';

export default {
    title: 'Organisms/vertical-layout',
    component: PVerticalLayout,
};

export const defaultCase = () => ({
    components: { PVerticalLayout },
    props: {
        ...autoProps(PVerticalLayout),
    },
    template: `<div style="border: 1px solid red;">
                   <p-vertical-layout :height="height" 
                                      :line="line" 
                                      :left-width="leftWidth"
                                      :min-left-width="minLeftWidth"
                                      :max-left-width="maxLeftWidth"
                                      :total-width="totalWidth"
                                      @start="start" 
                                      @move="move" 
                                      @stop="stop" />
                </div>`,
    methods: {
        start: action('start'),
        move: action('move'),
        stop: action('stop'),
    },
});