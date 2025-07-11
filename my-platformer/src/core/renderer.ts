export class Renderer {
    private canvas: HTMLCanvasElement = document.getElementById('gameCanvas') as HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D | null = this.canvas.getContext('2d');

    public clear() {
        this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    public drawRect(x: number, y: number, width: number, height: number, color: string) {
        if (!this.ctx) {
            throw new Error('Could not get context');
        }

        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, width, height);
    }
}