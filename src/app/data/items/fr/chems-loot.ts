import { DataTableDefinition } from '../../generic-data-lang';

export const CHEMS_LOOT_DEF_FR: DataTableDefinition[] = [{
  column: 'Name',
  label: 'Nom'
}, {
  column: 'Effect',
  label: 'Effect'
}, {
  column: 'Duration',
  label: 'Durée'
}, {
  column: 'Addictive',
  label: 'Addictif?'
}, {
  column: 'Weight',
  label: 'Poids'
}, {
  column: 'Cost',
  label: 'Prix'
}, {
  column: 'Rarity',
  label: 'Rareté'
}, {
  column: 'AddictionEffect',
  label: 'Effet de dépendance'
}];

export const CHEMS_RULES_FR = [
  {
    title: 'Utilisation des drogues',
    description: 'Vous pouvez prendre vous-même une drogue ou l’administrer à quelqu’un d’autre (qui doit être consentant) à portée de main en utilisant l’action mineure "prendre une dose". $BR$ Les bénéfices des drogues ne se cumulent pas : si deux drogues fournissent le même bénéfice ou si vous prenez deux doses de la même drogue, la dose prise en dernier est celle qui s’applique.'

  }, {
    title: 'Addiction aux drogues',
    description: 'Beaucoup de drogues sont addictives. Quand vous prenez une drogue addictive, lancez un nombre de $CD$ égal au nombre de doses que vous avez prises pendant cette partie. Si vous obtenez un nombre d’Effets supérieur ou égal à la valeur de dépendance de cette drogue (indiquée après « Oui » dans la ligne  « Addictif? » ci-dessous), vous êtes devenu dépendant à cette drogue. Voir l\'effet de dépendance associé dans la description de la drogue.'
  }, {
    title: 'Durée des drogues',
    description: 'Les effets d’une drogue peuvent être Instantanés (elle a un effet dès qu’elle est prise, puis l’effet prend fin), Brefs (jusqu’à la fin de votre tour actuel ou jusqu’à la fin du prochain tour de celui à qui vous l’avez administrée) ou Durables (l’effet dure jusqu’à la fin de la scène actuelle). $BR$ L’aptitude Chimie et l’amélioration d’armure BioCommMesh augmentent la durée des drogues prises.Pas d\'effet sur les drogues à durée Instantanée. Les drogues à durée Brève durent deux rounds. Les drogues à durée Durable font effet jusqu’à la fin de la prochaine scène et non jusqu’à la fin de la scène actuelle'
  }, {
  title: 'Les goules et les drogues',
  description: 'Les goules reçoivent les bénéfices des Stimpaks et des autres objets de guérison normalement. $BR$ Déjà immunisées contre les radiations, les Rad-X et les RadAway n’ont pas d’effet sur les goules. $BR$ L’Addictol et les antibiotiques fonctionnent normalement, mais les goules ont moins de risques de devenir dépendantes et sont immunisées contre beaucoup de maladies. $BR$ Si une goule tente d’utiliser n’importe quelle autre drogue que celles mentionnées, elle doit utiliser 2 doses pour obtenir l’effet escompté.'
}, {
  title: 'Porter secours',
  description: 'Les baumes de soin, le RadAway et les Stimpaks peuvent tous être appliqués pendant une action porter secours, augmentant l’effet de cette action d’une manière spécifique. Mais une seule drogue peut être appliquée de cette manière pendant une seule action porter secours.'
}];

export const CHEMS_LOOT_DATA_FR = [
  {
    Name: 'Addictol',
    Effect: 'Soigne toutes les dépendances',
    Duration: 'Instantanée',
    Addictive: 'Non',
    Weight: '<0,5',
    Cost: 125,
    Rarity: 3,
    AddictionEffect : null,
    id: 'c-1'
  },
  {
    Name: 'Antibiotiques',
    Effect: 'Soigne toutes les maladies',
    Duration: 'Instantanée',
    Addictive: 'Non',
    Weight: '<0,5',
    Cost: 75,
    Rarity: 3,
    AddictionEffect : null,
    id: 'c-2'
  },
  {
    Name: 'Baume de soin',
    Effect: 'Guérit 2 PV (action mineure "prendre une dose") ou 4 PV (action majeure "porter secours")',
    Duration: 'Instantanée',
    Addictive: 'Non',
    Weight: '<0,5',
    Cost: 20,
    Rarity: 1,
    AddictionEffect : null,
    id: 'c-3'
  },
  {
    Name: 'Bave de scrito',
    Effect: '+2 PV max',
    Duration: 'Durable',
    Addictive: 'Non',
    Weight: '<0,5',
    Cost: 40,
    Rarity: 2,
    AddictionEffect : null,
    id: 'c-4'
  },
  {
    Name: 'Buffjet',
    Effect: 'Réduit de 1 la difficulté de tous vos tests de FOR et d\'END (0 minimum), +4 PV max, gagnez immédiatement 3 PA (perdus s\'ils ne sont pas dépensés), les actions supplémentaires coûtent 1 PA de moins',
    Duration: 'Brève',
    Addictive: 'Oui 1',
    Weight: '<0,5',
    Cost: 75,
    Rarity: 4,
    AddictionEffect : 'La difficulté de tous vos tests de FOR et d\'END augmente de +1 quand vous n\'êtes pas sous l\'effet d\'un type de Buffout (Buffout, Buffjet, Bufftats)',
    id: 'c-5'
  },
  {
    Name: 'Buffout',
    Effect: 'Vous pouvez relancer 1d20 sur tous vos tests de FOR et d\'END, +3 PV max',
    Duration: 'Durable',
    Addictive: 'Oui 2',
    Weight: '<0,5',
    Cost: 45,
    Rarity: 2,
    AddictionEffect : 'La difficulté de tous vos tests de FOR et d\'END augmente de +1 quand vous n\'êtes pas sous l\'effet d\'un type de Buffout (Buffout, Buffjet, Bufftats)',
    id: 'c-6'
  },
  {
    Name: 'Bufftats',
    Effect: 'Réduit de 1 la difficulté de tous vos tests de FOR, de PER et d\'END (0 minimum), +4 PV max',
    Duration: 'Durable',
    Addictive: 'Oui 1',
    Weight: '<0,5',
    Cost: 75,
    Rarity: 4,
    AddictionEffect : 'La difficulté de tous vos tests de FOR et d\'END augmente de +1 quand vous n\'êtes pas sous l\'effet d\'un type de Buffout (Buffout, Buffjet, Bufftats)',
    id: 'c-7'
  },
  {
    Name: 'Calmex',
    Effect: 'Vous pouvez relancer 1d20 sur tous vos tests de PER et d\'AGI, +2 $CD$ aux dégâts des attaques furtives',
    Duration: 'Durable',
    Addictive: 'Oui 1',
    Weight: '<0,5',
    Cost: 100,
    Rarity: 4,
    AddictionEffect : 'Vous subissez des complications sur vos tests d’AGI sur un résultat de 18 ou plus quand vous n’êtes pas sous l’effet du Calmex',
    id: 'c-8'
  },
  {
    Name: 'Daddy-O',
    Effect: 'Réduit de 1 la difficulté de tous vos tests de PER et d\'INT (0 minimum), augmente de +1 la difficulté de vos tests de CHR',
    Duration: 'Durable',
    Addictive: 'Oui 1',
    Weight: '<0,5',
    Cost: 50,
    Rarity: 2,
    AddictionEffect : 'La difficulté de tous vos tests de PER et d’INT augmente de +1 quand vous n’êtes pas sous l’effet du Daddy-O',
    id: 'c-9'
  },
  {
    Name: 'Daytripper',
    Effect: 'Réduit de 1 la difficulté de vos tests de CHR et de CHA (0 minimum), augmente de +1 la difficulté de vos tests de FOR',
    Duration: 'Durable',
    Addictive: 'Oui 1',
    Weight: '<0,5',
    Cost: 40,
    Rarity: 3,
    AddictionEffect : 'La difficulté de tous vos tests de CHR et de CHA augmente de +1 quand vous n’êtes pas sous l’effet du Daytripper',
    id: 'c-10'
  },
  {
    Name: 'Fureur',
    Effect: '+3 résistance aux dégâts balistiques, +3 $CD$ aux dégâts de corps à corps, augmente de +2 la difficulté de tous vos tests de PER',
    Duration: 'Durable',
    Addictive: 'Oui 1',
    Weight: '<0,5',
    Cost: 30,
    Rarity: 4,
    AddictionEffect : 'La difficulté de tous vos tests de FOR et de PER augmente de +1 quand vous n’êtes pas sous l’effet de la Fureur',
    id: 'c-11'
  },
  {
    Name: 'Jet',
    Effect: 'Les actions supplémentaires coûtent 1 PA de moins',
    Duration: 'Brève',
    Addictive: 'Oui 2',
    Weight: '<0,5',
    Cost: 50,
    Rarity: 2,
    AddictionEffect : 'La difficulté de tous vos tests d\'AGI augmente de +1 quand vous n\'êtes pas sous l\'effet d\'un type de Jet (Jet ou Jet Fuel ; l\'Ultra Jet a un effet de dépendance différent)',
    id: 'c-12'
  },
  {
    Name: 'Jet Fuel',
    Effect: 'Vous gagnez 1 PA gratuit au début de chaque tour',
    Duration: 'Durable',
    Addictive: 'Oui 1',
    Weight: '<0,5',
    Cost: 60,
    Rarity: 3,
    AddictionEffect : 'La difficulté de tous vos tests d\'AGI augmente de +1 quand vous n\'êtes pas sous l\'effet d\'un type de Jet (Jet ou Jet Fuel ; l\'Ultra Jet a un effet de dépendance différent)',
    id: 'c-13'
  },
  {
    Name: 'Med-X',
    Effect: '+3 résistance aux dégâts balistiques',
    Duration: 'Durable',
    Addictive: 'Oui 2',
    Weight: '<0,5',
    Cost: 50,
    Rarity: 2,
    AddictionEffect : 'La difficulté de tous vos tests d\'AGI augmente de +1 et vous subissez +1 $CD$ de dégâts supplémentaires sur toutes les attaques balistiques quand vous n’êtes pas sous l’effet du Med-X',
    id: 'c-14'
  },
  {
    Name: 'Mentats',
    Effect: 'Vous pouvez relancer 1d20 sur vos tests de PER et d\'INT',
    Duration: 'Durable',
    Addictive: 'Oui 3',
    Weight: '<0,5',
    Cost: 50,
    Rarity: 2,
    AddictionEffect : 'La difficulté de tous vos tests de CHR augmente de +1 quand vous n’êtes pas sous l’effet d\'un type de Mentats (normal ou aux fruits)',
    id: 'c-15'
  },
  {
    Name: 'Mentats fruits rouges',
    Effect: 'Réduit de 2 la difficulté de vos tests d\'INT (0 minimum)',
    Duration: 'Durable',
    Addictive: 'Oui 2',
    Weight: '<0,5',
    Cost: 60,
    Rarity: 3,
    AddictionEffect : 'La difficulté de tous vos tests de CHR augmente de +1 quand vous n’êtes pas sous l’effet d\'un type de Mentats (normal ou aux fruits)',
    id: 'c-16'
  },
  {
    Name: 'Mentats orange',
    Effect: 'Réduit de 2 la difficulté de vos tests de PER (0 minimum), l\'action mineure viser vous permet de relancer 1d20 supplémentaire',
    Duration: 'Durable',
    Addictive: 'Oui 2',
    Weight: '<0,5',
    Cost: 60,
    Rarity: 3,
    AddictionEffect : 'La difficulté de tous vos tests de CHR augmente de +1 quand vous n’êtes pas sous l’effet d\'un type de Mentats (normal ou aux fruits)',
    id: 'c-17'
  },
  {
    Name: 'Mentats raisin',
    Effect: 'Réduit de 2 la difficulté de vos tests de CHR (0 minimum). Vous pouvez relancer 1d20 sur vos tests de Troc',
    Duration: 'Durable',
    Addictive: 'Oui 2',
    Weight: '<0,5',
    Cost: 60,
    Rarity: 3,
    AddictionEffect : 'La difficulté de tous vos tests de CHR augmente de +1 quand vous n’êtes pas sous l’effet d\'un type de Mentats (normal ou aux fruits)',
    id: 'c-18'
  },
  {
    Name: 'Overdrive',
    Effect: '+3 $CD$ de dégâts sur toutes vos attaques, vous pouvez relancer jusqu\'à 3 $CD$  par jet de dégâts',
    Duration: 'Durable',
    Addictive: 'Oui 1',
    Weight: '<0,5',
    Cost: 55,
    Rarity: 3,
    AddictionEffect : 'La difficulté de tous vos tests de FOR et d\AGI augmente de +1 quand vous n’êtes pas sous l’effet de l\'Overdrive',
    id: 'c-19'
  },
  {
    Name: 'Psycho',
    Effect: '+2 $CD$ de dégâts sur toutes vos attaques, +3 résistance aux dégâts balistiques',
    Duration: 'Durable',
    Addictive: 'Oui 2',
    Weight: '<0,5',
    Cost: 50,
    Rarity: 2,
    AddictionEffect : 'La difficulté de tous vos tests de FOR augmente de +1 et vous subissez +1 $CD$ de dégâts supplémentaires sur toutes les attaques balistiques quand vous n’êtes pas sous l’effet d’un type de Psycho',
    id: 'c-20'
  },
  {
    Name: 'Psychobuff',
    Effect: '+2 $CD$ de dégâts sur toutes vos attaques, +4 PV max, réduit de 1 la difficulté de tous vos tests de FOR et d\'END (0 minimum)',
    Duration: 'Durable',
    Addictive: 'Oui 1',
    Weight: '<0,5',
    Cost: 70,
    Rarity: 4,
    AddictionEffect : 'La difficulté de tous vos tests de FOR augmente de +1 et vous subissez +1 $CD$ de dégâts supplémentaires sur toutes les attaques balistiques quand vous n’êtes pas sous l’effet d’un type de Psycho',
    id: 'c-21'
  },
  {
    Name: 'Psycho Jet',
    Effect: '+2 $CD$ de dégâts sur toutes vos attaques, +4 résistance aux dégâts balistiques, gagnez immédiatement 4 PA (perdus s\'ils ne sont pas dépensés)',
    Duration: 'Brève',
    Addictive: 'Oui 1',
    Weight: '<0,5',
    Cost: 70,
    Rarity: 4,
    AddictionEffect : 'La difficulté de tous vos tests de FOR augmente de +1 et vous subissez +1 $CD$ de dégâts supplémentaires sur toutes les attaques balistiques quand vous n’êtes pas sous l’effet d’un type de Psycho',
    id: 'c-22'
  },
  {
    Name: 'Psychotats',
    Effect: '+2 $CD$ de dégâts sur toutes vos attaques, +2 résistance aux dégâts balistiques, réduit de 1 la difficulté de vos tests de PER (0 minimum)',
    Duration: 'Durable',
    Addictive: 'Oui 1',
    Weight: '<0,5',
    Cost: 70,
    Rarity: 4,
    AddictionEffect : 'La difficulté de tous vos tests de FOR augmente de +1 et vous subissez +1 $CD$ de dégâts supplémentaires sur toutes les attaques balistiques quand vous n’êtes pas sous l’effet d’un type de Psycho',
    id: 'c-23'
  },
  {
    Name: 'RadAway',
    Effect: 'Guérit 4 points de dégâts de radiation (action mineure "prendre une dose" ou action majeure "porter secours" en plus de tout autre effet de guérison)',
    Duration: 'Instantanée',
    Addictive: 'Non',
    Weight: '<0,5',
    Cost: 80,
    Rarity: 2,
    AddictionEffect : null,
    id: 'c-24'
  },
  {
    Name: 'RadAway (Dilué)',
    Effect: 'Guérit 2 points de dégâts de radiation (voir description RadAway)',
    Duration: 'Instantanée',
    Addictive: 'Non',
    Weight: '<0,5',
    Cost: 50,
    Rarity: 1,
    AddictionEffect : null,
    id: 'c-25'
  },
  {
    Name: 'Rad-X',
    Effect: '+6 résistance aux dégâts de radiation',
    Duration: 'Durable',
    Addictive: 'Non',
    Weight: '<0,5',
    Cost: 40,
    Rarity: 2,
    AddictionEffect : null,
    id: 'c-26'
  },
  {
    Name: 'Rad-X (Dilué)',
    Effect: '+3 résistance aux dégâts de radiation',
    Duration: 'Durable',
    Addictive: 'Non',
    Weight: '<0,5',
    Cost: 25,
    Rarity: 1,
    AddictionEffect : null,
    id: 'c-27'
  },
  {
    Name: 'Stimpak',
    Effect: 'Guérit 4 PV ou une blessure (action mineure "prendre une dose" ou action majeure "porter secours" en plus de tout autre effet de guérison)',
    Duration: 'Instantanée',
    Addictive: 'Non',
    Weight: '<0,5',
    Cost: 50,
    Rarity: 2,
    AddictionEffect : null,
    id: 'c-28'
  },
  {
    Name: 'Stimpak (Dilué)',
    Effect: 'Guérit 2 PV (voir Stimpak)',
    Duration: 'Instantanée',
    Addictive: 'Non',
    Weight: '<0,5',
    Cost: 30,
    Rarity: 1,
    AddictionEffect : null,
    id: 'c-29'
  },
  {
    Name: 'Super Stimpak',
    Effect: 'Guérit 8 PV et jusqu\'à deux blessures (action mineure "prendre une dose" ou action majeure "porter secours" en plus de tout autre effet de guérison)',
    Duration: 'Instantanée',
    Addictive: 'Non',
    Weight: '<0,5',
    Cost: 90,
    Rarity: 4,
    AddictionEffect : null,
    id: 'c-30'
  },
  {
    Name: 'Ultra Jet',
    Effect: 'Gagnez immédiatement 6 PA (perdus s\'ils ne sont pas dépensés), les actions supplémentaires coûtent 1 PA de moins',
    Duration: 'Brève',
    Addictive: 'Oui 3',
    Weight: '<0,5',
    Cost: 67,
    Rarity: 2,
    AddictionEffect : 'La difficulté de tous vos tests d’AGI augmente de +1 et, si vous réussissez un test de compétence, vous générez 1 PA de moins (0 minimum) quand vous n’êtes pas sous l’effet de l’Ultra Jet. Cette dépendance est permanente et ne peut être soignée par aucun moyen connu',
    id: 'c-31'
  },
  {
    Name: 'X-Cell',
    Effect: 'Le premier d20 acheté sur tous vos tests est gratuit',
    Duration: 'Durable',
    Addictive: 'Oui 1',
    Weight: '<0,5',
    Cost: 60,
    Rarity: 4,
    AddictionEffect : 'La difficulté de tous vos tests augmente de +1 quand vous n’êtes pas sous l’effet du X-Cell',
    id: 'c-32'
  }
];
