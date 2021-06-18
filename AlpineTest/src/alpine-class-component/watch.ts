import AlpineComponent from './alpine-component';

export default function Watch(property: string) {
    return function (target: AlpineComponent, propertyKey: string) {
        const init = target.init;

        Object.defineProperty(target, 'init', { value: function (this: any) {
                this.$watch(property, this[propertyKey]);
                return init?.apply(this);
            }});
    };
}