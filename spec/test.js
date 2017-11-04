'use babel';

import PoorMansTSqlFormatterAtomPackage from '../lib/main';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('PoorMansTSqlFormatterAtomPackage', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('poor-mans-t-sql-formatter');
  });

  describe('when the poor-mans-t-sql-formatter-atom-package:format event is triggered', () => {

    it('formats the active text if any', () => {

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'poor-mans-t-sql-formatter:format');

      waitsForPromise(() => {
        return activationPromise;
      });

      //TODO: Check file encodings work
      //TODO: Check options
      //TODO: Check selection edit and doc edit
      //TODO: Check filename check
      //TODO: Check error check

      runs(() => {
        //do something?
      });
    });

  });
});
