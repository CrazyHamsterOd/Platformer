import { Renderer } from "./renderer";

export class GameLoop {
    private lastTime: number = 0;
    private deltaTime: number = 0;

    public start() {
        requestAnimationFrame(this.update.bind(this));
    }

    private update(timeStamp: number) {
        this.deltaTime =  (timeStamp - this.lastTime) / 1000;
        this.lastTime = timeStamp;

        console.log('update', this.deltaTime);
        this.render();

        requestAnimationFrame(this.update.bind(this));
    }

    private render() {
        const renderer = new Renderer();
        renderer.clear();
        renderer.drawRect(0, 0, 100, 100, 'red');
    }
}