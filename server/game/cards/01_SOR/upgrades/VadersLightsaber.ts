import AbilityHelper from '../../../AbilityHelper';
import { Card } from '../../../core/card/Card';
import { UpgradeCard } from '../../../core/card/UpgradeCard';
import { CardType, KeywordName, Location, Trait, WildcardCardType } from '../../../core/Constants';
import Player from '../../../core/Player';

export default class VadersLightsaber extends UpgradeCard {
    protected override getImplementationId() {
        return {
            id: '0705773109',
            internalName: 'vaders-lightsaber',
        };
    }

    public override setupCardAbilities() {
        this.setAttachCondition((card: Card) => !card.hasSomeTrait(Trait.Vehicle));

        this.addWhenPlayedAbility({
            title: 'Deal 4 damage to a ground unit',
            optional: true,
            targetResolver: {
                locationFilter: Location.GroundArena,
                cardTypeFilter: WildcardCardType.Unit,
                immediateEffect: AbilityHelper.immediateEffects.conditional({
                    condition: (context) => context.source.parentCard?.title === 'Darth Vader',
                    onTrue: AbilityHelper.immediateEffects.damage({ amount: 4 }),
                    onFalse: AbilityHelper.immediateEffects.noAction()
                })
            }
        });
    }
}

VadersLightsaber.implemented = true;