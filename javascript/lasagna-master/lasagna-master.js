/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 * @param {number} time
 * @returns {string} cooking status message
 */

export function cookingStatus(time) {
  if (time === 0) {
    return "Lasagna is done.";
  } else if (!time) {
    return "You forgot to set the timer.";
  } else {
    return "Not done, please wait.";
  }
}

/**
 * @param {string[]} layers
 * @param {number} time per layer, default value 2
 * @returns {number} total preparation time
 */

export function preparationTime(layers, time = 2) {
  return layers.length * time;
}

/**
 * @param {string[]} layers
 * @returns {Quantities} the quantity object with noodles and sauce properties
 */

export function quantities(layers) {
  const quantity = {
    noodles: 0,
    sauce: 0,
  };

  layers.forEach((layer) => {
    if (layer === "noodles") {
      return {
        ...quantity,
        noodles: (quantity.noodles += 50),
        sauce: 0,
      };
    }

    if (layer === "sauce") {
      return {
        ...quantity,
        noodles: 0,
        sauce: (quantity.sauce += 0.2),
      };
    }
  });

  return quantity;
}

/**
 * - add secret ingredient to array2
 * - don't modify array1
 * - no return
 *
 * @param {string[]} array1
 * @param {string[]} array2
 */

export function addSecretIngredient(array1, array2) {
  const secretIngredient = array1.find(
    (el) => array1.indexOf(el) === array1.length - 1
  );

  array2.push(secretIngredient);
}

/**
 * - don't modify original recipe
 *
 * @param {Recipe} originalRecipe object for 2 portions
 * @param {number} numberOfPortions
 * @returns {Recipe} recipe object scaled to numberOfPortions
 */

export function scaleRecipe(originalRecipe, numberOfPortions) {
  const scaledRecipe = {};
  for (const ingredient in originalRecipe) {
    const amountForSinglePortion = originalRecipe[ingredient] / 2;
    scaledRecipe[ingredient] = amountForSinglePortion * numberOfPortions;
  }

  // @ts-ignore
  return scaledRecipe;
}
