'use strict'

const { assert } = require('chai')

const { translateCustomisations } = require('./index')

// Example translations as they would come from prismic for a particular language
const translations = [
  {id: "gender::girl", label: "Fille"},
  {id: "gender::boy", label: "Garçon"},
  {id: "interest::dinosaurs", label: "Dinosaures"},
  {id: "interest::superheroes", label: "Super-héros"},
  {id: "interest::animals", label: "Animaux"},
  {id: "interest::princesses", label: "Princesses"},
  {id: "food::pasta", label: "Spaghetti"},
  {id: "food::pizza", label: "Pizza"},
  {id: "food::ice-cream", label: "Glace"},
  {id: "food::fruit", label: null},
  {id: "food::chicken", label: "Nuggets de poulet"},
  {id: "phototype::type-iii", label: null}
]

describe('makeTranslatedCustomisations', () => {
  it('translates the customisations #1', () => {
    const customisations = {
      food: "pasta",
      gender: "girl",
      inscription: "Chère Petya...",
      interest: "animals",
      name: "Petya",
      phototype: "type-iii",
    }

    const translatedCustomisations = translateCustomisations(translations, customisations)

    assert.deepEqual(
      translatedCustomisations,
      {
        food: "Spaghetti",
        gender: "Fille",
        //inscription: "Chère Petya...",
        interest: "Animaux",
        //name: "Petya",
        phototype: "type-iii"
      }
    )
  })

  it('translates the customisations #2', () => {
    const customisations = {
      food: "ice-cream",
      gender: "boy",
      inscription: "Chère Petya...",
      interest: "princesses",
      name: "Petya",
      phototype: "type-iii",
    }

    const translatedCustomisations = translateCustomisations(translations, customisations)

    assert.deepEqual(
      translatedCustomisations,
      {
        food: "Glace",
        gender: "Garçon",
        //inscription: "Chère Petya...",
        interest: "Princesses",
        //name: "Petya",
        phototype: "type-iii"
      }
    )
  })
})
