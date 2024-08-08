import type { AbilityContext } from '../../ability/AbilityContext';
import { Duration, EffectName } from '../../Constants';

export abstract class EffectImpl<TValue> {
    public duration?: Duration = null;
    protected context?: AbilityContext = null;

    constructor(public readonly type: EffectName) {
    }

    // TODO: add type union in constants.ts for ability targets (player or card, anything else?)
    public abstract getValue(target): TValue;
    public abstract apply(target): void;
    public abstract unapply(target): void;
    public abstract recalculate(target): boolean;

    public setContext(context: AbilityContext): void {
        this.context = context;
    }

    getDebugInfo() {
        return {
            type: this.type
        };
    }
}
