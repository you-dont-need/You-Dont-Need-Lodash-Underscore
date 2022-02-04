const { resolve, join } = require('path');
const { readdirSync, readFileSync, writeFileSync } = require('fs');

/**
 * Script wrapps md files from readme_src dirs together in one file
 * 
 * This allows each function description to reside in its own file and
 * generates the Guick Links in alphabetical order.
 * This might help with separation and order.
 */

const projectPath = resolve(__dirname, '..');
const sourcePath = join(projectPath, 'readme_src');
const sectionSources = readdirSync(sourcePath).filter(name => !name.startsWith('.'));
const sectionsMainMds = sectionSources.filter(name => name.endsWith('.md'));

const [headerWithMeta, ...sectionsWithFooter] = sectionsMainMds.map(sectionMd => {
  const sectionKey = sectionMd.split('.md')[0];
  const sectionDir = join(sourcePath, sectionKey);
  const subsects = readdirSync(sectionDir).filter(name => !name.startsWith('.'))
  return [
    sectionKey,
    subsects,
    readFileSync(join(sourcePath, `${sectionKey}.md`)),
    ...subsects.map(mdName => readFileSync(join(sectionDir, mdName)))
  ];
});
const sectionsWithMeta = sectionsWithFooter.slice(0, -1);

const sectionQuickLinks = sectionsWithMeta.map(([sectionKey, subsects,]) => [
  `**[${sectionKey.slice(4)}](#${sectionKey.slice(4).toLowerCase()})**\n`,
  subsects.map(subsectionFileName => {
    const subsectionKey = subsectionFileName.split('.md')[0]
    return `1. [_.${subsectionKey}](#_${subsectionKey.toLowerCase()})`
  }).join("\n"),
  ''
].join("\n"))

const sectionsRenderableArray = sectionsWithMeta.map(([,, ...sectionElements]) => sectionElements);

writeFileSync(
  join(projectPath, 'README.md'),
  ([
    headerWithMeta.slice(2),
    [
      '## Quick Links\n',
      ...sectionQuickLinks,
      ''
    ],
    ...sectionsRenderableArray,
    sectionsWithFooter.slice(-1)[0].slice(2)
  ]).map(parts => parts.join("\n")).join("\n")
);
