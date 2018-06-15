import compiler from './compiler.js';

async function getOutput(fixture) {
  const build = await compiler(fixture);
  return build.toJson().modules[0].source;
}

function _(str) {
  return `module.exports = "${str}"`;
}

const expectations = {
  simple: _('<p>Hello World</p>'),
  frontmatter: _('<ul><li>Apples</li><li>Bananas</li><li>Strawberries</li></ul>')
};

test('renders pug to html', async () => {
  const output = await getOutput('simple.pug');
  expect(output).toBe(expectations.simple);
});

test('uses template data from frontmatter', async () => {
  const output = await getOutput('frontmatter.pug');
  expect(output).toBe(expectations.frontmatter);
});

test('registers template dependencies', async () => {
  const output = await getOutput('include.pug');
  expect(output).toBe(expectations.simple);
});