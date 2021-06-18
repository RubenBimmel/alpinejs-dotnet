import { AlpineComponent, Component, Prop, Ref, Watch } from '../../alpine-class-component';

@Component
export default class Dropdown extends AlpineComponent {
    @Prop() readonly content: string;
    @Prop() readonly count: number;
    
    @Ref() readonly label: HTMLElement;
    
    show = false;

    init() {
        console.log('INIT');
    }
    
    open() {
        this.show = true
        this.label.innerText = '(close)';
    }
    
    close() {
        this.show = false
        this.label.innerText = '';
    }
    
    get isOpen() {
        return this.show === true
    }
    
    get countUp() {
        return this.count + 1;
    }
    
    @Watch('show')
    onShowChange(value: boolean) {
        console.log('show: ' + value);
    }
}
