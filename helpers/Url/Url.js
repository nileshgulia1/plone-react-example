/**
 * Url helper.
 * @module helpers/Url
 */

import { last, memoize } from 'lodash';

/**
 * Get base url.
 * @function getBaseUrl
 * @param {string} url Url to be parsed.
 * @return {string} Base url of content object.
 */
export const getBaseUrl = memoize(url => {
  const adjustedUrl =
    url
      .replace(/\?.*$/, '')
      .replace('/add', '')
      .replace('/contents', '')
      .replace('/delete', '')
      .replace('/diff', '')
      .replace('/edit', '')
      .replace('/history', '')
      .replace('/layout', '')
      .replace('/login', '')
      .replace('/logout', '')
      .replace('/register', '')
      .replace('/sharing', '')
      .replace('/search', '')
      .replace('/change-password', '')
      .replace(/\/controlpanel\/.*$/, '')
      .replace('/controlpanel', '')
      .replace('/personal-information', '')
      .replace('/personal-preferences', '') || '/';
  return adjustedUrl === '/' ? '' : adjustedUrl;
});

/**
 * Get view of an url.
 * @function getView
 * @param {string} url Url to be parsed.
 * @return {string} View of content object.
 */
export function getView(url) {
  const view = last(url.replace(/\?.*$/, '').split('/'));
  if (
    [
      'add',
      'layout',
      'contents',
      'edit',
      'delete',
      'diff',
      'history',
      'sharing',
    ].indexOf(view) === -1
  ) {
    return 'view';
  }
  return view === 'layout' ? 'edit' : view;
}

/**
 * Get icon
 * @method getIcon
 * @param {string} type Type of the item.
 * @param {bool} isFolderish Is folderish.
 * @returns {string} Icon name.
 */
export function getIcon(type, isFolderish) {
  switch (type) {
    case 'Document':
      return 'file text outline';
    case 'Image':
      return 'file image outline';
    case 'File':
      return 'attach';
    case 'Link':
      return 'linkify';
    case 'Event':
      return 'calendar';
    default:
      return isFolderish ? 'folder open outline' : 'file outline';
  }
}
