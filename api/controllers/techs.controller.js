const TechModel = require('../models/techs.model')
const { response } = require('express')

function getAllTechs (req, res) {
  TechModel
    .find()
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

// Init DB
function initialize (req, res) {
  const keywords = [
    {
      id: '1402',
      keyName: '.NET'
    },
    {
      id: '1401',
      keyName: '.NET Framework'
    },
    {
      id: '137',
      keyName: '2 tier'
    },
    {
      id: '829',
      keyName: '@Formula'
    },
    {
      id: '606',
      keyName: 'A#'
    },
    {
      id: '605',
      keyName: 'A# .NET'
    },
    {
      id: '609',
      keyName: 'A+'
    },
    {
      id: '610',
      keyName: 'A++'
    },
    {
      id: '608',
      keyName: 'A-0 System'
    },
    {
      id: '212',
      keyName: 'A-A-P'
    },
    {
      id: '611',
      keyName: 'ABAP'
    },
    {
      id: '1527',
      keyName: 'ABAP Unit'
    },
    {
      id: '612',
      keyName: 'ABC'
    },
    {
      id: '613',
      keyName: 'ABC ALGOL'
    },
    {
      id: '41',
      keyName: 'Abdera'
    },
    {
      id: '614',
      keyName: 'Abel'
    },
    {
      id: '462',
      keyName: 'ABIS-Query'
    },
    {
      id: '616',
      keyName: 'ABSET'
    },
    {
      id: '407',
      keyName: 'Absoft Pro Fortran'
    },
    {
      id: '545',
      keyName: 'Abstract Window Toolkit'
    },
    {
      id: '617',
      keyName: 'ABSYS'
    },
    {
      id: '618',
      keyName: 'Abundance'
    },
    {
      id: '619',
      keyName: 'ACC'
    },
    {
      id: '2162',
      keyName: 'AccDC'
    },
    {
      id: '620',
      keyName: 'Accent'
    },
    {
      id: '1322',
      keyName: 'Access Linux'
    },
    {
      id: '464',
      keyName: 'ACDB'
    },
    {
      id: '621',
      keyName: 'Ace DASL'
    },
    {
      id: '1546',
      keyName: 'AceUnit'
    },
    {
      id: '622',
      keyName: 'ACT-III'
    },
    {
      id: '623',
      keyName: 'Action!'
    },
    {
      id: '624',
      keyName: 'ActionScript'
    },
    {
      id: '1407',
      keyName: 'Active Template Library'
    },
    {
      id: '42',
      keyName: 'ActiveMQ'
    },
    {
      id: '2136',
      keyName: 'ActiveRecord'
    },
    {
      id: '1399',
      keyName: 'ActiveX'
    },
    {
      id: '625',
      keyName: 'Ada'
    },
    {
      id: '1464',
      keyName: 'ADABAS'
    },
    {
      id: '1465',
      keyName: 'Adaptive Server Enterprise'
    },
    {
      id: '1538',
      keyName: 'AdaTEST 95'
    },
    {
      id: '626',
      keyName: 'Adenine'
    },
    {
      id: '465',
      keyName: 'Adminer'
    },
    {
      id: '1422',
      keyName: 'ADO'
    },
    {
      id: '1421',
      keyName: 'ADO.NET'
    },
    {
      id: '2088',
      keyName: 'ADO.NET Entity Framework'
    },
    {
      id: '466',
      keyName: 'Advanced Query Tool'
    },
    {
      id: '1466',
      keyName: 'Advantage Database Server'
    },
    {
      id: '1768',
      keyName: 'Adventure PHP'
    },
    {
      id: '1585',
      keyName: 'Aeryn'
    },
    {
      id: '1769',
      keyName: 'Agavi'
    },
    {
      id: '627',
      keyName: 'Agda'
    },
    {
      id: '2141',
      keyName: 'Agent oriented programming'
    },
    {
      id: '2143',
      keyName: 'Agile software development'
    },
    {
      id: '1770',
      keyName: 'Agile Toolkit'
    },
    {
      id: '2144',
      keyName: 'Agile Unified Process'
    },
    {
      id: '2089',
      keyName: 'AgileFx'
    },
    {
      id: '30',
      keyName: 'AgileSCM'
    },
    {
      id: '628',
      keyName: 'Agora'
    },
    {
      id: '1539',
      keyName: 'Ahven'
    },
    {
      id: '629',
      keyName: 'AIMMS'
    },
    {
      id: '1458',
      keyName: 'AIX'
    },
    {
      id: '630',
      keyName: 'Alef'
    },
    {
      id: '631',
      keyName: 'ALF'
    },
    {
      id: '632',
      keyName: 'ALGOL 58'
    },
    {
      id: '633',
      keyName: 'ALGOL 60'
    },
    {
      id: '634',
      keyName: 'ALGOL 68'
    },
    {
      id: '282',
      keyName: 'ALGOL 68G'
    },
    {
      id: '635',
      keyName: 'Alice'
    },
    {
      id: '391',
      keyName: 'Allegro Common Lisp'
    },
    {
      id: '2018',
      keyName: 'AllegroGraph'
    },
    {
      id: '1771',
      keyName: 'Alloy'
    },
    {
      id: '636',
      keyName: 'Alma-0'
    },
    {
      id: '1467',
      keyName: 'Altibase'
    },
    {
      id: '339',
      keyName: 'AMD x86 Open64 Compiler Suite'
    },
    {
      id: '637',
      keyName: 'Amiga E'
    },
    {
      id: '638',
      keyName: 'AMOS'
    },
    {
      id: '308',
      keyName: 'AMPC'
    },
    {
      id: '639',
      keyName: 'AMPL'
    },
    {
      id: '2171',
      keyName: 'Ample SDK'
    },
    {
      id: '425',
      keyName: 'Amsterdam Compiler Kit'
    },
    {
      id: '1323',
      keyName: 'Android'
    },
    {
      id: '2188',
      keyName: 'AngularJS'
    },
    {
      id: '204',
      keyName: 'Ant'
    },
    {
      id: '1916',
      keyName: 'AnthillPro'
    },
    {
      id: '253',
      keyName: 'ANTIAUTO'
    },
    {
      id: '2148',
      keyName: 'AOP'
    },
    {
      id: '203',
      keyName: 'Apache Ant'
    },
    {
      id: '206',
      keyName: 'Apache Builder'
    },
    {
      id: '2026',
      keyName: 'Apache Cassandra'
    },
    {
      id: '1799',
      keyName: 'Apache Click'
    },
    {
      id: '1800',
      keyName: 'Apache Cocoon'
    },
    {
      id: '1919',
      keyName: 'Apache Continuum'
    },
    {
      id: '2009',
      keyName: 'Apache CouchDB'
    },
    {
      id: '1468',
      keyName: 'Apache Derby'
    },
    {
      id: '62',
      keyName: 'Apache Directory'
    },
    {
      id: '1920',
      keyName: 'Apache Gump'
    },
    {
      id: '207',
      keyName: 'Apache Ivy'
    },
    {
      id: '209',
      keyName: 'Apache Maven'
    },
    {
      id: '2082',
      keyName: 'Apache OJB'
    },
    {
      id: '594',
      keyName: 'Apache POI'
    },
    {
      id: '1829',
      keyName: 'Apache Shale'
    },
    {
      id: '1830',
      keyName: 'Apache Sling'
    },
    {
      id: '1802',
      keyName: 'Apache Struts'
    },
    {
      id: '1804',
      keyName: 'Apache Tapestry'
    },
    {
      id: '1806',
      keyName: 'Apache Wicket'
    },
    {
      id: '1586',
      keyName: 'API Sanity Autotest'
    },
    {
      id: '640',
      keyName: 'APL'
    },
    {
      id: '1772',
      keyName: 'AppFlower'
    },
    {
      id: '1808',
      keyName: 'AppFuse'
    },
    {
      id: '641',
      keyName: 'AppleScript'
    },
    {
      id: '1875',
      keyName: 'Application Express'
    },
    {
      id: '44',
      keyName: 'APR'
    },
    {
      id: '467',
      keyName: 'AQT'
    },
    {
      id: '468',
      keyName: 'Aqua Data Studio'
    },
    {
      id: '1809',
      keyName: 'Aranea'
    },
    {
      id: '642',
      keyName: 'Arc'
    },
    {
      id: '45',
      keyName: 'Archiva'
    },
    {
      id: '643',
      keyName: 'ARexx'
    },
    {
      id: '644',
      keyName: 'Argus'
    },
    {
      id: '46',
      keyName: 'Aries'
    },
    {
      id: '367',
      keyName: 'armcc'
    },
    {
      id: '392',
      keyName: 'Armed Bear Common Lisp'
    },
    {
      id: '469',
      keyName: 'ARMS'
    },
    {
      id: '1420',
      keyName: 'ASP'
    },
    {
      id: '1419',
      keyName: 'ASP.NET'
    },
    {
      id: '1869',
      keyName: 'ASP.NET MVC'
    },
    {
      id: '2146',
      keyName: 'Aspect-oriented Programming'
    },
    {
      id: '645',
      keyName: 'AspectJ'
    },
    {
      id: '1544',
      keyName: 'ASPUnit'
    },
    {
      id: '648',
      keyName: 'assembly'
    },
    {
      id: '646',
      keyName: 'Assembly language'
    },
    {
      id: '1543',
      keyName: 'ASTest'
    },
    {
      id: '1532',
      keyName: 'ASTUce'
    },
    {
      id: '1533',
      keyName: 'AsUnit'
    },
    {
      id: '276',
      keyName: 'Atego'
    },
    {
      id: '650',
      keyName: 'Ateji PX'
    },
    {
      id: '1587',
      keyName: 'ATF'
    },
    {
      id: '2062',
      keyName: 'Athena Framework'
    },
    {
      id: '1408',
      keyName: 'ATL'
    },
    {
      id: '649',
      keyName: 'ATS'
    },
    {
      id: '1537',
      keyName: 'AUnit'
    },
    {
      id: '2145',
      keyName: 'AUP'
    },
    {
      id: '652',
      keyName: 'Autocoder'
    },
    {
      id: '651',
      keyName: 'AutoHotkey'
    },
    {
      id: '653',
      keyName: 'AutoIt'
    },
    {
      id: '254',
      keyName: 'automake'
    },
    {
      id: '1918',
      keyName: 'Automated BuildStudio'
    },
    {
      id: '1548',
      keyName: 'Automated Testing Framework'
    },
    {
      id: '1549',
      keyName: 'Autounit'
    },
    {
      id: '654',
      keyName: 'Averest'
    },
    {
      id: '47',
      keyName: 'Avro'
    },
    {
      id: '656',
      keyName: 'AWK'
    },
    {
      id: '1773',
      keyName: 'AWS XMS'
    },
    {
      id: '546',
      keyName: 'AWT'
    },
    {
      id: '607',
      keyName: 'Axiom'
    },
    {
      id: '48',
      keyName: 'Axis'
    },
    {
      id: '2157',
      keyName: 'Axis2'
    },
    {
      id: '657',
      keyName: 'Axum'
    },
    {
      id: '659',
      keyName: 'Babbage'
    },
    {
      id: '2189',
      keyName: 'Backbone.js'
    },
    {
      id: '1325',
      keyName: 'bada'
    },
    {
      id: '255',
      keyName: 'Bakefile'
    },
    {
      id: '1917',
      keyName: 'Bamboo'
    },
    {
      id: '1423',
      keyName: 'Base Class Library'
    },
    {
      id: '2090',
      keyName: 'Base One Foundation Component Library'
    },
    {
      id: '660',
      keyName: 'Bash'
    },
    {
      id: '665',
      keyName: 'Batch'
    },
    {
      id: '1424',
      keyName: 'BCL'
    },
    {
      id: '663',
      keyName: 'BCPL'
    },
    {
      id: '2150',
      keyName: 'BDD'
    },
    {
      id: '2152',
      keyName: 'BDUF'
    },
    {
      id: '664',
      keyName: 'BeanShell'
    },
    {
      id: '1711',
      keyName: 'beanSpec'
    },
    {
      id: '2149',
      keyName: 'Behavior Driven Development'
    },
    {
      id: '2051',
      keyName: 'Berkeley DB'
    },
    {
      id: '666',
      keyName: 'Bertrand'
    },
    {
      id: '667',
      keyName: 'BETA'
    },
    {
      id: '1870',
      keyName: 'BFC'
    },
    {
      id: '1374',
      keyName: 'BHO'
    },
    {
      id: '2151',
      keyName: 'Big Design Up Front'
    },
    {
      id: '2039',
      keyName: 'BigTable'
    },
    {
      id: '668',
      keyName: 'Bigwig'
    },
    {
      id: '669',
      keyName: 'Bistro'
    },
    {
      id: '670',
      keyName: 'BitC'
    },
    {
      id: '1388',
      keyName: 'BITS'
    },
    {
      id: '1341',
      keyName: 'BlackBerry'
    },
    {
      id: '133',
      keyName: 'Blackboard'
    },
    {
      id: '2153',
      keyName: 'Blind Men And Elephant Approach'
    },
    {
      id: '671',
      keyName: 'BLISS'
    },
    {
      id: '284',
      keyName: 'BlitzMax'
    },
    {
      id: '1841',
      keyName: 'BlueBream'
    },
    {
      id: '2154',
      keyName: 'BMAEA'
    },
    {
      id: '167',
      keyName: 'bmake'
    },
    {
      id: '673',
      keyName: 'Bon'
    },
    {
      id: '674',
      keyName: 'Boo'
    },
    {
      id: '675',
      keyName: 'Boomerang'
    },
    {
      id: '1588',
      keyName: 'Boost Test Library'
    },
    {
      id: '213',
      keyName: 'Boost.Build'
    },
    {
      id: '3',
      keyName: 'BootStrapTodays'
    },
    {
      id: '344',
      keyName: 'Borland C++'
    },
    {
      id: '677',
      keyName: 'Bourne shell'
    },
    {
      id: '680',
      keyName: 'BPEL'
    },
    {
      id: '1545',
      keyName: 'BPELUnit'
    },
    {
      id: '214',
      keyName: 'bras'
    },
    {
      id: '679',
      keyName: 'BREW'
    },
    {
      id: '1461',
      keyName: 'BSD'
    },
    {
      id: '681',
      keyName: 'BUGSYS'
    },
    {
      id: '252',
      keyName: 'Build Script Generation Tools'
    },
    {
      id: '1921',
      keyName: 'BuildBeat'
    },
    {
      id: '1922',
      keyName: 'BuildBot'
    },
    {
      id: '1923',
      keyName: 'BuildIT'
    },
    {
      id: '215',
      keyName: 'builditis'
    },
    {
      id: '1949',
      keyName: 'BuildLocker'
    },
    {
      id: '29',
      keyName: 'BuildMaster'
    },
    {
      id: '1924',
      keyName: 'BuildMonkey'
    },
    {
      id: '1925',
      keyName: 'Buildout'
    },
    {
      id: '682',
      keyName: 'BuildProfessional'
    },
    {
      id: '49',
      keyName: 'Buildr'
    },
    {
      id: '216',
      keyName: 'Buildtool'
    },
    {
      id: '1926',
      keyName: 'BusyB'
    },
    {
      id: '683',
      keyName: 'C'
    },
    {
      id: '695',
      keyName: 'C Shell'
    },
    {
      id: '691',
      keyName: 'C#'
    },
    {
      id: '686',
      keyName: 'C++'
    },
    {
      id: '336',
      keyName: 'C++ Builder'
    },
    {
      id: '341',
      keyName: 'C++ Compiler'
    },
    {
      id: '357',
      keyName: 'C++ Compiler Professional Edition'
    },
    {
      id: '1589',
      keyName: 'C++test'
    },
    {
      id: '685',
      keyName: 'C--'
    },
    {
      id: '692',
      keyName: 'C/AL'
    },
    {
      id: '217',
      keyName: 'Cabal'
    },
    {
      id: '1927',
      keyName: 'CABIE'
    },
    {
      id: '470',
      keyName: 'Cache Monitor'
    },
    {
      id: '693',
      keyName: 'Cache ObjectScript'
    },
    {
      id: '1703',
      keyName: 'Cactus'
    },
    {
      id: '169',
      keyName: 'cake'
    },
    {
      id: '2120',
      keyName: 'CakePHP'
    },
    {
      id: '50',
      keyName: 'Camel'
    },
    {
      id: '697',
      keyName: 'Caml'
    },
    {
      id: '1687',
      keyName: 'Canoo WebTest'
    },
    {
      id: '1590',
      keyName: 'Cantata++'
    },
    {
      id: '1414',
      keyName: 'CAPICOM'
    },
    {
      id: '2190',
      keyName: 'Cappuccino'
    },
    {
      id: '2066',
      keyName: 'Carbonado'
    },
    {
      id: '1415',
      keyName: 'CardSpace'
    },
    {
      id: '2225',
      keyName: 'CasperJS'
    },
    {
      id: '51',
      keyName: 'Cassandra'
    },
    {
      id: '2093',
      keyName: 'Castle ActiveRecord'
    },
    {
      id: '1761',
      keyName: 'Catalyst'
    },
    {
      id: '1591',
      keyName: 'CATCH'
    },
    {
      id: '1552',
      keyName: 'Catsrunner'
    },
    {
      id: '2063',
      keyName: 'Cayenne'
    },
    {
      id: '256',
      keyName: 'ccbuild'
    },
    {
      id: '1437',
      keyName: 'CCF'
    },
    {
      id: '331',
      keyName: 'CCS'
    },
    {
      id: '2040',
      keyName: 'CDB'
    },
    {
      id: '700',
      keyName: 'Cecil'
    },
    {
      id: '701',
      keyName: 'Cel'
    },
    {
      id: '702',
      keyName: 'Cesil'
    },
    {
      id: '1637',
      keyName: 'cfcUnit'
    },
    {
      id: '1897',
      keyName: 'cfengine'
    },
    {
      id: '1592',
      keyName: 'cfix'
    },
    {
      id: '703',
      keyName: 'CFML'
    },
    {
      id: '1636',
      keyName: 'CFUnit'
    },
    {
      id: '704',
      keyName: 'Cg'
    },
    {
      id: '1554',
      keyName: 'Cgreen'
    },
    {
      id: '342',
      keyName: 'Ch interpreter'
    },
    {
      id: '705',
      keyName: 'Chapel'
    },
    {
      id: '708',
      keyName: 'Charm'
    },
    {
      id: '1896',
      keyName: 'chef'
    },
    {
      id: '53',
      keyName: 'Chemistry'
    },
    {
      id: '1842',
      keyName: 'CherryPy'
    },
    {
      id: '443',
      keyName: 'Chez Scheme'
    },
    {
      id: '710',
      keyName: 'CHILL'
    },
    {
      id: '711',
      keyName: 'CHIP-8'
    },
    {
      id: '285',
      keyName: 'Chipmunk Basic'
    },
    {
      id: '471',
      keyName: 'Chive\tFusonic'
    },
    {
      id: '712',
      keyName: 'chomski'
    },
    {
      id: '714',
      keyName: 'ChucK'
    },
    {
      id: '1950',
      keyName: 'CI Foundry'
    },
    {
      id: '715',
      keyName: 'CICS'
    },
    {
      id: '716',
      keyName: 'Cilk'
    },
    {
      id: '343',
      keyName: 'CINT'
    },
    {
      id: '2041',
      keyName: 'Citrusleaf database'
    },
    {
      id: '717',
      keyName: 'CL'
    },
    {
      id: '718',
      keyName: 'Claire'
    },
    {
      id: '310',
      keyName: 'Clang'
    },
    {
      id: '719',
      keyName: 'Clarion'
    },
    {
      id: '590',
      keyName: 'CLDC'
    },
    {
      id: '1899',
      keyName: 'ClearCase'
    },
    {
      id: '170',
      keyName: 'Clearmake'
    },
    {
      id: '135',
      keyName: 'client server'
    },
    {
      id: '721',
      keyName: 'Clipper'
    },
    {
      id: '393',
      keyName: 'CLISP'
    },
    {
      id: '722',
      keyName: 'CLIST'
    },
    {
      id: '723',
      keyName: 'Clojure'
    },
    {
      id: '145',
      keyName: 'cloud computing'
    },
    {
      id: '1951',
      keyName: 'CloudBees DEV@cloud'
    },
    {
      id: '394',
      keyName: 'Clozure CL'
    },
    {
      id: '724',
      keyName: 'CLU'
    },
    {
      id: '1643',
      keyName: 'CLUnit'
    },
    {
      id: '257',
      keyName: 'CMake'
    },
    {
      id: '1556',
      keyName: 'Cmockery'
    },
    {
      id: '807',
      keyName: 'CMS EXEC'
    },
    {
      id: '725',
      keyName: 'CMS-2'
    },
    {
      id: '395',
      keyName: 'CMU Common Lisp'
    },
    {
      id: '258',
      keyName: 'cmvnconfix'
    },
    {
      id: '727',
      keyName: 'COBOL'
    },
    {
      id: '729',
      keyName: 'CobolScript'
    },
    {
      id: '1641',
      keyName: 'COBOLUnit'
    },
    {
      id: '730',
      keyName: 'Cobra'
    },
    {
      id: '1801',
      keyName: 'Cocoon'
    },
    {
      id: '18',
      keyName: 'CodeBeamer'
    },
    {
      id: '434',
      keyName: 'CodeGear'
    },
    {
      id: '1775',
      keyName: 'CodeIgniter'
    },
    {
      id: '347',
      keyName: 'CodeWarrior'
    },
    {
      id: '732',
      keyName: 'CoffeeScript'
    },
    {
      id: '733',
      keyName: 'Cola'
    },
    {
      id: '1860',
      keyName: 'ColdBox Platform'
    },
    {
      id: '734',
      keyName: 'ColdC'
    },
    {
      id: '736',
      keyName: 'ColdFusion'
    },
    {
      id: '1862',
      keyName: 'ColdFusion on Wheels'
    },
    {
      id: '1863',
      keyName: 'ColdSpring'
    },
    {
      id: '13',
      keyName: 'CollabNet TeamForge'
    },
    {
      id: '1398',
      keyName: 'COM+'
    },
    {
      id: '738',
      keyName: 'COMAL'
    },
    {
      id: '739',
      keyName: 'Combined Programming Language'
    },
    {
      id: '348',
      keyName: 'Comeau C/C++'
    },
    {
      id: '744',
      keyName: 'COMIT'
    },
    {
      id: '740',
      keyName: 'Common Intermediate Language'
    },
    {
      id: '741',
      keyName: 'Common Lisp'
    },
    {
      id: '56',
      keyName: 'Commons'
    },
    {
      id: '472',
      keyName: 'CompareData'
    },
    {
      id: '742',
      keyName: 'COMPASS'
    },
    {
      id: '1890',
      keyName: 'Compojure'
    },
    {
      id: '743',
      keyName: 'Component Pascal'
    },
    {
      id: '1436',
      keyName: 'Composite UI'
    },
    {
      id: '1699',
      keyName: 'Concordion'
    },
    {
      id: '1718',
      keyName: 'Concutest'
    },
    {
      id: '589',
      keyName: 'Connected Limited Device Configuration'
    },
    {
      id: '745',
      keyName: 'Constraint Handling Rules'
    },
    {
      id: '1810',
      keyName: 'Context Framework'
    },
    {
      id: '1952',
      keyName: 'Continuous.io'
    },
    {
      id: '57',
      keyName: 'Continuum'
    },
    {
      id: '746',
      keyName: 'Converge'
    },
    {
      id: '219',
      keyName: 'cook'
    },
    {
      id: '286',
      keyName: 'CoolBasic'
    },
    {
      id: '751',
      keyName: 'Coq'
    },
    {
      id: '747',
      keyName: 'Coral 66'
    },
    {
      id: '2117',
      keyName: 'Core Data'
    },
    {
      id: '396',
      keyName: 'Corman Common Lisp'
    },
    {
      id: '748',
      keyName: 'Corn'
    },
    {
      id: '749',
      keyName: 'CorVision'
    },
    {
      id: '349',
      keyName: 'CoSy compiler development system'
    },
    {
      id: '58',
      keyName: 'CouchDB'
    },
    {
      id: '752',
      keyName: 'COWSEL'
    },
    {
      id: '753',
      keyName: 'CPL'
    },
    {
      id: '1876',
      keyName: 'CppCMS'
    },
    {
      id: '1594',
      keyName: 'CppTest'
    },
    {
      id: '1595',
      keyName: 'CppUnit'
    },
    {
      id: '1597',
      keyName: 'CppUnitLite'
    },
    {
      id: '1596',
      keyName: 'CppUTest'
    },
    {
      id: '1598',
      keyName: 'CPUnit'
    },
    {
      id: '1593',
      keyName: 'Cput'
    },
    {
      id: '2180',
      keyName: 'CreateJS'
    },
    {
      id: '1724',
      keyName: 'Crosscheck'
    },
    {
      id: '1928',
      keyName: 'CruiseControl'
    },
    {
      id: '1413',
      keyName: 'Crypto API'
    },
    {
      id: '1438',
      keyName: 'CSF'
    },
    {
      id: '696',
      keyName: 'csh'
    },
    {
      id: '1871',
      keyName: 'Csla'
    },
    {
      id: '757',
      keyName: 'Csound'
    },
    {
      id: '756',
      keyName: 'CSP'
    },
    {
      id: '1557',
      keyName: 'CU'
    },
    {
      id: '1843',
      keyName: 'CubicWeb'
    },
    {
      id: '1469',
      keyName: 'CUBRID'
    },
    {
      id: '1712',
      keyName: 'Cucumber-JVM'
    },
    {
      id: '1558',
      keyName: 'CUnit'
    },
    {
      id: '1559',
      keyName: 'CUnitWin32'
    },
    {
      id: '2163',
      keyName: 'CupQ'
    },
    {
      id: '758',
      keyName: 'Curl'
    },
    {
      id: '1654',
      keyName: 'CurlUnit'
    },
    {
      id: '759',
      keyName: 'Curry'
    },
    {
      id: '1560',
      keyName: 'CUT'
    },
    {
      id: '1599',
      keyName: 'CUTE'
    },
    {
      id: '1600',
      keyName: 'cutee'
    },
    {
      id: '1561',
      keyName: 'CuTest'
    },
    {
      id: '1562',
      keyName: 'Cutter'
    },
    {
      id: '59',
      keyName: 'CXF'
    },
    {
      id: '1601',
      keyName: 'CxxTest'
    },
    {
      id: '1644',
      keyName: 'CyberTiggyr'
    },
    {
      id: '760',
      keyName: 'Cyclone'
    },
    {
      id: '761',
      keyName: 'Cython'
    },
    {
      id: '389',
      keyName: 'D Compiler for .NET'
    },
    {
      id: '1484',
      keyName: 'D-Softs'
    },
    {
      id: '463',
      keyName: 'D-Softs Database Compare'
    },
    {
      id: '2181',
      keyName: 'D3.js'
    },
    {
      id: '473',
      keyName: 'DaDaBIK'
    },
    {
      id: '1762',
      keyName: 'Dancer'
    },
    {
      id: '2091',
      keyName: 'Dapper'
    },
    {
      id: '287',
      keyName: 'DarkBASIC'
    },
    {
      id: '1929',
      keyName: 'Dart'
    },
    {
      id: '763',
      keyName: 'DASL'
    },
    {
      id: '1377',
      keyName: 'Data Access Components'
    },
    {
      id: '474',
      keyName: 'Data Analyst Toolkit'
    },
    {
      id: '1416',
      keyName: 'Data Protection API'
    },
    {
      id: '475',
      keyName: 'Data Visualization'
    },
    {
      id: '476',
      keyName: 'Database Deployment Manager'
    },
    {
      id: '477',
      keyName: 'Database Master with LINQ'
    },
    {
      id: '147',
      keyName: 'Database-centric architecture'
    },
    {
      id: '2140',
      keyName: 'DatabaseObjects'
    },
    {
      id: '2094',
      keyName: 'DatabaseObjects .NET'
    },
    {
      id: '478',
      keyName: 'DatabaseSpy'
    },
    {
      id: '1470',
      keyName: 'Datacom/DB'
    },
    {
      id: '479',
      keyName: 'DatAdmin'
    },
    {
      id: '765',
      keyName: 'DataFlex'
    },
    {
      id: '480',
      keyName: 'DataGlass'
    },
    {
      id: '767',
      keyName: 'Datalog'
    },
    {
      id: '2137',
      keyName: 'Datamapper'
    },
    {
      id: '2079',
      keyName: 'DataNucleus'
    },
    {
      id: '2095',
      keyName: 'DataObjects.NET'
    },
    {
      id: '768',
      keyName: 'DATATRIEVE'
    },
    {
      id: '60',
      keyName: 'DB'
    },
    {
      id: '1471',
      keyName: 'DB2'
    },
    {
      id: '769',
      keyName: 'dBase'
    },
    {
      id: '481',
      keyName: 'DBeauty'
    },
    {
      id: '482',
      keyName: 'DBEdit'
    },
    {
      id: '483',
      keyName: 'dbForge'
    },
    {
      id: '2118',
      keyName: 'DBIx::Class'
    },
    {
      id: '485',
      keyName: 'DBMan'
    },
    {
      id: '486',
      keyName: 'DbNinja'
    },
    {
      id: '487',
      keyName: 'DbSchema'
    },
    {
      id: '488',
      keyName: 'DBTyp.NET'
    },
    {
      id: '1701',
      keyName: 'DbUnit'
    },
    {
      id: '489',
      keyName: 'DbVisualizer'
    },
    {
      id: '770',
      keyName: 'dc'
    },
    {
      id: '771',
      keyName: 'DCL'
    },
    {
      id: '1441',
      keyName: 'DDE'
    },
    {
      id: '1455',
      keyName: 'Debian'
    },
    {
      id: '490',
      keyName: 'Debugger for MySQL'
    },
    {
      id: '772',
      keyName: 'Deesel'
    },
    {
      id: '2129',
      keyName: 'Dejavu'
    },
    {
      id: '774',
      keyName: 'Delphi'
    },
    {
      id: '427',
      keyName: 'Delphi Prism'
    },
    {
      id: '61',
      keyName: 'Deltacloud'
    },
    {
      id: '1349',
      keyName: 'Desktop Window Manager'
    },
    {
      id: '220',
      keyName: 'dev-env'
    },
    {
      id: '2092',
      keyName: 'Devart LinqConnect'
    },
    {
      id: '2096',
      keyName: 'DevForce'
    },
    {
      id: '491',
      keyName: 'Devgems Data Modeler'
    },
    {
      id: '2019',
      keyName: 'DEX'
    },
    {
      id: '492',
      keyName: 'Dezign for Database'
    },
    {
      id: '775',
      keyName: 'DHTML'
    },
    {
      id: '2172',
      keyName: 'DHTMLX'
    },
    {
      id: '380',
      keyName: 'Diab'
    },
    {
      id: '776',
      keyName: 'Dialect'
    },
    {
      id: '778',
      keyName: 'Dialog Manager'
    },
    {
      id: '779',
      keyName: 'DIBOL'
    },
    {
      id: '351',
      keyName: 'Digital Mars'
    },
    {
      id: '383',
      keyName: 'Digital Mars D'
    },
    {
      id: '27',
      keyName: 'Digite'
    },
    {
      id: '777',
      keyName: 'DinkC'
    },
    {
      id: '1362',
      keyName: 'DirectInput'
    },
    {
      id: '1356',
      keyName: 'DirectMusic'
    },
    {
      id: '1363',
      keyName: 'DirectShow'
    },
    {
      id: '1357',
      keyName: 'DirectSound'
    },
    {
      id: '1361',
      keyName: 'DirectX'
    },
    {
      id: '171',
      keyName: 'distcc'
    },
    {
      id: '172',
      keyName: 'distmake'
    },
    {
      id: '1400',
      keyName: 'Distributed Component Object Modelâ€¨'
    },
    {
      id: '149',
      keyName: 'Distributed computing'
    },
    {
      id: '2130',
      keyName: 'Django'
    },
    {
      id: '352',
      keyName: 'Djgpp'
    },
    {
      id: '780',
      keyName: 'DL/I'
    },
    {
      id: '173',
      keyName: 'dmake'
    },
    {
      id: '384',
      keyName: 'DMD'
    },
    {
      id: '311',
      keyName: 'DMS Software Reengineering Toolkit'
    },
    {
      id: '390',
      keyName: 'dnet'
    },
    {
      id: '2121',
      keyName: 'Doctrine'
    },
    {
      id: '1721',
      keyName: 'DOH'
    },
    {
      id: '2164',
      keyName: 'Dojo Toolkit'
    },
    {
      id: '1776',
      keyName: 'DooPHP'
    },
    {
      id: '1872',
      keyName: 'DotNetNuke'
    },
    {
      id: '1534',
      keyName: 'dpUInt'
    },
    {
      id: '781',
      keyName: 'Draco'
    },
    {
      id: '493',
      keyName: 'DreamCoder'
    },
    {
      id: '1472',
      keyName: 'Drizzle'
    },
    {
      id: '1930',
      keyName: 'DSSS'
    },
    {
      id: '1655',
      keyName: 'DUnit'
    },
    {
      id: '1656',
      keyName: 'DUnit2'
    },
    {
      id: '782',
      keyName: 'Dylan'
    },
    {
      id: '1440',
      keyName: 'Dynamic Data Exchange'
    },
    {
      id: '2027',
      keyName: 'Dynamo'
    },
    {
      id: '1778',
      keyName: 'e107'
    },
    {
      id: '785',
      keyName: 'Ease'
    },
    {
      id: '787',
      keyName: 'Easy PL/I'
    },
    {
      id: '1673',
      keyName: 'easyb'
    },
    {
      id: '1714',
      keyName: 'EasyMock'
    },
    {
      id: '788',
      keyName: 'EASYTRIEVE PLUS'
    },
    {
      id: '2067',
      keyName: 'Ebean'
    },
    {
      id: '2191',
      keyName: 'Echo'
    },
    {
      id: '424',
      keyName: 'ECJ'
    },
    {
      id: '1811',
      keyName: 'Eclipse RAP'
    },
    {
      id: '593',
      keyName: 'Eclipse RCP'
    },
    {
      id: '592',
      keyName: 'Eclipse Rich Client Platform'
    },
    {
      id: '2068',
      keyName: 'EclipseLink'
    },
    {
      id: '789',
      keyName: 'ECMAScript'
    },
    {
      id: '2116',
      keyName: 'ECO'
    },
    {
      id: '353',
      keyName: 'EDGE ARM C/C++'
    },
    {
      id: '790',
      keyName: 'Edinburgh IMP'
    },
    {
      id: '1434',
      keyName: 'EFx'
    },
    {
      id: '791',
      keyName: 'EGL'
    },
    {
      id: '792',
      keyName: 'Eiffel'
    },
    {
      id: '403',
      keyName: 'Eiffel Studio'
    },
    {
      id: '793',
      keyName: 'ELAN'
    },
    {
      id: '1931',
      keyName: 'Electric Commander'
    },
    {
      id: '1659',
      keyName: 'elk-test'
    },
    {
      id: '1658',
      keyName: 'ElUnit'
    },
    {
      id: '1657',
      keyName: 'Emacs Lisp'
    },
    {
      id: '337',
      keyName: 'Embarcadero'
    },
    {
      id: '494',
      keyName: 'Embarcadero DBArtisan'
    },
    {
      id: '426',
      keyName: 'Embarcadero Delphi'
    },
    {
      id: '397',
      keyName: 'Embeddable Common Lisp'
    },
    {
      id: '1563',
      keyName: 'EmbeddedUnit'
    },
    {
      id: '2198',
      keyName: 'Ember.js'
    },
    {
      id: '795',
      keyName: 'Emerald'
    },
    {
      id: '1473',
      keyName: 'Empress Embedded Database'
    },
    {
      id: '495',
      keyName: 'EMS SQL Management Studio'
    },
    {
      id: '36',
      keyName: 'Endeavour Agile ALM'
    },
    {
      id: '2069',
      keyName: 'Enterprise Objects Framework'
    },
    {
      id: '2098',
      keyName: 'EntitySpaces'
    },
    {
      id: '2192',
      keyName: 'Enyo'
    },
    {
      id: '496',
      keyName: 'Epictetus'
    },
    {
      id: '796',
      keyName: 'Epigram'
    },
    {
      id: '1661',
      keyName: 'Erlang'
    },
    {
      id: '497',
      keyName: 'ERwin Data Modeler'
    },
    {
      id: '798',
      keyName: 'Escapade'
    },
    {
      id: '799',
      keyName: 'Escher'
    },
    {
      id: '2056',
      keyName: 'ESE/NT'
    },
    {
      id: '498',
      keyName: 'ESF Database Migration Toolkit'
    },
    {
      id: '63',
      keyName: 'ESME'
    },
    {
      id: '800',
      keyName: 'ESPOL'
    },
    {
      id: '801',
      keyName: 'Esterel'
    },
    {
      id: '802',
      keyName: 'Etoys'
    },
    {
      id: '803',
      keyName: 'Euclid'
    },
    {
      id: '804',
      keyName: 'Euler'
    },
    {
      id: '1662',
      keyName: 'EUnit'
    },
    {
      id: '805',
      keyName: 'Euphoria'
    },
    {
      id: '806',
      keyName: 'EusLisp Robot'
    },
    {
      id: '150',
      keyName: 'Event-driven architecture'
    },
    {
      id: '808',
      keyName: 'EXEC 2'
    },
    {
      id: '1602',
      keyName: 'Exercisix'
    },
    {
      id: '2010',
      keyName: 'eXist'
    },
    {
      id: '2173',
      keyName: 'Ext JS'
    },
    {
      id: '2055',
      keyName: 'Extensible Storage Engine'
    },
    {
      id: '809',
      keyName: 'F'
    },
    {
      id: '811',
      keyName: 'F#'
    },
    {
      id: '842',
      keyName: 'F-Script'
    },
    {
      id: '1640',
      keyName: 'Fact'
    },
    {
      id: '812',
      keyName: 'Factor'
    },
    {
      id: '1435',
      keyName: 'Factory Enterprise Library'
    },
    {
      id: '813',
      keyName: 'Falcon'
    },
    {
      id: '814',
      keyName: 'Fancy'
    },
    {
      id: '815',
      keyName: 'Fantom'
    },
    {
      id: '1953',
      keyName: 'FaZend'
    },
    {
      id: '1603',
      keyName: 'FCTX'
    },
    {
      id: '64',
      keyName: 'Felix'
    },
    {
      id: '817',
      keyName: 'Ferite'
    },
    {
      id: '818',
      keyName: 'FFP'
    },
    {
      id: '1474',
      keyName: 'FileMaker'
    },
    {
      id: '1932',
      keyName: 'FinalBuilder'
    },
    {
      id: '1475',
      keyName: 'Firebird'
    },
    {
      id: '1743',
      keyName: 'FireUnit'
    },
    {
      id: '1754',
      keyName: 'FiveAM'
    },
    {
      id: '820',
      keyName: 'FL'
    },
    {
      id: '2161',
      keyName: 'Flash'
    },
    {
      id: '1845',
      keyName: 'Flask'
    },
    {
      id: '821',
      keyName: 'Flavors'
    },
    {
      id: '1878',
      keyName: 'Flex'
    },
    {
      id: '1528',
      keyName: 'FlexUnit'
    },
    {
      id: '1529',
      keyName: 'FlexUnit 4'
    },
    {
      id: '2023',
      keyName: 'FlockDB'
    },
    {
      id: '824',
      keyName: 'FLOW-MATIC'
    },
    {
      id: '221',
      keyName: 'Flowtracer'
    },
    {
      id: '1535',
      keyName: 'Fluint'
    },
    {
      id: '602',
      keyName: 'Flying Saucer'
    },
    {
      id: '825',
      keyName: 'FOCAL'
    },
    {
      id: '28',
      keyName: 'FogBugz'
    },
    {
      id: '827',
      keyName: 'FOIL'
    },
    {
      id: '828',
      keyName: 'FORMAC'
    },
    {
      id: '1812',
      keyName: 'FormEngine'
    },
    {
      id: '65',
      keyName: 'Forrest'
    },
    {
      id: '830',
      keyName: 'Forth'
    },
    {
      id: '832',
      keyName: 'Fortran'
    },
    {
      id: '833',
      keyName: 'Fortress'
    },
    {
      id: '835',
      keyName: 'FoxBase'
    },
    {
      id: '1494',
      keyName: 'FoxPro'
    },
    {
      id: '838',
      keyName: 'FP'
    },
    {
      id: '839',
      keyName: 'FPr'
    },
    {
      id: '2185',
      keyName: 'Frame-Engine'
    },
    {
      id: '428',
      keyName: 'FrameworkPascal'
    },
    {
      id: '840',
      keyName: 'Franz Lisp'
    },
    {
      id: '429',
      keyName: 'Free Pascal'
    },
    {
      id: '2032',
      keyName: 'Freebase'
    },
    {
      id: '288',
      keyName: 'FreeBASIC'
    },
    {
      id: '1460',
      keyName: 'FreeBSD'
    },
    {
      id: '2217',
      keyName: 'freelance'
    },
    {
      id: '1646',
      keyName: 'FReT'
    },
    {
      id: '841',
      keyName: 'Frink'
    },
    {
      id: '151',
      keyName: 'Front end and back end'
    },
    {
      id: '1476',
      keyName: 'FrontBase'
    },
    {
      id: '1604',
      keyName: 'Fructose'
    },
    {
      id: '1669',
      keyName: 'FsCheck'
    },
    {
      id: '1670',
      keyName: 'FsTest'
    },
    {
      id: '1672',
      keyName: 'FsUnit'
    },
    {
      id: '413',
      keyName: 'FTN95'
    },
    {
      id: '1665',
      keyName: 'Ftnunit'
    },
    {
      id: '1777',
      keyName: 'FuelPHP'
    },
    {
      id: '2200',
      keyName: 'FuncJS'
    },
    {
      id: '1663',
      keyName: 'FUnit'
    },
    {
      id: '1864',
      keyName: 'Fusebox'
    },
    {
      id: '843',
      keyName: 'Fuxi'
    },
    {
      id: '1865',
      keyName: 'FW/1'
    },
    {
      id: '848',
      keyName: 'G-code'
    },
    {
      id: '408',
      keyName: 'G95'
    },
    {
      id: '289',
      keyName: 'Gambas'
    },
    {
      id: '442',
      keyName: 'Gambit'
    },
    {
      id: '845',
      keyName: 'GameMonkey Script'
    },
    {
      id: '846',
      keyName: 'GAMS'
    },
    {
      id: '847',
      keyName: 'GAP'
    },
    {
      id: '457',
      keyName: 'GCC'
    },
    {
      id: '312',
      keyName: 'GCC C'
    },
    {
      id: '277',
      keyName: 'GCC GNAT'
    },
    {
      id: '222',
      keyName: 'Gconfigure'
    },
    {
      id: '386',
      keyName: 'GDC'
    },
    {
      id: '1351',
      keyName: 'GDI+'
    },
    {
      id: '850',
      keyName: 'GDL'
    },
    {
      id: '1674',
      keyName: 'geb'
    },
    {
      id: '1677',
      keyName: 'Genexus'
    },
    {
      id: '849',
      keyName: 'Genie'
    },
    {
      id: '1342',
      keyName: 'GEOS'
    },
    {
      id: '66',
      keyName: 'Geronimo'
    },
    {
      id: '409',
      keyName: 'gfortran'
    },
    {
      id: '418',
      keyName: 'GHC'
    },
    {
      id: '851',
      keyName: 'Gibiane'
    },
    {
      id: '1901',
      keyName: 'Git'
    },
    {
      id: '852',
      keyName: 'GJ'
    },
    {
      id: '290',
      keyName: 'GLBasic'
    },
    {
      id: '1565',
      keyName: 'GLib Testing'
    },
    {
      id: '2165',
      keyName: 'Glow'
    },
    {
      id: '853',
      keyName: 'GLSL'
    },
    {
      id: '855',
      keyName: 'GM'
    },
    {
      id: '1676',
      keyName: 'Gmock'
    },
    {
      id: '259',
      keyName: 'GNU Build Tools'
    },
    {
      id: '398',
      keyName: 'GNU Common Lisp'
    },
    {
      id: '385',
      keyName: 'GNU D Compiler'
    },
    {
      id: '854',
      keyName: 'GNU E'
    },
    {
      id: '444',
      keyName: 'GNU Guile'
    },
    {
      id: '422',
      keyName: 'GNU Java'
    },
    {
      id: '431',
      keyName: 'GNU Pascal'
    },
    {
      id: '1933',
      keyName: 'Go'
    },
    {
      id: '857',
      keyName: 'Go!'
    },
    {
      id: '860',
      keyName: 'Godiva'
    },
    {
      id: '861',
      keyName: 'GOM'
    },
    {
      id: '862',
      keyName: 'Goo'
    },
    {
      id: '1605',
      keyName: 'Google C++ Mocking Framework'
    },
    {
      id: '1606',
      keyName: 'Google C++ Testing Framework'
    },
    {
      id: '2201',
      keyName: 'Google Closure Library'
    },
    {
      id: '1813',
      keyName: 'Google Web Toolkit'
    },
    {
      id: '2193',
      keyName: 'Google Web Toolkit'
    },
    {
      id: '2087',
      keyName: 'GORM'
    },
    {
      id: '863',
      keyName: 'GOTRAN'
    },
    {
      id: '864',
      keyName: 'GPSS'
    },
    {
      id: '223',
      keyName: 'Gradle'
    },
    {
      id: '1879',
      keyName: 'Grails'
    },
    {
      id: '1647',
      keyName: 'grand-prix'
    },
    {
      id: '865',
      keyName: 'GraphTalk'
    },
    {
      id: '866',
      keyName: 'GRASS'
    },
    {
      id: '1705',
      keyName: 'GroboUtils'
    },
    {
      id: '1846',
      keyName: 'Grok'
    },
    {
      id: '868',
      keyName: 'Groovy'
    },
    {
      id: '2031',
      keyName: 'GT.M'
    },
    {
      id: '67',
      keyName: 'Gump'
    },
    {
      id: '1566',
      keyName: 'GUnit'
    },
    {
      id: '1814',
      keyName: 'GWT'
    },
    {
      id: '1678',
      keyName: 'GXUnit'
    },
    {
      id: '260',
      keyName: 'GYP'
    },
    {
      id: '1478',
      keyName: 'H2'
    },
    {
      id: '2099',
      keyName: 'Habanero'
    },
    {
      id: '68',
      keyName: 'Hadoop'
    },
    {
      id: '869',
      keyName: 'HAL/S'
    },
    {
      id: '870',
      keyName: 'Hamilton C shell'
    },
    {
      id: '1815',
      keyName: 'Hamlets'
    },
    {
      id: '499',
      keyName: 'Happy Fish'
    },
    {
      id: '871',
      keyName: 'Harbour'
    },
    {
      id: '69',
      keyName: 'Harmony'
    },
    {
      id: '873',
      keyName: 'Haskell'
    },
    {
      id: '874',
      keyName: 'HaXe'
    },
    {
      id: '70',
      keyName: 'HBase'
    },
    {
      id: '417',
      keyName: 'HBC'
    },
    {
      id: '500',
      keyName: 'HeidiSQL'
    },
    {
      id: '1880',
      keyName: 'Helma'
    },
    {
      id: '1607',
      keyName: 'Hestia'
    },
    {
      id: '2028',
      keyName: 'Hibari'
    },
    {
      id: '2070',
      keyName: 'Hibernate'
    },
    {
      id: '875',
      keyName: 'High Level Assembly'
    },
    {
      id: '71',
      keyName: 'Hive'
    },
    {
      id: '1681',
      keyName: 'HLSL'
    },
    {
      id: '224',
      keyName: 'hmake'
    },
    {
      id: '877',
      keyName: 'Hop'
    },
    {
      id: '1779',
      keyName: 'Horde'
    },
    {
      id: '1954',
      keyName: 'Hosted CI'
    },
    {
      id: '355',
      keyName: 'HP aC++'
    },
    {
      id: '4',
      keyName: 'HP Application Lifecycle Management Software'
    },
    {
      id: '1504',
      keyName: 'HP NonStop SQL'
    },
    {
      id: '437',
      keyName: 'HP Pascal'
    },
    {
      id: '1477',
      keyName: 'HSQLDB'
    },
    {
      id: '880',
      keyName: 'HTML'
    },
    {
      id: '881',
      keyName: 'HTML5'
    },
    {
      id: '1684',
      keyName: 'HtmlUnit'
    },
    {
      id: '40',
      keyName: 'HTTP Server'
    },
    {
      id: '72',
      keyName: 'HttpComponents'
    },
    {
      id: '1685',
      keyName: 'HttpUnit'
    },
    {
      id: '1935',
      keyName: 'Hudson.'
    },
    {
      id: '882',
      keyName: 'Hugo'
    },
    {
      id: '883',
      keyName: 'Hume'
    },
    {
      id: '1679',
      keyName: 'HUnit'
    },
    {
      id: '885',
      keyName: 'HyperTalk'
    },
    {
      id: '356',
      keyName: 'IAR C/C++ Compilers'
    },
    {
      id: '2138',
      keyName: 'iBATIS'
    },
    {
      id: '886',
      keyName: 'IBM Basic assembly language'
    },
    {
      id: '872',
      keyName: 'IBM HAScript'
    },
    {
      id: '2052',
      keyName: 'IBM Informix C-ISAM'
    },
    {
      id: '887',
      keyName: 'IBM Informix-4GL'
    },
    {
      id: '279',
      keyName: 'IBM Rational Apex'
    },
    {
      id: '1936',
      keyName: 'IBM Rational Build Forge'
    },
    {
      id: '1',
      keyName: 'IBM Rational solution for Collaborative Lifecycle Management'
    },
    {
      id: '2',
      keyName: 'IBM Rational Team Concert'
    },
    {
      id: '888',
      keyName: 'IBM RPG'
    },
    {
      id: '1816',
      keyName: 'IceFaces'
    },
    {
      id: '889',
      keyName: 'ICI'
    },
    {
      id: '890',
      keyName: 'Icon'
    },
    {
      id: '892',
      keyName: 'IDL'
    },
    {
      id: '1686',
      keyName: 'IEUnit'
    },
    {
      id: '1902',
      keyName: 'iffe'
    },
    {
      id: '1608',
      keyName: 'Igloo'
    },
    {
      id: '1937',
      keyName: 'IKAN ALM'
    },
    {
      id: '451',
      keyName: 'ILDJIT'
    },
    {
      id: '1364',
      keyName: 'Image Mastering API'
    },
    {
      id: '261',
      keyName: 'imake'
    },
    {
      id: '893',
      keyName: 'IMP'
    },
    {
      id: '152',
      keyName: 'Implicit invocation'
    },
    {
      id: '2020',
      keyName: 'InfiniteGraph'
    },
    {
      id: '1479',
      keyName: 'Informix Dynamic Server'
    },
    {
      id: '2182',
      keyName: 'InfoVis Toolkit'
    },
    {
      id: '1480',
      keyName: 'Ingres'
    },
    {
      id: '1709',
      keyName: 'Instinct'
    },
    {
      id: '410',
      keyName: 'Intel Fortran Compiler'
    },
    {
      id: '315',
      keyName: 'Interactive C'
    },
    {
      id: '1481',
      keyName: 'InterBase'
    },
    {
      id: '1763',
      keyName: 'Interchange'
    },
    {
      id: '895',
      keyName: 'Io'
    },
    {
      id: '896',
      keyName: 'Ioke'
    },
    {
      id: '1337',
      keyName: 'iOS'
    },
    {
      id: '897',
      keyName: 'IPL'
    },
    {
      id: '898',
      keyName: 'IPTSCRAE'
    },
    {
      id: '430',
      keyName: 'Irie Pascal'
    },
    {
      id: '899',
      keyName: 'IronPython'
    },
    {
      id: '900',
      keyName: 'IronRuby'
    },
    {
      id: '278',
      keyName: 'Irvine Compiler'
    },
    {
      id: '901',
      keyName: 'ISPF'
    },
    {
      id: '225',
      keyName: 'Istrice'
    },
    {
      id: '902',
      keyName: 'ISWIM'
    },
    {
      id: '1817',
      keyName: 'ItsNat'
    },
    {
      id: '1683',
      keyName: 'ITT IDL'
    },
    {
      id: '208',
      keyName: 'Ivy'
    },
    {
      id: '2174',
      keyName: 'iX Framework'
    },
    {
      id: '903',
      keyName: 'J'
    },
    {
      id: '905',
      keyName: 'J#'
    },
    {
      id: '907',
      keyName: 'J++'
    },
    {
      id: '544',
      keyName: 'J2EE'
    },
    {
      id: '578',
      keyName: 'J3D'
    },
    {
      id: '1725',
      keyName: 'J3Unit'
    },
    {
      id: '557',
      keyName: 'JAAS'
    },
    {
      id: '2011',
      keyName: 'Jackrabbit'
    },
    {
      id: '908',
      keyName: 'JADE'
    },
    {
      id: '565',
      keyName: 'JAI'
    },
    {
      id: '501',
      keyName: 'Jailer'
    },
    {
      id: '74',
      keyName: 'Jakarta'
    },
    {
      id: '910',
      keyName: 'JAL'
    },
    {
      id: '75',
      keyName: 'James'
    },
    {
      id: '911',
      keyName: 'Janus'
    },
    {
      id: '1731',
      keyName: 'Jasmine'
    },
    {
      id: '912',
      keyName: 'JASS'
    },
    {
      id: '1742',
      keyName: 'JasUnit'
    },
    {
      id: '915',
      keyName: 'Java'
    },
    {
      id: '577',
      keyName: 'Java 3D'
    },
    {
      id: '564',
      keyName: 'Java Advanced Imaging'
    },
    {
      id: '587',
      keyName: 'Java API for XML-Based RPC'
    },
    {
      id: '556',
      keyName: 'Java Authentication and Authorization Service'
    },
    {
      id: '547',
      keyName: 'Java Collections Framework'
    },
    {
      id: '566',
      keyName: 'Java Communications API'
    },
    {
      id: '554',
      keyName: 'Java Cryptography Extension'
    },
    {
      id: '2073',
      keyName: 'Java Data Objects'
    },
    {
      id: '552',
      keyName: 'Java Database Connectivity'
    },
    {
      id: '581',
      keyName: 'Java Mail'
    },
    {
      id: '562',
      keyName: 'Java Management Extensions'
    },
    {
      id: '571',
      keyName: 'Java Media Framework'
    },
    {
      id: '583',
      keyName: 'Java Message Service'
    },
    {
      id: '573',
      keyName: 'Java Naming and Directory Interface'
    },
    {
      id: '560',
      keyName: 'Java Native Interface'
    },
    {
      id: '2075',
      keyName: 'Java Object Oriented Querying'
    },
    {
      id: '579',
      keyName: 'Java OpenGL'
    },
    {
      id: '2077',
      keyName: 'Java Persistence API'
    },
    {
      id: '558',
      keyName: 'Java Secure Socket Extension'
    },
    {
      id: '575',
      keyName: 'Java Speech API'
    },
    {
      id: '591',
      keyName: 'Java Telephony API'
    },
    {
      id: '582',
      keyName: 'Java USB for Windows'
    },
    {
      id: '423',
      keyName: 'Javac'
    },
    {
      id: '930',
      keyName: 'JavaFX'
    },
    {
      id: '929',
      keyName: 'JavaFX Script'
    },
    {
      id: '570',
      keyName: 'JavaHelp'
    },
    {
      id: '1720',
      keyName: 'JavaScript'
    },
    {
      id: '2194',
      keyName: 'JavaScriptMVC'
    },
    {
      id: '1818',
      keyName: 'JavaServer Faces'
    },
    {
      id: '601',
      keyName: 'Javolution'
    },
    {
      id: '588',
      keyName: 'JAX-RPC'
    },
    {
      id: '1708',
      keyName: 'JBehave'
    },
    {
      id: '1819',
      keyName: 'JBoss Seam'
    },
    {
      id: '567',
      keyName: 'JCA'
    },
    {
      id: '555',
      keyName: 'JCE'
    },
    {
      id: '548',
      keyName: 'JCF'
    },
    {
      id: '918',
      keyName: 'JCL'
    },
    {
      id: '1710',
      keyName: 'JDave'
    },
    {
      id: '553',
      keyName: 'JDBC'
    },
    {
      id: '2074',
      keyName: 'JDO'
    },
    {
      id: '919',
      keyName: 'JEAN'
    },
    {
      id: '1780',
      keyName: 'Jelix'
    },
    {
      id: '1934',
      keyName: 'Jenkins'
    },
    {
      id: '1489',
      keyName: 'JET'
    },
    {
      id: '1382',
      keyName: 'Jet Engine'
    },
    {
      id: '1700',
      keyName: 'JExample'
    },
    {
      id: '502',
      keyName: 'jfacedbc2'
    },
    {
      id: '421',
      keyName: 'JHC'
    },
    {
      id: '25',
      keyName: 'JIRA'
    },
    {
      id: '174',
      keyName: 'JMake'
    },
    {
      id: '76',
      keyName: 'JMeter'
    },
    {
      id: '572',
      keyName: 'JMF'
    },
    {
      id: '175',
      keyName: 'JMK'
    },
    {
      id: '1715',
      keyName: 'JMock'
    },
    {
      id: '599',
      keyName: 'jMonkey Engine'
    },
    {
      id: '584',
      keyName: 'JMS'
    },
    {
      id: '563',
      keyName: 'JMX'
    },
    {
      id: '574',
      keyName: 'JNDI'
    },
    {
      id: '561',
      keyName: 'JNI'
    },
    {
      id: '580',
      keyName: 'JOGL'
    },
    {
      id: '920',
      keyName: 'Join Java'
    },
    {
      id: '2076',
      keyName: 'jOOQ'
    },
    {
      id: '2202',
      keyName: 'Joose'
    },
    {
      id: '921',
      keyName: 'JOSS'
    },
    {
      id: '922',
      keyName: 'Joule'
    },
    {
      id: '923',
      keyName: 'JOVIAL'
    },
    {
      id: '924',
      keyName: 'Joy'
    },
    {
      id: '2078',
      keyName: 'JPA'
    },
    {
      id: '2080',
      keyName: 'JPOX'
    },
    {
      id: '2166',
      keyName: 'jQuery'
    },
    {
      id: '2175',
      keyName: 'jQuery UI'
    },
    {
      id: '1744',
      keyName: 'Js-test-driver'
    },
    {
      id: '576',
      keyName: 'JSAPI'
    },
    {
      id: '598',
      keyName: 'JScience'
    },
    {
      id: '1372',
      keyName: 'JScript'
    },
    {
      id: '597',
      keyName: 'JScripter'
    },
    {
      id: '586',
      keyName: 'JSF'
    },
    {
      id: '1726',
      keyName: 'JSNUnit'
    },
    {
      id: '1730',
      keyName: 'JSpec'
    },
    {
      id: '2203',
      keyName: 'jsPHP'
    },
    {
      id: '1820',
      keyName: 'Jspx-bay'
    },
    {
      id: '559',
      keyName: 'JSSE'
    },
    {
      id: '1728',
      keyName: 'JSSpec'
    },
    {
      id: '1704',
      keyName: 'JSST'
    },
    {
      id: '1738',
      keyName: 'JSTest'
    },
    {
      id: '1739',
      keyName: 'JSTest.NET'
    },
    {
      id: '1722',
      keyName: 'JSUnit'
    },
    {
      id: '1737',
      keyName: 'jsUnitTest'
    },
    {
      id: '1740',
      keyName: 'jsUnity'
    },
    {
      id: '1694',
      keyName: 'Jtest'
    },
    {
      id: '1692',
      keyName: 'JTiger'
    },
    {
      id: '77',
      keyName: 'jUDDI'
    },
    {
      id: '1695',
      keyName: 'JUnit'
    },
    {
      id: '1702',
      keyName: 'JUnitEE'
    },
    {
      id: '291',
      keyName: 'Just BASIC'
    },
    {
      id: '1821',
      keyName: 'JVx WebUI'
    },
    {
      id: '1696',
      keyName: 'JWalk'
    },
    {
      id: '928',
      keyName: 'Jython'
    },
    {
      id: '358',
      keyName: 'KAI C++ Compiler'
    },
    {
      id: '1781',
      keyName: 'Kajona'
    },
    {
      id: '932',
      keyName: 'Kaleidoscope'
    },
    {
      id: '78',
      keyName: 'Karaf'
    },
    {
      id: '933',
      keyName: 'Karel'
    },
    {
      id: '934',
      keyName: 'Karel++'
    },
    {
      id: '2229',
      keyName: 'Karma'
    },
    {
      id: '935',
      keyName: 'Kaya'
    },
    {
      id: '292',
      keyName: 'KBasic'
    },
    {
      id: '176',
      keyName: 'kbuild'
    },
    {
      id: '1903',
      keyName: 'Kconfig'
    },
    {
      id: '936',
      keyName: 'KEE'
    },
    {
      id: '2179',
      keyName: 'Kendo UI'
    },
    {
      id: '1881',
      keyName: 'Kepler'
    },
    {
      id: '2042',
      keyName: 'Keyspace'
    },
    {
      id: '937',
      keyName: 'KIF'
    },
    {
      id: '2187',
      keyName: 'Kinetic.js'
    },
    {
      id: '2195',
      keyName: 'Knockout'
    },
    {
      id: '2064',
      keyName: 'Kodo'
    },
    {
      id: '1782',
      keyName: 'Kohana'
    },
    {
      id: '938',
      keyName: 'KRC'
    },
    {
      id: '939',
      keyName: 'KRL'
    },
    {
      id: '941',
      keyName: 'KRYPTON'
    },
    {
      id: '942',
      keyName: 'ksh'
    },
    {
      id: '940',
      keyName: 'KUKA Robot Language'
    },
    {
      id: '432',
      keyName: 'Kylix Borland'
    },
    {
      id: '944',
      keyName: 'L# .NET'
    },
    {
      id: '1750',
      keyName: 'L-Unit'
    },
    {
      id: '945',
      keyName: 'LabVIEW'
    },
    {
      id: '1752',
      keyName: 'LabVIEW Unit Test Framework'
    },
    {
      id: '316',
      keyName: 'LabWindows/CVI'
    },
    {
      id: '946',
      keyName: 'Ladder'
    },
    {
      id: '596',
      keyName: 'Lady4j'
    },
    {
      id: '947',
      keyName: 'Lagoona'
    },
    {
      id: '411',
      keyName: 'Lahey Fortran'
    },
    {
      id: '948',
      keyName: 'LANSA'
    },
    {
      id: '2219',
      keyName: 'Laravel'
    },
    {
      id: '949',
      keyName: 'Lasso'
    },
    {
      id: '951',
      keyName: 'LaTeX'
    },
    {
      id: '952',
      keyName: 'Lava'
    },
    {
      id: '953',
      keyName: 'LC-3'
    },
    {
      id: '317',
      keyName: 'lcc'
    },
    {
      id: '1584',
      keyName: 'LCUT'
    },
    {
      id: '388',
      keyName: 'LDC'
    },
    {
      id: '954',
      keyName: 'Leadwerks Script'
    },
    {
      id: '956',
      keyName: 'Legoscript'
    },
    {
      id: '79',
      keyName: 'Lenya'
    },
    {
      id: '2043',
      keyName: 'LevelDB'
    },
    {
      id: '80',
      keyName: 'Libcloud'
    },
    {
      id: '293',
      keyName: 'Liberty BASIC'
    },
    {
      id: '1567',
      keyName: 'LibU'
    },
    {
      id: '1882',
      keyName: 'LIFT'
    },
    {
      id: '957',
      keyName: 'LilyPond'
    },
    {
      id: '958',
      keyName: 'Limbo'
    },
    {
      id: '959',
      keyName: 'Limnor'
    },
    {
      id: '960',
      keyName: 'LINC'
    },
    {
      id: '961',
      keyName: 'Lingo'
    },
    {
      id: '962',
      keyName: 'Linoleum'
    },
    {
      id: '2102',
      keyName: 'LINQ to SQL'
    },
    {
      id: '1482',
      keyName: 'Linter SQL RDBMS'
    },
    {
      id: '1938',
      keyName: 'Lintouch'
    },
    {
      id: '1453',
      keyName: 'Linux'
    },
    {
      id: '963',
      keyName: 'LIS'
    },
    {
      id: '964',
      keyName: 'LISA'
    },
    {
      id: '965',
      keyName: 'Lisaac'
    },
    {
      id: '967',
      keyName: 'Lisp'
    },
    {
      id: '1756',
      keyName: 'lisp-unit'
    },
    {
      id: '399',
      keyName: 'LispWorks'
    },
    {
      id: '969',
      keyName: 'Lite-C'
    },
    {
      id: '2058',
      keyName: 'LiteSQL'
    },
    {
      id: '970',
      keyName: 'Lithe'
    },
    {
      id: '1783',
      keyName: 'Lithium'
    },
    {
      id: '971',
      keyName: 'Little b'
    },
    {
      id: '2103',
      keyName: 'LLBLGen Pro'
    },
    {
      id: '459',
      keyName: 'LLVM'
    },
    {
      id: '387',
      keyName: 'LLVM D Compiler'
    },
    {
      id: '458',
      keyName: 'Local C compiler'
    },
    {
      id: '81',
      keyName: 'Logging'
    },
    {
      id: '973',
      keyName: 'Logtalk'
    },
    {
      id: '2012',
      keyName: 'Lotus Notes and IBM Lotus Domino'
    },
    {
      id: '974',
      keyName: 'LPC'
    },
    {
      id: '975',
      keyName: 'LSE'
    },
    {
      id: '976',
      keyName: 'LSL'
    },
    {
      id: '978',
      keyName: 'Lua'
    },
    {
      id: '1757',
      keyName: 'LuaUnit'
    },
    {
      id: '82',
      keyName: 'Lucene'
    },
    {
      id: '979',
      keyName: 'Lucid'
    },
    {
      id: '1483',
      keyName: 'LucidDB'
    },
    {
      id: '1758',
      keyName: 'lunit'
    },
    {
      id: '1939',
      keyName: 'Luntbuild'
    },
    {
      id: '980',
      keyName: 'Lustre'
    },
    {
      id: '1668',
      keyName: 'Lutin77'
    },
    {
      id: '600',
      keyName: 'LWJGL'
    },
    {
      id: '981',
      keyName: 'LYaPAS'
    },
    {
      id: '983',
      keyName: 'Lynx'
    },
    {
      id: '595',
      keyName: 'LZMA SDK'
    },
    {
      id: '985',
      keyName: 'M2001'
    },
    {
      id: '986',
      keyName: 'M4'
    },
    {
      id: '503',
      keyName: 'Maatkit'
    },
    {
      id: '1866',
      keyName: 'Mach-II'
    },
    {
      id: '987',
      keyName: 'Machine code'
    },
    {
      id: '1451',
      keyName: 'MacOS X'
    },
    {
      id: '989',
      keyName: 'MAD/I'
    },
    {
      id: '1329',
      keyName: 'Maemo'
    },
    {
      id: '990',
      keyName: 'Magik'
    },
    {
      id: '991',
      keyName: 'Magma'
    },
    {
      id: '83',
      keyName: 'Mahout'
    },
    {
      id: '181',
      keyName: 'Make:NG'
    },
    {
      id: '178',
      keyName: 'makeLib'
    },
    {
      id: '262',
      keyName: 'MakeMake'
    },
    {
      id: '179',
      keyName: 'makeme'
    },
    {
      id: '180',
      keyName: 'MakeModules'
    },
    {
      id: '182',
      keyName: 'makeplus'
    },
    {
      id: '183',
      keyName: 'makepp'
    },
    {
      id: '263',
      keyName: 'Maker'
    },
    {
      id: '1365',
      keyName: 'Managed DirectX'
    },
    {
      id: '1822',
      keyName: 'ManyDesigns Portofino'
    },
    {
      id: '993',
      keyName: 'Maple'
    },
    {
      id: '994',
      keyName: 'MAPPER'
    },
    {
      id: '1485',
      keyName: 'MariaDB'
    },
    {
      id: '318',
      keyName: 'Mark Williams C'
    },
    {
      id: '995',
      keyName: 'MARK-IV'
    },
    {
      id: '2013',
      keyName: 'MarkLogic Server'
    },
    {
      id: '996',
      keyName: 'Mary'
    },
    {
      id: '997',
      keyName: 'MASM'
    },
    {
      id: '1764',
      keyName: 'Mason'
    },
    {
      id: '999',
      keyName: 'Mathematica'
    },
    {
      id: '1001',
      keyName: 'MATLAB'
    },
    {
      id: '211',
      keyName: 'Maven'
    },
    {
      id: '1486',
      keyName: 'MaxDB'
    },
    {
      id: '1002',
      keyName: 'Maxima'
    },
    {
      id: '1003',
      keyName: 'MaxScript'
    },
    {
      id: '1005',
      keyName: 'Maya'
    },
    {
      id: '1765',
      keyName: 'Maypole'
    },
    {
      id: '1006',
      keyName: 'MDL'
    },
    {
      id: '1366',
      keyName: 'Media Foundation'
    },
    {
      id: '1327',
      keyName: 'MeeGo'
    },
    {
      id: '2044',
      keyName: 'membase'
    },
    {
      id: '2034',
      keyName: 'memcached'
    },
    {
      id: '2053',
      keyName: 'MemcacheDB'
    },
    {
      id: '1913',
      keyName: 'Mercurial'
    },
    {
      id: '1007',
      keyName: 'Mercury'
    },
    {
      id: '1008',
      keyName: 'Mesa'
    },
    {
      id: '1392',
      keyName: 'Messaging API'
    },
    {
      id: '1009',
      keyName: 'Metacard'
    },
    {
      id: '1011',
      keyName: 'Metafont'
    },
    {
      id: '1012',
      keyName: 'MetaL'
    },
    {
      id: '2224',
      keyName: 'MeteorJS'
    },
    {
      id: '1406',
      keyName: 'MFC'
    },
    {
      id: '264',
      keyName: 'mfg'
    },
    {
      id: '1013',
      keyName: 'Microcode'
    },
    {
      id: '504',
      keyName: 'MicroOLAP Database Designer'
    },
    {
      id: '1015',
      keyName: 'MicroScript'
    },
    {
      id: '1487',
      keyName: 'Microsoft Access'
    },
    {
      id: '319',
      keyName: 'Microsoft C'
    },
    {
      id: '1405',
      keyName: 'Microsoft Foundation Classes'
    },
    {
      id: '436',
      keyName: 'Microsoft Pascal'
    },
    {
      id: '505',
      keyName: 'Microsoft SQL Server Management Studio'
    },
    {
      id: '304',
      keyName: 'Microsoft Visual C# Express'
    },
    {
      id: '1490',
      keyName: 'Microsoft Visual Foxpro'
    },
    {
      id: '2204',
      keyName: "Microsoft's Ajax library"
    },
    {
      id: '359',
      keyName: 'Microtec'
    },
    {
      id: '1883',
      keyName: 'Midgard'
    },
    {
      id: '2167',
      keyName: 'midori'
    },
    {
      id: '1940',
      keyName: 'MidWatch'
    },
    {
      id: '1016',
      keyName: 'MIIS'
    },
    {
      id: '332',
      keyName: 'MikroC Compiler'
    },
    {
      id: '1017',
      keyName: 'MillScript'
    },
    {
      id: '1018',
      keyName: 'MIMIC'
    },
    {
      id: '85',
      keyName: 'MINA'
    },
    {
      id: '2104',
      keyName: 'Mintiera'
    },
    {
      id: '1568',
      keyName: 'MinUnit'
    },
    {
      id: '1019',
      keyName: 'Mirah'
    },
    {
      id: '1021',
      keyName: 'Miranda'
    },
    {
      id: '1022',
      keyName: 'MIVA Script'
    },
    {
      id: '184',
      keyName: 'mk'
    },
    {
      id: '19',
      keyName: 'MKS Integrity'
    },
    {
      id: '1023',
      keyName: 'ML'
    },
    {
      id: '1759',
      keyName: 'mlUnit'
    },
    {
      id: '1760',
      keyName: 'mlUnit 2008a'
    },
    {
      id: '265',
      keyName: 'mmake'
    },
    {
      id: '1328',
      keyName: 'Moblin'
    },
    {
      id: '1024',
      keyName: 'Moby'
    },
    {
      id: '2228',
      keyName: 'Mocha'
    },
    {
      id: '2205',
      keyName: 'MochiKit'
    },
    {
      id: '1717',
      keyName: 'Mockachino'
    },
    {
      id: '1639',
      keyName: 'MockBox'
    },
    {
      id: '1610',
      keyName: 'mockcpp'
    },
    {
      id: '1716',
      keyName: 'Mockito'
    },
    {
      id: '1611',
      keyName: 'mockitopp'
    },
    {
      id: '1612',
      keyName: 'mockpp'
    },
    {
      id: '1706',
      keyName: 'Mockrunner'
    },
    {
      id: '1025',
      keyName: 'Model 204'
    },
    {
      id: '1867',
      keyName: 'Model-Glue'
    },
    {
      id: '1026',
      keyName: 'Modelica'
    },
    {
      id: '506',
      keyName: 'ModelRight'
    },
    {
      id: '2213',
      keyName: 'Modernizr'
    },
    {
      id: '1028',
      keyName: 'Modula'
    },
    {
      id: '1029',
      keyName: 'Modula-2'
    },
    {
      id: '1030',
      keyName: 'Modula-3'
    },
    {
      id: '1784',
      keyName: 'Modx'
    },
    {
      id: '1031',
      keyName: 'Mohol'
    },
    {
      id: '1767',
      keyName: 'Mojolicious'
    },
    {
      id: '1536',
      keyName: 'mojotest'
    },
    {
      id: '1499',
      keyName: 'MonetDB/SQL'
    },
    {
      id: '2050',
      keyName: 'MongoDB'
    },
    {
      id: '2014',
      keyName: 'MongoDB C++'
    },
    {
      id: '448',
      keyName: 'Mono'
    },
    {
      id: '305',
      keyName: 'MonoDevelop'
    },
    {
      id: '153',
      keyName: 'Monolithic application'
    },
    {
      id: '1873',
      keyName: 'MonoRail'
    },
    {
      id: '1032',
      keyName: 'MOO'
    },
    {
      id: '2168',
      keyName: 'MooTools'
    },
    {
      id: '1884',
      keyName: 'Morfik'
    },
    {
      id: '1033',
      keyName: 'Mortran'
    },
    {
      id: '1034',
      keyName: 'Mouse'
    },
    {
      id: '1785',
      keyName: 'Movicon'
    },
    {
      id: '266',
      keyName: 'MPC'
    },
    {
      id: '1035',
      keyName: 'MPD'
    },
    {
      id: '186',
      keyName: 'MPW Make'
    },
    {
      id: '2221',
      keyName: 'MQL4'
    },
    {
      id: '2222',
      keyName: 'MQL5'
    },
    {
      id: '1488',
      keyName: 'MS Access'
    },
    {
      id: '227',
      keyName: 'MSBuild'
    },
    {
      id: '1370',
      keyName: 'MSHTML'
    },
    {
      id: '1036',
      keyName: 'MSIL'
    },
    {
      id: '1037',
      keyName: 'MSL'
    },
    {
      id: '1389',
      keyName: 'MSMQ'
    },
    {
      id: '1500',
      keyName: 'mSQL'
    },
    {
      id: '1439',
      keyName: 'MSRPC'
    },
    {
      id: '1383',
      keyName: 'MSXML'
    },
    {
      id: '1038',
      keyName: 'MUMPS'
    },
    {
      id: '1638',
      keyName: 'MXUnit'
    },
    {
      id: '228',
      keyName: 'mxx-ru'
    },
    {
      id: '2100',
      keyName: 'MyBatis'
    },
    {
      id: '86',
      keyName: 'MyFaces'
    },
    {
      id: '507',
      keyName: 'MyOra'
    },
    {
      id: '508',
      keyName: 'MyQuery Builder'
    },
    {
      id: '1501',
      keyName: 'MySQL'
    },
    {
      id: '509',
      keyName: 'MySql Lite Administrator'
    },
    {
      id: '138',
      keyName: 'n-tier'
    },
    {
      id: '414',
      keyName: 'NAG Fortran Compiler'
    },
    {
      id: '1847',
      keyName: 'Nagare'
    },
    {
      id: '1613',
      keyName: 'NanoCppUnit'
    },
    {
      id: '229',
      keyName: 'NAnt'
    },
    {
      id: '1039',
      keyName: 'Napier88'
    },
    {
      id: '1040',
      keyName: 'NASM'
    },
    {
      id: '1671',
      keyName: 'NaturalSpec'
    },
    {
      id: '1502',
      keyName: 'Navibase'
    },
    {
      id: '510',
      keyName: 'Navicat'
    },
    {
      id: '294',
      keyName: 'NBasic'
    },
    {
      id: '2054',
      keyName: 'NDBM'
    },
    {
      id: '1042',
      keyName: 'NEAT chipset'
    },
    {
      id: '1043',
      keyName: 'Neko'
    },
    {
      id: '1044',
      keyName: 'Nemerle'
    },
    {
      id: '2105',
      keyName: 'Neo'
    },
    {
      id: '2021',
      keyName: 'Neo4j'
    },
    {
      id: '1045',
      keyName: 'NESL'
    },
    {
      id: '1046',
      keyName: 'Net.Data'
    },
    {
      id: '1047',
      keyName: 'NetLogo'
    },
    {
      id: '1048',
      keyName: 'NewLISP'
    },
    {
      id: '1049',
      keyName: 'NEWP'
    },
    {
      id: '1050',
      keyName: 'Newspeak'
    },
    {
      id: '1051',
      keyName: 'NewtonScript'
    },
    {
      id: '1503',
      keyName: 'Nexusdb'
    },
    {
      id: '1052',
      keyName: 'NGL'
    },
    {
      id: '419',
      keyName: 'NHC'
    },
    {
      id: '2106',
      keyName: 'NHibernate'
    },
    {
      id: '2107',
      keyName: 'nHydrate'
    },
    {
      id: '1053',
      keyName: 'Nial'
    },
    {
      id: '1055',
      keyName: 'Nickle'
    },
    {
      id: '230',
      keyName: 'ninja'
    },
    {
      id: '1344',
      keyName: 'Nintendo 3DS'
    },
    {
      id: '1343',
      keyName: 'Nintendo DSi'
    },
    {
      id: '187',
      keyName: 'nmake'
    },
    {
      id: '511',
      keyName: 'Nob Hill Database Compare'
    },
    {
      id: '2207',
      keyName: 'Node.js'
    },
    {
      id: '1748',
      keyName: 'Nodeunit'
    },
    {
      id: '1345',
      keyName: 'Nokia'
    },
    {
      id: '1057',
      keyName: 'Not eXactly C'
    },
    {
      id: '1059',
      keyName: 'Not Quite C'
    },
    {
      id: '1056',
      keyName: 'NPL'
    },
    {
      id: '1060',
      keyName: 'NQC'
    },
    {
      id: '1062',
      keyName: 'NSIS'
    },
    {
      id: '87',
      keyName: 'Nutch'
    },
    {
      id: '1698',
      keyName: 'NUTester'
    },
    {
      id: '320',
      keyName: 'Nwcc'
    },
    {
      id: '1058',
      keyName: 'NXC'
    },
    {
      id: '1063',
      keyName: 'o:XML'
    },
    {
      id: '1064',
      keyName: 'Oak'
    },
    {
      id: '1614',
      keyName: 'OAKUT'
    },
    {
      id: '1065',
      keyName: 'Oberon'
    },
    {
      id: '1066',
      keyName: 'Object Lisp'
    },
    {
      id: '1069',
      keyName: 'Object Pascal'
    },
    {
      id: '2081',
      keyName: 'Object Relational Bridge'
    },
    {
      id: '1068',
      keyName: 'Object REXX'
    },
    {
      id: '2119',
      keyName: 'ObjectDB'
    },
    {
      id: '1075',
      keyName: 'Objective Caml'
    },
    {
      id: '1074',
      keyName: 'Objective-C'
    },
    {
      id: '1076',
      keyName: 'Objective-J'
    },
    {
      id: '1067',
      keyName: 'ObjectLOGO'
    },
    {
      id: '2108',
      keyName: 'ObjectMapper .NET'
    },
    {
      id: '1667',
      keyName: 'ObjexxFTK:UnitTest'
    },
    {
      id: '1077',
      keyName: 'Obliq'
    },
    {
      id: '1078',
      keyName: 'Obol'
    },
    {
      id: '231',
      keyName: 'ocamlbuild'
    },
    {
      id: '1079',
      keyName: 'occam'
    },
    {
      id: '1885',
      keyName: 'Ocsigen'
    },
    {
      id: '1081',
      keyName: 'Octave'
    },
    {
      id: '2059',
      keyName: 'ODB'
    },
    {
      id: '88',
      keyName: 'ODE'
    },
    {
      id: '232',
      keyName: 'Odin'
    },
    {
      id: '90',
      keyName: 'OFBiz'
    },
    {
      id: '1384',
      keyName: 'OLE DB'
    },
    {
      id: '188',
      keyName: 'OMake'
    },
    {
      id: '1082',
      keyName: 'OmniMark'
    },
    {
      id: '1505',
      keyName: 'Omnis Studio'
    },
    {
      id: '512',
      keyName: 'Online Data Modeler'
    },
    {
      id: '1868',
      keyName: 'onTa'
    },
    {
      id: '1083',
      keyName: 'Onyx'
    },
    {
      id: '89',
      keyName: 'OODT'
    },
    {
      id: '1084',
      keyName: 'Opa'
    },
    {
      id: '1085',
      keyName: 'Opal'
    },
    {
      id: '1385',
      keyName: 'OPC'
    },
    {
      id: '400',
      keyName: 'Open Genera'
    },
    {
      id: '460',
      keyName: 'Open Watcom'
    },
    {
      id: '412',
      keyName: 'Open64'
    },
    {
      id: '2109',
      keyName: 'OpenAccess ORM'
    },
    {
      id: '1886',
      keyName: 'OpenACS'
    },
    {
      id: '1506',
      keyName: 'OpenBase SQL'
    },
    {
      id: '1787',
      keyName: 'Openbiz_Cubi'
    },
    {
      id: '382',
      keyName: 'OpenCOBOL'
    },
    {
      id: '1509',
      keyName: 'OpenEdge'
    },
    {
      id: '1086',
      keyName: 'OpenEdge ABL'
    },
    {
      id: '91',
      keyName: 'OpenEJB'
    },
    {
      id: '2083',
      keyName: 'OpenJPA'
    },
    {
      id: '1823',
      keyName: 'OpenLaszlo'
    },
    {
      id: '1510',
      keyName: 'OpenLink Virtuoso'
    },
    {
      id: '1941',
      keyName: 'OpenMake Meister'
    },
    {
      id: '267',
      keyName: 'OpenMake MoistureOtto'
    },
    {
      id: '1942',
      keyName: 'OpenMake Mojo'
    },
    {
      id: '1332',
      keyName: 'Openmoko'
    },
    {
      id: '2057',
      keyName: 'OpenQM'
    },
    {
      id: '1874',
      keyName: 'OpenRasta'
    },
    {
      id: '93',
      keyName: 'OpenWebBeans'
    },
    {
      id: '1824',
      keyName: 'OpenXava'
    },
    {
      id: '1333',
      keyName: 'OPhone'
    },
    {
      id: '1087',
      keyName: 'OPL'
    },
    {
      id: '1615',
      keyName: 'Opmock'
    },
    {
      id: '1088',
      keyName: 'OPS5'
    },
    {
      id: '6',
      keyName: 'OpsHub Integration Manager'
    },
    {
      id: '1089',
      keyName: 'OptimJ'
    },
    {
      id: '189',
      keyName: 'Opus Make'
    },
    {
      id: '1507',
      keyName: 'Oracle'
    },
    {
      id: '1825',
      keyName: 'Oracle ADF'
    },
    {
      id: '2035',
      keyName: 'Oracle Coherence'
    },
    {
      id: '513',
      keyName: 'Oracle Enterprise Manager'
    },
    {
      id: '1508',
      keyName: 'Oracle Rdb'
    },
    {
      id: '514',
      keyName: 'Oracle SQL Developer'
    },
    {
      id: '34',
      keyName: 'Oracle Team Productivity Center'
    },
    {
      id: '515',
      keyName: 'OraDeveloper Studio'
    },
    {
      id: '516',
      keyName: 'Orbada'
    },
    {
      id: '1090',
      keyName: 'Orc'
    },
    {
      id: '1091',
      keyName: 'ORCA/Modula-2'
    },
    {
      id: '2022',
      keyName: 'OrientDB'
    },
    {
      id: '2084',
      keyName: 'ORMLite'
    },
    {
      id: '1092',
      keyName: 'Orwell'
    },
    {
      id: '233',
      keyName: 'OSE'
    },
    {
      id: '39',
      keyName: 'OSEE'
    },
    {
      id: '1786',
      keyName: 'Outglow'
    },
    {
      id: '1093',
      keyName: 'Oxygene'
    },
    {
      id: '1094',
      keyName: 'Oz'
    },
    {
      id: '1095',
      keyName: 'P#'
    },
    {
      id: '143',
      keyName: 'p2p'
    },
    {
      id: '1943',
      keyName: 'Parabuild'
    },
    {
      id: '190',
      keyName: 'Paradigm Visual Make'
    },
    {
      id: '1511',
      keyName: 'Paradox'
    },
    {
      id: '10',
      keyName: 'Parasoft Concerto'
    },
    {
      id: '1096',
      keyName: 'PARI/GP'
    },
    {
      id: '1098',
      keyName: 'Pascal'
    },
    {
      id: '363',
      keyName: 'PathScale'
    },
    {
      id: '406',
      keyName: 'PathScale Compiler Suite'
    },
    {
      id: '1099',
      keyName: 'Pawn'
    },
    {
      id: '1944',
      keyName: 'PBS'
    },
    {
      id: '1100',
      keyName: 'PCASTL'
    },
    {
      id: '1101',
      keyName: 'PCF'
    },
    {
      id: '2206',
      keyName: 'PDF.js'
    },
    {
      id: '94',
      keyName: 'PDFBox'
    },
    {
      id: '1106',
      keyName: 'PDL'
    },
    {
      id: '2122',
      keyName: 'PdoMap'
    },
    {
      id: '1102',
      keyName: 'PEARL'
    },
    {
      id: '154',
      keyName: 'Peer-to-peer'
    },
    {
      id: '322',
      keyName: 'Pelles C'
    },
    {
      id: '1103',
      keyName: 'PeopleCode'
    },
    {
      id: '1904',
      keyName: 'Perforce'
    },
    {
      id: '234',
      keyName: 'Perforce Jam'
    },
    {
      id: '1105',
      keyName: 'Perl'
    },
    {
      id: '235',
      keyName: 'PerlBuildSystem'
    },
    {
      id: '283',
      keyName: 'Persistant S-algol'
    },
    {
      id: '2110',
      keyName: 'Persistor.NET'
    },
    {
      id: '1512',
      keyName: 'Pervasive PSQL'
    },
    {
      id: '1666',
      keyName: 'pFUnit'
    },
    {
      id: '517',
      keyName: 'pgAdmin III'
    },
    {
      id: '323',
      keyName: 'PGCC'
    },
    {
      id: '364',
      keyName: 'PGCPP'
    },
    {
      id: '405',
      keyName: 'PGFORTRAN'
    },
    {
      id: '2220',
      keyName: 'Phalcon'
    },
    {
      id: '2223',
      keyName: 'PhantomJS'
    },
    {
      id: '236',
      keyName: 'Phing'
    },
    {
      id: '1108',
      keyName: 'PHP'
    },
    {
      id: '1788',
      keyName: 'PHPDevShell'
    },
    {
      id: '518',
      keyName: 'phpliteadmin'
    },
    {
      id: '191',
      keyName: 'PHPmake'
    },
    {
      id: '519',
      keyName: 'phpMSAdmin'
    },
    {
      id: '521',
      keyName: 'phpMyAdmin'
    },
    {
      id: '522',
      keyName: 'phpPgAdmin'
    },
    {
      id: '1109',
      keyName: 'Phrogram'
    },
    {
      id: '1110',
      keyName: 'Pico'
    },
    {
      id: '1111',
      keyName: 'Pict'
    },
    {
      id: '96',
      keyName: 'Pig'
    },
    {
      id: '1112',
      keyName: 'Pike'
    },
    {
      id: '1113',
      keyName: 'PIKT'
    },
    {
      id: '1114',
      keyName: 'PILOT'
    },
    {
      id: '155',
      keyName: 'Pipes and filters'
    },
    {
      id: '97',
      keyName: 'Pivot'
    },
    {
      id: '8',
      keyName: 'Pivotal Tracker'
    },
    {
      id: '1116',
      keyName: 'PL-11'
    },
    {
      id: '1117',
      keyName: 'PL/0'
    },
    {
      id: '1118',
      keyName: 'PL/B'
    },
    {
      id: '1119',
      keyName: 'PL/C'
    },
    {
      id: '1120',
      keyName: 'PL/I'
    },
    {
      id: '1121',
      keyName: 'PL/M'
    },
    {
      id: '1122',
      keyName: 'PL/P'
    },
    {
      id: '1124',
      keyName: 'PL/SQL'
    },
    {
      id: '523',
      keyName: 'PL/SQL Developer'
    },
    {
      id: '1125',
      keyName: 'PL360'
    },
    {
      id: '452',
      keyName: 'Plan 9'
    },
    {
      id: '1126',
      keyName: 'PLANC'
    },
    {
      id: '1826',
      keyName: 'Play!'
    },
    {
      id: '1128',
      keyName: 'PLEX'
    },
    {
      id: '1129',
      keyName: 'PLEXIL'
    },
    {
      id: '1848',
      keyName: 'Plone'
    },
    {
      id: '156',
      keyName: 'Plug-in'
    },
    {
      id: '98',
      keyName: 'POI'
    },
    {
      id: '31',
      keyName: 'Polarion ALM'
    },
    {
      id: '1513',
      keyName: 'Polyhedra DBMS'
    },
    {
      id: '1131',
      keyName: 'POP-11'
    },
    {
      id: '1789',
      keyName: 'PopcornPHP'
    },
    {
      id: '1134',
      keyName: 'PortablE'
    },
    {
      id: '324',
      keyName: 'Portable C Compiler'
    },
    {
      id: '450',
      keyName: 'Portable.NET'
    },
    {
      id: '99',
      keyName: 'Portals'
    },
    {
      id: '1514',
      keyName: 'PostgreSQL'
    },
    {
      id: '1133',
      keyName: 'PostScript'
    },
    {
      id: '325',
      keyName: 'Power C'
    },
    {
      id: '295',
      keyName: 'PowerBASIC'
    },
    {
      id: '1137',
      keyName: 'PowerBuilder'
    },
    {
      id: '1135',
      keyName: 'Powerhouse'
    },
    {
      id: '1138',
      keyName: 'PPL'
    },
    {
      id: '269',
      keyName: 'Pre Make Kit'
    },
    {
      id: '2025',
      keyName: 'Pregel'
    },
    {
      id: '268',
      keyName: 'premake'
    },
    {
      id: '192',
      keyName: 'Prime Mover'
    },
    {
      id: '1149',
      keyName: 'Pro*C'
    },
    {
      id: '365',
      keyName: 'ProDev WorkShop'
    },
    {
      id: '1140',
      keyName: 'Prograph'
    },
    {
      id: '1141',
      keyName: 'PROIV'
    },
    {
      id: '2029',
      keyName: 'Project Voldemort'
    },
    {
      id: '237',
      keyName: 'ProjectBuilder'
    },
    {
      id: '1142',
      keyName: 'Prolog'
    },
    {
      id: '1146',
      keyName: 'Promela'
    },
    {
      id: '2123',
      keyName: 'Propel'
    },
    {
      id: '33',
      keyName: 'Protecode System 4'
    },
    {
      id: '1147',
      keyName: 'PROTEL'
    },
    {
      id: '193',
      keyName: 'Prototype Makefiles'
    },
    {
      id: '2169',
      keyName: 'Prototype.js'
    },
    {
      id: '1148',
      keyName: 'ProvideX'
    },
    {
      id: '1348',
      keyName: 'PSP Symbian'
    },
    {
      id: '1945',
      keyName: 'PTXdist'
    },
    {
      id: '21',
      keyName: 'Pulse'
    },
    {
      id: '1905',
      keyName: 'puppet'
    },
    {
      id: '1150',
      keyName: 'Pure'
    },
    {
      id: '296',
      keyName: 'PureBasic'
    },
    {
      id: '194',
      keyName: 'PVM Gmake'
    },
    {
      id: '1849',
      keyName: 'Pyjamas'
    },
    {
      id: '1850',
      keyName: 'Pylons'
    },
    {
      id: '1851',
      keyName: 'Pyramid'
    },
    {
      id: '1152',
      keyName: 'Python'
    },
    {
      id: '1153',
      keyName: 'Q'
    },
    {
      id: '297',
      keyName: 'QB64'
    },
    {
      id: '2125',
      keyName: 'Qcodo'
    },
    {
      id: '1948',
      keyName: 'QEF'
    },
    {
      id: '1154',
      keyName: 'Qi'
    },
    {
      id: '195',
      keyName: 'Qmake'
    },
    {
      id: '1887',
      keyName: 'qooxdoo'
    },
    {
      id: '2176',
      keyName: 'qooxdoo'
    },
    {
      id: '100',
      keyName: 'Qpid'
    },
    {
      id: '1157',
      keyName: 'QPL'
    },
    {
      id: '1751',
      keyName: 'qsunit'
    },
    {
      id: '1331',
      keyName: 'Qt'
    },
    {
      id: '1330',
      keyName: 'Qt Extended'
    },
    {
      id: '1155',
      keyName: 'QtScript'
    },
    {
      id: '1616',
      keyName: 'QtTest'
    },
    {
      id: '1156',
      keyName: 'QuakeC'
    },
    {
      id: '524',
      keyName: 'QuantumDB'
    },
    {
      id: '2111',
      keyName: 'Quick Objects'
    },
    {
      id: '298',
      keyName: 'QuickBASIC'
    },
    {
      id: '326',
      keyName: 'QuickC'
    },
    {
      id: '1680',
      keyName: 'QuickCheck'
    },
    {
      id: '2086',
      keyName: 'QuickDB ORM'
    },
    {
      id: '1617',
      keyName: 'QuickTest'
    },
    {
      id: '1723',
      keyName: 'QUnit'
    },
    {
      id: '525',
      keyName: 'QweryBuilder'
    },
    {
      id: '2060',
      keyName: 'QxOrm'
    },
    {
      id: '1159',
      keyName: 'R++'
    },
    {
      id: '1515',
      keyName: 'R:Base'
    },
    {
      id: '1160',
      keyName: 'Racket'
    },
    {
      id: '1791',
      keyName: 'Rain Framework'
    },
    {
      id: '196',
      keyName: 'Rake'
    },
    {
      id: '26',
      keyName: 'Rally'
    },
    {
      id: '1858',
      keyName: 'Ramaze'
    },
    {
      id: '2156',
      keyName: 'Rampart'
    },
    {
      id: '238',
      keyName: 'Rant'
    },
    {
      id: '2183',
      keyName: 'Raphael'
    },
    {
      id: '299',
      keyName: 'RapidQ'
    },
    {
      id: '1162',
      keyName: 'Rapira'
    },
    {
      id: '1163',
      keyName: 'Ratfiv'
    },
    {
      id: '1164',
      keyName: 'Ratfor'
    },
    {
      id: '526',
      keyName: 'RazorSQL'
    },
    {
      id: '1165',
      keyName: 'rc'
    },
    {
      id: '313',
      keyName: 'RCC'
    },
    {
      id: '314',
      keyName: 'RCOR C Compiler'
    },
    {
      id: '1570',
      keyName: 'RCUNIT'
    },
    {
      id: '1516',
      keyName: 'RDM Embedded'
    },
    {
      id: '1517',
      keyName: 'RDM Server'
    },
    {
      id: '1766',
      keyName: 'Reaction'
    },
    {
      id: '2226',
      keyName: 'ReactJS'
    },
    {
      id: '300',
      keyName: 'Realbasic'
    },
    {
      id: '366',
      keyName: 'RealView C/C++ Compiler'
    },
    {
      id: '1166',
      keyName: 'REBOL'
    },
    {
      id: '2126',
      keyName: 'Redbean'
    },
    {
      id: '1167',
      keyName: 'Redcode'
    },
    {
      id: '1456',
      keyName: 'Redhat'
    },
    {
      id: '2046',
      keyName: 'Redis'
    },
    {
      id: '1168',
      keyName: 'REFAL'
    },
    {
      id: '1530',
      keyName: 'Reflex Unit'
    },
    {
      id: '1169',
      keyName: 'Reia'
    },
    {
      id: '2215',
      keyName: 'remote'
    },
    {
      id: '550',
      keyName: 'Remote Method Invocation'
    },
    {
      id: '1425',
      keyName: 'Remoting'
    },
    {
      id: '157',
      keyName: 'Representational State Transfer'
    },
    {
      id: '1170',
      keyName: 'Revolution'
    },
    {
      id: '1171',
      keyName: 'rex'
    },
    {
      id: '1172',
      keyName: 'REXX'
    },
    {
      id: '1741',
      keyName: 'RhinoUnit'
    },
    {
      id: '1430',
      keyName: 'RIA'
    },
    {
      id: '2030',
      keyName: 'Riak'
    },
    {
      id: '2196',
      keyName: 'Rialto Toolkit'
    },
    {
      id: '1827',
      keyName: 'Richfaces'
    },
    {
      id: '2208',
      keyName: 'Rico'
    },
    {
      id: '1828',
      keyName: 'RIFE'
    },
    {
      id: '101',
      keyName: 'River'
    },
    {
      id: '1173',
      keyName: 'Rlab'
    },
    {
      id: '551',
      keyName: 'RMI'
    },
    {
      id: '456',
      keyName: 'Roadsend PHP'
    },
    {
      id: '2124',
      keyName: 'Rocks'
    },
    {
      id: '102',
      keyName: 'Roller'
    },
    {
      id: '1174',
      keyName: 'ROOP'
    },
    {
      id: '1175',
      keyName: 'RPG'
    },
    {
      id: '1176',
      keyName: 'RPL'
    },
    {
      id: '270',
      keyName: 'RPSL'
    },
    {
      id: '1177',
      keyName: 'RSL'
    },
    {
      id: '1371',
      keyName: 'RSS'
    },
    {
      id: '1651',
      keyName: 'RT'
    },
    {
      id: '32',
      keyName: 'rt-collab Embedded ALM'
    },
    {
      id: '1178',
      keyName: 'RTL/2'
    },
    {
      id: '1571',
      keyName: 'RTRT'
    },
    {
      id: '1180',
      keyName: 'Ruby'
    },
    {
      id: '1857',
      keyName: 'Ruby on Rails'
    },
    {
      id: '158',
      keyName: 'Rule evaluation'
    },
    {
      id: '1181',
      keyName: 'Rust'
    },
    {
      id: '1185',
      keyName: 'S-Lang'
    },
    {
      id: '1186',
      keyName: 'S-PLUS'
    },
    {
      id: '1233',
      keyName: 'S/SL'
    },
    {
      id: '1183',
      keyName: 'S2'
    },
    {
      id: '1184',
      keyName: 'S3'
    },
    {
      id: '1346',
      keyName: 'S30'
    },
    {
      id: '1347',
      keyName: 'S40'
    },
    {
      id: '1187',
      keyName: 'SA-C'
    },
    {
      id: '1188',
      keyName: 'SabreTalk'
    },
    {
      id: '1189',
      keyName: 'SAIL'
    },
    {
      id: '368',
      keyName: 'Salford C++ Compiler'
    },
    {
      id: '1190',
      keyName: 'SALSA'
    },
    {
      id: '1191',
      keyName: 'SAM76'
    },
    {
      id: '103',
      keyName: 'Santuario'
    },
    {
      id: '22',
      keyName: 'SAP Solution Manager'
    },
    {
      id: '1792',
      keyName: 'Sapphire'
    },
    {
      id: '2214',
      keyName: 'SAPUI5'
    },
    {
      id: '1192',
      keyName: 'SAS'
    },
    {
      id: '327',
      keyName: 'SAS/C'
    },
    {
      id: '369',
      keyName: 'SAS/C C++'
    },
    {
      id: '1193',
      keyName: 'SASL'
    },
    {
      id: '1194',
      keyName: 'Sather'
    },
    {
      id: '1642',
      keyName: 'savvytest'
    },
    {
      id: '1195',
      keyName: 'Sawzall'
    },
    {
      id: '1196',
      keyName: 'SBL'
    },
    {
      id: '1198',
      keyName: 'Scala'
    },
    {
      id: '527',
      keyName: 'SchemaBank'
    },
    {
      id: '445',
      keyName: 'Scheme 48'
    },
    {
      id: '239',
      keyName: 'Schmant'
    },
    {
      id: '401',
      keyName: 'Scieneer Common Lisp'
    },
    {
      id: '1201',
      keyName: 'Scilab'
    },
    {
      id: '1518',
      keyName: 'ScimoreDB'
    },
    {
      id: '241',
      keyName: 'SCons'
    },
    {
      id: '1732',
      keyName: 'screw-unit'
    },
    {
      id: '2177',
      keyName: 'Script.aculo.us'
    },
    {
      id: '1203',
      keyName: 'Script.NET'
    },
    {
      id: '14',
      keyName: 'ScrumWorks'
    },
    {
      id: '271',
      keyName: 'Sdist'
    },
    {
      id: '1793',
      keyName: 'Seagull'
    },
    {
      id: '5',
      keyName: 'Seapine ALM'
    },
    {
      id: '159',
      keyName: 'Search-oriented architecture'
    },
    {
      id: '1888',
      keyName: 'Seaside'
    },
    {
      id: '1572',
      keyName: 'SeaTest'
    },
    {
      id: '1417',
      keyName: 'Security Support Provider Interface'
    },
    {
      id: '1204',
      keyName: 'Sed'
    },
    {
      id: '1688',
      keyName: 'Selenium'
    },
    {
      id: '1206',
      keyName: 'SenseTalk'
    },
    {
      id: '16',
      keyName: 'Serena Business Manager'
    },
    {
      id: '15',
      keyName: 'Serena Dimensions'
    },
    {
      id: '104',
      keyName: 'ServiceMix'
    },
    {
      id: '1207',
      keyName: 'SETL'
    },
    {
      id: '162',
      keyName: 'Shared nothing architecture'
    },
    {
      id: '306',
      keyName: 'SharpDevelop'
    },
    {
      id: '1208',
      keyName: 'Shift Script'
    },
    {
      id: '105',
      keyName: 'Shindig'
    },
    {
      id: '1955',
      keyName: 'Shining Panda'
    },
    {
      id: '106',
      keyName: 'Shiro'
    },
    {
      id: '1618',
      keyName: 'ShortCUT'
    },
    {
      id: '1334',
      keyName: 'SHR'
    },
    {
      id: '1376',
      keyName: 'SideBar Gadgets'
    },
    {
      id: '2112',
      keyName: 'Signum Framework'
    },
    {
      id: '528',
      keyName: 'Silver Sash Administrator'
    },
    {
      id: '1426',
      keyName: 'Silverlight'
    },
    {
      id: '240',
      keyName: 'Simple Build Tool'
    },
    {
      id: '2016',
      keyName: 'SimpleDB'
    },
    {
      id: '1210',
      keyName: 'SIMPOL'
    },
    {
      id: '1211',
      keyName: 'SIMSCRIPT'
    },
    {
      id: '1212',
      keyName: 'Simula'
    },
    {
      id: '1213',
      keyName: 'Simulink'
    },
    {
      id: '1859',
      keyName: 'Sinatra'
    },
    {
      id: '1745',
      keyName: 'Sinon.js'
    },
    {
      id: '197',
      keyName: 'Sire'
    },
    {
      id: '1214',
      keyName: 'SISAL'
    },
    {
      id: '107',
      keyName: 'Sling'
    },
    {
      id: '1215',
      keyName: 'SLIP'
    },
    {
      id: '198',
      keyName: 'smake'
    },
    {
      id: '1218',
      keyName: 'Small Basic'
    },
    {
      id: '328',
      keyName: 'Small-C'
    },
    {
      id: '1519',
      keyName: 'SmallSQL'
    },
    {
      id: '1217',
      keyName: 'Smalltalk'
    },
    {
      id: '446',
      keyName: 'Smalltalk MT'
    },
    {
      id: '1831',
      keyName: 'SmartClient'
    },
    {
      id: '2178',
      keyName: 'SmartClient'
    },
    {
      id: '1573',
      keyName: 'Smarttester'
    },
    {
      id: '200',
      keyName: 'SMK'
    },
    {
      id: '1219',
      keyName: 'SML'
    },
    {
      id: '1220',
      keyName: 'SNOBOL'
    },
    {
      id: '1222',
      keyName: 'Snowball'
    },
    {
      id: '160',
      keyName: 'SOA'
    },
    {
      id: '1223',
      keyName: 'SOAP'
    },
    {
      id: '1690',
      keyName: 'soapUI'
    },
    {
      id: '1746',
      keyName: 'SOAtest'
    },
    {
      id: '2209',
      keyName: 'Socket.io'
    },
    {
      id: '163',
      keyName: 'Software componentry'
    },
    {
      id: '1224',
      keyName: 'SOL'
    },
    {
      id: '272',
      keyName: 'Sol Manager'
    },
    {
      id: '1794',
      keyName: 'Solar'
    },
    {
      id: '1445',
      keyName: 'Solaris'
    },
    {
      id: '371',
      keyName: 'Solaris Studio'
    },
    {
      id: '372',
      keyName: 'Solaris Studio Express'
    },
    {
      id: '2024',
      keyName: 'Sones'
    },
    {
      id: '242',
      keyName: 'Source 2 Binary'
    },
    {
      id: '1911',
      keyName: 'Sourcesafe'
    },
    {
      id: '1228',
      keyName: 'SP/k'
    },
    {
      id: '164',
      keyName: 'Space based architecture'
    },
    {
      id: '108',
      keyName: 'SpamAssassin'
    },
    {
      id: '1226',
      keyName: 'SPARK'
    },
    {
      id: '1227',
      keyName: 'SPIN'
    },
    {
      id: '1221',
      keyName: 'SPITBOL'
    },
    {
      id: '1675',
      keyName: 'Spock'
    },
    {
      id: '1832',
      keyName: 'Spring'
    },
    {
      id: '1889',
      keyName: 'SproutCore'
    },
    {
      id: '2197',
      keyName: 'SproutCore'
    },
    {
      id: '2210',
      keyName: 'Spry'
    },
    {
      id: '1693',
      keyName: 'SpryTest'
    },
    {
      id: '1229',
      keyName: 'SPS'
    },
    {
      id: '1520',
      keyName: 'SQL Anywhere'
    },
    {
      id: '529',
      keyName: 'SQL Buddy'
    },
    {
      id: '530',
      keyName: 'SQL Developer'
    },
    {
      id: '531',
      keyName: 'SQL Edge'
    },
    {
      id: '532',
      keyName: 'SQL Maestro'
    },
    {
      id: '533',
      keyName: 'SQL Navigator'
    },
    {
      id: '1498',
      keyName: 'SQL Server'
    },
    {
      id: '534',
      keyName: 'SQL Server Comparison Expert'
    },
    {
      id: '2131',
      keyName: 'SQLAlchemy'
    },
    {
      id: '1521',
      keyName: 'SQLBase'
    },
    {
      id: '535',
      keyName: 'SQLDetective'
    },
    {
      id: '1522',
      keyName: 'SQLite'
    },
    {
      id: '2132',
      keyName: 'SQLObject'
    },
    {
      id: '536',
      keyName: 'SQLPro SQL Client'
    },
    {
      id: '537',
      keyName: 'SQLWave\tnerocode'
    },
    {
      id: '538',
      keyName: 'SQLyog'
    },
    {
      id: '1230',
      keyName: 'Squeak'
    },
    {
      id: '1231',
      keyName: 'Squirrel'
    },
    {
      id: '539',
      keyName: 'SQuirreL SQL'
    },
    {
      id: '1418',
      keyName: 'SSPI'
    },
    {
      id: '603',
      keyName: 'Standard Widget Toolkit'
    },
    {
      id: '23',
      keyName: 'StarTeam - Change and Configuration Management'
    },
    {
      id: '1235',
      keyName: 'STATA'
    },
    {
      id: '1236',
      keyName: 'Stateflow'
    },
    {
      id: '109',
      keyName: 'STDCXX'
    },
    {
      id: '402',
      keyName: 'Steel Bank Common Lisp'
    },
    {
      id: '1652',
      keyName: 'stefil'
    },
    {
      id: '2133',
      keyName: 'Storm'
    },
    {
      id: '1234',
      keyName: 'Strand'
    },
    {
      id: '1619',
      keyName: 'STRIDE'
    },
    {
      id: '1833',
      keyName: 'Stripes'
    },
    {
      id: '1803',
      keyName: 'Struts'
    },
    {
      id: '2113',
      keyName: 'SubSonic'
    },
    {
      id: '1237',
      keyName: 'Subtext'
    },
    {
      id: '1906',
      keyName: 'Subversion'
    },
    {
      id: '404',
      keyName: 'Sun Studio'
    },
    {
      id: '1238',
      keyName: 'Suneido'
    },
    {
      id: '1523',
      keyName: 'Superbase'
    },
    {
      id: '1239',
      keyName: 'SuperCollider'
    },
    {
      id: '199',
      keyName: 'Supermake'
    },
    {
      id: '1240',
      keyName: 'SuperTalk'
    },
    {
      id: '1719',
      keyName: 'SureAssert'
    },
    {
      id: '1457',
      keyName: 'SuSE'
    },
    {
      id: '1910',
      keyName: 'SVN'
    },
    {
      id: '244',
      keyName: 'Sweet Build'
    },
    {
      id: '2184',
      keyName: 'SWFObject'
    },
    {
      id: '549',
      keyName: 'Swing'
    },
    {
      id: '604',
      keyName: 'SWT'
    },
    {
      id: '1452',
      keyName: 'Symbian'
    },
    {
      id: '1620',
      keyName: 'Symbian OS Unit'
    },
    {
      id: '1795',
      keyName: 'Symfony'
    },
    {
      id: '1241',
      keyName: 'SYMPL'
    },
    {
      id: '112',
      keyName: 'Synapse'
    },
    {
      id: '1381',
      keyName: 'Sync Framework'
    },
    {
      id: '1242',
      keyName: 'SyncCharts'
    },
    {
      id: '370',
      keyName: 'Systems/C,C++'
    },
    {
      id: '1243',
      keyName: 'SystemVerilog'
    },
    {
      id: '1264',
      keyName: 'T-SQL'
    },
    {
      id: '1245',
      keyName: 'TACL'
    },
    {
      id: '1246',
      keyName: 'TACPOL'
    },
    {
      id: '1247',
      keyName: 'TADS'
    },
    {
      id: '1805',
      keyName: 'Tapestry'
    },
    {
      id: '1621',
      keyName: 'TBrun'
    },
    {
      id: '1250',
      keyName: 'Tcl'
    },
    {
      id: '12',
      keyName: 'Team Foundation Server'
    },
    {
      id: '1946',
      keyName: 'TeamCity'
    },
    {
      id: '1252',
      keyName: 'TECO'
    },
    {
      id: '1253',
      keyName: 'TELCOMP'
    },
    {
      id: '2216',
      keyName: 'telecommute'
    },
    {
      id: '1393',
      keyName: 'Telephony API'
    },
    {
      id: '2218',
      keyName: 'telework'
    },
    {
      id: '461',
      keyName: 'TenDRA'
    },
    {
      id: '1524',
      keyName: 'Teradata'
    },
    {
      id: '2017',
      keyName: 'Terrastorek'
    },
    {
      id: '1622',
      keyName: 'Tessy'
    },
    {
      id: '1578',
      keyName: 'Test Dept.'
    },
    {
      id: '1624',
      keyName: 'Test soon'
    },
    {
      id: '1947',
      keyName: 'Test-AutoBuild'
    },
    {
      id: '1623',
      keyName: 'TEST-DOG'
    },
    {
      id: '1734',
      keyName: 'Test.More'
    },
    {
      id: '1733',
      keyName: 'Test.Simple'
    },
    {
      id: '1577',
      keyName: 'TestApe'
    },
    {
      id: '1735',
      keyName: 'TestCase'
    },
    {
      id: '1736',
      keyName: 'TestIt'
    },
    {
      id: '1697',
      keyName: 'TestNG'
    },
    {
      id: '1625',
      keyName: 'Testwell CTA++'
    },
    {
      id: '1256',
      keyName: 'TeX'
    },
    {
      id: '1443',
      keyName: 'Text Object Model'
    },
    {
      id: '1442',
      keyName: 'Text Services Framework'
    },
    {
      id: '1908',
      keyName: 'TFS'
    },
    {
      id: '1834',
      keyName: 'ThinWire'
    },
    {
      id: '7',
      keyName: 'ThoughtWorks Agile ALM'
    },
    {
      id: '166',
      keyName: 'Three-tier model'
    },
    {
      id: '2186',
      keyName: 'Three.js'
    },
    {
      id: '115',
      keyName: 'Thrift'
    },
    {
      id: '1257',
      keyName: 'TIE'
    },
    {
      id: '116',
      keyName: 'Tika'
    },
    {
      id: '117',
      keyName: 'Tiles'
    },
    {
      id: '1258',
      keyName: 'Timber'
    },
    {
      id: '329',
      keyName: 'Tiny C Compiler'
    },
    {
      id: '1326',
      keyName: 'Tizen'
    },
    {
      id: '273',
      keyName: 'TMake'
    },
    {
      id: '201',
      keyName: 'tmk'
    },
    {
      id: '1877',
      keyName: 'Tntnet'
    },
    {
      id: '540',
      keyName: 'Toad'
    },
    {
      id: '541',
      keyName: 'Toad Data Modeler'
    },
    {
      id: '274',
      keyName: 'toc'
    },
    {
      id: '2047',
      keyName: 'Tokyo Cabinet'
    },
    {
      id: '1260',
      keyName: 'Tom'
    },
    {
      id: '118',
      keyName: 'Tomcat'
    },
    {
      id: '37',
      keyName: 'TopCased ALM'
    },
    {
      id: '2085',
      keyName: 'TopLink'
    },
    {
      id: '2139',
      keyName: 'TOPLink/Smalltalk'
    },
    {
      id: '1261',
      keyName: 'Topspeed'
    },
    {
      id: '542',
      keyName: 'TOra'
    },
    {
      id: '2127',
      keyName: 'Torpor'
    },
    {
      id: '2065',
      keyName: 'Torque'
    },
    {
      id: '1427',
      keyName: 'TPL'
    },
    {
      id: '1579',
      keyName: 'TPT'
    },
    {
      id: '1262',
      keyName: 'TPU'
    },
    {
      id: '1626',
      keyName: 'tpunit++'
    },
    {
      id: '1263',
      keyName: 'Trac'
    },
    {
      id: '119',
      keyName: 'Traffic Server'
    },
    {
      id: '1956',
      keyName: 'Travis CI'
    },
    {
      id: '2048',
      keyName: 'TreapDB'
    },
    {
      id: '2134',
      keyName: 'Tryton'
    },
    {
      id: '1265',
      keyName: 'TTCN'
    },
    {
      id: '245',
      keyName: 'tup'
    },
    {
      id: '2049',
      keyName: 'Tuple space'
    },
    {
      id: '120',
      keyName: 'Turbine'
    },
    {
      id: '330',
      keyName: 'Turbo C Embarcadero'
    },
    {
      id: '340',
      keyName: 'Turbo C++ Explorer'
    },
    {
      id: '345',
      keyName: 'Turbo C++ for DOS'
    },
    {
      id: '438',
      keyName: 'Turbo Pascal'
    },
    {
      id: '435',
      keyName: 'Turbo Pascal for Windows'
    },
    {
      id: '1852',
      keyName: 'TurboGears'
    },
    {
      id: '1266',
      keyName: 'Turing'
    },
    {
      id: '121',
      keyName: 'Tuscany'
    },
    {
      id: '1627',
      keyName: 'TUT'
    },
    {
      id: '1267',
      keyName: 'TUTOR'
    },
    {
      id: '246',
      keyName: 'Tweaker'
    },
    {
      id: '1268',
      keyName: 'TXL'
    },
    {
      id: '1609',
      keyName: 'Typemock Isolator++'
    },
    {
      id: '2227',
      keyName: 'TypeScript'
    },
    {
      id: '1749',
      keyName: 'Tyrtle'
    },
    {
      id: '1269',
      keyName: 'Ubercode'
    },
    {
      id: '17',
      keyName: 'uberSVN'
    },
    {
      id: '1454',
      keyName: 'Ubuntu'
    },
    {
      id: '122',
      keyName: 'UIMA'
    },
    {
      id: '2211',
      keyName: 'Underscore.js'
    },
    {
      id: '1270',
      keyName: 'Unicon'
    },
    {
      id: '1525',
      keyName: 'UniData'
    },
    {
      id: '1271',
      keyName: 'Uniface'
    },
    {
      id: '1444',
      keyName: 'Uniscribe'
    },
    {
      id: '1660',
      keyName: 'Unit-test.el'
    },
    {
      id: '1707',
      keyName: 'Unitils'
    },
    {
      id: '1628',
      keyName: 'UnitTest++'
    },
    {
      id: '1682',
      keyName: 'UnitTestCg'
    },
    {
      id: '1729',
      keyName: 'UnitTesting'
    },
    {
      id: '1580',
      keyName: 'UNITY'
    },
    {
      id: '1526',
      keyName: 'UniVerse'
    },
    {
      id: '1462',
      keyName: 'Unix'
    },
    {
      id: '1273',
      keyName: 'Unix shell'
    },
    {
      id: '1274',
      keyName: 'UnrealScript'
    },
    {
      id: '333',
      keyName: 'ups debugger'
    },
    {
      id: '1629',
      keyName: 'UquoniTest'
    },
    {
      id: '1835',
      keyName: 'Vaadin'
    },
    {
      id: '1275',
      keyName: 'Vala'
    },
    {
      id: '1276',
      keyName: 'VBA'
    },
    {
      id: '334',
      keyName: 'VBCC'
    },
    {
      id: '1373',
      keyName: 'VBScript'
    },
    {
      id: '439',
      keyName: 'Vector Pascal'
    },
    {
      id: '374',
      keyName: 'VectorC'
    },
    {
      id: '1541',
      keyName: 'VectorCAST/Ada'
    },
    {
      id: '1581',
      keyName: 'VectorCAST/C'
    },
    {
      id: '1630',
      keyName: 'VectorCAST/C++'
    },
    {
      id: '2038',
      keyName: 'Velocity'
    },
    {
      id: '1278',
      keyName: 'Verilog'
    },
    {
      id: '9',
      keyName: 'VersionOne'
    },
    {
      id: '1907',
      keyName: 'Vesta'
    },
    {
      id: '1279',
      keyName: 'VHDL'
    },
    {
      id: '1753',
      keyName: 'VI Tester'
    },
    {
      id: '1369',
      keyName: 'Video for Windows'
    },
    {
      id: '440',
      keyName: 'Virtual Pascal'
    },
    {
      id: '1447',
      keyName: 'Vista'
    },
    {
      id: '1631',
      keyName: 'Visual Assert'
    },
    {
      id: '1280',
      keyName: 'Visual Basic'
    },
    {
      id: '1281',
      keyName: 'Visual Basic .NET'
    },
    {
      id: '302',
      keyName: 'Visual Basic Express 2008'
    },
    {
      id: '247',
      keyName: 'Visual Build'
    },
    {
      id: '1285',
      keyName: 'Visual C#'
    },
    {
      id: '1282',
      keyName: 'Visual C++'
    },
    {
      id: '376',
      keyName: 'Visual C++ Express'
    },
    {
      id: '1286',
      keyName: 'Visual DataFlex'
    },
    {
      id: '1287',
      keyName: 'Visual DialogScript'
    },
    {
      id: '1492',
      keyName: 'Visual FoxPro'
    },
    {
      id: '1291',
      keyName: 'Visual J#'
    },
    {
      id: '1290',
      keyName: 'Visual J++'
    },
    {
      id: '1292',
      keyName: 'Visual Objects'
    },
    {
      id: '1144',
      keyName: 'Visual Prolog'
    },
    {
      id: '2155',
      keyName: 'Visual Studio'
    },
    {
      id: '11',
      keyName: 'Visual Studio Application Lifecycle Management'
    },
    {
      id: '377',
      keyName: 'VisualAge C++'
    },
    {
      id: '1459',
      keyName: 'VMS'
    },
    {
      id: '1747',
      keyName: 'Vows'
    },
    {
      id: '415',
      keyName: 'VS Fortran'
    },
    {
      id: '1293',
      keyName: 'VSXu'
    },
    {
      id: '1294',
      keyName: 'Vvvv'
    },
    {
      id: '248',
      keyName: 'Waf'
    },
    {
      id: '2212',
      keyName: 'Wakanda'
    },
    {
      id: '1295',
      keyName: 'WATFIV'
    },
    {
      id: '1296',
      keyName: 'WATFOR'
    },
    {
      id: '1689',
      keyName: 'Watir'
    },
    {
      id: '1892',
      keyName: 'Wavemaker'
    },
    {
      id: '1428',
      keyName: 'WCF'
    },
    {
      id: '1429',
      keyName: 'WCF RIA'
    },
    {
      id: '1431',
      keyName: 'WCS'
    },
    {
      id: '441',
      keyName: 'WDSibyl'
    },
    {
      id: '2199',
      keyName: 'Web Atoms'
    },
    {
      id: '124',
      keyName: 'Web Services'
    },
    {
      id: '2135',
      keyName: 'web2py'
    },
    {
      id: '1837',
      keyName: 'WebObjects'
    },
    {
      id: '1335',
      keyName: 'webOS'
    },
    {
      id: '1297',
      keyName: 'WebQL'
    },
    {
      id: '1854',
      keyName: 'Webware'
    },
    {
      id: '1838',
      keyName: 'WebWork'
    },
    {
      id: '1433',
      keyName: 'WF'
    },
    {
      id: '125',
      keyName: 'Whirr'
    },
    {
      id: '1807',
      keyName: 'Wicket'
    },
    {
      id: '1298',
      keyName: 'Winbatch'
    },
    {
      id: '379',
      keyName: 'Wind River Compiler'
    },
    {
      id: '1446',
      keyName: 'Windows'
    },
    {
      id: '1449',
      keyName: 'Windows 7'
    },
    {
      id: '1338',
      keyName: 'Windows CE'
    },
    {
      id: '1353',
      keyName: 'Windows Color System'
    },
    {
      id: '1411',
      keyName: 'Windows Driver Model â€¨Windows Driver Foundation'
    },
    {
      id: '1354',
      keyName: 'Windows Image Acquisition'
    },
    {
      id: '1355',
      keyName: 'Windows Imaging Component'
    },
    {
      id: '1368',
      keyName: 'Windows Media'
    },
    {
      id: '1339',
      keyName: 'Windows Mobile'
    },
    {
      id: '1340',
      keyName: 'Windows Phone'
    },
    {
      id: '1387',
      keyName: 'Windows Rally'
    },
    {
      id: '1394',
      keyName: 'Windows Script Host'
    },
    {
      id: '1409',
      keyName: 'Windows Template Library'
    },
    {
      id: '1386',
      keyName: 'Winsock'
    },
    {
      id: '1632',
      keyName: 'WinUnit'
    },
    {
      id: '1861',
      keyName: 'WireBox'
    },
    {
      id: '1395',
      keyName: 'WMI'
    },
    {
      id: '1432',
      keyName: 'WPF'
    },
    {
      id: '1893',
      keyName: 'Wt'
    },
    {
      id: '2061',
      keyName: 'Wt::Dbo'
    },
    {
      id: '1410',
      keyName: 'WTL'
    },
    {
      id: '543',
      keyName: 'WWW SQL Designer'
    },
    {
      id: '1299',
      keyName: 'X++'
    },
    {
      id: '1300',
      keyName: 'X10'
    },
    {
      id: '1359',
      keyName: 'XACT'
    },
    {
      id: '1358',
      keyName: 'XACT Speech API'
    },
    {
      id: '127',
      keyName: 'Xalan'
    },
    {
      id: '1360',
      keyName: 'XAudio2'
    },
    {
      id: '1301',
      keyName: 'XBL'
    },
    {
      id: '1302',
      keyName: 'XC'
    },
    {
      id: '1375',
      keyName: 'XDR'
    },
    {
      id: '128',
      keyName: 'Xerces'
    },
    {
      id: '1303',
      keyName: 'xHarbour'
    },
    {
      id: '1304',
      keyName: 'XHTML'
    },
    {
      id: '1305',
      keyName: 'XL'
    },
    {
      id: '335',
      keyName: 'XL C'
    },
    {
      id: '378',
      keyName: 'XL C/C++'
    },
    {
      id: '416',
      keyName: 'XL Fortran'
    },
    {
      id: '1653',
      keyName: 'XLUnit'
    },
    {
      id: '250',
      keyName: 'XMake'
    },
    {
      id: '1306',
      keyName: 'XML'
    },
    {
      id: '131',
      keyName: 'XML Graphics'
    },
    {
      id: '130',
      keyName: 'XMLBeans'
    },
    {
      id: '1713',
      keyName: 'XMLUnit'
    },
    {
      id: '1367',
      keyName: 'XNA'
    },
    {
      id: '1307',
      keyName: 'XOTcl'
    },
    {
      id: '1448',
      keyName: 'XP'
    },
    {
      id: '275',
      keyName: 'XPJ'
    },
    {
      id: '1308',
      keyName: 'XPL'
    },
    {
      id: '1309',
      keyName: 'XPL0'
    },
    {
      id: '2114',
      keyName: 'XPO'
    },
    {
      id: '1310',
      keyName: 'XQuery'
    },
    {
      id: '1311',
      keyName: 'XSB'
    },
    {
      id: '1312',
      keyName: 'XSLT'
    },
    {
      id: '1633',
      keyName: 'xTests'
    },
    {
      id: '202',
      keyName: 'Yabu'
    },
    {
      id: '1634',
      keyName: 'Yaktest'
    },
    {
      id: '1891',
      keyName: 'Yesod'
    },
    {
      id: '420',
      keyName: 'YHC'
    },
    {
      id: '2128',
      keyName: 'Yii'
    },
    {
      id: '1315',
      keyName: 'Yoix'
    },
    {
      id: '1313',
      keyName: 'Yorick'
    },
    {
      id: '1314',
      keyName: 'YQL'
    },
    {
      id: '251',
      keyName: 'Yruba'
    },
    {
      id: '2170',
      keyName: 'YUI'
    },
    {
      id: '1727',
      keyName: 'YUI Test'
    },
    {
      id: '1317',
      keyName: 'Z notation'
    },
    {
      id: '1797',
      keyName: 'Zend'
    },
    {
      id: '1318',
      keyName: 'Zeno'
    },
    {
      id: '38',
      keyName: 'zentao ALM'
    },
    {
      id: '1798',
      keyName: 'Zeta'
    },
    {
      id: '1839',
      keyName: 'ZK'
    },
    {
      id: '132',
      keyName: 'ZooKeeper'
    },
    {
      id: '1856',
      keyName: 'Zope'
    },
    {
      id: '1319',
      keyName: 'ZOPL'
    },
    {
      id: '1894',
      keyName: 'Zotonic'
    },
    {
      id: '1320',
      keyName: 'ZPL'
    },
    {
      id: '1840',
      keyName: 'ztemplates'
    },
    {
      id: '1321',
      keyName: 'ZZT-oop'
    }
  ]

  keywords.forEach(tech => {
    TechModel
      .create({ name: tech.keyName })
      .then(response => res.json(response))
      .catch(error => console.error(error))
  })
}

module.exports = {
  getAllTechs,
  initialize
}
