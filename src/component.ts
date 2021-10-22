export type ComponentData<T> = T;

interface ComponentOptions {
    type: string,
    data?: ComponentData<Record<string, any>>,
}

export default class Component {
    public id: number;
    public type: string;
    public data: Record<string, unknown>;
    public updatedAtTick = 0;

    constructor(options: ComponentOptions) {
        this.id = parseInt(Math.random().toString(16).slice(2));
        this.type = options.type;
        this.data = options.data || {};
    }

    update(data: ComponentData<Record<string, unknown>>, tick: number) {
        Object.assign(this.data, data);
        this.updatedAtTick = tick;
    }
}