import Component from '@ember/component';
import Evented from '@ember/object/evented';
import { isEmpty } from '@ember/utils';

export default Component.extend(Evented, {
  tagName: 'input',
  type: 'file',
  attributeBindings: [
    'name',
    'disabled',
    'form',
    'type',
    'accept',
    'autofocus',
    'required',
    'multiple'
  ],
  multiple: false,
  change (event) {
    const input = event.target;
    if (!isEmpty(input.files)) {
      this.trigger('filesDidChange', input.files);
    }
  }
});
