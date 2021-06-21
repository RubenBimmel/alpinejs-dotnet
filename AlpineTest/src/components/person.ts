import { AlpineComponent, Component, Prop } from '@rubenbimmel/alpine-class-component';

@Component
export default class Person extends AlpineComponent {
    @Prop() firstName: string;
    @Prop() lastName: string;
    @Prop({ default: true }) useLastName: boolean;

    get name() {
        if (!this.useLastName) {
            return this.firstName;
        }

        return this.firstName + ' ' + this.lastName;
    }
}