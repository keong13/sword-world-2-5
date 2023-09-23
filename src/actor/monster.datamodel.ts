import {MonsterCategory} from '../constants';
import ActorEntity from './_entity';


class MonsterDataModel extends Actor {

static defineSchema() {
    // @ts-expect-error - FVTT types package does not include data model fields
    const { StringField, NumberField, BooleanField, ObjectField, SchemaField, ArrayField, HTMLField } = foundry.data.fields;

    return {
    
    type: new StringField({}),
    has_shards: new BooleanField({}),
    intellect: new StringField({}),
    perception: new StringField({}),
    disposition: new StringField({}),
    soulscars: new ObjectField({
        value: new NumberField({
          initial: 0,
          nullable: false,
          min: 0,
          integer: true,
        })
      }),
    languages: new StringField({}),
    habitat: new StringField({}),
    weak_point: new StringField({}),
       
    level: new ObjectField({
        value: new NumberField({
          initial: 0,
          nullable: false,
          min: 0,
          integer: true,
        })
      }),
    initiative: new ObjectField({
        value: new NumberField({
          initial: 0,
          nullable: false,
          min: 0,
          integer: true,
        })
      }),
    willpower: new ObjectField({
        value: new NumberField({
          initial: 0,
          nullable: false,
          min: 0,
          integer: true,
        })
      }),
    fortitude: new ObjectField({
        value: new NumberField({
          initial: 0,
          nullable: false,
          min: 0,
          integer: true,
        })
      }),
    know_reputation: new ObjectField({
        value: new NumberField({
          initial: 0,
          nullable: false,
          min: 0,
          integer: true,
        })
      }),
    know_weakness: new ObjectField({
        value: new NumberField({
          initial: 0,
          nullable: false,
          min: 0,
          integer: true,
        })
      }),
      description: new HTMLField({required: false, blank: true, initial: ""})
    };
}
//Gets monster sections
get monster_section(): Item[] {
    // @ts-expect-error - parent exists on the model's superclass
    return (this.parent as ActorEntity)?.items
      .filter(({ type }: Item) => type === 'monstersection') || [];
  }

 /**
   * Return the amount of xp rewarded for killing a monster of a certain level.
   * @param {number} level  the monster's level.
   * @param {number} num_sections the number of sections the monster has.
   * @returns {number}      The XP rewarded.
   */
getmonsterxp(level: number, num_sections: number) {
    return level * 10 * num_sections;
    }

/**
   * Return the amount of xp rewarded for killing a monster of a certain level.
   * @param {number} level  the monster's level.
   * @returns {number}      The sword shards the monster has and will drop on defeat.
   */
num_swordshards(level: number) {
    return level;
    }
}
export default MonsterDataModel;

/**
 * @todo Add derived values for monster xp and number of sword shards
 */