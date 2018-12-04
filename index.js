/**
 * Data manipulation of translation objects/customisations from Prismic
 *
 * @param customisationTranslations - an array of objects with id and label properties
 *    e.g. {id: "gender::girl", label: "Fille"}
 *
 * @param customisations - an object with key/value pairs of customised options from the user
 *    e.g. { food: "pasta", gender: "girl" }
 *
 * @return an object with the customisations translated
 *    e.g. { food: "Spaghetti", gender: "Fille" }
 */

function translateCustomisations(customisationTranslations, customisations) {
  const itemCustomisationArray = Object.entries(customisations).reduce((all, item, index) => {
    all[index] = item.join('::');
    return all;
  }, []);

  const translatedCustomisations = {};

  itemCustomisationArray.forEach(item => {
    customisationTranslations.forEach(translation => {
      if (translation.id.includes(item)) {
        item.split('::');
        let array = item.split('::');
        if (!translation.label) {
          translation.label = array[1];
        }
        translatedCustomisations[array[0]] = translation.label;
      }
    });
  });

  return translatedCustomisations
}

exports.translateCustomisations = translateCustomisations
