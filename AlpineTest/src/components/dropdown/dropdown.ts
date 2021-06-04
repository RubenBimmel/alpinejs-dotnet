import { AlpineComponent } from '@leanadmin/alpine-typescript';

export default class dropdown extends AlpineComponent {
    public show = false;
    
    open() { 
        this.show = true 
    }
    
    close() { 
        this.show = false 
    }
    
    isOpen() { 
        return this.show === true 
    }
}