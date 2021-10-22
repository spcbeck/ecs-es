import Component from "./component";
import Entity from "./entity";
import System from './system';

interface WorldConfig {

}

export default class World {
    components: Map<number, Component> = new Map();
    entities: Map<number, Entity> = new Map();
    systems: Map<string, System> = new Map();
    currentTick: number = 0;

    constructor(config?: WorldConfig) {

    }

    public tick() {
        this.currentTick++;
    }

    public destroy() {
        this.entities.forEach((entity) => {
            this.removeEntity(entity.id);
        });

        //TODO: clear systems
    }

    getEntity(id: number): Entity | undefined {
        return this.entities.get(id);
    }

    public removeEntity(id: number) {
        this.entities.delete(id);
    }

    public addEntity(entity: Entity) {
        this.entities.set(entity.id, entity);
    }

    public addSystem(type: string, system: System) {
        this.systems.set(type, system);
    }

    runSystems() {
        for(const system of this.systems) {
            system[1].update(this.currentTick);
        }
    }

    public update() {
        let now = Date.now();
    }
}