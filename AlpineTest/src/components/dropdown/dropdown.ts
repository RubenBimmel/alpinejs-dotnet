import { AlpineComponent, Component, Prop, Watch } from '../../alpine-class-component';

@Component
export default class Dropdown extends AlpineComponent {
    @Prop() readonly content: string;
    @Prop() readonly count: number;
    
    show = false;
    
    open() {
        this.show = true
    }
    
    close() {
        this.show = false
    }
    
    get isOpen() {
        return this.show === true
    }
    
    get countUp() {
        return this.count + 1;
    }
    
    init() {
        console.log('INIT');
    }
    
    @Watch('show')
    onShowChange(value: boolean) {
        console.log('show: ' + value);
    }
}
