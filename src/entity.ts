import Component from "./component";

export default abstract class Entity {
    public id: number;
    public components: Map<number, Component> = new Map;
    public destroyedAt: number | null = null;

    constructor(options: Record<string, string>) {
        this.id = parseInt(Math.random().toString(16).slice(2));
    }

    public addComponent(component: Component) {
        this.components.set(component.id, component);
    }

    public removeComponent(id: number) {
        this.components.delete(id);
    }

    destroy() {
        this.destroyedAt = Date.now();
    }
}