import World from "./world";

interface SystemOptions {
    world: World,
}

export default class System {
    public readonly id: number = parseInt(Math.random().toString(16).slice(2));
    private readonly componentTypes: number[] = [];
    private world: World;
    public lastTick: number;

    constructor(options: SystemOptions) {
        this.world = options.world;
        this.lastTick = options.world.currentTick;
    }

    public update(currentTick: number) {
        this.lastTick = currentTick;
    }
}