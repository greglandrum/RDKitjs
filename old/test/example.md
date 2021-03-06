#Some instructions to test the library#

In order to set up a Chrome development web page you need to have access an Apache testing web folder:

- Copy this 2 files in an Apache or other webpage server:
test/example.html  build/rdkit.js in 

- Open localhost/example.html with Chrome and access the console


# GENERATE A RDKitjs MOLECULE OBJECT FROM SMILE #
```js
R=rdk();
var m=R.Molecule.smilesToMol('CCCC(C=O)NCCCCC')
```

# GET DESCRIPTORS FROM MOLECULE OBJECT #
for a complete list of descriptors see http://www.rdkit.org/docs/GettingStartedInPython.html#list-of-available-descriptors

```js
m.Chi0n()
=> 8.305589515962401
m.MQNs()
=> list of MQN object
m.Formula()
=> "C10H21NO"
m.NumHeteroatoms() 
=>2
```


# substructure search in CURRENT MOLECULE OBJECT CCCC(C=O)NCCCCC #
```js
m.getSubstructMatches('C=O')
=> "."
m.getSubstructMatches('CO')
=> ""
```

# GENERATE FINGERPRINTS ( like MorganFP, RDKFP, LayeredFP, MACCSFP, PatternFP) #
```js
m.getMorganFingerprints(3,2048)

```

// getRDKFingerprintMol
```js
t.getRDKFingerprintMol()
```

/// getLayeredFingerprintMol
```js
t.getLayeredFingerprintMol(3,3,2048)
```

/// getMACCSFingerprints
```js
t.getMACCSFingerprints()
"00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000011101000000000110000000000000000010100000100001000000"
```

/// getPatternFingerprintMol
```js
t.getPatternFingerprintMol()

```

# 3D molecule manipulation #
```js
m.addHs()
m.Embedmolecule()
m.MMFFoptimizeMolecule()
m.removeHs()
m.sdwrite()
"
     RDKit          3D

 12 11  0  0  0  0  0  0  0  0999 V2000
   -3.5174    0.5685    1.3526 C   0  0  0  0  0  0  0  0  0  0  0  0
   -3.6835    0.6337   -0.1412 C   0  0  0  0  0  0  0  0  0  0  0  0
   -2.7567   -0.3267   -0.8684 C   0  0  0  0  0  0  0  0  0  0  0  0
   -1.5320    0.3449   -1.4121 C   0  0  0  0  0  0  0  0  0  0  0  0
   -0.8960   -0.5937   -2.3840 C   0  0  0  0  0  0  0  0  0  0  0  0
   -0.8579   -1.8033   -2.1677 O   0  0  0  0  0  0  0  0  0  0  0  0
   -0.6273    0.8371   -0.4222 N   0  0  0  0  0  0  0  0  0  0  0  0
   -0.0587   -0.1487    0.4392 C   0  0  0  0  0  0  0  0  0  0  0  0
    1.3930   -0.4553    0.1504 C   0  0  0  0  0  0  0  0  0  0  0  0
    2.3265    0.1973    1.1626 C   0  0  0  0  0  0  0  0  0  0  0  0
    3.5619    0.7620    0.5159 C   0  0  0  0  0  0  0  0  0  0  0  0
    4.6830   -0.2665    0.5268 C   0  0  0  0  0  0  0  0  0  0  0  0
  1  2  1  0
  2  3  1  0
  3  4  1  0
  4  5  1  0
  5  6  2  0
  4  7  1  0
  7  8  1  0
  8  9  1  0
  9 10  1  0
 10 11  1  0
 11 12  1  0
M  END
$$$$
"
```


# 2D manipulation to draw molecule #
```js
m.compute2DCoords()
m.Drawing2D()
=>"<?xml version='1.0' encoding='iso-8859-1'?>
<svg:svg version='1.1' baseProfile='full'
              xmlns:svg='http://www.w3.org/2000/svg'
                      xmlns:rdkit='http://www.rdkit.org/xml'
                      xmlns:xlink='http://www.w3.org/1999/xlink'
                  xml:space='preserve'
width='300px' height='300px' >
<svg:rect style='opacity:1.0;fill:#ffffff;stroke:none' width='300' height='300' x='0' y='0'> </svg:rect>
<svg:path d='M 13.6364,18.784 59.0909,45.0272' style='fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
<svg:path d='M 59.0909,45.0272 104.545,18.784' style='fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
<svg:path d='M 104.545,18.784 150,45.0272' style='fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
<svg:path d='M 150,45.0272 195.455,18.784' style='fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
<svg:path d='M 150,45.0272 150,66.8966' style='fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
<svg:path d='M 150,66.8966 150,88.7659' style='fill:none;fill-rule:evenodd;stroke:#0000FF;stroke-width:2px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
<svg:path d='M 197.204,15.7537 215.846,26.5168' style='fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
<svg:path d='M 215.846,26.5168 234.488,37.2799' style='fill:none;fill-rule:evenodd;stroke:#FF0000;stroke-width:2px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
<svg:path d='M 193.705,21.8143 212.347,32.5774' style='fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
<svg:path d='M 212.347,32.5774 230.989,43.3405' style='fill:none;fill-rule:evenodd;stroke:#FF0000;stroke-width:2px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
<svg:path d='M 165.152,106.261 180.303,115.009' style='fill:none;fill-rule:evenodd;stroke:#0000FF;stroke-width:2px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
<svg:path d='M 180.303,115.009 195.455,123.757' style='fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
<svg:path d='M 195.455,123.757 195.455,176.243' style='fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
<svg:path d='M 195.455,176.243 240.909,202.486' style='fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
<svg:path d='M 240.909,202.486 240.909,254.973' style='fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
<svg:path d='M 240.909,254.973 286.364,281.216' style='fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
<svg:text x='232.739' y='51.5795' style='font-size:17px;font-style:normal;font-weight:normal;fill-opacity:1;stroke:none;font-family:sans-serif;text-anchor:start;fill:#FF0000' ><svg:tspan>O</svg:tspan></svg:text>
<svg:text x='134.836' y='104.066' style='font-size:17px;font-style:normal;font-weight:normal;fill-opacity:1;stroke:none;font-family:sans-serif;text-anchor:start;fill:#0000FF' ><svg:tspan>NH</svg:tspan></svg:text>
</svg:svg>
"
```

# UFF 3D forcefield implementation #
```js
m.UFFOptimizeMolecule()
m.sdwrite()
=>"
     RDKit          3D

 33 32  0  0  0  0  0  0  0  0999 V2000
   -3.3811    0.5259    1.4309 C   0  0  0  0  0  0  0  0  0  0  0  0
   -3.8390    0.4382   -0.0250 C   0  0  0  0  0  0  0  0  0  0  0  0
   -2.8777   -0.3678   -0.9183 C   0  0  0  0  0  0  0  0  0  0  0  0
   -1.6217    0.4246   -1.3559 C   0  0  0  0  0  0  0  0  0  0  0  0
   -0.8837   -0.2676   -2.4794 C   0  0  0  0  0  0  0  0  0  0  0  0
   -0.5381   -1.4352   -2.3876 O   0  0  0  0  0  0  0  0  0  0  0  0
   -0.7333    0.7683   -0.2259 N   0  0  0  0  0  0  0  0  0  0  0  0
   -0.0221   -0.3632    0.4083 C   0  0  0  0  0  0  0  0  0  0  0  0
    1.4776   -0.3944    0.0561 C   0  0  0  0  0  0  0  0  0  0  0  0
    2.2854    0.6272    0.8755 C   0  0  0  0  0  0  0  0  0  0  0  0
    3.7523    0.7137    0.4271 C   0  0  0  0  0  0  0  0  0  0  0  0
    4.5539   -0.5391    0.7793 C   0  0  0  0  0  0  0  0  0  0  0  0
   -4.2080    0.9300    2.0522 H   0  0  0  0  0  0  0  0  0  0  0  0
   -2.5169    1.2121    1.5336 H   0  0  0  0  0  0  0  0  0  0  0  0
   -3.1092   -0.4787    1.8189 H   0  0  0  0  0  0  0  0  0  0  0  0
   -4.8287   -0.0684   -0.0387 H   0  0  0  0  0  0  0  0  0  0  0  0
   -3.9864    1.4612   -0.4337 H   0  0  0  0  0  0  0  0  0  0  0  0
   -2.6129   -1.3261   -0.4258 H   0  0  0  0  0  0  0  0  0  0  0  0
   -3.4421   -0.6407   -1.8376 H   0  0  0  0  0  0  0  0  0  0  0  0
   -1.9887    1.3838   -1.7856 H   0  0  0  0  0  0  0  0  0  0  0  0
   -0.6756    0.2746   -3.3961 H   0  0  0  0  0  0  0  0  0  0  0  0
   -0.0671    1.5129   -0.5375 H   0  0  0  0  0  0  0  0  0  0  0  0
   -0.1403   -0.2787    1.5097 H   0  0  0  0  0  0  0  0  0  0  0  0
   -0.4680   -1.3407    0.1362 H   0  0  0  0  0  0  0  0  0  0  0  0
    1.6142   -0.2092   -1.0311 H   0  0  0  0  0  0  0  0  0  0  0  0
    1.8593   -1.4141    0.2764 H   0  0  0  0  0  0  0  0  0  0  0  0
    2.2387    0.3648    1.9552 H   0  0  0  0  0  0  0  0  0  0  0  0
    1.8358    1.6361    0.7599 H   0  0  0  0  0  0  0  0  0  0  0  0
    4.2239    1.5826    0.9353 H   0  0  0  0  0  0  0  0  0  0  0  0
    3.8071    0.8955   -0.6683 H   0  0  0  0  0  0  0  0  0  0  0  0
    4.2028   -1.4097    0.1876 H   0  0  0  0  0  0  0  0  0  0  0  0
    5.6252   -0.3701    0.5414 H   0  0  0  0  0  0  0  0  0  0  0  0
    4.4645   -0.7664    1.8629 H   0  0  0  0  0  0  0  0  0  0  0  0
  1  2  1  0
  2  3  1  0
  3  4  1  0
  4  5  1  0
  5  6  2  0
  4  7  1  0
  7  8  1  0
  8  9  1  0
  9 10  1  0
 10 11  1  0
 11 12  1  0
  1 13  1  0
  1 14  1  0
  1 15  1  0
  2 16  1  0
  2 17  1  0
  3 18  1  0
  3 19  1  0
  4 20  1  0
  5 21  1  0
  7 22  1  0
  8 23  1  0
  8 24  1  0
  9 25  1  0
  9 26  1  0
 10 27  1  0
 10 28  1  0
 11 29  1  0
 11 30  1  0
 12 31  1  0
 12 32  1  0
 12 33  1  0
M  END
$$$$
"
```


# Access return complex objects in JS from RDKitjs #
```js
var t = m.UFFOptimizeMolecule()
t.get(0)
return 0
t.get(1)
return 22.830754642577084 (Minimal NRJ found afteroptimization)
or 
var t2= m.MMFFoptimizeMolecule()
t2.get(0)
return 0
t2.get(1)
return 32.386329978576335 (Minimal NRJ found afteroptimization)
t2.size()
return 2
```

# adding get set & has properties functions #
```js
T= R.Molecule.MolBlockToMol('CCCO\nJME 2015-05-03 Sat May 16 17:16:55 GMT+200 2015\n \n  4  3  0  0  0  0  0  0  0  0999 V2000\n    3.6373    0.7000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.4249    0.0000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    1.2124    0.7000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.0000    0.0000    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\n  2  1  1  0  0  0  0\n  3  2  1  0  0  0  0\n  4  3  1  0  0  0  0\nM  END\n')
Object {$$: Object, getNumAtoms: function, getFP: function, getMorganFingerprints2: function, getMorganFingerprints3: function…}
T.setProp('MP','45')
0
T.hasProp('MP')
true
T.sdwrite()
"CCCO
     RDKit          3D

  4  3  0  0  0  0  0  0  0  0999 V2000
    3.6373    0.7000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    2.4249    0.0000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    1.2124    0.7000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    0.0000    0.0000    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0
  2  1  1  0
  3  2  1  0
  4  3  1  0
M  END
>  <MP>  (1) 
45

$$$$
"
T.getProp('MP')
"45"
```


# Murcko decomposition #
```js
R=rdk();
t = R.Molecule.MurckosmilesToMol('OC2C(C)C21C(N)C1C');
t.smilewrite()
"C1CC12CC2 0"
t = R.Molecule.MurckosmilesToMol('O=S(CNCNC)(=O)CNC1CC1S(=O)(=O)C1CC1C=CNNCO');
t.smilewrite()
"O=S(=O)(C1CC1)C1CC1 0"
```


# create a empty molecule than adding Atoms & Bonds #
```js
R=rdk();
t = R.Molecule.newmolecule()
t.addAtom(6)
0
t.addAtom(6)
1
t.addAtom(6)
2
t.addAtom(6)
3
t.addAtom(6)
4
t.addAtom(6)
5
t.addBond(0,1,1)
1
t.addBond(1,2,2)
2
t.addBond(2,3,1)
3
t.addBond(3,4,1)
4
t.addBond(4,5,1)
5
t.smilewrite()
"CC=CCCC 0
"
```

# pickleMol & molfromPickle methods from data compression #
```js
R=rdk()
mol =R.Molecule.smilesToMol('C1CCC1')
mol.pickleMol()
"ï¾­Þ
c=R.Molecule.molFromPickle(s)
c.Chi0v()
2.82842712474619
c.sdwrite()
"
     RDKit          

  4  4  0  0  0  0  0  0  0  0999 V2000
    0.0000    0.0000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    0.0000    0.0000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    0.0000    0.0000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    0.0000    0.0000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  1  2  1  0
  2  3  1  0
  3  4  1  0
  4  1  1  0
M  END
$$$$
"
```
