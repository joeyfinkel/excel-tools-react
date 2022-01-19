/**
 * Removes an element from the DOM.
 * @param {string} selectors Selector to get the element by.
 */
export const removeElement = (selectors) => {
  const element = document.querySelector(selectors);

  element && element.parentNode.removeChild(element);
};
