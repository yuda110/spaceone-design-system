import { toRefs, reactive } from '@vue/composition-api';
import { boolean, text } from '@storybook/addon-knobs/vue';
import PFieldGroup from './FieldGroup';
import PTextInput from '@/components/atoms/inputs/TextInput';

export default {
    title: 'molecules/forms/fieldGroup',
    component: PFieldGroup,
    parameters: {
        info: {
            summary: '',
            components: { PFieldGroup },
        },
    },
};


export const defaultCase = () => ({
    components: { PFieldGroup, PTextInput },
    template: `
        <PFieldGroup 
          :label="label" 
          :help-text="helpText" 
          :invalid-text="invalidText"
          :invalid="invalid"
          :valid-text="validText"
          :valid="valid"
          :required="required"
        >
            <template v-slot:default="{invalid}">
            <p-text-input
              v-model="value"
              class="form-control"
              :disabled="disabled"
              :class="{
                'is-invalid':invalid
              }"
            />
            </template>
        </PFieldGroup>`,
    props: {
        label: {
            default: text('label', 'label'),
        },
        helpText: {
            default: text('helpText', 'this is help'),
        },
        invalidText: {
            type: String,
            default: text('invalidText', 'error'),
        },
        invalid: {
            default: boolean('invalid', false),
        },
        validText: {
            type: String,
            default: text('validText', 'good'),
        },
        valid: {
            default: boolean('valid', false),
        },
        disabled: {
            default: boolean('disabled', false),
        },
        required: {
            default: boolean('required', false),
        },
    },
    setup(props, context) {
        const state = reactive({
            value: '',
        });
        return {
            ...toRefs(state),
        };
    },
});