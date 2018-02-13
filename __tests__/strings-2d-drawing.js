'use strict';

var RDKit = require('..');

beforeEach(() => RDKit.load());

test('smilewrite', function() {
  var smi = 'CCCCCOC(CO)';
  var mol = RDKit.Molecule.fromSmiles(smi);
  expect(mol.toSmiles()).toBe('CCCCCOCCO');
  mol.delete();
});

test('sdwriteConfs', function() {
  var smi = 'CCCCCOC(CO)';
  var mol = RDKit.Molecule.fromSmiles(smi);
  mol.addHs();
  mol.EmbedMultipleConfsarg(3, 1000, 2015);
  expect(mol.sdwriteConfs()).toMatchSnapshot();
  mol.delete();
});

test('2D generation', function() {
  var smi = 'CCCCCOC(CO)';
  var mol = RDKit.Molecule.fromSmiles(smi);
  mol.compute2DCoords();
  expect(mol.sdwriteConfs()).toMatchSnapshot();
  mol.delete();
});

test('2D Drawing', function() {
  var smi = 'CCCCCOC(CO)';
  var mol = RDKit.Molecule.fromSmiles(smi);
  expect(mol.Drawing2D()).toMatchSnapshot();
  mol.delete();
});
