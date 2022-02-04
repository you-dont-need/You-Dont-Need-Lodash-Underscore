const { resolve, join } = require('path');
const { readdirSync, readFileSync, writeFileSync } = require('fs');
const caniuse = require('caniuse-api');
const { data: canData } = require('caniuse-db/data.json');

/**
 * Script wrapps md files from readme_src dirs together in one file
 *
 * This allows each function description to reside in its own file and
 * generates the Guick Links in alphabetical order.
 * This might help with separation and order.
 */

const projectPath = resolve(__dirname, '..');
const sourcePath = join(projectPath, 'readme_src');
const sectionSources = readdirSync(sourcePath).filter(
  (name) => !name.startsWith('.')
);
const sectionsMainMds = sectionSources.filter((name) => name.endsWith('.md'));

const caniuseBrowsers = {
  chrome: 'Chrome',
  firefox: 'Firefox',
  edge: 'Edge',
  safari: 'Safari',
  opera: 'Opera',
  android: 'Android',
  ios_saf: 'iOS',
  ie: 'IE',
  samsung: 'Samsung',
};
const canITableHead = Object.entries(caniuseBrowsers).map(
  ([bKey, bName]) => `![${bName}](/docs/pic/${bKey}.png)`
);

const browsersSuport = ({ y }) => Boolean(y) ? `${y} ✔ ` : ` ✖ `;

const browserCanOrNot = ([ruleKey, caniResponse], tableHead) => {
  const { title, links } = canData[ruleKey];
  const subHeaders = [...Array(tableHead.length)].map(() => `:-: `);
  console.log({ subHeaders });
  return [
    `\n#### Browser Support for \`${title}\`\n`,
    ...(links || []).map(
      ({ title: linkText, url }) => `[${linkText}](${url})  `
    ),
    `\n${tableHead.join(' | ')}`,
    `${subHeaders.join(' | ')} |`,
    `  ${Object.keys(caniuseBrowsers)
      .map((bKey) => browsersSuport(caniResponse[bKey]))
      .join(' | ')} |\n`,
  ].join('\n');
};

const parseCaniuse = (content) => {
  const splitCaniuse = content.split('\n<!-- caniuse: ');
  if (splitCaniuse.length <= 1) {
    return content;
  }
  const caniQueries = splitCaniuse
    .slice(1)
    .map((item) => item.split(' -->')[0]);

  if (caniQueries.length < 1) {
    return content;
  }
  const queryResults = caniQueries
    .map((query) => {
      if (!caniuse.find(query).length) {
        console.warn(
          `Unknown caniuse query: '${query}'! Grep for: '<!-- caniuse: ${query} -->'`
        );
        return false;
      }
      return [query, caniuse.getSupport(query)];
    })
    .filter(Boolean);
  if (!queryResults.length) {
    return content;
  }

  const contentsBetween = splitCaniuse
    .slice(1)
    .map((item) => item.split(' -->')[1]);
  return [
    splitCaniuse[0],
    ...queryResults.map((queryResult, index) =>
      [
        browserCanOrNot(queryResult, canITableHead),
        contentsBetween[index],
      ].join('\n')
    ),
  ].join('\n');
};

const getFunctionMd = (path) => parseCaniuse(readFileSync(path).toString());

const [headerWithMeta, ...sectionsWithFooter] = sectionsMainMds.map(
  (sectionMd) => {
    const sectionKey = sectionMd.split('.md')[0];
    const sectionDir = join(sourcePath, sectionKey);
    const subsects = readdirSync(sectionDir).filter(
      (name) => !name.startsWith('.')
    );
    return [
      sectionKey,
      subsects,
      readFileSync(join(sourcePath, `${sectionKey}.md`)),
      ...subsects.map((mdName) => [
        getFunctionMd(join(sectionDir, mdName)),
        `\n**[⬆ back to top](#quick-links)**\n`
      ].join('\n')),
    ];
  }
);
const sectionsWithMeta = sectionsWithFooter.slice(0, -1);

const sectionQuickLinks = sectionsWithMeta.map(([sectionKey, subsects]) =>
  [
    `**[${sectionKey.slice(4)}](#${sectionKey.slice(4).toLowerCase()})**\n`,
    subsects
      .map((subsectionFileName) => {
        const subsectionKey = subsectionFileName.split('.md')[0];
        return `1. [_.${subsectionKey}](#_${subsectionKey.toLowerCase()})`;
      })
      .join('\n'),
    '',
  ].join('\n')
);

const sectionsRenderableArray = sectionsWithMeta.map(
  ([, , ...sectionElements]) => sectionElements
);

writeFileSync(
  join(projectPath, 'README.md'),
  [
    headerWithMeta.slice(2),
    ['## Quick Links\n', ...sectionQuickLinks, ''],
    ...sectionsRenderableArray,
    sectionsWithFooter.slice(-1)[0].slice(2),
  ]
    .map((parts) => parts.join('\n'))
    .join('\n')
);
